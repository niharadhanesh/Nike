import Reveal from "./Reveal";

export default function CTA() {
  return (
    <div className="cta">
      <Reveal as="h2" className="cta__headline">
        Your move.
      </Reveal>
      <Reveal delay={120}>
        <button className="cta__button" type="button">
          Shop the drop
        </button>
      </Reveal>
    </div>
  );
}
