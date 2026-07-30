import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pins `containerRef` and crossfades through `slideRefs` as the
 * visitor scrolls — each slide is a full "frame"; scroll position
 * maps directly to which frame is showing and how far into the
 * crossfade to the next one, the same way scrubbing a video maps
 * scroll position to currentTime.
 *
 * `pinDistancePerSlide` (px) controls how much scroll each slide
 * gets before handing off to the next one.
 *
 * Respects prefers-reduced-motion: pins nothing and just shows the
 * first slide at full opacity, no scroll-driven motion at all.
 */
export function useScrollSlides({ containerRef, slideRefs, pinDistancePerSlide = 700 }) {
  useEffect(() => {
    const container = containerRef.current;
    const slides = slideRefs.current.filter(Boolean);
    if (!container || slides.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === 0 ? "1" : "0";
      });
      return;
    }

    const pinDistance = pinDistancePerSlide * (slides.length - 1);

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${pinDistance}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const scaled = self.progress * (slides.length - 1);
        const idx = Math.min(slides.length - 2, Math.floor(scaled));
        const frac = scaled - idx;

        slides.forEach((slide, i) => {
          let opacity = 0;
          if (i === idx) opacity = 1 - frac;
          if (i === idx + 1) opacity = frac;
          if (self.progress >= 1 && i === slides.length - 1) opacity = 1;
          if (self.progress <= 0 && i === 0) opacity = 1;
          slide.style.opacity = opacity;
        });
      },
    });

    slides.forEach((slide, i) => {
      slide.style.opacity = i === 0 ? "1" : "0";
    });

    return () => trigger.kill();
  }, [containerRef, slideRefs, pinDistancePerSlide]);
}
