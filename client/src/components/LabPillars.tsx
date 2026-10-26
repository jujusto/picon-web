import { Shield, Sparkles, Award, Layers, Eye } from "lucide-react";

export function LabPillars() {
  const pillars = [
    {
      icon: Eye,
      title: "Étalonnage expert des teintes de peau",
      subtitle: "Fidélité chromatique absolue",
      description:
        "Nos tireurs appliquent des profils colorimétriques calibrés pour restituer la richesse des carnations et la lumière naturelle de Lomé.",
      accent: "#C4A4E8",
      accentBg: "rgba(124, 77, 188, 0.20)",
      borderHover: "hover:border-[#7C4DBC]/50",
    },
    {
      icon: Layers,
      title: "Papiers d'art argentiques & encres d'archivage",
      subtitle: "Grammage professionnel",
      description:
        "Nous sélectionnons des papiers photo professionnels et des encres pigmentaires résistantes aux UV et à l'humidité tropicale.",
      accent: "#7EDDD1",
      accentBg: "rgba(26, 181, 163, 0.20)",
      borderHover: "hover:border-[#1AB5A3]/50",
    },
    {
      icon: Award,
      title: "Contrôle manuel sous loupe de précision",
      subtitle: "Inspection artisanale par tireur",
      description:
        "Chaque tirage passe entre les mains de notre équipe. La netteté, le piqué, les artefacts et le rognage sont vérifiés avant la mise sous pochette.",
      accent: "#F5D33E",
      accentBg: "rgba(245, 211, 62, 0.18)",
      borderHover: "hover:border-[#F5D33E]/50",
    },
    {
      icon: Shield,
      title: "Conditionnement protecteur",
      subtitle: "Zéro pliure, zéro rayure",
      description:
        "Vos tirages sont insérés dans une enveloppe dédiée et renforcée, puis livrés en main propre par nos coursiers.",
      accent: "#F1949C",
      accentBg: "rgba(230, 57, 70, 0.18)",
      borderHover: "hover:border-[#E63946]/50",
    },
  ];

  return (
    <section
      id="qualite"
      className="relative py-24 text-white overflow-hidden bg-[#16171C]"
    >
      {/* Halos colorés intenses pour donner de la profondeur au noir */}
      <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[#7C4DBC]/25 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full bg-[#1AB5A3]/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 h-96 w-96 rounded-full bg-[#F5D33E]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-[#E63946]/8 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge + titre */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/15 text-[#C4A4E8] text-xs font-semibold tracking-wide uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A4E8]" />
            L'âme du tirage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white max-w-3xl leading-[1.1]">
            La précision du{" "}
            <span className="bg-gradient-to-r from-[#1AB5A3] via-[#F5D33E] to-[#7C4DBC] bg-clip-text text-transparent">
              regard humain
            </span>
            .
          </h2>
        </div>

        {/* 2 grandes photos — glass frames */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7 relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/manus-storage/picon-inspection-tirage_f61acdcc.webp"
                alt="Tireur PICON vérifiant un tirage photo sous loupe de précision"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-mono text-[#F5D33E] uppercase tracking-widest mb-1">
                  Atelier PICON
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  L'œil du tireur : la précision du regard humain
                </h3>
                <p className="text-white/85 text-xs sm:text-sm max-w-xl">
                  Avant de quitter notre laboratoire, chaque tirage fait
                  l'objet d'un examen optique minutieux.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/manus-storage/picon-galerie-memoire_28c00c18.webp"
                alt="Galerie de portraits et de souvenirs imprimés en tirages d’art PICON"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-mono text-[#7EDDD1] uppercase tracking-widest mb-1">
                  Textures & Finitions
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Le toucher incomparable du vrai papier photo
                </h3>
                <p className="text-white/85 text-xs sm:text-sm">
                  Lustre perlé, brillant miroir ou velours d'art : ressentez le
                  poids de vos souvenirs entre vos mains.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 piliers — cartes glassmorphiques sur fond noir */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group rounded-2xl p-6 bg-white/[0.04] backdrop-blur-2xl border border-white/10 ${pillar.borderHover} transition-all hover:bg-white/[0.07] hover:-translate-y-1 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 backdrop-blur-md border border-white/10"
                  style={{
                    backgroundColor: pillar.accentBg,
                    color: pillar.accent,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div
                  className="text-[11px] font-mono uppercase tracking-wider mb-1 font-bold"
                  style={{ color: pillar.accent }}
                >
                  {pillar.subtitle}
                </div>
                <h4 className="text-base font-bold text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
