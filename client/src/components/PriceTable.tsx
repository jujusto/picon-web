import { useState } from "react";
import { Check, Clock, CreditCard, ShieldCheck, Sparkles, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceTableProps {
  onOpenOrder: () => void;
}

export function PriceTable({ onOpenOrder }: PriceTableProps) {
  const [filter, setFilter] = useState<"all" | "prints" | "frames">("all");

  const priceItems = [
    { dim: "9 x 13 cm", print: "300 F", frame: "—", cat: "standard", desc: "Format intime de poche" },
    { dim: "10 x 15 cm", print: "300 F", frame: "—", popular: true, cat: "standard", desc: "Standard universel souvenir" },
    { dim: "13 x 18 cm", print: "300 F", frame: "—", cat: "standard", desc: "Portrait de commode ou bureau" },
    { dim: "15 x 21 cm", print: "500 F", frame: "2 000 F", cat: "standard", desc: "Demi-page A5 avec option cadre" },
    { dim: "20 x 25 cm", print: "1 000 F", frame: "—", cat: "moyen", desc: "Format américain studio" },
    { dim: "20 x 30 cm", print: "1 000 F", frame: "3 000 F", popular: true, cat: "moyen", desc: "A4 Galerie pour vos murs" },
    { dim: "24 x 30 cm", print: "1 000 F", frame: "—", cat: "moyen", desc: "Largeur généreuse de salon" },
    { dim: "30 x 40 cm", print: "1 200 F", frame: "—", cat: "grand", desc: "Grand format panoramique" },
    { dim: "30 x 45 cm", print: "1 200 F", frame: "12 500 F", popular: true, cat: "grand", desc: "A3+ Exposition avec cadre d'art" },
    { dim: "40 x 50 cm", print: "2 500 F", frame: "17 000 F", cat: "grand", desc: "Chef-d'œuvre de prestige" },
    { dim: "50 x 60 cm", print: "3 000 F", frame: "Sur devis", cat: "grand", desc: "Dimension monumentale labo" },
  ];

  return (
    <section id="tarifs" className="py-24 bg-[#0d0e11] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparence & Rigueur
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            Nos Dimensions & Tarifs Officiels.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Des tarifs en Francs CFA (XOF) sans surprise ni frais cachés. Choisissez la dimension qui sublimera votre histoire.
          </p>
        </div>

        {/* Pricing Table Card */}
        <div className="bg-[#141519] border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-12">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-white/5 p-4 sm:p-5 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300">
            <div className="col-span-5 sm:col-span-4 font-bold">Dimensions & Usage</div>
            <div className="col-span-3 sm:col-span-4 text-center font-bold text-amber-400">Tirage Nu</div>
            <div className="col-span-4 sm:col-span-4 text-right font-bold text-zinc-200">Option Cadre Photo</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {priceItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/[0.03] transition-colors text-sm"
              >
                <div className="col-span-5 sm:col-span-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white font-mono">{item.dim}</span>
                    {item.popular && (
                      <span className="hidden sm:inline-block bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Plébiscité
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">{item.desc}</div>
                </div>

                <div className="col-span-3 sm:col-span-4 text-center">
                  <span className="font-extrabold text-amber-400 font-mono text-base sm:text-lg">
                    {item.print}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono ml-1 uppercase">CFA</span>
                </div>

                <div className="col-span-4 sm:col-span-4 text-right">
                  {item.frame !== "—" ? (
                    <div>
                      <span className="font-bold text-zinc-200 font-mono text-sm sm:text-base">
                        {item.frame}
                      </span>
                      {item.frame !== "Sur devis" && (
                        <span className="text-[10px] text-zinc-500 font-mono ml-1 uppercase">CFA</span>
                      )}
                      <div className="text-[11px] text-zinc-400 hidden sm:block">Baguette bois + verre</div>
                    </div>
                  ) : (
                    <span className="text-zinc-600 text-xs italic">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Processing Timelines & Local Payments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Delays Card */}
          <div className="bg-[#121418] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <Clock className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Délais de traitement labo</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Les délais démarrent à validation de votre fichier et début de fabrication dans notre atelier.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <span className="text-sm font-bold text-white block">Standard (72h)</span>
                    <span className="text-xs text-zinc-400">Livraison sous 3 jours ouvrés partout à Lomé</span>
                  </div>
                  <span className="px-3 py-1 bg-white/10 text-zinc-300 text-xs font-mono rounded-lg">
                    Inclus
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-amber-400/10 rounded-xl border border-amber-400/30">
                  <div>
                    <span className="text-sm font-bold text-amber-300 block">Express Labo (24h)</span>
                    <span className="text-xs text-zinc-400">Traitement prioritaire en 1 jour ouvré</span>
                  </div>
                  <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold font-mono rounded-lg">
                    Option Express
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantie « Réimpression sans frais » en cas d'anomalie de fabrication</span>
            </div>
          </div>

          {/* Payments Card */}
          <div className="bg-[#121418] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <CreditCard className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Payez comme vous voulez au Togo</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Toutes les solutions de paiement locales et internationales sont intégrées pour une expérience fluide.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="font-bold text-white text-sm">Mixx by Yas</div>
                  <div className="text-[11px] text-amber-400 font-mono">TMoney Togo</div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="font-bold text-white text-sm">Moov Money</div>
                  <div className="text-[11px] text-blue-400 font-mono">Flooz Togo</div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="font-bold text-white text-sm">Cartes Bancaires</div>
                  <div className="text-[11px] text-zinc-400 font-mono">Visa • Mastercard</div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="font-bold text-white text-sm">À la livraison</div>
                  <div className="text-[11px] text-emerald-400 font-mono">Espèces en main propre</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Besoin d'un format spécifique ou devis expo ?</span>
              <Button
                onClick={onOpenOrder}
                className="bg-white text-black hover:bg-zinc-200 text-xs font-bold py-1.5 px-3 rounded-lg"
              >
                Contacter l'atelier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
