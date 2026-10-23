import { useEffect, useMemo, useState } from "react";
import {
  Banknote,
  Clock3,
  CreditCard,
  Frame,
  Info,
  Smartphone,
  Truck,
} from "lucide-react";
import { PlayStoreButton } from "./PlayStoreButton";
import { fetchPiconFormats, type PiconFormat } from "@/lib/cms";

type PriceItem = { size: string; price: string; description?: string };
type PriceGroup = {
  title: string;
  eyebrow: string;
  accent: string;
  items: PriceItem[];
  frame?: string;
  order: number;
};

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

export function PricingSection() {
  const [activeGroup, setActiveGroup] = useState("Tous");
  const [formats, setFormats] = useState<PiconFormat[]>(fallbackFormats);
  useEffect(() => {
    let active = true;
    fetchPiconFormats().then((items) => { if (active && items.length) setFormats(items); }).catch(() => undefined);
    return () => { active = false; };
  }, []);
  const groups = useMemo<PriceGroup[]>(() => {
    const grouped = new Map<string, PiconFormat[]>();
    formats.forEach((format) => {
      const category = format.category || "Tirages photo";
      grouped.set(category, [...(grouped.get(category) || []), format]);
    });
    const eyebrows: Record<string, string> = { "Tirages standard": "Les formats du quotidien", "Formats à encadrer": "Du souvenir au mur", "Grands formats": "Pour vos images fortes", "Formats galerie": "L'image comme pièce" };
    const accents = ["amber", "blue", "violet", "rose"];
    return Array.from(grouped.entries()).map(([title, entries], index) => ({
      title,
      eyebrow: eyebrows[title] || "Les formats PICON",
      accent: accents[index % accents.length],
      items: entries.map((entry) => ({ size: entry.dimensions || entry.title, price: `${new Intl.NumberFormat("fr-FR").format(entry.priceXof)} FCFA`, description: entry.description })),
      frame: entries.find((entry) => entry.frameNote)?.frameNote,
      order: Math.min(...entries.map((entry) => entry.order)),
    })).sort((a, b) => a.order - b.order);
  }, [formats]);
  const visibleGroups = useMemo(
    () =>
      activeGroup === "Tous"
        ? groups
        : groups.filter((group) => group.title === activeGroup),
    [activeGroup]
  );

  return (
    <section
      id="pricing"
      className="section-blue-tint relative py-24 sm:py-28 text-[#1A1A1A] overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#0A3D91]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B942]/15 border border-[#F4B942]/30 text-[#B88000] text-xs font-semibold uppercase tracking-widest mb-5">
              <Banknote className="w-3.5 h-3.5" />
              Tarifs transparents
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4 text-[#1A1A1A]">
              Choisissez le format qui fera durer l'histoire.
            </h2>
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
              Les prix affichés sont ceux des tirages photo. Les frais de
              livraison et les options complémentaires sont précisés dans
              l'application avant validation.
            </p>
          </div>

          <div className="rounded-2xl welcome-offer-card p-4 max-w-sm shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#1AB5A3] shrink-0 mt-0.5" />
              <p className="text-xs welcome-offer-text leading-relaxed">
                <strong className="welcome-offer-text-strong">
                  Offre de bienvenue :
                </strong>{" "}
                5 tirages offerts pour votre première commande, selon les
                conditions affichées dans l'application.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist">
          {["Tous", ...groups.map((g) => g.title)].map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeGroup === filter}
              onClick={() => setActiveGroup(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                activeGroup === filter
                  ? "bg-[#0A3D91] text-white border-[#0A3D91]"
                  : "bg-white text-[#666666] border-[#E5E5E5] hover:border-[#0A3D91]/50 hover:text-[#0A3D91]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visibleGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-6 hover:border-[#0A3D91]/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-5 mb-5">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#666666]">
                    {group.eyebrow}
                  </span>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mt-1">
                    {group.title}
                  </h3>
                </div>
                <span
                  className={`w-3 h-3 rounded-full shrink-0 mt-1 ${
                    group.accent === "amber"
                      ? "bg-[#F4B942]"
                      : group.accent === "blue"
                      ? "bg-[#0A3D91]"
                      : group.accent === "violet"
                      ? "bg-[#7C3AED]"
                      : "bg-[#E63946]"
                  }`}
                />
              </div>

              {/* Tableau des tarifs */}
              <div className="overflow-hidden rounded-xl border border-[#E5E5E5]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E5E5E5]">
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-widest text-[#666666] font-bold">
                        Format
                      </th>
                      <th className="text-right py-2.5 px-4 text-[10px] font-mono uppercase tracking-widest text-[#666666] font-bold">
                        Tarif unique / photo
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F0F0]">
                    {group.items.map((item) => (
                      <tr
                        key={item.size}
                        className="hover:bg-[#F8FAFC] transition-colors"
                      >
                        <td className="py-3 px-4 text-[#1A1A1A] font-medium">
                          <span>{item.size}</span>
                          {item.description && <span className="block text-xs text-[#666666] font-normal mt-0.5">{item.description}</span>}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-[#0A3D91] tabular-nums">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {group.frame && (
                <div className="mt-4 pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs text-[#0A3D91] font-medium">
                  <Frame className="w-4 h-4" />
                  {group.frame}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-8">
          <div className="lg:col-span-7 rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <Clock3 className="w-5 h-5 text-[#0A3D91]" />
              <div>
                <h3 className="font-bold text-[#1A1A1A]">
                  Délais de traitement
                </h3>
                <p className="text-xs text-[#666666]">
                  À compter de la validation de la commande
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#F8FAFC] p-4">
                <div className="text-2xl font-display font-bold text-[#1A1A1A]">
                  72 h
                </div>
                <div className="text-xs text-[#666666] mt-1">
                  Standard · livraison sous 3 jours ouvrés
                </div>
              </div>
              <div className="rounded-xl bg-[#F4B942]/15 border border-[#F4B942]/30 p-4">
                <div className="text-2xl font-display font-bold text-[#B88000]">
                  24 h
                </div>
                <div className="text-xs text-[#1A1A1A]/80 mt-1">
                  Express · selon options disponibles
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-[#E5E5E5] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <CreditCard className="w-5 h-5 text-emerald-600" />
              <div>
                <h3 className="font-bold text-[#1A1A1A]">
                  Payez comme vous voulez
                </h3>
                <p className="text-xs text-[#666666]">
                  Les options apparaissent dans l'application
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.title}
                    className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-3 py-2.5"
                  >
                    <Icon className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-[#1A1A1A] font-semibold">
                      {method.title}
                    </span>
                    <span className="text-xs text-[#666666] ml-auto">
                      {method.note}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#F4B942]/30 bg-[#F4B942]/10 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#B88000] mt-0.5 shrink-0" />
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
              <strong className="text-[#1A1A1A]">
                Besoin d'un format spécifique ?
              </strong>
              <br />
              Contactez l'équipe PICON pour un grand format ou un projet sur
              mesure.
            </p>
          </div>
          <PlayStoreButton label="Voir les options dans l'app" size="sm" />
        </div>
      </div>
    </section>
  );
}
