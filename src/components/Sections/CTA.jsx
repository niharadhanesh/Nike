import { useRef } from "react";
import Reveal from "./Reveal";

export default function CTA() {
  const buttonRef = useRef(null);

  const handlePointerMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--x", `${e.clientX - rect.left}px`);
    button.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="cta">
      <span className="cta__ghost" aria-hidden="true">
        Stride
      </span>
      <div className="cta__glow" aria-hidden="true" />

      <Reveal as="h2" className="cta__headline">
        Your move.
      </Reveal>

      <Reveal delay={120}>
        <button
          ref={buttonRef}
          className="cta__button"
          type="button"
          onPointerMove={handlePointerMove}
        >
          <span className="cta__button-spotlight" aria-hidden="true" />
          <span className="cta__button-label">Shop the drop</span>
          <span className="cta__button-arrow">→</span>
        </button>
      </Reveal>
    </div>
  );
}