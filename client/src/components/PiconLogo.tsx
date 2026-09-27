interface PiconLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  theme?: "dark" | "light";
}

const logoSizes = {
  sm: "w-[104px] sm:w-[116px]",
  md: "w-[128px] sm:w-[142px]",
  lg: "w-[190px] sm:w-[220px]",
};

const taglineSizes = {
  sm: "text-[8px]",
  md: "text-[9px] sm:text-[10px]",
  lg: "text-xs sm:text-sm",
};

export function PiconLogo({
  className = "",
  size = "md",
  withTagline = true,
  theme = "dark",
}: PiconLogoProps) {
  const taglineColor = theme === "dark" ? "text-zinc-300" : "text-zinc-700";

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <img
        src="/manus-storage/picon_wordmark_source_aeb6fd16.png"
        alt="PICON"
        className={`${logoSizes[size]} h-auto object-contain object-left`}
      />
      {withTagline && (
        <span className={`mt-1 pl-1 font-sans font-semibold tracking-[0.18em] uppercase ${taglineColor} ${taglineSizes[size]}`}>
          Ce qui compte vraiment
        </span>
      )}
    </div>
  );
}
