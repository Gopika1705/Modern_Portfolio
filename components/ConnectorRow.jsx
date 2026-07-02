"use client";

const ACCENT_HEX = {
  cyan: "#22d3ee",
  purple: "#a855f7",
  green: "#34d399",
  pink: "#f472b6",
  teal: "#2dd4bf",
  amber: "#fbbf24",
  blue: "#60a5fa",
};

/**
 * Renders one or two vertical "circuit trace" lines between rows of nodes,
 * each with a small glowing dot that travels along it on a loop —
 * this is the dashboard's signature motion element.
 *
 * Below the `sm` breakpoint the node grid collapses to a single column,
 * so only one centered line is shown to read as a continuous spine.
 */
export default function ConnectorRow({ leftAccent, rightAccent }) {
  return (
    <div className="relative h-[42px]">
      <Line accent={ACCENT_HEX[leftAccent] || "#3b4256"} className="left-1/2 sm:left-1/4" />
      <Line accent={ACCENT_HEX[rightAccent] || "#3b4256"} className="hidden sm:block sm:left-3/4" />
    </div>
  );
}

function Line({ accent, className }) {
  return (
    <div
      className={`absolute top-0 h-full w-[2px] -translate-x-1/2 opacity-55 ${className}`}
      style={{
        background: `linear-gradient(180deg, transparent, ${accent} 30%, ${accent} 70%, transparent)`,
      }}
    >
      <div
        className="absolute left-1/2 top-0 h-[7px] w-[7px] -translate-x-1/2 rounded-full animate-travel"
        style={{ background: accent, boxShadow: `0 0 10px ${accent}, 0 0 18px ${accent}` }}
      />
    </div>
  );
}
