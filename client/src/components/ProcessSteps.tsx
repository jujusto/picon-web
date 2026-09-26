import { Smartphone, Sliders, Truck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessStepsProps {
  onOpenOrder: () => void;
}

export function ProcessSteps({ onOpenOrder }: ProcessStepsProps) {
  const steps = [
    {
      num: "01",
      title: "Chargez depuis votre mobile",
      subtitle: "Accès direct à votre galerie",
      description:
        "Ouvrez l'application PICON ou notre portail web. Sélectionnez en quelques secondes vos plus beaux clichés directement depuis votre smartphone, sans câble ni transfert complexe.",
      badge: "Vérification 300 DPI automatique",
      icon: Smartphone,
    },
    {
      num: "02",
      title: "Choisissez formats & finitions",
      subtitle: "Aperçu de cadrage fidèle",
      description:
        "Sélectionnez le format idéal (9x13, 10x15, A4 20x30, Grand format 50x60). Ajustez le cadrage, choisissez le papier mat ou brillant, et ajoutez un cadre en bois noble si désiré.",
      badge: "Calcul instantané du tarif en FCFA",
      icon: Sliders,
    },
    {
      num: "03",
      title: "Livraison à votre porte",
      subtitle: "À Lomé et partout au Togo",
      description:
        "Nos tireurs préparent votre commande sous emballage scellé ultra-protecteur. Notre livreur vous remet vos tirages en mains propres chez vous ou à votre bureau.",
      badge: "Livraison express 24h disponible",
      icon: Truck,
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0d0e11] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simplicité & Fluidité
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            Trois étapes vers l'immortalité de vos souvenirs.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Ne perdez plus des heures dans les embouteillages de Lomé pour vous rendre en agence. Le laboratoire PICON vient à vous.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#141519] border border-white/10 rounded-2xl p-7 relative flex flex-col justify-between hover:border-amber-400/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl sm:text-4xl text-amber-400/30 group-hover:text-amber-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{step.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Visual Process Spotlight */}
        <div className="bg-[#121418] border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              L'expérience de déballage PICON
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-display text-white leading-tight">
              L'émotion intacte à l'ouverture de votre colis.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Recevoir ses tirages dans une enveloppe cartonnée scellée, sentir l'odeur caractéristique de l'encre fine, redécouvrir les sourires de ses proches avec des couleurs éclatantes : c'est toute la promesse de PICON.
            </p>
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Emballage rigide éco-responsable anti-choc et anti-humidité</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Pochette cristal sans acide pour conserver vos tirages intacts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Certificat de vérification et d'authenticité labo inclus</span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={onOpenOrder}
                className="bg-white text-black hover:bg-zinc-200 font-bold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span>Faire imprimer mes photos maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 h-full min-h-[380px] relative">
            <img
              src="/manus-storage/mobile_app_delivery_unboxing_0c0ea839.png"
              alt="Une cliente à Lomé ouvrant sa boîte de tirages PICON avec joie"
              className="w-full h-full object-cover min-h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
