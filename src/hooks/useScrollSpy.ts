import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  const idsKey = useMemo(() => ids.join(","), [ids]);

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let ticking = false;

    function handleScroll() {
      const viewportHeight = window.innerHeight;

      let bestId: string | null = null;
      let bestVisible = 0;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();

        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);

        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > bestVisible) {
          bestVisible = visibleHeight;
          bestId = el.id;
        }
      }

      if (bestId) {
        setActiveId(bestId);
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }

    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      window.removeEventListener("resize", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return activeId;
}
