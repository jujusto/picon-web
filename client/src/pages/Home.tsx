import { Navbar } from "@/components/Navbar";
import { AppFeatures } from "@/components/AppFeatures";
import { LabPillars } from "@/components/LabPillars";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LivingRoomShowcase } from "@/components/LivingRoomShowcase";
import { FaqAndContact } from "@/components/FaqAndContact";
import { Footer } from "@/components/Footer";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { PricingSection } from "@/components/PricingSection";
import { SideGalleries } from "@/components/SideGalleries";
import { SectionDivider } from "@/components/SectionDivider";
import { AmbientBackground } from "@/components/AmbientBackground";
import {
  ArrowDown,
  CheckCircle2,
  Images,
  ShieldCheck,
  Smartphone,
  Truck,
} from "lucide-react";

export default function Home() {
  const jumpToApp = () => {
    const target = document.getElementById("app-features");
    if (!target) return;
    const top = window.scrollY + target.getBoundingClientRect().top - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF7] text-[#1A1A1A] flex flex-col overflow-x-clip">
      <Navbar onOpenApp={jumpToApp} />

      <SideGalleries />

      <main className="relative z-10">
        {/* ============ HERO ============ */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden bg-[#FAFAF7]">
          <AmbientBackground />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1AB5A3]/10 border border-[#1AB5A3]/25">
                  <span className="w-2 h-2 rounded-full bg-[#F5D33E] animate-pulse" />
                  <span className="text-xs font-semibold text-[#0E8C7D] tracking-wide uppercase">
                    PICON • L'application officielle
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05] font-display text-[#1A1A1A]">
                  Vos souvenirs commencent{" "}
                  <span className="font-display-italic bg-gradient-to-r from-[#1AB5A3] via-[#F5D33E] to-[#7C4DBC] bg-clip-text text-transparent">
                    ici.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#666666] font-normal leading-relaxed max-w-2xl">
                  PICON, votre laboratoire digital au Togo, s'invite dans votre
                  poche. Sélectionnez vos photos, découvrez les formats
                  disponibles et préparez vos tirages depuis l'application
                  officielle.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 bg-white border border-[#1AB5A3]/25 rounded-xl shadow-sm">
                    <div className="text-[#0E8C7D] font-bold text-sm flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4" />
                      Application officielle
                    </div>
                    <div className="text-[11px] text-[#666666] mt-0.5">
                      Disponible sur Google Play
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-[#F5D33E]/50 rounded-xl shadow-sm">
                    <div className="text-[#8A6D00] font-bold text-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#F5D33E]" />
                      Simple & sécurisé
                    </div>
                    <div className="text-[11px] text-[#666666] mt-0.5">
                      Un parcours pensé pour mobile
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-[#7C4DBC]/25 rounded-xl shadow-sm col-span-2 sm:col-span-1">
                    <div className="text-[#5E3496] font-bold text-sm flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#7C4DBC]" />
                      Pensé pour le Togo
                    </div>
                    <div className="text-[11px] text-[#666666] mt-0.5">
                      Livraison express
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  <PlayStoreButton
                    label="Télécharger l'application PICON"
                    size="lg"
                  />
                  <a
                    href="#app-features"
                    className="px-6 py-3.5 rounded-xl border border-[#1A1A1A]/20 hover:border-[#1AB5A3] text-[#1A1A1A] font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:bg-[#1AB5A3]/5"
                  >
                    <Images className="w-4 h-4 text-[#1AB5A3]" />
                    Découvrir l'expérience
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#666666] pt-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1AB5A3]" />
                  <span>
                    Retrouvez les formats, options et promotions directement dans
                    l'app.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4">
                <span className="rounded-full border border-[#1AB5A3]/25 bg-white/80 px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] text-[#0A3D91] shadow-sm">
                  Démonstration de l'application · 26 s
                </span>
                <figure className="w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/60 bg-[#0A1F44] p-2 shadow-2xl">
                  <video
                    aria-label="Démonstration vidéo de l’application PICON"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/manus-storage/picon-app-demo-poster_db3abc42.jpg"
                    className="aspect-[9/16] w-full rounded-2xl bg-[#0A1F44] object-contain"
                  >
                    <source
                      src="/manus-storage/picon-app-demo_7ff673fa.mp4"
                      type="video/mp4"
                    />
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                  </video>
                  <figcaption className="sr-only">
                    Découvrez le parcours de sélection, de prévisualisation et
                    de livraison dans l'application PICON.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRANSITIONS EN DOUBLE VAGUE ============ */}
        <SectionDivider from="#FAFAF7" to="#16171C" height={160} />
        <AppFeatures />

        <SectionDivider from="#16171C" to="#EEF2F9" height={160} />
        <PricingSection />

        <SectionDivider from="#EEF2F9" to="#16171C" height={160} />
        <div id="why-picon">
          <LabPillars />
        </div>

        <SectionDivider from="#16171C" to="#FFFFFF" height={160} />
        <ProcessSteps />

        <SectionDivider from="#FFFFFF" to="#16171C" height={160} />
        <LivingRoomShowcase />

        <SectionDivider from="#16171C" to="#EEF2F9" height={160} />
        <FaqAndContact />

        <SectionDivider from="#EEF2F9" to="#0A1F44" height={160} />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <button
        onClick={jumpToApp}
        aria-label="Retour à l'application"
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 rounded-full bg-[#1AB5A3] text-white px-4 py-3 text-xs font-bold shadow-2xl hover:bg-[#17A090] transition-all active:scale-95"
      >
        <Smartphone className="w-4 h-4" />
        Voir l'app <ArrowDown className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
