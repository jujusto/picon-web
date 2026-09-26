import { MapPin, Phone, Mail, Sparkles, Heart } from "lucide-react";
import { PiconLogo } from "./PiconLogo";

export function Footer() {
  return (
    <footer className="bg-[#07080a] text-zinc-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <PiconLogo size="md" withTagline={true} theme="dark" />
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Le premier laboratoire photo digital au Togo. Nous donnons vie à vos clichés numériques sous forme de tirages d'art, toiles et cadres livrés directement chez vous.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Laboratoire actif à Kodjoviopé, Lomé</span>
            </div>
          </div>

          {/* Col 1: Formats */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Tirages & Produits
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#formats" className="hover:text-white transition-colors">Formats Standards (9x13, 10x15, 13x18)</a></li>
              <li><a href="#formats" className="hover:text-white transition-colors">Agrandissements & A4 Galerie (20x30)</a></li>
              <li><a href="#formats" className="hover:text-white transition-colors">Grands Formats d'Exposition (30x45, 50x60)</a></li>
              <li><a href="#formats" className="hover:text-white transition-colors">Cadres Bois Massif & Passe-partout</a></li>
              <li><a href="#simulateur" className="hover:text-white transition-colors">Papier Lustre Satiné & Brillant Miroir</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Services & Togo
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#process" className="hover:text-white transition-colors">Livraison à Domicile Lomé & Régions</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors">Livraison Express 24h & Standard 72h</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors">Mixx by Yas (TMoney) & Moov Money</a></li>
              <li><a href="#qualite" className="hover:text-white transition-colors">Vérification de Résolution 300 DPI</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Tirages Pros Mariages & Événements</a></li>
            </ul>
          </div>

          {/* Col 3: Agence */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Atelier & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Quartier Kodjoviopé, Lomé, Togo</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">+228 90 00 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono">infos@photopicon.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} PICON — "Ce qui compte vraiment." Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="#tarifs" className="hover:text-zinc-300 transition-colors">Grille tarifaire</a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">Mentions légales & Confidentialité</a>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400 flex items-center gap-1">
              Fait avec passion pour la photographie à Lomé
            </span>
          </div>
        </div>
      </div>

      {/* Brand Shutter Rainbow Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#1D6FA4]" /> {/* Blue */}
        <div className="flex-1 bg-[#00A896]" /> {/* Teal */}
        <div className="flex-1 bg-[#F4D03F]" /> {/* Yellow */}
        <div className="flex-1 bg-[#E63946]" /> {/* Red */}
        <div className="flex-1 bg-[#7B2CBF]" /> {/* Purple */}
      </div>
    </footer>
  );
}
