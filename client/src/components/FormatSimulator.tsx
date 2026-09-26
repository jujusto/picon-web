import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Sparkles, Layers, Sliders, Info, Eye } from "lucide-react";

export interface FormatItem {
  id: string;
  name: string;
  dimensions: string;
  ratio: string;
  aspectClass: string;
  pricePrint: number;
  priceFrame?: number;
  popular?: boolean;
  category: "standard" | "moyen" | "grand";
  description: string;
  recommendedResolution: string;
}

export const FORMATS: FormatItem[] = [
  {
    id: "9x13",
    name: "Format Poche",
    dimensions: "9 x 13 cm",
    ratio: "3:2",
    aspectClass: "aspect-[13/9]",
    pricePrint: 300,
    category: "standard",
    description: "Format intime idéal pour les albums familiaux et les portefeuilles.",
    recommendedResolution: "1063 x 1535 px (300 DPI)",
  },
  {
    id: "10x15",
    name: "Standard Intemporel",
    dimensions: "10 x 15 cm",
    ratio: "3:2",
    aspectClass: "aspect-[15/10]",
    pricePrint: 300,
    popular: true,
    category: "standard",
    description: "Le grand classique universel de la photo de famille et de voyage.",
    recommendedResolution: "1181 x 1772 px (300 DPI)",
  },
  {
    id: "13x18",
    name: "Portrait Prestige",
    dimensions: "13 x 18 cm",
    ratio: "7:5",
    aspectClass: "aspect-[18/13]",
    pricePrint: 300,
    category: "standard",
    description: "Parfait pour un portrait posé sur une commode ou un bureau.",
    recommendedResolution: "1535 x 2126 px (300 DPI)",
  },
  {
    id: "15x21",
    name: "Demi-Page A5",
    dimensions: "15 x 21 cm",
    ratio: "7:5",
    aspectClass: "aspect-[21/15]",
    pricePrint: 500,
    priceFrame: 2000,
    category: "standard",
    description: "Belle ampleur visuelle, parfait avec son cadre en bois sur mesure.",
    recommendedResolution: "1772 x 2480 px (300 DPI)",
  },
  {
    id: "20x25",
    name: "Studio Médium",
    dimensions: "20 x 25 cm",
    ratio: "5:4",
    aspectClass: "aspect-[25/20]",
    pricePrint: 1000,
    category: "moyen",
    description: "Format d'art américain très prisé pour les portraits d'enfants.",
    recommendedResolution: "2362 x 2953 px (300 DPI)",
  },
  {
    id: "20x30",
    name: "A4 Galerie",
    dimensions: "20 x 30 cm",
    ratio: "3:2",
    aspectClass: "aspect-[30/20]",
    pricePrint: 1000,
    priceFrame: 3000,
    popular: true,
    category: "moyen",
    description: "Le format roi pour exposer vos plus beaux panoramas et mariages.",
    recommendedResolution: "2362 x 3543 px (300 DPI)",
  },
  {
    id: "24x30",
    name: "Édition Déco",
    dimensions: "24 x 30 cm",
    ratio: "5:4",
    aspectClass: "aspect-[30/24]",
    pricePrint: 1000,
    category: "moyen",
    description: "Largeur généreuse pour une présence affirmée sur vos murs.",
    recommendedResolution: "2835 x 3543 px (300 DPI)",
  },
  {
    id: "30x40",
    name: "Grand Angle",
    dimensions: "30 x 40 cm",
    ratio: "4:3",
    aspectClass: "aspect-[40/30]",
    pricePrint: 1200,
    category: "grand",
    description: "Grande photo de salon, détails saisissants et immersion totale.",
    recommendedResolution: "3543 x 4724 px (300 DPI)",
  },
  {
    id: "30x45",
    name: "A3+ Exposition",
    dimensions: "30 x 45 cm",
    ratio: "3:2",
    aspectClass: "aspect-[45/30]",
    pricePrint: 1200,
    priceFrame: 12500,
    popular: true,
    category: "grand",
    description: "L'impact visuel d'une véritable exposition d'artiste à domicile.",
    recommendedResolution: "3543 x 5315 px (300 DPI)",
  },
  {
    id: "40x50",
    name: "Chef-d'Œuvre",
    dimensions: "40 x 50 cm",
    ratio: "5:4",
    aspectClass: "aspect-[50/40]",
    pricePrint: 2500,
    priceFrame: 17000,
    category: "grand",
    description: "Tirage monumental réservé aux instants les plus mémorables d'une vie.",
    recommendedResolution: "4724 x 5906 px (300 DPI)",
  },
  {
    id: "50x60",
    name: "Format Monumental",
    dimensions: "50 x 60 cm",
    ratio: "6:5",
    aspectClass: "aspect-[60/50]",
    pricePrint: 3000,
    category: "grand",
    description: "La plus grande dimension du laboratoire PICON. Spectaculaire.",
    recommendedResolution: "5906 x 7087 px (300 DPI)",
  },
];

interface FormatSimulatorProps {
  onSelectAndOrder: (format: FormatItem, finish: string, withFrame: boolean, quantity: number) => void;
}

export function FormatSimulator({ onSelectAndOrder }: FormatSimulatorProps) {
  const [selectedFormat, setSelectedFormat] = useState<FormatItem>(FORMATS[1]); // 10x15 default
  const [finish, setFinish] = useState<"lustre" | "brillant" | "fineart">("lustre");
  const [withFrame, setWithFrame] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<"all" | "standard" | "moyen" | "grand">("all");

  const filteredFormats = FORMATS.filter(
    (f) => categoryFilter === "all" || f.category === categoryFilter
  );

  const unitPrice =
    selectedFormat.pricePrint +
    (withFrame && selectedFormat.priceFrame ? selectedFormat.priceFrame : 0);
  const totalPrice = unitPrice * quantity;

  return (
    <section id="simulateur" className="py-20 bg-[#0d0e11] text-white border-t border-b border-white/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sliders className="w-3.5 h-3.5" />
            Simulateur d'Atelier Interactif
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            Visualisez et configurez votre tirage idéal.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            De la photo souvenir de poche 9x13 au tirage d'exposition monumental 50x60 cm.
            Découvrez le rendu, le papier et les tarifs exacts en direct.
          </p>
        </div>

        {/* Main Grid: Preview on Left, Controls on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Visual Preview (5 cols) */}
          <div className="lg:col-span-5 bg-[#141519] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[460px] sticky top-24">
            <div className="w-full flex items-center justify-between text-xs text-zinc-400 mb-4 pb-3 border-b border-white/10">
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <Eye className="w-4 h-4 text-amber-400" />
                Aperçu mise en situation
              </span>
              <span className="bg-white/10 text-zinc-200 px-2.5 py-0.5 rounded-full font-mono">
                {selectedFormat.dimensions} • Ratio {selectedFormat.ratio}
              </span>
            </div>

            {/* Simulated Photo Frame */}
            <div className="relative w-full max-w-sm flex items-center justify-center py-6">
              <div
                className={`transition-all duration-300 relative ${
                  withFrame && selectedFormat.priceFrame
                    ? "bg-[#1d1d1f] p-4 sm:p-5 rounded shadow-2xl border-4 border-[#2b2520]"
                    : "p-2 bg-white rounded shadow-xl"
                }`}
              >
                {/* Passe-partout (matting) if framed */}
                <div
                  className={`relative overflow-hidden transition-all duration-300 ${
                    withFrame && selectedFormat.priceFrame
                      ? "p-3 sm:p-4 bg-[#fbf9f5] shadow-inner"
                      : ""
                  }`}
                >
                  <div className={`relative overflow-hidden shadow-sm max-w-[280px] sm:max-w-[320px] ${selectedFormat.aspectClass}`}>
                    <img
                      src="/manus-storage/hero_prints_lome_1c4fc9d2.png"
                      alt="Exemple de tirage PICON"
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        finish === "brillant"
                          ? "contrast-105 brightness-105"
                          : finish === "fineart"
                          ? "contrast-95 saturate-95 sepia-[0.05]"
                          : "contrast-100"
                      }`}
                    />
                    {/* Simulated sheen / paper texture */}
                    <div
                      className={`absolute inset-0 pointer-events-none transition-opacity ${
                        finish === "brillant"
                          ? "bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-80"
                          : finish === "fineart"
                          ? "bg-[#f5ebe0]/10 mix-blend-multiply opacity-60"
                          : "opacity-20 bg-white/5"
                      }`}
                    />
                  </div>
                </div>

                {/* Subtle PICON embossed watermark simulation on back */}
                {withFrame && selectedFormat.priceFrame && (
                  <div className="text-[10px] text-zinc-500 text-center mt-2 font-mono tracking-widest uppercase">
                    PICON Lab • Cadre Artisanal Bois Noir
                  </div>
                )}
              </div>
            </div>

            {/* Quality and Technical Details */}
            <div className="w-full mt-4 pt-4 border-t border-white/10 space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Qualité de numérisation requise :</span>
                <span className="font-mono text-amber-300">{selectedFormat.recommendedResolution}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Contrôle colorimétrique :</span>
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Calibré RVB / sRGB labo
                </span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Délai au laboratoire :</span>
                <span className="text-zinc-200">24h Express / 72h Standard</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Configuration Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category tabs */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                1. Choisissez la gamme de dimensions
              </label>
              <div className="grid grid-cols-4 gap-2 bg-[#141519] p-1.5 rounded-xl border border-white/10 text-xs font-medium">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`py-2 px-3 rounded-lg transition-all ${
                    categoryFilter === "all"
                      ? "bg-white text-black font-semibold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Tous (11)
                </button>
                <button
                  onClick={() => setCategoryFilter("standard")}
                  className={`py-2 px-3 rounded-lg transition-all ${
                    categoryFilter === "standard"
                      ? "bg-white text-black font-semibold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Standards
                </button>
                <button
                  onClick={() => setCategoryFilter("moyen")}
                  className={`py-2 px-3 rounded-lg transition-all ${
                    categoryFilter === "moyen"
                      ? "bg-white text-black font-semibold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Moyens (A4)
                </button>
                <button
                  onClick={() => setCategoryFilter("grand")}
                  className={`py-2 px-3 rounded-lg transition-all ${
                    categoryFilter === "grand"
                      ? "bg-white text-black font-semibold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Grands (A3+)
                </button>
              </div>
            </div>

            {/* Formats Grid */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filteredFormats.map((format) => {
                  const isSelected = selectedFormat.id === format.id;
                  return (
                    <button
                      key={format.id}
                      onClick={() => setSelectedFormat(format)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative cursor-pointer ${
                        isSelected
                          ? "bg-white/10 border-amber-400 ring-1 ring-amber-400/50 shadow-lg"
                          : "bg-[#141519] border-white/10 hover:border-white/30 hover:bg-white/5"
                      }`}
                    >
                      {format.popular && (
                        <span className="absolute -top-2 right-2 bg-amber-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight">
                          Populaire
                        </span>
                      )}
                      <div className="text-base font-bold text-white font-mono">{format.dimensions}</div>
                      <div className="text-xs text-zinc-400 truncate">{format.name}</div>
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-amber-400 font-extrabold text-sm">
                          {format.pricePrint.toLocaleString()} F
                        </span>
                        <span className="text-[10px] text-zinc-500 uppercase font-mono">CFA</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-zinc-500" />
                {selectedFormat.description}
              </p>
            </div>

            {/* Paper Finish Options */}
            <div className="bg-[#141519] border border-white/10 rounded-2xl p-5 space-y-3">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                2. Finition du papier photographique
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setFinish("lustre")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    finish === "lustre"
                      ? "bg-white/10 border-white text-white"
                      : "bg-black/30 border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-white">Lustre Satiné</span>
                    {finish === "lustre" && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-tight">
                    Grain perlé, anti-traces de doigts. Idéal pour les portraits et la manipulation.
                  </p>
                </button>

                <button
                  onClick={() => setFinish("brillant")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    finish === "brillant"
                      ? "bg-white/10 border-white text-white"
                      : "bg-black/30 border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-white">Brillant Miroir</span>
                    {finish === "brillant" && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-tight">
                    Couleurs ultra-vives, noirs profonds. Idéal pour les paysages et scènes de fête.
                  </p>
                </button>

                <button
                  onClick={() => setFinish("fineart")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    finish === "fineart"
                      ? "bg-white/10 border-white text-white"
                      : "bg-black/30 border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-white">Fine Art Velours</span>
                    {finish === "fineart" && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-tight">
                    100% Coton d'art, rendu pictural mat muséal. Pour les tirages d'exposition.
                  </p>
                </button>
              </div>
            </div>

            {/* Frame Option (if available for this format) */}
            <div className="bg-[#141519] border border-white/10 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                    3. Option Cadre & Passe-partout
                  </label>
                  <p className="text-xs text-zinc-400">
                    Cadre en bois massif noir ébène avec passe-partout écru sans acide.
                  </p>
                </div>
                {selectedFormat.priceFrame ? (
                  <button
                    onClick={() => setWithFrame(!withFrame)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                      withFrame
                        ? "bg-amber-400 text-black border-amber-400 shadow-md"
                        : "bg-white/5 border-white/20 text-zinc-300 hover:text-white"
                    }`}
                  >
                    {withFrame ? "Cadre inclus (+ " + selectedFormat.priceFrame.toLocaleString() + " F)" : "+ Ajouter un Cadre"}
                  </button>
                ) : (
                  <span className="text-[11px] text-zinc-500 italic bg-white/5 px-2.5 py-1 rounded">
                    Cadre disponible à partir du format 15x21
                  </span>
                )}
              </div>
            </div>

            {/* Quantity and Price Summary Bar */}
            <div className="bg-gradient-to-r from-zinc-900 to-[#181a1f] border border-white/15 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Quantité :
                </span>
                <div className="flex items-center border border-white/20 rounded-lg overflow-hidden bg-black/40">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-white font-mono">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price and CTA */}
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <div className="text-right">
                  <div className="text-xs text-zinc-400">Total estimé :</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">
                    {totalPrice.toLocaleString()} <span className="text-base text-zinc-300 font-sans font-normal">FCFA</span>
                  </div>
                </div>

                <Button
                  onClick={() => onSelectAndOrder(selectedFormat, finish, withFrame, quantity)}
                  className="bg-white text-black hover:bg-zinc-200 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-white/20 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Commander ce tirage</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
