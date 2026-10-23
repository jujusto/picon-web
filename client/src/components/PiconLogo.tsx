interface PiconLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  theme?: "dark" | "light";
}

const logoSizes = {
  sm: "w-[44px] sm:w-[48px]",
  md: "w-[56px] sm:w-[60px]",
  lg: "w-[80px] sm:w-[92px]",
};

const taglineSizes = {
  sm: "text-[7px]",
  md: "text-[8px] sm:text-[9px]",
  lg: "text-[10px] sm:text-[11px]",
};

export function PiconLogo({
  className = "",
  size = "md",
  withTagline = true,
}: PiconLogoProps) {
  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      <img
        src="/manus-storage/pro_df9fdac2.png"
        alt="PICON"
        className={`${logoSizes[size]} h-auto object-contain object-left`}
      />
      {withTagline && (
        <span
          className={`pl-1 font-medium tracking-[0.15em] uppercase logo-tagline ${taglineSizes[size]}`}
        >
          Ce qui compte vraiment
        </span>
      )}
    </div>
  );
}