import { Shield, Sparkles, Award, Layers, Eye } from "lucide-react";

export function LabPillars() {
  const pillars = [
    { icon: Eye, title: "Étalonnage expert des teintes de peau", subtitle: "Fidélité chromatique absolue", description: "Nos tireurs appliquent des profils colorimétriques calibrés pour restituer la richesse des carnations et la lumière naturelle de Lomé." },
    { icon: Layers, title: "Papiers d'art argentiques & encres d'archivage", subtitle: "Grammage professionnel", description: "Nous sélectionnons des papiers photo professionnels et des encres pigmentaires résistantes aux UV et à l'humidité tropicale." },
    { icon: Award, title: "Contrôle manuel sous loupe de précision", subtitle: "Inspection artisanale par tireur", description: "Chaque tirage passe entre les mains de notre équipe. La netteté, le piqué, les artefacts et le rognage sont vérifiés avant la mise sous pochette." },
    { icon: Shield, title: "Conditionnement protecteur", subtitle: "Zéro pliure, zéro rayure", description: "Vos tirages sont insérés dans une enveloppe dédiée et renforcée, puis livrés en main propre par nos coursiers." },
  ];

  return (
    <section id="qualite" className="py-24 bg-[#0a0b0d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-5"><Sparkles className="w-3.5 h-3.5" />L'âme du tirage</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img src="/manus-storage/craft_lab_technician_5fac069b.png" alt="Artisan tireur de l'atelier PICON vérifiant un tirage à la loupe" className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8"><span className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Atelier PICON</span><h3 className="text-xl sm:text-2xl font-bold text-white mb-2">L'œil du tireur : la précision du regard humain</h3><p className="text-zinc-300 text-xs sm:text-sm max-w-xl">Avant de quitter notre laboratoire, chaque tirage fait l'objet d'un examen optique minutieux.</p></div>
            <img src="/manus-storage/1313058_47ceb355.png" alt="" aria-hidden="true" className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-black/60 p-2 border border-white/20 object-contain" />
          </div>
          <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img src="/manus-storage/prints_materials_flatlay_0ca4548a.png" alt="Matières, papiers fins, cadres bois et épreuves PICON" className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8"><span className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Textures & Finitions</span><h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Le toucher incomparable du vrai papier photo</h3><p className="text-zinc-300 text-xs sm:text-sm">Lustre perlé, brillant miroir ou velours d'art : ressentez le poids de vos souvenirs entre vos mains.</p></div>
            <img src="/manus-storage/1313058_47ceb355.png" alt="" aria-hidden="true" className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-black/60 p-2 border border-white/20 object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{pillars.map((pillar, idx) => { const Icon = pillar.icon; return <div key={idx} className="bg-[#121418] border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all group"><div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-black transition-colors"><Icon className="w-6 h-6" /></div><div className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 mb-1">{pillar.subtitle}</div><h4 className="text-base font-bold text-white mb-3">{pillar.title}</h4><p className="text-xs text-zinc-400 leading-relaxed">{pillar.description}</p></div>; })}</div>
      </div>
    </section>
  );
}
