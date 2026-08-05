import { useRef } from "react";
import { useScrollSlides } from "../../hooks/useScrollSlides";
import "./Hero.css";

const SLIDES = [
  {
    eyebrow: "01 — RUNNER LOW",
    name: "Stride Runner Low",
    price: "$140",
    tagline: "Move before you think.",
    image: "/images/hero1.png",
  },
  {
    eyebrow: "02 — TRACK SPIKE",
    name: "Stride Track Spike",
    price: "$120",
    tagline: "Built for the gun.",
    image: "/images/hero2.png",
  },
  {
    eyebrow: "03 — TRAIL PRO",
    name: "Stride Trail Pro",
    price: "$175",
    tagline: "Every surface, one grip.",
    image: "/images/hero3.png",
  },
  {
    eyebrow: "04 — COURT FLEX",
    name: "Stride Court Flex",
    price: "$130",
    tagline: "Cut. Plant. Go.",
    image: "/images/hero4.png",
  },
];

const INTRO = {
  eyebrow: "STRIDE — FW26",
  headline: "Every step, tracked.",
  typing: "Real-time pace, distance, and form — on your wrist.",
  image: "/images/hero.avif",
};

function formatHeadline(name) {
  const words = name.split(" ");
  if (words.length < 2) return name;
  const [first, second, ...rest] = words;
  return `${first}\u00A0${second}${rest.length ? " " + rest.join(" ") : ""}`;
}

export default function Hero() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  slideRefs.current = [];

  const addSlideRef = (el) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  useScrollSlides({
    containerRef,
    slideRefs,
    pinDistancePerSlide: 700,
  });

  return (
    <section className="hero" ref={containerRef}>
      {/* Intro */}
      <div
        ref={addSlideRef}
        className="hero__slide hero__slide--intro active"
      >
        <img
          src={INTRO.image}
          alt=""
          aria-hidden="true"
          className="hero__image--intro-bg"
        />

        <img
          src={INTRO.image}
          alt={INTRO.headline}
          className="hero__image--intro"
        />

        <div className="hero__scrim" />

        <div className="hero__intro-text">
          <span className="hero__eyebrow">
            {INTRO.eyebrow}
          </span>

          <h1 className="hero__headline">
            {INTRO.headline}
          </h1>
        </div>
      </div>

      {SLIDES.map((slide, index) => (
        <div
          key={slide.name}
          ref={addSlideRef}
          className={`hero__slide ${
            index % 2 ? "hero__slide--reverse" : ""
          }`}
        >
          <div className="hero__content">
            <span className="hero__eyebrow">
              {slide.eyebrow}
            </span>

            <h1 className="hero__headline">
              {formatHeadline(slide.name)}
            </h1>

            <p className="hero__sub">
              {slide.tagline}
            </p>

            <span className="hero__price">
              {slide.price}
            </span>
          </div>

          <div className="hero__image">
            <img src={slide.image} alt={slide.name} />
          </div>
        </div>
      ))}

      <div className="hero__scroll-cue">
        <span></span>
        SCROLL
      </div>
    </section>
  );
}