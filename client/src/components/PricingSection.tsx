import { useEffect, useMemo, useState } from "react";
import { Banknote, Clock3, CreditCard, Frame, Info, Smartphone, Truck } from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";
import { fetchPiconFormats, type PiconFormat } from "@/lib/cms";

type PriceItem = { size: string; price: number; description: string };
type PriceGroup = { title: string; eyebrow: string; accent: string; items: PriceItem[]; frame?: string; order: number };

const fallbackFormats: PiconFormat[] = [
  { id: 1, title: "9 × 13 cm", dimensions: "9 × 13 cm", priceXof: 300, description: "", category: "Tirages standard", frameNote: "", order: 1 },
  { id: 2, title: "10 × 15 cm", dimensions: "10 × 15 cm", priceXof: 300, description: "", category: "Tirages standard", frameNote: "", order: 2 },
  { id: 3, title: "13 × 18 cm", dimensions: "13 × 18 cm", priceXof: 300, description: "", category: "Tirages standard", frameNote: "", order: 3 },
  { id: 4, title: "15 × 21 cm", dimensions: "15 × 21 cm", priceXof: 500, description: "", category: "Tirages standard", frameNote: "", order: 4 },
  { id: 5, title: "20 × 25 cm", dimensions: "20 × 25 cm", priceXof: 1000, description: "", category: "Formats à encadrer", frameNote: "Cadre disponible : 2 000 FCFA", order: 5 },
  { id: 6, title: "20 × 30 cm", dimensions: "20 × 30 cm", priceXof: 1000, description: "", category: "Formats à encadrer", frameNote: "Cadre disponible : 2 000 FCFA", order: 6 },
  { id: 7, title: "24 × 30 cm", dimensions: "24 × 30 cm", priceXof: 1000, description: "", category: "Formats à encadrer", frameNote: "Cadre disponible : 2 000 FCFA", order: 7 },
  { id: 8, title: "30 × 40 cm", dimensions: "30 × 40 cm", priceXof: 1200, description: "", category: "Grands formats", frameNote: "Cadre disponible : 3 000 FCFA", order: 8 },
  { id: 9, title: "30 × 45 cm", dimensions: "30 × 45 cm", priceXof: 1200, description: "", category: "Grands formats", frameNote: "Cadre disponible : 3 000 FCFA", order: 9 },
  { id: 10, title: "40 × 50 cm", dimensions: "40 × 50 cm", priceXof: 2500, description: "", category: "Formats galerie", frameNote: "Cadre disponible : 12 500 à 17 000 FCFA", order: 10 },
  { id: 11, title: "50 × 60 cm", dimensions: "50 × 60 cm", priceXof: 3000, description: "", category: "Formats galerie", frameNote: "Cadre disponible : 12 500 à 17 000 FCFA", order: 11 },
];

const paymentMethods = [
  { icon: Smartphone, title: "Mixx by Yas", note: "T-Money" },
  { icon: Banknote, title: "Flooz", note: "Moov Money" },
  { icon: CreditCard, title: "Carte bancaire", note: "Paiement sécurisé" },
];

const accents = ["amber", "blue", "violet", "rose"];
const formatPrice = (price: number) => `${new Intl.NumberFormat("fr-FR").format(price)} FCFA`;

export function PricingSection() {
  const [activeGroup, setActiveGroup] = useState("Tous");
  const [formats, setFormats] = useState<PiconFormat[]>(fallbackFormats);

  useEffect(() => {
    let active = true;
    fetchPiconFormats()
      .then((items) => { if (active && items.length) setFormats(items); })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);

  const groups = useMemo<PriceGroup[]>(() => {
    const buckets = new Map<string, PiconFormat[]>();
    for (const format of formats) {
      const category = format.category || "Tirages photo";
      buckets.set(category, [...(buckets.get(category) || []), format]);
    }
    return Array.from(buckets.entries()).map(([title, items]: [string, PiconFormat[]], index: number) => ({
      title,
      eyebrow: items.find((item: PiconFormat) => item.description)?.description || "Les formats PICON",
      accent: accents[index % accents.length],
      items: items.map((item: PiconFormat) => ({
        size: item.dimensions || item.title,
        price: item.priceXof,
        description: item.description,
      })),
      frame: items.find((item: PiconFormat) => item.frameNote)?.frameNote,
      order: Math.min(...items.map((item: PiconFormat) => item.order)),
    })).sort((a, b) => a.order - b.order);
  }, [formats]);

  const visibleGroups = useMemo(
    () => activeGroup === "Tous" ? groups : groups.filter((group) => group.title === activeGroup),
    [activeGroup, groups],
  );

  return (
    <section id="pricing" className="relative py-24 sm:py-28 bg-[#0c0d0f] border-y border-white/10 text-white overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-5"><Banknote className="w-3.5 h-3.5" />Tarifs transparents</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">Choisissez le format qui fera durer l'histoire.</h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">Les prix affichés sont ceux des tirages photo. Les frais de livraison et les options complémentaires sont précisés dans l'application avant validation.</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 max-w-sm"><div className="flex items-start gap-3"><Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><p className="text-xs text-zinc-300 leading-relaxed"><strong className="text-white">Offre de bienvenue :</strong> 5 tirages offerts pour votre première commande, selon les conditions affichées dans l'application.</p></div></div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filtrer les formats">
          {["Tous", ...groups.map((group) => group.title)].map((filter) => <button key={filter} role="tab" aria-selected={activeGroup === filter} onClick={() => setActiveGroup(filter)} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${activeGroup === filter ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-white/15 hover:border-white/40 hover:text-white"}`}>{filter}</button>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visibleGroups.map((group) => <article key={group.title} className="rounded-2xl border border-white/10 bg-[#141519] p-5 sm:p-6 hover:border-amber-400/30 transition-colors">
            <div className="flex items-start justify-between gap-5 mb-6"><div><span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">{group.eyebrow}</span><h3 className="text-xl font-bold text-white mt-1">{group.title}</h3></div><span className={`w-3 h-3 rounded-full shrink-0 mt-1 ${group.accent === "amber" ? "bg-amber-400" : group.accent === "blue" ? "bg-blue-400" : group.accent === "violet" ? "bg-violet-400" : "bg-rose-400"}`} /></div>
            <div className="divide-y divide-white/10">{group.items.map((item) => <div key={item.size} className="flex items-center justify-between py-3 first:pt-0 last:pb-0"><span className="text-sm text-zinc-300">{item.size}</span><span className="font-bold text-white tabular-nums">{formatPrice(item.price)}</span></div>)}</div>
            {group.frame && <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300"><Frame className="w-4 h-4" />{group.frame}</div>}
          </article>)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#141519] p-5 sm:p-6"><div className="flex items-center gap-3 mb-5"><Clock3 className="w-5 h-5 text-amber-400" /><div><h3 className="font-bold text-white">Délais de traitement</h3><p className="text-xs text-zinc-500">À compter de la validation de la commande</p></div></div><div className="grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/5 p-4"><div className="text-2xl font-display font-bold text-white">72 h</div><div className="text-xs text-zinc-400 mt-1">Standard · livraison sous 3 jours ouvrés</div></div><div className="rounded-xl bg-amber-400/10 border border-amber-400/20 p-4"><div className="text-2xl font-display font-bold text-amber-300">24 h</div><div className="text-xs text-zinc-300 mt-1">Express · selon options disponibles</div></div></div></div>
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#141519] p-5 sm:p-6"><div className="flex items-center gap-3 mb-5"><CreditCard className="w-5 h-5 text-emerald-400" /><div><h3 className="font-bold text-white">Payez comme vous voulez</h3><p className="text-xs text-zinc-500">Les options apparaissent dans l'application</p></div></div><div className="space-y-2">{paymentMethods.map((method) => { const Icon = method.icon; return <div key={method.title} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5"><Icon className="w-4 h-4 text-emerald-400" /><span className="text-sm text-white font-semibold">{method.title}</span><span className="text-xs text-zinc-500 ml-auto">{method.note}</span></div>; })}</div></div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 sm:p-6"><div className="flex items-start gap-3"><Truck className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" /><p className="text-sm text-zinc-300 leading-relaxed"><strong className="text-white">Besoin d'un format spécifique ?</strong><br />Contactez l'équipe PICON pour un grand format ou un projet sur mesure.</p></div><PlayStoreButton label="Voir les options dans l'app" size="sm" /></div>
      </div>
    </section>
  );
}
