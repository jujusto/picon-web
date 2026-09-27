import { useState, useEffect } from "react";
import { PiconLogo } from "./PiconLogo";
import { PlayStoreButton } from "./PlayStoreButton";
import { Menu, X, Smartphone } from "lucide-react";

interface NavbarProps {
  onOpenApp: () => void;
}

export function Navbar({ onOpenApp }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0c0d0e]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl" : "bg-[#0c0d0e] border-b border-white/5 py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-4 group shrink-0" aria-label="PICON, accueil">
            <PiconLogo size="md" withTagline={true} theme="dark" className="transition-transform group-hover:scale-[1.02]" />
            <span className="hidden xl:inline-block text-[11px] font-mono text-zinc-400 border-l border-white/20 pl-4 uppercase tracking-wider">Laboratoire Digital • Togo</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-zinc-300">
            <a href="#app-features" className="hover:text-white transition-colors">L'application</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
            <a href="#why-picon" className="hover:text-white transition-colors">Pourquoi PICON</a>
            <a href="#process" className="hover:text-white transition-colors">Comment ça marche</a>
            <a href="#delivery" className="hover:text-white transition-colors">Livraison</a>
            <a href="#contact" className="hover:text-white transition-colors">FAQ & Contact</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button onClick={onOpenApp} className="text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-lg border border-white/15 hover:border-white/40 transition-all flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Voir l'app</span>
            </button>
            <PlayStoreButton size="sm" label="Google Play" />
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-zinc-300 hover:text-white p-2 rounded-lg border border-white/10" aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111214] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-zinc-300">
            <a href="#app-features" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white">L'application</a>
            <a href="#pricing" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white">Tarifs</a>
            <a href="#why-picon" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white">Pourquoi PICON</a>
            <a href="#process" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white">Comment ça marche</a>
            <a href="#delivery" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white">Livraison</a>
            <a href="#contact" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white">FAQ & Contact</a>
          </nav>
          <div className="pt-3 border-t border-white/10">
            <PlayStoreButton size="md" label="Télécharger l'application PICON" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
