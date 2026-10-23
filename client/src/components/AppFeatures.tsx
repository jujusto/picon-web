import { useEffect, useState } from "react";
import {
  Check,
  Crop,
  Images,
  PackageCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";
import { fetchPiconFeatures, type PiconFeature } from "@/lib/cms";

const fallbackFeatures: PiconFeature[] = [
  { id: 1, title: "Chargez", description: "Retrouvez vos souvenirs directement dans votre smartphone, sans transfert compliqué ni passage en agence.", icon: "images", order: 1 },
  { id: 2, title: "Commandez", description: "Choisissez le format, ajustez le cadrage et vérifiez le rendu de chaque photo avant de confirmer.", icon: "crop", order: 2 },
  { id: 3, title: "Livraison", description: "PICON prépare vos impressions et organise la livraison à domicile selon les options disponibles.", icon: "package-check", order: 3 },
];

const iconByKey = {
  images: Images,
  crop: Crop,
  "package-check": PackageCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
} as const;
const accentPalette = [
  { color: "#F5D33E", background: "rgba(245, 211, 62, 0.18)" },
  { color: "#7EDDD1", background: "rgba(26, 181, 163, 0.18)" },
  { color: "#C4A4E8", background: "rgba(124, 77, 188, 0.18)" },
];

export function AppFeatures() {
  const [features, setFeatures] = useState<PiconFeature[]>(fallbackFeatures);

  useEffect(() => {
    let active = true;
    fetchPiconFeatures()
      .then((items) => { if (active && items.length) setFeatures(items); })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);

  return (
    <section id="app-features" className="relative py-24 bg-[#16171C] text-white overflow-hidden">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F5D33E]/15 blur-[120px] pointer-events-none" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#1AB5A3]/12 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#F5D33E] mb-5"><Smartphone className="w-3.5 h-3.5" />L'application PICON</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display leading-tight mb-5 text-white">Toute l'expérience du laboratoire, dans votre <span className="bg-gradient-to-r from-[#F5D33E] to-[#1AB5A3] bg-clip-text text-transparent">poche.</span></h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-7">PICON transforme votre galerie mobile en une expérience simple, claire et pensée pour restaurer vos souvenirs.</p>
            <div className="space-y-3 mb-8 text-sm text-white/85"><div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#1AB5A3]" />Formats et options visibles avant chaque choix</div><div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#1AB5A3]" />Recadrage et aperçu avant confirmation</div><div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#1AB5A3]" />Commande suivie depuis votre smartphone</div></div>
            <PlayStoreButton label="Découvrir l'app sur Google Play" size="lg" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const Icon = iconByKey[feature.icon as keyof typeof iconByKey] || Sparkles;
              const accent = accentPalette[index % accentPalette.length];
              return <div key={feature.id} className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-5 min-h-[240px] hover:bg-white/[0.07] hover:border-white/20 transition-all group">
                <div className="flex items-center justify-between mb-8"><span className="font-mono text-3xl font-bold opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: accent.color }}>{String(index + 1).padStart(2, "0")}</span><div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: accent.background, color: accent.color }}>{feature.imageUrl ? <img src={feature.imageUrl} alt={feature.imageAlt || ""} className="h-full w-full rounded-xl object-cover" /> : <Icon className="w-5 h-5" />}</div></div>
                <h3 className="font-bold text-base text-white mb-3">{feature.title}</h3><p className="text-xs text-white/60 leading-relaxed">{feature.description}</p>
              </div>;
            })}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
          <div className="p-8 sm:p-12"><div className="flex items-center gap-2 text-[#F5D33E] text-xs font-mono uppercase tracking-widest mb-4"><Sparkles className="w-4 h-4" />Une app construite pour le réel</div><h3 className="font-display text-2xl sm:text-4xl font-bold leading-tight mb-4 text-white">Pas besoin de comprendre l'impression. Il suffit de choisir ce qui compte.</h3><p className="text-sm text-white/65 leading-relaxed max-w-xl">L'application vous accompagne du choix de la photo jusqu'au récapitulatif. Les formats, les quantités, les promotions et les options disponibles sont réunis au même endroit.</p></div>
          <div className="min-h-[320px] relative overflow-hidden"><div className="absolute -right-12 -bottom-20 h-80 w-80 rounded-full border border-white/10" /><div className="absolute right-10 top-12 w-[190px] rounded-[28px] border-[6px] border-white/15 bg-[#0F1014] shadow-2xl rotate-6 overflow-hidden"><div className="h-5 bg-black flex items-center justify-center"><div className="w-14 h-3 rounded-full bg-white/10" /></div><div className="p-3 space-y-3"><div className="flex items-center justify-between"><span className="text-[10px] font-bold text-white">Bonjour, PICON</span><div className="w-5 h-5 rounded-full bg-[#F5D33E]/25" /></div><div className="h-24 rounded-xl overflow-hidden bg-[#1A1C20]"><img src="/manus-storage/tirages-sur-table_22f99628.webp" alt="Tirages photo PICON sur une table" className="w-full h-full object-cover" /></div><div className="text-[9px] text-white/70 font-semibold">Choisir mes photos</div><div className="grid grid-cols-2 gap-2"><div className="h-10 rounded-lg bg-white/5" /><div className="h-10 rounded-lg bg-white/5" /></div><div className="h-7 rounded-lg bg-[#1AB5A3] text-white text-[9px] font-bold flex items-center justify-center">Continuer</div></div></div><div className="absolute left-8 bottom-10 rounded-xl bg-white/95 backdrop-blur text-[#1A1A1A] p-4 w-44 shadow-2xl -rotate-6"><div className="text-[10px] font-mono uppercase tracking-widest text-[#666666] mb-2">Photo studio</div><div className="text-lg font-display font-bold leading-none">Vos souvenirs, imprimés.</div><div className="mt-4 flex gap-1"><div className="h-1.5 w-8 bg-[#0A3D91]" /><div className="h-1.5 w-8 bg-[#F4B942]" /><div className="h-1.5 w-8 bg-[#E63946]" /></div></div></div>
        </div>
      </div>
    </section>
  );
}
