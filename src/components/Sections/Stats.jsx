import Reveal from "./Reveal";

const STATS = [
  { value: "0.19s", label: "Reaction to first frame" },
  { value: "42km", label: "Tested per prototype" },
  { value: "3", label: "Years in development" },
];

export default function Stats() {
  return (
    <div className="stats">
      {STATS.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 100}>
          <div className="stat__value">{stat.value}</div>
          <div className="stat__label">{stat.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
