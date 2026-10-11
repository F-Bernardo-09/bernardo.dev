import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  const idsKey = useMemo(() => ids.join(","), [ids]);

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = getElementsById(ids);
    if (elements.length === 0) return;

    function updateActiveSection() {
      const mostVisibleId = findMostVisibleElementId(elements);
      if (mostVisibleId) {
        setActiveId(mostVisibleId);
      }
    }

    let isUpdateScheduled = false;
    function handleScroll() {
      if (isUpdateScheduled) return;
      isUpdateScheduled = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        isUpdateScheduled = false;
      });
    }

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [idsKey]);

  return activeId;
}

function getElementsById(ids: string[]): HTMLElement[] {
  return ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);
}

function findMostVisibleElementId(elements: HTMLElement[]): string | null {
  const viewportHeight = window.innerHeight;

  let bestId: string | null = null;
  let bestVisibleHeight = 0;

  for (const el of elements) {
    const visibleHeight = getVisibleHeight(el, viewportHeight);
    if (visibleHeight > bestVisibleHeight) {
      bestVisibleHeight = visibleHeight;
      bestId = el.id;
    }
  }

  return bestId;
}

function getVisibleHeight(el: HTMLElement, viewportHeight: number): number {
  const rect = el.getBoundingClientRect();
  const visibleTop = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, viewportHeight);
  return Math.max(0, visibleBottom - visibleTop);
}
