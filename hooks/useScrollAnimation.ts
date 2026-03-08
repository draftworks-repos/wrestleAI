import { useState, useEffect, useRef, RefObject } from "react";

export interface ScrollAnimationOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = { threshold: 0.1, triggerOnce: true },
): [RefObject<any>, boolean] {
  const ref = useRef<Element>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold: options.threshold,
        root: options.root,
        rootMargin: options.rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [
    options.threshold,
    options.rootMargin,
    options.root,
    options.triggerOnce,
  ]);

  return [ref, inView];
}
