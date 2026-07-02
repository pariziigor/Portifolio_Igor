import { Github, Languages, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../context/I18nContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const sectionIds = ["home", "about", "experience", "projects", "skills", "contact"];

export function Header() {
  const { language, switchLanguage, t } = useI18n();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const animationFrameRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const nextIsScrolled = window.scrollY > 12;
      const scrollPosition = window.scrollY + window.innerHeight * 0.34;
      const currentSection = sectionIds.reduce((current, id) => {
        const section = document.getElementById(id);
        if (!section) return current;
        return section.offsetTop <= scrollPosition ? id : current;
      }, "home");

      setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled));
      setActiveSection((current) => (current === currentSection ? current : currentSection));
    };

    const scheduleUpdate = () => {
      if (animationFrameRef.current) return;

      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, [language]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition duration-300 sm:px-6">
      <div className={isScrolled ? "glass-panel mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-3 py-2 transition duration-300 sm:px-5 lg:px-6" : "mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 rounded-full border border-white/30 bg-paper/50 px-3 py-2 shadow-glass backdrop-blur-2xl transition duration-300 dark:border-white/10 dark:bg-ink/40 sm:px-5 lg:px-6"}>
        <a href="#home" className="min-w-0 truncate font-display text-base font-black uppercase tracking-normal transition hover:text-ink/68 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-acid dark:hover:text-paper/68 sm:text-lg" onClick={closeMenu}>
          Igor Parizi
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={`#${sectionIds[index]}`}
              className={activeSection === sectionIds[index] ? "nav-link nav-link-active" : "nav-link"}
              aria-current={activeSection === sectionIds[index] ? "page" : undefined}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/pariziigor"
            className="icon-button hidden sm:inline-flex"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://br.linkedin.com/in/igorparizi"
            className="icon-button hidden sm:inline-flex"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <button className="icon-button" onClick={switchLanguage} aria-label="Change language" title="Language">
            <Languages size={18} />
            <span className="text-xs font-black">{language.toUpperCase()}</span>
          </button>
          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme" title="Theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            title="Menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav className="modal-backdrop glass-panel mx-auto mt-2 max-w-7xl px-3 py-3 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={`#${sectionIds[index]}`}
                onClick={closeMenu}
                className={activeSection === sectionIds[index] ? "rounded-2xl bg-acid/80 px-3 py-3 text-center text-xs font-black uppercase text-ink shadow-glow transition duration-300" : "rounded-2xl border border-ink/10 bg-white/30 px-3 py-3 text-center text-xs font-black uppercase shadow-glass transition duration-300 hover:-translate-y-0.5 hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"}
                aria-current={activeSection === sectionIds[index] ? "page" : undefined}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
