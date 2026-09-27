import { Frame } from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";

export function LivingRoomShowcase() {
  return (
    <section className="py-24 bg-[#0a0b0d] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img src="/manus-storage/living_room_gallery_wall_919d5ee1.png" alt="Mur de cadres photo dans un salon moderne et chaleureux à Lomé" className="w-full h-[480px] sm:h-[620px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="max-w-2xl"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4"><Frame className="w-3.5 h-3.5" />De l'écran à la maison</div><h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mb-4">Ce que vos photos peuvent devenir.</h2><p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">L'application commence dans votre galerie. L'histoire continue dans votre intérieur, avec des souvenirs que l'on peut réellement regarder et partager.</p><div className="pt-6"><PlayStoreButton label="Découvrir PICON sur Google Play" /></div></div>
          </div>
          <img src="/manus-storage/1313058_47ceb355.png" alt="" aria-hidden="true" className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-black/60 p-2 border border-white/20 object-contain" />
        </div>
      </div>
    </section>
  );
}
