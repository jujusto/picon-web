import { Check, Crop, Images, PackageCheck, Smartphone, Sparkles } from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";

export function AppFeatures() {
  const features = [
    { icon: Images, number: "01", title: "Chargez", text: "Retrouvez vos souvenirs directement dans votre smartphone, sans transfert compliqué ni passage en agence." },
    { icon: Crop, number: "02", title: "Commandez", text: "Choisissez le format, ajustez le cadrage et vérifiez le rendu de chaque photo avant de confirmer." },
    { icon: PackageCheck, number: "03", title: "Livraison", text: "PICON prépare vos impressions et organise la livraison à domicile selon les options disponibles." },
  ];

  return (
    <section id="app-features" className="py-24 bg-[#0d0e11] border-t border-white/10 text-white relative overflow-hidden">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-400 mb-5"><Smartphone className="w-3.5 h-3.5" />L'application PICON</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display leading-tight mb-5">Toute l'expérience du laboratoire, dans votre poche.</h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-7">PICON transforme votre galerie mobile en une expérience simple, claire et pensée pour restaurer vos souvenirs.</p>
            <div className="space-y-3 mb-8 text-sm text-zinc-200"><div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-400" />Formats et options visibles avant chaque choix</div><div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-400" />Recadrage et aperçu avant confirmation</div><div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-400" />Commande suivie depuis votre smartphone</div></div>
            <PlayStoreButton label="Découvrir l'app sur Google Play" size="lg" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature) => { const Icon = feature.icon; return <div key={feature.number} className="bg-[#141519] border border-white/10 rounded-2xl p-5 min-h-[240px] hover:border-amber-400/40 transition-colors group"><div className="flex items-center justify-between mb-8"><span className="font-mono text-3xl font-bold text-amber-400/30 group-hover:text-amber-400 transition-colors">{feature.number}</span><div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-colors"><Icon className="w-5 h-5" /></div></div><h3 className="font-bold text-base text-white mb-3">{feature.title}</h3><p className="text-xs text-zinc-400 leading-relaxed">{feature.text}</p></div>; })}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-[#121418] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-8 sm:p-12"><div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4"><Sparkles className="w-4 h-4" />Une app construite pour le réel</div><h3 className="font-display text-2xl sm:text-4xl font-bold leading-tight mb-4">Pas besoin de comprendre l'impression. Il suffit de choisir ce qui compte.</h3><p className="text-sm text-zinc-400 leading-relaxed max-w-xl">L'application vous accompagne du choix de la photo jusqu'au récapitulatif. Les formats, les quantités, les promotions et les options disponibles sont réunis au même endroit.</p></div>
          <div className="min-h-[320px] relative bg-gradient-to-br from-[#16191e] to-[#090a0c] overflow-hidden"><div className="absolute -right-12 -bottom-20 h-80 w-80 rounded-full border border-white/10" /><div className="absolute right-10 top-12 w-[190px] rounded-[28px] border-[6px] border-zinc-700 bg-[#07080a] shadow-2xl rotate-6 overflow-hidden"><div className="h-5 bg-black flex items-center justify-center"><div className="w-14 h-3 rounded-full bg-zinc-800" /></div><div className="p-3 space-y-3"><div className="flex items-center justify-between"><span className="text-[10px] font-bold text-white">Bonjour, PICON</span><div className="w-5 h-5 rounded-full bg-amber-400/20" /></div><div className="h-24 rounded-xl overflow-hidden"><img src="/manus-storage/hero_prints_lome_1c4fc9d2.png" alt="Capture visuelle de l'expérience PICON" className="w-full h-full object-cover" /></div><div className="text-[9px] text-zinc-300 font-semibold">Choisir mes photos</div><div className="grid grid-cols-2 gap-2"><div className="h-10 rounded-lg bg-white/10" /><div className="h-10 rounded-lg bg-white/10" /></div><div className="h-7 rounded-lg bg-white text-black text-[9px] font-bold flex items-center justify-center">Continuer</div></div></div><div className="absolute left-8 bottom-10 rounded-xl bg-[#f5efe4] text-black p-4 w-44 shadow-2xl -rotate-6"><div className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-2">Photo studio</div><div className="text-lg font-display font-bold leading-none">Vos souvenirs, imprimés.</div><div className="mt-4 flex gap-1"><div className="h-1.5 w-8 bg-[#1D6FA4]" /><div className="h-1.5 w-8 bg-[#F4D03F]" /><div className="h-1.5 w-8 bg-[#E63946]" /></div></div></div>
        </div>
      </div>
    </section>
  );
}
