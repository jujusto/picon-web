import { CheckCircle2, Shield, Sparkles, Award, Layers, SunMedium, Eye } from "lucide-react";

export function LabPillars() {
  const pillars = [
    {
      icon: Eye,
      title: "Étalonnage expert des teintes de peau",
      subtitle: "Fidélité chromatique absolue",
      description:
        "Nos tireurs appliquent des profils colorimétriques calibrés pour sublimer la richesse des carnations afro-africaines et restituer la lumière dorée naturelle de Lomé sans virage terne ni brûlure des hautes lumières.",
    },
    {
      icon: Layers,
      title: "Papiers d'art argentiques & encres d'archivage",
      subtitle: "Grammage lourd 260g/m²",
      description:
        "Nous n'utilisons que de véritables papiers photo professionnels à émulsion argentique et encres pigmentaires résistantes aux UV et à l'humidité tropicale, garantissant plus de 50 ans de conservation éclatante.",
    },
    {
      icon: Award,
      title: "Contrôle manuel sous loupe de précision",
      subtitle: "Inspection artisanale par tireur",
      description:
        "Chaque tirage passe entre les mains de notre équipe à Kodjoviopé avec gants blancs. Les artefacts de compression, le piqué et le rognage sont vérifiés avant toute mise sous pochette scellée.",
    },
    {
      icon: Shield,
      title: "Conditionnement rigide thermo-scellé",
      subtitle: "Zéro pliure, zéro rayure",
      description:
        "Vos tirages sont insérés dans une pochette protectrice sans acide, glissée dans une boîte carton renforcée et livrée en main propre par notre coursier dédié à Lomé.",
    },
  ];

  return (
    <section id="qualite" className="py-24 bg-[#0a0b0d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            L'Âme du Tirage Argentique
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-6">
            Pourquoi un véritable laboratoire photo change absolument tout.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Une simple imprimante de bureau dégrade vos pixels. Chez PICON, nous pratiquons la chimie et la physique de la lumière pour donner un corps, une texture et une éternité à vos instants précieux.
          </p>
        </div>

        {/* Dual Media Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          {/* Technician Image */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="/manus-storage/craft_lab_technician_5fac069b.png"
              alt="Artisan tireur de l'atelier PICON à Kodjoviopé vérifiant un tirage à la loupe"
              className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                Atelier PICON • Kodjoviopé, Lomé
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                L'œil du tireur : la précision du regard humain
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm max-w-xl">
                Avant de quitter notre laboratoire togolais, chaque tirage fait l'objet d'un examen optique minutieux. Si la netteté ou la colorimétrie ne sont pas parfaites, le tirage est réimprimé sans frais.
              </p>
            </div>
          </div>

          {/* Flatlay Materials Image */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="/manus-storage/prints_materials_flatlay_0ca4548a.png"
              alt="Matières, papiers fins, cadres bois et épreuves tirées au Togo"
              className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                Textures & Finitions
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Le toucher incomparable du vrai papier photo
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm">
                Lustre perlé, brillant miroir ou velours d'art : ressentez le poids noble de vos souvenirs entre vos mains.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#121418] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 mb-1">
                  {pillar.subtitle}
                </div>
                <h4 className="text-base font-bold text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
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
