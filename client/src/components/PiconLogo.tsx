interface PiconLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  theme?: "dark" | "light";
}

export function PiconLogo({
  className = "",
  size = "md",
  withTagline = true,
  theme = "dark",
}: PiconLogoProps) {
  const textSizes = {
    sm: "text-lg tracking-wider",
    md: "text-2xl tracking-wider",
    lg: "text-4xl tracking-widest",
  };

  const apertureSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5 sm:h-6 sm:w-6",
    lg: "h-8 w-8 sm:h-10 sm:w-10",
  };

  const taglineSizes = {
    sm: "text-[9px] -mt-0.5",
    md: "text-[11px] -mt-1",
    lg: "text-sm mt-0.5",
  };

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const tagColor = theme === "dark" ? "text-zinc-300" : "text-zinc-600";

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Brand wordmark PIC[aperture]N */}
      <div className={`flex items-center font-display font-extrabold ${textColor} ${textSizes[size]} leading-none`}>
        <span>PIC</span>
        <img
          src="/manus-storage/aperture_transparent_fecc6233.png"
          alt="O"
          className={`${apertureSizes[size]} mx-0.5 inline-block object-contain`}
        />
        <span>N</span>
      </div>

      {withTagline && (
        <span className={`font-sans font-medium lowercase tracking-wide ${tagColor} ${taglineSizes[size]}`}>
          ce qui compte vraiment
        </span>
      )}
    </div>
  );
}
