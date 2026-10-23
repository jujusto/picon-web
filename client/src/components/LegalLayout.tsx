import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { PiconLogo } from "./PiconLogo";

interface LegalSection {
  title: string;
  body: string;
}
interface LegalLayoutProps {
  title: string;
  kicker: string;
  intro: string;
  sections: LegalSection[];
  highlightTitle?: string;
  highlightBody?: string;
}

export function LegalLayout({
  title,
  kicker,
  intro,
  sections,
  highlightTitle,
  highlightBody,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] relative overflow-hidden">
      <header className="relative z-10 border-b border-[#E5E5E5] bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-5">
          <Link href="/">
            <PiconLogo size="sm" withTagline={true} theme="light" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#0A3D91] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0A3D91]/20 bg-[#0A3D91]/5 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#0A3D91]">
            <ShieldCheck className="w-3.5 h-3.5" />
            {kicker}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mt-5 mb-5 text-[#0A3D91]">
            {title}
          </h1>
          <p className="text-lg text-[#666666] leading-relaxed">{intro}</p>
          <p className="text-xs font-mono uppercase tracking-widest text-[#999999] mt-6">
            Dernière mise à jour : 27 septembre 2026
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="flex gap-4">
                <span className="text-[#F4B942] font-mono text-sm pt-1 font-bold">
                  0{index + 1}
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {highlightTitle && (
          <div className="mt-8 rounded-2xl border border-[#F4B942]/40 bg-gradient-to-br from-[#F4B942]/10 to-transparent p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3">
              {highlightTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed">
              {highlightBody}
            </p>
            <a
              href="mailto:infos@photopicon.com"
              className="inline-flex items-center gap-2 mt-5 rounded-xl bg-[#0A3D91] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#062B66] transition-colors"
            >
              <Mail className="w-4 h-4" />
              infos@photopicon.com
            </a>
          </div>
        )}
      </main>
    </div>
  );
}