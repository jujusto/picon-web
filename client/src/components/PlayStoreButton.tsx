import { Play, ArrowUpRight } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/app-links";

interface PlayStoreButtonProps {
  variant?: "solid" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export function PlayStoreButton({
  variant = "solid",
  size = "md",
  label = "Télécharger sur Google Play",
  className = "",
}: PlayStoreButtonProps) {
  const variantClasses = {
    solid:
      "bg-[#1AB5A3] text-white hover:bg-[#17A090] shadow-lg shadow-[#1AB5A3]/25",
    outline:
      "bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1AB5A3] hover:bg-[#1AB5A3]/5",
    dark: "bg-[#0A1F44] text-white hover:bg-[#1AB5A3]",
  };

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs rounded-lg",
    md: "px-5 py-3 text-sm rounded-xl",
    lg: "px-6 py-3.5 text-sm sm:text-base rounded-xl",
  };

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold transition-all active:scale-[0.97] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="w-5 h-5 rounded-md bg-black/10 flex items-center justify-center shrink-0">
        <Play className="w-3 h-3 fill-current" />
      </span>
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 opacity-70" />
    </a>
  );
}