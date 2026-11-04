import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "../context/I18nContext.jsx";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setShowTop(window.scrollY > 600);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-acid to-violet shadow-glow"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`icon-button fixed bottom-5 right-5 z-50 transition duration-300 ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label={t.ui.backToTop}
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-ink/10 py-8 text-center text-sm font-mono text-xs font-bold uppercase tracking-wider text-ink/60 dark:border-white/10 dark:text-paper/60">
      <p>
        © {new Date().getFullYear()} · {t.ui.footer}
      </p>
    </footer>
  );
}

export function ProjectFilter({ tags, active, onChange }) {
  const { t } = useI18n();
  return (
    <div className="reveal mb-8 flex flex-wrap gap-2" role="group" aria-label={t.ui.filterLabel}>
      {[null, ...tags].map((tag) => {
        const selected = active === tag;
        return (
          <button
            key={tag ?? "all"}
            type="button"
            onClick={() => onChange(tag)}
            aria-pressed={selected}
            className={`glass-pill px-3 py-1.5 font-display text-xs font-black uppercase transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-acid/50 ${
              selected ? "bg-acid/90 text-ink shadow-glow" : ""
            }`}
          >
            {tag ?? t.ui.all}
          </button>
        );
      })}
    </div>
  );
}

