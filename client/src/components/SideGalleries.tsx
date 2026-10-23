/**
 * Colonnes décoratives de cadres photo sur les côtés du site.
 * Adaptées au thème dark glassmorphique.
 */

interface SideGalleriesProps {
  className?: string;
}

const leftPhotos = [
  "/manus-storage/grandparents_b2f4ace1.webp",
  "/manus-storage/marche-local_7f1a4c88.webp",
  "/manus-storage/couple-tradition_f624c82a.webp",
  "/manus-storage/famille-rire_a5f4a550.webp",
  "/manus-storage/format-encadre_0dc5160a.webp",
];

const rightPhotos = [
  "/manus-storage/pere-enfant_c96b0c32.webp",
  "/manus-storage/enfants-plage_a6a19c88.webp",
  "/manus-storage/famille-repas_6f3f2a39.webp",
  "/manus-storage/plage-bateau_046b266e.webp",
  "/manus-storage/galerie-souvenirs_f4150b4c.webp",
];

function PhotoFrame({
  src,
  rotate = 0,
}: {
  src: string;
  rotate?: number;
}) {
  return (
    <div
      className="relative group transition-transform duration-500 hover:scale-105"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Cadre glass sur fond noir */}
      <div className="bg-white/[0.06] backdrop-blur-xl rounded-lg p-1.5 border border-white/15 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)]">
        <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-[#1A1C20]">
          <img
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
      {/* Reflet subtil */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}

export function SideGalleries({ className = "" }: SideGalleriesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-20 hidden 2xl:block overflow-hidden ${className}`}
    >
      {/* Colonne gauche */}
      <div className="absolute left-4 2xl:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 w-24 2xl:w-28">
        {leftPhotos.map((src, i) => (
          <PhotoFrame
            key={`left-${i}`}
            src={src}
            rotate={i % 2 === 0 ? -2 : 2}
          />
        ))}
      </div>

      {/* Colonne droite */}
      <div className="absolute right-4 2xl:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 w-24 2xl:w-28">
        {rightPhotos.map((src, i) => (
          <PhotoFrame
            key={`right-${i}`}
            src={src}
            rotate={i % 2 === 0 ? 2 : -2}
          />
        ))}
      </div>
    </div>
  );
}