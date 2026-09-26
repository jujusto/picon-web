import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PiconLogo } from "./PiconLogo";
import { Menu, X, Smartphone, Sparkles, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenOrder: () => void;
}

export function Navbar({ onOpenOrder }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-banner */}
      <div className="bg-[#0c0d0e] text-[#a3a3a3] text-xs py-2 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-zinc-300 font-medium">Laboratoire actif à Lomé</span>
            <span className="text-zinc-600">•</span>
            <span>Livraison à domicile express 24h & standard 72h partout au Togo</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              Kodjoviopé, Lomé
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-amber-400 font-medium">5 tirages offerts pour toute 1ère commande</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0d0e]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
            : "bg-[#0c0d0e] border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with safe margins */}
            <a href="#" className="flex items-center gap-4 group focus:outline-none mr-6 lg:mr-10 shrink-0">
              <PiconLogo size="md" withTagline={true} theme="dark" className="transition-transform group-hover:scale-105" />
              <span className="hidden xl:inline-block text-[11px] font-mono text-zinc-400 border-l border-white/20 pl-3 uppercase tracking-wider">
                Laboratoire Digital • Togo
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-zinc-300">
              <a
                href="#formats"
                className="hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-400"
              >
                Formats & Papiers
              </a>
              <a
                href="#simulateur"
                className="hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-400"
              >
                Simulateur & Devis
              </a>
              <a
                href="#qualite"
                className="hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-400"
              >
                Excellence Labo
              </a>
              <a
                href="#process"
                className="hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-400"
              >
                Comment ça marche
              </a>
              <a
                href="#tarifs"
                className="hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-400"
              >
                Grille des Prix
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-400"
              >
                Contact
              </a>
            </nav>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#process"
                className="text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-lg border border-white/15 hover:border-white/40 transition-all flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>App Mobile</span>
              </a>

              <Button
                onClick={onOpenOrder}
                className="bg-white text-black hover:bg-zinc-200 font-semibold px-4 py-2 text-sm rounded-lg shadow-md hover:shadow-white/20 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600 transition-transform group-hover:rotate-12" />
                <span>Commander mes tirages</span>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-zinc-300 hover:text-white p-2 rounded-lg border border-white/10"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111214] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
            <nav className="flex flex-col space-y-2 text-base font-medium text-zinc-300">
              <a
                href="#formats"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white"
              >
                Formats & Papiers
              </a>
              <a
                href="#simulateur"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white"
              >
                Simulateur & Devis
              </a>
              <a
                href="#qualite"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white"
              >
                Excellence Labo
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white"
              >
                Comment ça marche
              </a>
              <a
                href="#tarifs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white"
              >
                Grille des Prix
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>
            </nav>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full bg-white text-black hover:bg-zinc-200 font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                Commander mes tirages
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
