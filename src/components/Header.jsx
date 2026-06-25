import { Github, Languages, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../context/I18nContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const sectionIds = ["home", "about", "experience", "projects", "skills", "contact"];

export function Header() {
  const { language, switchLanguage, t } = useI18n();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-ink/15 bg-paper/88 backdrop-blur-xl dark:border-white/15 dark:bg-ink/88">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-6 lg:px-8">
        <a href="#home" className="min-w-0 truncate font-display text-base font-black uppercase tracking-normal sm:text-lg" onClick={closeMenu}>
          Igor Parizi
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={`#${sectionIds[index]}`}
              className="px-3 py-2 text-sm font-bold uppercase transition hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink"
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
        <nav className="border-t-2 border-ink/15 px-3 py-3 dark:border-white/15 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={`#${sectionIds[index]}`}
                onClick={closeMenu}
                className="border-2 border-current px-3 py-3 text-center text-xs font-black uppercase transition hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink"
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
