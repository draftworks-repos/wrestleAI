import { useEffect, useState, RefObject } from "react";

/**
 * A hook that uses the Intersection Observer API to detect if an element is visible in the viewport.
 * @param ref The ref to the element to observe.
 * @param options Intersection Observer options (e.g., threshold, rootMargin).
 * @returns A boolean indicating whether the element is currently intersecting.
 */
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 },
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.rootMargin, options.root]);

  return isIntersecting;
}
