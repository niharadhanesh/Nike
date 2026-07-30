/**
 * Original abstract sneaker silhouette used as a placeholder
 * product graphic for each hero slide. Not a trace of any real
 * shoe or logo — swap for actual product photography per slide.
 */
export default function ShoeMark({ color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 240 120"
      width="220"
      height="110"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20 95
           C20 78, 34 66, 52 63
           L96 50
           C112 45, 126 40, 140 34
           C156 27, 170 24, 186 26
           C204 28, 216 40, 220 55
           C222 63, 220 70, 214 74
           L214 88
           C214 93, 210 96, 205 96
           L28 96
           C23 96, 20 93, 20 90
           Z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M96 50 L84 74 L140 74 L140 34"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M28 96 L28 84 C46 80, 64 80, 84 84 L84 96"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}
