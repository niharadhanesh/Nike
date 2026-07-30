import { useRef } from "react";
import { useScrollSlides } from "../../hooks/useScrollSlides";
import "./Hero.css";

/**
 * Drop your own shoe photos into public/images/ using these
 * filenames (or edit the `image` paths below to match whatever
 * you name them). Each slide alternates text/image sides
 * automatically based on its position (even index = text left,
 * odd index = text right).
 */
const SLIDES = [
  {
    eyebrow: "01 — RUNNER LOW",
    name: "Stride Runner Low",
    price: "$140",
    tagline: "Move before you think.",
    image: "/images/runner-low.jpg",
  },
  {
    eyebrow: "02 — TRACK SPIKE",
    name: "Stride Track Spike",
    price: "$120",
    tagline: "Built for the gun.",
    image: "/images/track-spike.jpg",
  },
  {
    eyebrow: "03 — TRAIL PRO",
    name: "Stride Trail Pro",
    price: "$175",
    tagline: "Every surface, one grip.",
    image: "/images/trail-pro.jpg",
  },
  {
    eyebrow: "04 — COURT FLEX",
    name: "Stride Court Flex",
    price: "$130",
    tagline: "Cut. Plant. Go.",
    image: "/images/court-flex.jpg",
  },
];

// Opening slide — full-bleed image with text over it, so the hero
// is never blank at rest (before any scroll happens).
const INTRO = {
  eyebrow: "STRIDE — FW26",
  headline: "Every step, tracked.",
  image: "/images/hero-intro.jpg",
};

export default function Hero() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  slideRefs.current = [];

  const addSlideRef = (el) => {
    if (el) slideRefs.current.push(el);
  };

  useScrollSlides({ containerRef, slideRefs, pinDistancePerSlide: 700 });

  return (
    <section className="hero" ref={containerRef}>
      <div
        ref={addSlideRef}
        className="hero__slide hero__slide--intro"
        style={{ opacity: 1 }}
      >
        <img
          className="hero__image--intro"
          src={INTRO.image}
          alt={INTRO.headline}
        />
        <div className="hero__scrim" />
        <div className="hero__intro-text">
          <span className="hero__eyebrow">{INTRO.eyebrow}</span>
          <h1 className="hero__headline">{INTRO.headline}</h1>
        </div>
      </div>

      {SLIDES.map((slide, i) => (
        <div
          key={slide.name}
          ref={addSlideRef}
          className={`hero__slide ${i % 2 === 1 ? "hero__slide--reverse" : ""}`}
          style={{ opacity: 0 }}
        >
          <div className="hero__content">
            <span className="hero__eyebrow">{slide.eyebrow}</span>
            <h1 className="hero__headline">{slide.name}</h1>
            <p className="hero__sub">{slide.tagline}</p>
            <span className="hero__price">{slide.price}</span>
          </div>
          <div className="hero__image">
            <img src={slide.image} alt={slide.name} />
          </div>
        </div>
      ))}

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
        SCROLL
      </div>
    </section>
  );
}