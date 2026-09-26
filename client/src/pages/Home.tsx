import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FormatSimulator, FormatItem, FORMATS } from "@/components/FormatSimulator";
import { LabPillars } from "@/components/LabPillars";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LivingRoomShowcase } from "@/components/LivingRoomShowcase";
import { PriceTable } from "@/components/PriceTable";
import { FaqAndContact } from "@/components/FaqAndContact";
import { Footer } from "@/components/Footer";
import { OrderModal } from "@/components/OrderModal";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Layers,
  MapPin,
  CheckCircle2,
  Sliders,
  Award,
  Eye,
  Truck,
  Heart,
} from "lucide-react";

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<FormatItem>(FORMATS[1]); // 10x15
  const [selectedFinish, setSelectedFinish] = useState("lustre");
  const [selectedWithFrame, setSelectedWithFrame] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleOpenOrder = (
    format: FormatItem = FORMATS[1],
    finish: string = "lustre",
    withFrame: boolean = false,
    quantity: number = 1
  ) => {
    setSelectedFormat(format);
    setSelectedFinish(finish);
    setSelectedWithFrame(withFrame);
    setSelectedQuantity(quantity);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Navigation */}
      <Navbar onOpenOrder={() => handleOpenOrder(FORMATS[1])} />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-blue-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Brand Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="text-xs font-semibold text-zinc-200 tracking-wide uppercase">
                  PICON • "Ce qui compte vraiment."
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.08]">
                Vos photos méritent plus qu’un écran.
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
                Le premier laboratoire photo digital au Togo. Du smartphone à vos murs : commandez vos tirages d'art argentiques et cadres en quelques clics, et recevez-les directement chez vous sans vous déplacer en agence.
              </p>

              {/* Key Trust Highlights (Togo-specific) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-amber-400 font-bold text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    5 tirages offerts
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Sur votre 1ère commande</div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Papier argentique
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Durabilité 50+ ans sous verre</div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-blue-400 font-bold text-sm flex items-center gap-1.5">
                    <Truck className="w-4 h-4" />
                    Livraison Lomé
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Express 24h & Standard 72h</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <a
                  href="#simulateur"
                  className="bg-white text-black hover:bg-zinc-200 font-extrabold px-8 py-4 rounded-xl shadow-xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3 text-base group"
                >
                  <Sliders className="w-5 h-5 text-amber-600 transition-transform group-hover:rotate-45" />
                  <span>Configurer mes tirages & tarifs</span>
                </a>

                <button
                  onClick={() => handleOpenOrder(FORMATS[1])}
                  className="px-6 py-4 rounded-xl border border-white/20 hover:border-white/50 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:bg-white/5"
                >
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span>Obtenir l'App Mobile PICON</span>
                </button>
              </div>

              {/* Mobile Local Payments Badge */}
              <div className="flex items-center gap-3 text-xs text-zinc-400 pt-2">
                <span>Réglez facilement par :</span>
                <span className="font-semibold text-zinc-200 bg-white/10 px-2 py-0.5 rounded">Mixx by Yas (TMoney)</span>
                <span className="font-semibold text-zinc-200 bg-white/10 px-2 py-0.5 rounded">Moov Money (Flooz)</span>
                <span className="font-semibold text-zinc-200 bg-white/10 px-2 py-0.5 rounded">Cartes</span>
              </div>
            </div>

            {/* Right Hero Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-zinc-900">
                <img
                  src="/manus-storage/hero_prints_lome_1c4fc9d2.png"
                  alt="Couple togolais souriant tenant des tirages photo physiques à Lomé"
                  className="w-full h-[480px] sm:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Interactive Badge at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#141519]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Tirages 10x15 & 20x30 cm</div>
                      <div className="text-[11px] text-zinc-400">Papier Lustre Satiné • Étalonnage Labo</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-zinc-400 block">Dès</span>
                    <span className="text-base font-extrabold text-amber-400 font-mono">300 F</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FORMATS BAR (Direct anchor) */}
      <section id="formats" className="py-16 bg-[#0c0d0f] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Large choix de dimensions
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Nos formats phares en un coup d'œil
              </h3>
            </div>
            <a
              href="#tarifs"
              className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1 group"
            >
              <span>Voir la grille tarifaire complète</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              onClick={() => handleOpenOrder(FORMATS[1])}
              className="p-5 bg-[#141519] border border-white/10 rounded-2xl hover:border-amber-400/50 transition-all cursor-pointer group"
            >
              <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full inline-block mb-3">
                Le plus commandé
              </span>
              <h4 className="text-xl font-extrabold font-mono text-white group-hover:text-amber-300 transition-colors">
                10 x 15 cm
              </h4>
              <p className="text-xs text-zinc-400 mt-1 mb-4">
                Le grand classique de vos albums de famille et souvenirs de voyage.
              </p>
              <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                <span className="text-xs text-zinc-500">Prix unitaire</span>
                <span className="text-base font-extrabold text-amber-400 font-mono">300 FCFA</span>
              </div>
            </div>

            <div
              onClick={() => handleOpenOrder(FORMATS[3], "lustre", true)}
              className="p-5 bg-[#141519] border border-white/10 rounded-2xl hover:border-amber-400/50 transition-all cursor-pointer group"
            >
              <span className="text-[10px] font-mono uppercase text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full inline-block mb-3">
                Format Demi-Page
              </span>
              <h4 className="text-xl font-extrabold font-mono text-white group-hover:text-blue-300 transition-colors">
                15 x 21 cm
              </h4>
              <p className="text-xs text-zinc-400 mt-1 mb-4">
                Taille idéale pour être posée sous cadre sur une commode ou un bureau.
              </p>
              <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                <span className="text-xs text-zinc-500">Tirage / Cadre</span>
                <span className="text-base font-extrabold text-amber-400 font-mono">500 / 2 000 F</span>
              </div>
            </div>

            <div
              onClick={() => handleOpenOrder(FORMATS[5], "lustre", true)}
              className="p-5 bg-[#141519] border border-white/10 rounded-2xl hover:border-amber-400/50 transition-all cursor-pointer group"
            >
              <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full inline-block mb-3">
                A4 Galerie Murale
              </span>
              <h4 className="text-xl font-extrabold font-mono text-white group-hover:text-amber-300 transition-colors">
                20 x 30 cm
              </h4>
              <p className="text-xs text-zinc-400 mt-1 mb-4">
                L'équilibre parfait pour composer une galerie d'art dans votre salon.
              </p>
              <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                <span className="text-xs text-zinc-500">Tirage / Cadre</span>
                <span className="text-base font-extrabold text-amber-400 font-mono">1 000 / 3 000 F</span>
              </div>
            </div>

            <div
              onClick={() => handleOpenOrder(FORMATS[8], "fineart", true)}
              className="p-5 bg-[#141519] border border-white/10 rounded-2xl hover:border-amber-400/50 transition-all cursor-pointer group"
            >
              <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full inline-block mb-3">
                A3+ Exposition
              </span>
              <h4 className="text-xl font-extrabold font-mono text-white group-hover:text-emerald-300 transition-colors">
                30 x 45 cm
              </h4>
              <p className="text-xs text-zinc-400 mt-1 mb-4">
                Grand format prestigieux avec cadre bois massif et passe-partout.
              </p>
              <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                <span className="text-xs text-zinc-500">Tirage / Cadre</span>
                <span className="text-base font-extrabold text-amber-400 font-mono">1 200 / 12 500 F</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FORMAT SIMULATOR */}
      <FormatSimulator
        onSelectAndOrder={(format, finish, withFrame, quantity) =>
          handleOpenOrder(format, finish, withFrame, quantity)
        }
      />

      {/* LAB EXCELLENCE & CRAFTSMANSHIP */}
      <LabPillars />

      {/* 3-STEP MOBILE PROCESS */}
      <ProcessSteps onOpenOrder={() => handleOpenOrder(FORMATS[1])} />

      {/* HOME GALLERY INSPIRATION */}
      <LivingRoomShowcase onOpenOrder={() => handleOpenOrder(FORMATS[5], "lustre", true)} />

      {/* PRICING & PAYMENT OPTIONS */}
      <PriceTable onOpenOrder={() => handleOpenOrder(FORMATS[1])} />

      {/* FAQ & CONTACT */}
      <FaqAndContact />

      {/* FOOTER */}
      <Footer />

      {/* ORDER / APP DOWNLOAD MODAL */}
      <OrderModal
        open={orderModalOpen}
        onOpenChange={setOrderModalOpen}
        selectedFormat={selectedFormat}
        finish={selectedFinish}
        withFrame={selectedWithFrame}
        quantity={selectedQuantity}
      />
    </div>
  );
}
