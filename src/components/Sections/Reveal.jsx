import { useReveal } from "../../hooks/useReveal";

/**
 * Wraps any block and fades/slides it up once it enters the
 * viewport. `delay` (ms) staggers siblings. `as` lets you pick
 * the wrapping tag (div, li, article...).
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
