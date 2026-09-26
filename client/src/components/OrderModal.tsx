import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Smartphone, Send, Sparkles, MapPin, Phone, CreditCard, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { FormatItem } from "./FormatSimulator";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedFormat?: FormatItem;
  finish?: string;
  withFrame?: boolean;
  quantity?: number;
}

export function OrderModal({
  open,
  onOpenChange,
  selectedFormat,
  finish = "lustre",
  withFrame = false,
  quantity = 1,
}: OrderModalProps) {
  const [tab, setTab] = useState<"app" | "express">("app");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCity, setClientCity] = useState("Lomé - Quartier Kodjoviopé");
  const [submitted, setSubmitted] = useState(false);

  const priceUnit =
    (selectedFormat?.pricePrint || 300) +
    (withFrame && selectedFormat?.priceFrame ? selectedFormat.priceFrame : 0);
  const totalPrice = priceUnit * quantity;

  const handleExpressOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      toast.error("Veuillez renseigner votre nom et votre numéro de téléphone.");
      return;
    }
    setSubmitted(true);
    toast.success("Votre demande a bien été transmise à l'atelier PICON !");
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Bonjour l'équipe PICON, je souhaite commander des tirages photos :\n` +
      `- Format : ${selectedFormat?.dimensions || "10x15 cm"}\n` +
      `- Finition : ${finish}\n` +
      `- Avec cadre : ${withFrame ? "Oui" : "Non"}\n` +
      `- Quantité : ${quantity}\n` +
      `- Total estimé : ${totalPrice.toLocaleString()} FCFA\n` +
      `- Ville : ${clientCity || "Lomé"}`
    );
    window.open(`https://wa.me/22890000000?text=${text}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-[#111215] text-white border-white/15 p-6 sm:p-8 rounded-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-400/20 text-amber-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Laboratoire PICON Togo
            </span>
          </div>
          <DialogTitle className="text-2xl font-bold font-display text-white">
            Passez commande de vos tirages
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm">
            Vos photos sont traitées avec soin dans notre laboratoire à Lomé et livrées à votre porte.
          </DialogDescription>
        </DialogHeader>

        {/* Selected Config Recap Card */}
        {selectedFormat && (
          <div className="bg-[#181a1f] border border-white/10 rounded-xl p-4 my-2 text-xs flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-bold text-white text-sm">
                {selectedFormat.dimensions} • {selectedFormat.name}
              </div>
              <div className="text-zinc-400">
                Finition {finish.toUpperCase()} • {withFrame ? "Avec Cadre Bois Massif" : "Tirage nu"} • Qté : {quantity}
              </div>
            </div>
            <div className="text-right">
              <div className="text-amber-400 font-bold text-base font-mono">
                {totalPrice.toLocaleString()} FCFA
              </div>
              <div className="text-[10px] text-zinc-500">Paiement à la livraison ou TMoney/Flooz</div>
            </div>
          </div>
        )}

        {/* Tab Selection */}
        <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 rounded-xl border border-white/10 my-3 text-xs font-semibold">
          <button
            onClick={() => setTab("app")}
            className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
              tab === "app" ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Via l'App Mobile PICON (Recommandé)
          </button>
          <button
            onClick={() => setTab("express")}
            className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
              tab === "express" ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Send className="w-4 h-4" />
            Commande Directe / WhatsApp
          </button>
        </div>

        {tab === "app" ? (
          /* Option 1: Mobile App Download & Benefits */
          <div className="space-y-5 pt-2">
            <div className="bg-gradient-to-br from-amber-500/10 via-black to-blue-500/10 border border-amber-500/20 rounded-xl p-4 text-xs space-y-2">
              <div className="font-bold text-amber-300 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Offre de bienvenue : 5 tirages offerts !
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Téléchargez l'application mobile PICON sur votre smartphone pour sélectionner directement vos photos depuis votre galerie, prévisualiser le recadrage 300 DPI en temps réel et régler en un clic via <strong>TMoney</strong> ou <strong>Moov Money</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => toast.info("Lien Android APK disponible au lancement public ou sur invitation testeur.")}
                className="p-3.5 bg-zinc-900 border border-white/15 hover:border-white/40 rounded-xl flex items-center gap-3 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Disponible pour</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300">Android (.APK)</div>
                </div>
              </button>

              <button
                onClick={() => toast.info("Version iOS disponible via TestFlight pour les clients au Togo.")}
                className="p-3.5 bg-zinc-900 border border-white/15 hover:border-white/40 rounded-xl flex items-center gap-3 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Disponible pour</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300">Apple iOS (TestFlight)</div>
                </div>
              </button>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Photos compressées sans perte et chiffrées
              </span>
              <span>Lomé & Tout le Togo</span>
            </div>
          </div>
        ) : (
          /* Option 2: Express Web/WhatsApp Form */
          <div className="space-y-4 pt-1">
            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Demande enregistrée !</h4>
                <p className="text-xs text-zinc-300">
                  Notre tireur de l'agence de Kodjoviopé va vous contacter au <strong>{clientPhone}</strong> pour réceptionner vos photos haute résolution et planifier votre livraison.
                </p>
                <Button
                  onClick={() => onOpenChange(false)}
                  className="bg-white text-black hover:bg-zinc-200 mt-2 text-xs font-bold"
                >
                  Fermer
                </Button>
              </div>
            ) : (
              <form onSubmit={handleExpressOrder} className="space-y-3">
                <div>
                  <Label className="text-xs text-zinc-300">Votre Nom Complet</Label>
                  <Input
                    required
                    placeholder="Ex: Justin-marie Mensah"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="bg-black/50 border-white/20 text-white mt-1 text-sm"
                  />
                </div>

                <div>
                  <Label className="text-xs text-zinc-300">Numéro WhatsApp ou Téléphone (Togo)</Label>
                  <Input
                    required
                    placeholder="Ex: +228 90 00 00 00"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="bg-black/50 border-white/20 text-white mt-1 text-sm font-mono"
                  />
                </div>

                <div>
                  <Label className="text-xs text-zinc-300">Adresse ou Quartier de livraison (Lomé)</Label>
                  <Input
                    placeholder="Ex: Quartier Kodjoviopé, face pharmacie"
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="bg-black/50 border-white/20 text-white mt-1 text-sm"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-white text-black hover:bg-zinc-200 font-bold py-2.5 text-xs rounded-xl"
                  >
                    Envoyer ma demande à l'Atelier
                  </Button>
                  <Button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 text-xs rounded-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Envoyer par WhatsApp
                  </Button>
                </div>

                <div className="text-[11px] text-zinc-500 flex items-center justify-center gap-2 pt-2">
                  <CreditCard className="w-3.5 h-3.5" />
                  Paiements acceptés : Mixx by Yas, Moov Money, Carte, Espèces à la livraison
                </div>
              </form>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
