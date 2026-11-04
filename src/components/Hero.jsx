import { ArrowDownRight, Send } from "lucide-react";
import { useI18n } from "../context/I18nContext.jsx";
import { SplitText } from "./fx/SplitText.jsx";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden border-b border-ink/10 dark:border-white/10">
      {/* Orbe decorativo com parallax (apenas transform) */}
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 md:block lg:right-4 xl:right-24"
        aria-hidden="true"
      >
        <div data-parallax="0.12" className="h-full w-full">
          <div className="hero-orb-core absolute inset-0 rounded-full" />
          <div className="hero-orb absolute inset-0 rounded-full" />
          <div className="hero-orb absolute inset-10 rounded-full opacity-60 [animation-direction:reverse] [animation-duration:36s]" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-12 pt-28 sm:px-6 md:pb-20 lg:px-8">
        <div className="w-full max-w-4xl">
          <p
            className="hero-in mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-acid/40 bg-acid/10 px-4 py-2 font-mono text-[0.68rem] font-bold uppercase leading-snug tracking-wider text-ink shadow-glow backdrop-blur-xl dark:text-acid sm:text-xs"
            style={{ "--d": "300ms" }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            {t.ui.available}
          </p>
          <p className="hero-in mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60 dark:text-paper/60 sm:text-sm" style={{ "--d": "450ms" }}>
            {"// "}
            {t.hero.eyebrow}
          </p>

          <h1 className="max-w-full font-display text-[clamp(2.4rem,11vw,4.75rem)] font-bold leading-[1.02] tracking-tight text-ink dark:text-paper lg:text-[5.25rem]">
            <SplitText text={t.hero.title} />
          </h1>

          <p className="hero-in mt-6 max-w-2xl text-base font-medium leading-7 text-ink/75 dark:text-paper/70 sm:text-lg sm:leading-8" style={{ "--d": "900ms" }}>
            {t.hero.subtitle}
          </p>

          <div className="hero-in mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4" style={{ "--d": "1050ms" }}>
            <a href="#projects" className="button-primary">
              {t.hero.primary}
              <ArrowDownRight size={20} />
            </a>
            <a href="#contact" className="button-secondary">
              {t.hero.secondary}
              <Send size={18} />
            </a>
          </div>

          <div className="hero-in mt-10 grid max-w-3xl gap-3 sm:grid-cols-3" style={{ "--d": "1200ms" }}>
            {t.hero.stats.map((stat) => (
              <div key={stat.value} className="hero-stat-card p-4">
                <p className="relative z-10 font-display text-xl font-bold text-gradient sm:text-2xl">{stat.value}</p>
                <p className="relative z-10 mt-1 font-mono text-[0.7rem] font-bold uppercase tracking-wider text-ink/60 dark:text-paper/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
