import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";
import { useState } from "react";
import { PiconLogo } from "./PiconLogo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="footer-theme pt-16 pb-8 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#F4B942]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Colonne 1 — Brand */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex flex-col items-start gap-3">
              <PiconLogo size="lg" withTagline={false} />
              <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#F4B942]">
                Laboratoire digital
              </div>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-xs">
              Votre laboratoire photo mobile pour transformer vos souvenirs en
              tirages d'exception.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/photo.picon?exln=aWR2MXE5ZXI0eGNl"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1EyFKXP6T8/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 — Le laboratoire */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4B942] font-bold">
              Le laboratoire
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Laboratoire Digital
                </a>
              </li>
              <li>
                <a href="#why-picon" className="hover:text-white transition-colors">
                  Pourquoi PICON
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Impressions à l'atelier
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  À propos de PICON
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nos garanties de qualité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 — L'application */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4B942] font-bold">
              L'application
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#app-features" className="hover:text-white transition-colors">
                  Découvrir PICON
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  FAQ & Contact
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="/cgu-cgv" className="hover:text-white transition-colors">
                  CGU & CGV
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 — Newsletter + Contact */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4B942] font-bold mb-3">
                Restez connecté(e)
              </h4>
              <p className="text-xs text-white/75 mb-4 leading-relaxed">
                Recevez nos conseils photo, nos actualités et nos offres
                spéciales.
              </p>
              {subscribed ? (
                <div className="rounded-xl bg-white/10 border border-white/20 p-3 text-xs text-white/90">
                  Merci ! Vous êtes bien inscrit(e).
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Votre e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-white text-[#1A1A1A] text-xs placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-white text-[#0A3D91] text-xs font-bold hover:bg-[#F4B942] hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    S'abonner
                  </button>
                </form>
              )}
              <label className="flex items-start gap-2 mt-3 text-[10px] text-white/60 leading-relaxed">
                <input type="checkbox" className="mt-0.5 accent-[#F4B942]" />
                <span>Désinscription à tout moment.</span>
              </label>
            </div>

            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                <span>Quartier Kodjoviopé, Lomé, Togo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span className="font-mono flex flex-wrap gap-x-1">
                  <a href="tel:+22872683032" className="hover:text-white underline-offset-2 hover:underline">+228 72 68 30 32</a>
                  <span aria-hidden="true">/</span>
                  <a href="tel:+22898526226" className="hover:text-white underline-offset-2 hover:underline">+228 98 52 62 26</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F4B942] shrink-0" />
                <a href="mailto:infos@photopicon.com" className="font-mono hover:text-white underline-offset-2 hover:underline">
                  infos@photopicon.com
                </a>
              </div>
            </div>

            <a
              href="mailto:infos@photopicon.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#0A3D91] transition-colors hover:bg-[#F4B942] hover:text-[#1A1A1A]"
            >
              <Mail className="w-3.5 h-3.5" />
              Contacter PICON par e-mail
            </a>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>© {new Date().getFullYear()} PICON — Laboratoire DIGITAL. Tous droits réservés.</div>
          <div className="flex items-center gap-5">
            <a href="#app-features" className="hover:text-white transition-colors">
              L'application
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="/politique-de-confidentialite"
              className="hover:text-white transition-colors"
            >
              Confidentialité
            </a>
            <span className="text-white/30">|</span>
            <span>Laboratoire photo au Togo</span>
          </div>
        </div>
      </div>

      {/* Bande colorée en bas (identité Picon) */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#1AB5A3]" />
        <div className="flex-1 bg-[#F5D33E]" />
        <div className="flex-1 bg-[#E63946]" />
        <div className="flex-1 bg-[#7C4DBC]" />
        <div className="flex-1 bg-[#4A5DB8]" />
      </div>
    </footer>
  );
}
