import { useState } from "react";
import Tooltip from "@/components/Tooltip";
import LanguageToggle from "@/components/LanguageToggle";

import { useStore } from "@/utils/store";
import { content } from "@/utils/dictionary";

type HeaderProps = {
  className?: string;
  content: (typeof content)["En"]["header"];
};

export default function Header({ className = "", content }: HeaderProps) {
  const { currentLanguage, activeSection } = useStore((state) => state);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLabels =
    currentLanguage === "En"
      ? contentNavigation("En")
      : contentNavigation("Es");

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileOpen(false); // cerrar menú en mobile al hacer click
  };

  return (
    <header
      id="header"
      className={`
        w-full flex justify-center
        h-12 md:h-14
        bg-black/40 backdrop-blur-xl
        shadow-[0_0_30px_rgba(4,173,147,0.35)]
        ${className}
      `}
    >
      <div className="relative w-full max-w-[100rem] flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <img
          className="h-22 md:h-25 lg:h-25 w-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
          src={`/logos/logo-dark.svg`}
          alt="Johan's logo"
        />

        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base font-medium">
          {navLabels.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`
                relative uppercase tracking-wide transition-colors
                ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-neutral-100/80 hover:text-neutral-100"
                }
              `}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </nav>

        {/* Zona derecha: CV, idioma, hamburguesa */}
        <div className="flex items-center gap-2 md:gap-4">
          <Tooltip content={content.cvButton}>
            <a
              className="size-7 text-sm md:text-base flex items-center justify-center border border-neutral-100/80 rounded-lg hover:bg-neutral-100 hover:text-primary transition cursor-pointer"
              href={`/cv/${currentLanguage}.pdf`}
              download={`Johan Jimenez - Curriculum Vitae - ${currentLanguage}`}
            >
              <i className="fas fa-file-download" />
            </a>
          </Tooltip>

          <LanguageToggle />

          {/* Botón hamburguesa SOLO en mobile */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="
              md:hidden
              inline-flex items-center justify-center
              size-9 rounded-lg
              border border-white/30
              bg-black/40 text-white
              hover:bg-white/10
              shadow-[0_0_18px_rgba(4,173,147,0.55)]
              transition
            "
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <i
              className={`fas ${isMobileOpen ? "fa-times" : "fa-bars"} text-lg`}
            />
          </button>
        </div>

        {/* Menú mobile desplegable */}
        <div
          className={`
            md:hidden
            absolute top-full left-0 right-0
            origin-top
            bg-[color-mix(in_hsl,var(--color-primary-400)_85%,black_15%)]
            border-t border-white/10
            shadow-[0_18px_60px_rgba(0,0,0,0.85)]
            backdrop-blur-xl
            ${
              isMobileOpen
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0 pointer-events-none"
            }
            transition-all duration-200
          `}
        >
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLabels.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left uppercase tracking-wide text-xs
                  py-2 px-2 rounded-md
                  ${
                    activeSection === item.id
                      ? "text-accent bg-white/5"
                      : "text-neutral-100/80 hover:text-neutral-100 hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function contentNavigation(lang: "En" | "Es") {
  const nav = content[lang].navigation;
  return [
    { id: "about-me", label: nav.aboutMe },
    { id: "projects", label: nav.projects },
    { id: "experience", label: nav.experience },
    { id: "skills", label: nav.skills },
    { id: "education", label: nav.education },
    { id: "ideals", label: nav.ideals },
    { id: "contact", label: nav.contact },
  ];
}
