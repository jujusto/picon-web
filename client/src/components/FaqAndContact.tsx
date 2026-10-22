import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { PlayStoreButton } from "./PlayStoreButton";
import { fetchPiconFaqs, type PiconFaq } from "@/lib/cms";

const fallbackFaqs: PiconFaq[] = [
  { id: 1, question: "Où télécharger l'application PICON ?", answer: "L'application officielle PICON est disponible sur Google Play. Utilisez les boutons de téléchargement présents sur cette page pour ouvrir directement sa fiche officielle.", order: 1 },
  { id: 2, question: "Que peut-on faire dans l'application ?", answer: "Vous pouvez sélectionner vos photos depuis votre galerie, découvrir les formats et options disponibles, indiquer les quantités, prévisualiser et recadrer vos images avant de confirmer.", order: 2 },
  { id: 3, question: "L'application est-elle destinée uniquement aux habitants de Lomé ?", answer: "PICON est le laboratoire digital au Togo. L'application est pensée pour les utilisateurs partout au Togo ; les modalités de réception dépendent des options proposées au moment de votre parcours.", order: 3 },
  { id: 4, question: "Puis-je voir les promotions et les options disponibles ?", answer: "Oui. La fiche Google Play et l'application regroupent les formats, les options et les promotions proposées par PICON, afin que vous puissiez faire vos choix depuis votre téléphone.", order: 4 },
  { id: 5, question: "Comment contacter l'équipe PICON ?", answer: "Vous pouvez nous écrire via le formulaire ci-contre ou utiliser les coordonnées de l'atelier indiquées sur cette page. Nous vous répondrons au sujet de l'application, du laboratoire ou de votre projet photo.", order: 5 },
];

export function FaqAndContact() {
  const [faqs, setFaqs] = useState<PiconFaq[]>(fallbackFaqs);
  const [activeFaq, setActiveFaq] = useState<number | null>(fallbackFaqs[0].id);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    let active = true;
    fetchPiconFaqs()
      .then((items) => {
        if (!active || !items.length) return;
        setFaqs(items);
        setActiveFaq(items[0].id);
      })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (!name || !contact) { toast.error("Veuillez renseigner votre nom et vos coordonnées."); return; } setSent(true); toast.success("Votre message a été envoyé à l'équipe PICON !"); };

  return (
    <section id="contact" className="py-24 bg-[#0a0b0d] text-white border-t border-white/10 relative"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7 space-y-6"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wide uppercase"><HelpCircle className="w-3.5 h-3.5" />Questions sur l'application</div><h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">Tout savoir avant de télécharger PICON.</h2><p className="text-sm sm:text-base text-zinc-400">L'essentiel sur l'application officielle, le laboratoire et l'expérience PICON au Togo.</p><div className="space-y-3 pt-4">{faqs.map((faq) => <div key={faq.id} className="bg-[#141519] border border-white/10 rounded-xl overflow-hidden transition-all"><button aria-expanded={activeFaq === faq.id} onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)} className="w-full p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-white flex items-center justify-between gap-4"><span>{faq.question}</span><span className="text-amber-400 font-mono text-lg shrink-0">{activeFaq === faq.id ? "−" : "+"}</span></button>{activeFaq === faq.id && <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">{faq.answer}</div>}</div>)}</div></div>
      <div className="lg:col-span-5 bg-[#141519] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6"><div><span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">PICON au Togo</span><h3 className="text-2xl font-bold font-display text-white mb-2">Une question avant de rejoindre l'app ?</h3><p className="text-xs text-zinc-400 leading-relaxed">Laissez vos coordonnées : l'équipe PICON vous répondra au sujet de l'application, de la disponibilité ou de votre projet photo.</p></div><PlayStoreButton label="Ouvrir la fiche Google Play" className="w-full" /><div className="space-y-3 pt-2 text-xs sm:text-sm"><div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5"><MapPin className="w-5 h-5 text-amber-400 shrink-0" /><div><div className="font-bold text-white">Atelier PICON</div><div className="text-zinc-400 text-xs">Lomé, Togo — Quartier Kodjoviopé</div></div></div><div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5"><Phone className="w-5 h-5 text-emerald-400 shrink-0" /><div><div className="font-bold text-white">Téléphone & WhatsApp</div><div className="text-zinc-400 text-xs font-mono">+228 72 68 30 32 / 98 52 62 26</div></div></div><div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5"><Mail className="w-5 h-5 text-blue-400 shrink-0" /><div><div className="font-bold text-white">Courrier électronique</div><div className="text-zinc-400 text-xs font-mono">infos@photopicon.com</div></div></div></div>{sent ? <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center space-y-2"><ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" /><h4 className="text-sm font-bold text-white">Message transmis avec succès</h4><p className="text-xs text-zinc-300">Un membre de l'équipe PICON vous recontactera.</p></div> : <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-white/10"><div className="text-xs font-semibold text-zinc-300">Parler à l'équipe :</div><Input required placeholder="Votre nom complet" value={name} onChange={(e) => setName(e.target.value)} className="bg-black/50 border-white/15 text-white text-xs h-10" /><Input required placeholder="Numéro WhatsApp ou Email" value={contact} onChange={(e) => setContact(e.target.value)} className="bg-black/50 border-white/15 text-white text-xs h-10 font-mono" /><Textarea placeholder="Votre question ou projet photo" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-black/50 border-white/15 text-white text-xs min-h-[80px]" /><Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2"><Send className="w-3.5 h-3.5" />Envoyer ma question</Button></form>}</div>
    </div></div></section>
  );
}
