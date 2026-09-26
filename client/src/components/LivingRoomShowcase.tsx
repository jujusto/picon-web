import { Frame, Sparkles, Check, Heart, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LivingRoomShowcaseProps {
  onOpenOrder: () => void;
}

export function LivingRoomShowcase({ onOpenOrder }: LivingRoomShowcaseProps) {
  return (
    <section className="py-24 bg-[#0a0b0d] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual on the Left (7 cols) */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/manus-storage/living_room_gallery_wall_919d5ee1.png"
              alt="Mur de cadres photo dans un salon moderne et chaleureux à Lomé"
              className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                Inspiration Décoration & Mémoire
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                Faites entrer la chaleur de vos souvenirs dans votre intérieur
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-lg">
                Des rires d'enfants aux couchers de soleil sur la plage de Lomé, chaque cadre apporte une âme vivante et unique à vos pièces de vie.
              </p>
            </div>
          </div>

          {/* Text and Value Prop on the Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <Frame className="w-3.5 h-3.5" />
              L'Art de l'Encadrement
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Sublimez vos murs avec des cadres d'ébénisterie sur mesure.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Un tirage sans cadre s'oublie dans un tiroir. Un tirage encadré devient un héritage familial que l'on contemple chaque jour. Nos cadres sont façonnés pour protéger vos photographies et s'harmoniser avec vos espaces.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Baguette en bois massif et verre minéral anti-reflet</h4>
                  <p className="text-xs text-zinc-400">Finitions noir mat contemporain ou bois naturel chaleureux.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Passe-partout biseauté de conservation</h4>
                  <p className="text-xs text-zinc-400">Carton sans acide pH neutre pour isoler la photo du verre et donner de la profondeur.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Prêt à accrocher dès réception</h4>
                  <p className="text-xs text-zinc-400">Fixations murales renforcées déjà installées au dos du cadre.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                onClick={onOpenOrder}
                className="bg-white text-black hover:bg-zinc-200 font-bold px-6 py-3 rounded-xl shadow-lg"
              >
                Composer mon mur de cadres
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
