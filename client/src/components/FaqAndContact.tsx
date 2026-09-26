import { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function FaqAndContact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const faqs = [
    {
      q: "Mes photos prises avec un smartphone sont-elles assez nettes pour de grands formats ?",
      a: "Absolument. La plupart des smartphones récents (iPhone, Samsung, Xiaomi, etc.) capturent des images entre 12 et 48 mégapixels. Lors de votre commande, le système PICON analyse la résolution exacte de votre image et vous indique si le fichier permet une netteté optimale à 300 DPI sans pixellisation.",
    },
    {
      q: "Comment fonctionne la livraison à domicile à Lomé et dans les autres villes du Togo ?",
      a: "Une fois vos tirages préparés et séchés dans notre atelier de Kodjoviopé, notre coursier dédié vous contacte par téléphone ou WhatsApp pour convenir de l'horaire précis de passage à votre domicile ou bureau. Nous livrons dans tous les quartiers de Lomé (Kodjoviopé, Tokoin, Agoè, Baguida, Bè, Hedzranawoé, etc.) et expédions dans les villes de l'intérieur.",
    },
    {
      q: "Comment se déroule le paiement ?",
      a: "Vous pouvez régler directement via les moyens de paiement mobiles togolais : Mixx by Yas (TMoney) et Moov Money (Flooz), par carte bancaire sécurisée, ou choisir le règlement en espèces au moment de la remise en main propre de votre colis scellé.",
    },
    {
      q: "Quelle est la différence entre la finition Lustre et la finition Brillante ?",
      a: "Le papier Lustre Satiné offre un grain perlé très élégant, sans reflets gênants sous la lumière directe et insensible aux traces de doigts : c'est le choix privilégié pour les portraits de famille. Le papier Brillant Miroir procure une saturation maximale des couleurs vives et des contrastes intenses, parfait pour les paysages et les fêtes.",
    },
    {
      q: "Mes photos personnelles restent-elles confidentielles ?",
      a: "La confidentialité est une règle d'or chez PICON. Vos photos sont transférées sur nos serveurs de manière chiffrée, utilisées exclusivement pour l'impression de votre commande, puis purgées selon notre protocole strict de respect de la vie privée.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) {
      toast.error("Veuillez renseigner votre nom et vos coordonnées.");
      return;
    }
    setSent(true);
    toast.success("Votre message a été envoyé à l'équipe PICON !");
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0b0d] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: FAQ on left, Contact on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              Foire Aux Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Questions fréquentes sur vos tirages.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Tout ce que vous devez savoir sur la préparation des fichiers, les papiers et la livraison au Togo.
            </p>

            <div className="space-y-3 pt-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#141519] border border-white/10 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className="text-amber-400 font-mono text-lg shrink-0">
                      {activeFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Studio Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#141519] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Laboratoire & Atelier
              </span>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Parlons de vos projets photographiques.
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Une demande particulière ? Une exposition d'art, un mariage ou un tirage grand format personnalisé ? Notre équipe togolais est à votre écoute.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Atelier PICON</div>
                  <div className="text-zinc-400 text-xs">Lomé, Togo — Quartier Kodjoviopé</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Téléphone & WhatsApp</div>
                  <div className="text-zinc-400 text-xs font-mono">+228 90 00 00 00</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Courrier électronique</div>
                  <div className="text-zinc-400 text-xs font-mono">infos@photopicon.com</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            {sent ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Message transmis avec succès</h4>
                <p className="text-xs text-zinc-300">
                  Un membre de l'équipe PICON vous recontactera sous quelques heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-white/10">
                <div className="text-xs font-semibold text-zinc-300">Envoyer un message direct :</div>
                <Input
                  required
                  placeholder="Votre nom complet"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/50 border-white/15 text-white text-xs h-10"
                />
                <Input
                  required
                  placeholder="Numéro WhatsApp ou Email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="bg-black/50 border-white/15 text-white text-xs h-10 font-mono"
                />
                <Textarea
                  placeholder="Votre projet (ex: 20 photos de mariage en 20x30 avec cadres...)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-black/50 border-white/15 text-white text-xs min-h-[80px]"
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-zinc-200 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer ma demande à l'Atelier</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
