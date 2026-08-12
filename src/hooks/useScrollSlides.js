import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollSlides({
  containerRef,
  slideRefs,
  pinDistancePerSlide = 700,
  hysteresis = 0.12, // buffer around the 0.5 midpoint before switching
}) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const slides = slideRefs.current.filter(Boolean);

    if (!container || slides.length === 0) return;

    // SHOW FIRST SLIDE IMMEDIATELY
    slides.forEach((slide, index) => {
      gsap.set(slide, {
        opacity: index === 0 ? 1 : 0,
        zIndex: index === 0 ? 2 : 1,
      });
    });

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const totalScroll =
      pinDistancePerSlide * (slides.length - 1);

    let activeIndex = 0;

    const setActive = (index) => {
      if (index === activeIndex) return;
      activeIndex = index;

      slides.forEach((slide, i) => {
        const isActive = i === index;

        gsap.set(slide, {
          opacity: isActive ? 1 : 0,
          zIndex: isActive ? 2 : 1,
        });
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,

        onUpdate(self) {
          const progress =
            self.progress * (slides.length - 1);

          const base = Math.floor(progress);
          const frac = progress - base;

          // Only commit to the next slide once we're clearly past
          // the midpoint (with a buffer), and only commit back once
          // we're clearly before it. This kills threshold flicker.
          let next = activeIndex;

          if (base >= activeIndex && frac > 0.5 + hysteresis) {
            next = base + 1;
          } else if (base <= activeIndex - 1 && frac < 0.5 - hysteresis) {
            next = base;
          } else if (Math.abs(base - activeIndex) >= 1 && frac >= 0.5 - hysteresis && frac <= 0.5 + hysteresis) {
            // ambiguous zone: hold current slide, don't switch
            next = activeIndex;
          } else if (base !== activeIndex && Math.abs(base - activeIndex) === 0) {
            next = base;
          }

          next = Math.max(0, Math.min(slides.length - 1, next));
          setActive(next);
        },
      });

      ScrollTrigger.refresh();
    }, container);

    return () => ctx.revert();
  }, [containerRef, slideRefs, pinDistancePerSlide, hysteresis]);
}