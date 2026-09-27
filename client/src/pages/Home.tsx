import { Navbar } from "@/components/Navbar";
import { AppFeatures } from "@/components/AppFeatures";
import { LabPillars } from "@/components/LabPillars";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LivingRoomShowcase } from "@/components/LivingRoomShowcase";
import { FaqAndContact } from "@/components/FaqAndContact";
import { Footer } from "@/components/Footer";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { PricingSection } from "@/components/PricingSection";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ArrowDown, CheckCircle2, Images, ShieldCheck, Smartphone, Truck, Play } from "lucide-react";

export default function Home() {
  const jumpToApp = () => {
    const target = document.getElementById("app-features");
    if (!target) return;
    const top = window.scrollY + target.getBoundingClientRect().top - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#090a0c] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      <AmbientBackground />
      <Navbar onOpenApp={jumpToApp} />

      <main className="relative z-10">
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-blue-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-xs font-semibold text-zinc-200 tracking-wide uppercase">PICON • L'application officielle</span>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.08]">
                  Vos souvenirs commencent <span className="text-amber-400">ici.</span>
                </h1>
                <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
                  PICON, votre laboratoire digital au Togo, s'invite dans votre poche. Sélectionnez vos photos, découvrez les formats disponibles et préparez vos tirages depuis l'application officielle.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl"><div className="text-amber-400 font-bold text-sm flex items-center gap-1.5"><Smartphone className="w-4 h-4" />Application officielle</div><div className="text-[11px] text-zinc-400 mt-0.5">Disponible sur Google Play</div></div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl"><div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" />Simple & sécurisé</div><div className="text-[11px] text-zinc-400 mt-0.5">Un parcours pensé pour mobile</div></div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl col-span-2 sm:col-span-1"><div className="text-blue-400 font-bold text-sm flex items-center gap-1.5"><Truck className="w-4 h-4" />Pensé pour le Togo</div><div className="text-[11px] text-zinc-400 mt-0.5">De Lomé à votre domicile</div></div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  <PlayStoreButton label="Télécharger l'application PICON" size="lg" />
                  <a href="#app-features" className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/50 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:bg-white/5"><Images className="w-4 h-4 text-amber-400" />Découvrir l'expérience</a>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-400 pt-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Retrouvez les formats, options et promotions directement dans l'app.</span></div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#141519] min-h-[480px] sm:min-h-[560px]">
                  <img src="/manus-storage/mobile_app_delivery_unboxing_0c0ea839.png" alt="Aperçu de l'expérience PICON sur smartphone" className="absolute inset-0 w-full h-full object-cover opacity-55" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                  <div className="relative z-10 min-h-[480px] sm:min-h-[560px] flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl"><Play className="w-8 h-8 text-white fill-white ml-1" /></div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-3">Démonstration de l'application</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white max-w-sm leading-tight">Découvrez PICON en quelques secondes.</h2>
                    <p className="text-sm text-zinc-300 max-w-sm mt-4 leading-relaxed">La vidéo de démonstration sera ajoutée ici pour montrer le parcours de sélection, de prévisualisation et de livraison.</p>
                    <div className="mt-7 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[11px] text-zinc-300">Vidéo démonstrative à venir</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AppFeatures />
        <PricingSection />
        <div id="why-picon"><LabPillars /></div>
        <ProcessSteps />
        <LivingRoomShowcase />
        <FaqAndContact />
      </main>

      <div className="relative z-10"><Footer /></div>
      <button onClick={jumpToApp} aria-label="Retour à l'application" className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 rounded-full bg-white text-black px-4 py-3 text-xs font-bold shadow-2xl hover:bg-zinc-200 transition-all active:scale-95"><Smartphone className="w-4 h-4 text-amber-600" />Voir l'app <ArrowDown className="w-3.5 h-3.5" /></button>
    </div>
  );
}
