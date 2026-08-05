import Reveal from "./Reveal";

export default function CTA() {
  return (
    <div className="cta">
      <div className="cta__marquee" aria-hidden="true">
        <div className="cta__marquee-track">
          <span>SS26 drop</span>
          <span>Limited run</span>
          <span>Stride</span>
          <span>SS26 drop</span>
          <span>Limited run</span>
          <span>Stride</span>
        </div>
      </div>

      <Reveal as="h2" className="cta__headline">
        Your move.
      </Reveal>

      <Reveal delay={120}>
        <button className="cta__button" type="button">
          <span className="cta__button-label">Shop the drop</span>
          <span className="cta__button-arrow">→</span>
        </button>
      </Reveal>
    </div>
  );
}