import { useEffect, useRef } from "react";

/**
 * Adds an `is-visible` class to the ref'd element the first time
 * it crosses into the viewport. CSS (see Sections.css) does the
 * actual transition and short-circuits it under reduced motion.
 */
export function useReveal(threshold = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
