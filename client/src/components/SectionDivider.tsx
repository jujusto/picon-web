/**
 * Divider en DOUBLE VAGUE entre deux sections.
 * - Vague du haut : couleur de la section précédente (from) qui plonge vers le bas
 * - Vague du bas  : couleur de la section suivante (to) qui remonte vers le haut
 * - Les deux vagues se chevauchent → transition naturelle, sans ligne plate
 */

interface SectionDividerProps {
  from: string;
  to: string;
  height?: number;
  flip?: boolean;
}

export function SectionDivider({
  from,
  to,
  height = 140,
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden -mt-px -mb-px"
      style={{
        height: `${height}px`,
        backgroundColor: to,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          transform: flip ? "scaleX(-1)" : "none",
        }}
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vague du haut — couleur FROM, plonge vers le bas */}
        {/* Elle "émane" de la section précédente et se fond dans TO */}
        <path
           d="M0,0 L1440,0 L1440,55 C1200,75 1080,45 900,60 C720,75 600,50 420,60 C240,75 120,50 0,65 Z"
          fill={from}
          opacity="0.55"
        />
        <path
          d="M0,0 L1440,0 L1440,40 C1200,80 1080,25 900,50 C720,75 600,35 420,55 C240,75 120,40 0,60 Z"
          fill={from}
        />

        {/* Vague du bas — couleur TO, remonte vers le haut */}
        {/* Effet miroir pour un rendu naturel */}
        <path
          d="M0,140 L1440,140 L1440,90 C1200,50 1080,110 900,80 C720,50 600,100 420,75 C240,50 120,95 0,70 Z"
          fill={to}
          opacity="0.55"
        />
        <path
          d="M0,140 L1440,140 L1440,100 C1200,60 1080,115 900,90 C720,65 600,110 420,85 C240,60 120,100 0,80 Z"
          fill={to}
        />
      </svg>

      {/* Grain photo subtil */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 0)",
          backgroundSize: "8px 8px",
        }}
      />
    </div>
  );
}