import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollSlides({
  containerRef,
  slideRefs,
  pinDistancePerSlide = 700,
}) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const slides = slideRefs.current.filter(Boolean);

    if (!container || slides.length === 0) return;

    // SHOW FIRST SLIDE IMMEDIATELY
    slides.forEach((slide, index) => {
      gsap.set(slide, {
        opacity: index === 0 ? 1 : 0,
      });
    });

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const totalScroll =
      pinDistancePerSlide * (slides.length - 1);

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

          const current = Math.floor(progress);
          const blend = progress - current;

          slides.forEach((slide, i) => {
            let opacity = 0;

            if (i === current) opacity = 1 - blend;
            if (i === current + 1) opacity = blend;

            if (self.progress <= 0 && i === 0)
              opacity = 1;

            if (
              self.progress >= 1 &&
              i === slides.length - 1
            )
              opacity = 1;

            gsap.set(slide, { opacity });
          });
        },
      });

      ScrollTrigger.refresh();
    }, container);

    return () => ctx.revert();
  }, [containerRef, slideRefs, pinDistancePerSlide]);
}