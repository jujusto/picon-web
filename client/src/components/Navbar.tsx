import { useState, useEffect } from "react";
import { PiconLogo } from "./PiconLogo";
import { PlayStoreButton } from "./PlayStoreButton";
import { Menu, X, Smartphone, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarProps {
  onOpenApp: () => void;
}

export function Navbar({ onOpenApp }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 navbar-theme ${
        scrolled
          ? "backdrop-blur-xl border-b shadow-lg py-3"
          : "backdrop-blur-md border-b py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-5">
          <a
            href="#"
            className="flex items-center group shrink-0"
            aria-label="PICON, accueil"
          >
            <PiconLogo
              size="md"
              withTagline={false}
              theme="dark"
              className="transition-transform group-hover:scale-[1.02]"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium navbar-link">
            <a href="#app-features" className="navbar-link-item transition-colors">
              L'application
            </a>
            <a href="#pricing" className="navbar-link-item transition-colors">
              Tarifs
            </a>
            <a href="#why-picon" className="navbar-link-item transition-colors">
              Pourquoi PICON
            </a>
            <a href="#process" className="navbar-link-item transition-colors">
              Comment ça marche
            </a>
            <a href="#delivery" className="navbar-link-item transition-colors">
              Livraison
            </a>
            <a href="#contact" className="navbar-link-item transition-colors">
              FAQ & Contact
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Toggle Dark/Light */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Passer en mode clair"
                  : "Passer en mode sombre"
              }
              className="p-2 rounded-lg border navbar-toggle-btn transition-all flex items-center justify-center"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={onOpenApp}
              className="text-xs font-semibold px-3 py-2 rounded-lg border navbar-btn-outline transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Voir l'app</span>
            </button>
            <PlayStoreButton size="sm" label="Google Play" />
          </div>

          {/* Mobile : boutons toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Basculer le thème"
              className="p-2 rounded-lg border navbar-toggle-btn transition-all"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border navbar-toggle-btn"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-b px-4 pt-4 pb-6 mt-3 space-y-3 navbar-mobile-menu">
          <nav className="flex flex-col space-y-2 text-base font-medium navbar-link">
            <a
              href="#app-features"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md navbar-link-item"
            >
              L'application
            </a>
            <a
              href="#pricing"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md navbar-link-item"
            >
              Tarifs
            </a>
            <a
              href="#why-picon"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md navbar-link-item"
            >
              Pourquoi PICON
            </a>
            <a
              href="#process"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md navbar-link-item"
            >
              Comment ça marche
            </a>
            <a
              href="#delivery"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md navbar-link-item"
            >
              Livraison
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md navbar-link-item"
            >
              FAQ & Contact
            </a>
          </nav>
          <div className="pt-3 border-t navbar-border">
            <PlayStoreButton
              size="md"
              label="Télécharger l'application PICON"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}