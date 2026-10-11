import { useEffect, type RefObject } from "react";

export function useHeaderHeight(headerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`,
        );
      }
    }

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [headerRef]);
}
