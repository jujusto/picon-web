import { Frame, Sparkles } from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";

export function LivingRoomShowcase() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#16171C] text-white">
      {/* Halos multicolores intenses — profondeur sur fond noir */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#1AB5A3]/25 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#7C4DBC]/25 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-[#F5D33E]/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-[#E63946]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header de section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/15 text-[#7EDDD1] text-xs font-semibold tracking-wide uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#7EDDD1]" />
            De l'écran à la maison
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display leading-[1.1] text-white">
            Ce que vos photos peuvent{" "}
            <span className="bg-gradient-to-r from-[#1AB5A3] via-[#F5D33E] to-[#7C4DBC] bg-clip-text text-transparent">
              devenir.
            </span>
          </h2>
          <p className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl">
            L'application commence dans votre galerie. L'histoire continue dans
            votre intérieur, avec des souvenirs que l'on peut réellement
            regarder et partager.
          </p>
        </div>

        {/* Grande image dans un cadre glass */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/manus-storage/galerie-souvenirs_f4150b4c.webp"
              alt="Mur de cadres photo dans un salon moderne et chaleureux à Lomé"
              className="w-full h-[480px] sm:h-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Badge flottant sur l'image */}
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/25 text-[#007f96] text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
              <Frame className="w-3.5 h-3.5" />
              Souvenirs exposés
            </div>

            {/* Contenu bas de l'image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                  Un mur de cadres qui raconte votre histoire.
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                  Chaque tirage devient une pièce unique dans votre intérieur.
                  Formats variés, papiers fins, cadres sur mesure — composez la
                  galerie qui vous ressemble.
                </p>
                <PlayStoreButton label="Découvrir PICON sur Google Play" />
              </div>
            </div>
          </div>
        </div>

        {/* 3 mini-cartes glass sous l'image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:border-[#1AB5A3]/50 hover:bg-white/[0.07] hover:-translate-y-1 transition-all shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 rounded-lg bg-[#1AB5A3]/20 border border-[#1AB5A3]/30 flex items-center justify-center mb-4">
              <span className="text-[#7EDDD1] text-lg">◈</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Formats variés
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Du 9×13 cm intime au 60×120 cm panoramique, choisissez la taille
              qui met vos souvenirs en valeur.
            </p>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:border-[#F5D33E]/50 hover:bg-white/[0.07] hover:-translate-y-1 transition-all shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 rounded-lg bg-[#F5D33E]/18 border border-[#F5D33E]/30 flex items-center justify-center mb-4">
              <span className="text-[#F5D33E] text-lg">✦</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Papiers d'art
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Lustre perlé, brillant miroir ou velours : chaque finition
              transforme votre photo en objet précieux.
            </p>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:border-[#7C4DBC]/50 hover:bg-white/[0.07] hover:-translate-y-1 transition-all shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 rounded-lg bg-[#7C4DBC]/20 border border-[#7C4DBC]/30 flex items-center justify-center mb-4">
              <span className="text-[#C4A4E8] text-lg">◆</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Cadres sur mesure
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Bois naturel ou finitions contemporaines, nos cadres subliment
              vos tirages sans les étouffer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}