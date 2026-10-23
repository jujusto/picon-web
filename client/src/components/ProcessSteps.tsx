import {
  Smartphone,
  Crop,
  PackageCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Téléchargez PICON",
      subtitle: "L'application officielle",
      description:
        "Installez l'application depuis Google Play et retrouvez l'expérience du laboratoire photo PICON directement sur votre smartphone.",
      badge: "Android • Google Play",
      icon: Smartphone,
    },
    {
      num: "02",
      title: "Choisissez vos souvenirs",
      subtitle: "Galerie, format, cadrage",
      description:
        "Sélectionnez vos photos, découvrez les formats et options disponibles, ajustez le cadrage puis consultez le récapitulatif avant de confirmer.",
      badge: "Aperçu avant validation",
      icon: Crop,
    },
    {
      num: "03",
      title: "PICON s'occupe du reste",
      subtitle: "Impression & livraison",
      description:
        "Votre laboratoire prépare les tirages selon les options proposées dans l'application et vous accompagne pour la réception au Togo.",
      badge: "Depuis Lomé, pour le Togo",
      icon: PackageCheck,
    },
  ];

  return (
    <section
      id="process"
      className="section-white py-24 text-[#1A1A1A] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A3D91]/8 text-[#0A3D91] text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple, du mobile à la maison
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4 text-[#1A1A1A]">
            Vos souvenirs prennent vie en trois gestes.
          </h2>
          <p className="text-[#666666] text-base sm:text-lg">
            PICON réduit la distance entre votre galerie photo et les tirages
            que vous aurez envie de garder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#F8FAFC] border border-[#E5E5E5] rounded-2xl p-7 relative flex flex-col justify-between hover:border-[#0A3D91]/40 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-4xl text-[#F4B942]/50 group-hover:text-[#F4B942] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5E5] text-[#0A3D91] flex items-center justify-center group-hover:bg-[#0A3D91] group-hover:text-white group-hover:border-[#0A3D91] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#666666] uppercase tracking-widest block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs font-medium text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{step.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloc livraison — fond bleu profond (pause visuelle dans la section blanche) */}
        <div
          id="delivery"
          className="bg-[#0A3D91] rounded-3xl overflow-hidden grid grid-cols-1 shadow-2xl"
        >
          <div className="h-full min-h-[280px] sm:min-h-[380px] relative bg-[#062B66]">
            <img
              src="/manus-storage/livraison-colis_24050a80.webp"
              alt="Livraison des tirages PICON au Togo"
              className="w-full h-full object-cover min-h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
