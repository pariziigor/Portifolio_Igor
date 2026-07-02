import { ArrowDownRight, Send } from "lucide-react";
import { useI18n } from "../context/I18nContext.jsx";
import heroImage from "../assets/hero-workbench-optimized.jpg";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden border-b border-ink/10 dark:border-white/10 md:min-h-[92vh]">
      <img
        src={heroImage}
        alt=""
        className="hero-media absolute inset-0 h-full w-full object-cover"
        decoding="async"
        fetchPriority="high"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/76 backdrop-blur-[1px] dark:bg-ink/70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,234,0.96),rgba(244,241,234,0.58),rgba(244,241,234,0.18))] dark:bg-[linear-gradient(90deg,rgba(17,17,17,0.96),rgba(17,17,17,0.70),rgba(17,17,17,0.22))]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-12 pt-24 sm:px-6 md:min-h-[92vh] md:pb-20 lg:px-8">
        <div className="w-full max-w-4xl">
          <p className="reveal mb-5 inline-flex max-w-full rounded-full border border-ink/10 bg-acid/80 px-4 py-2 font-display text-[0.68rem] font-black uppercase leading-snug text-ink shadow-glow backdrop-blur-xl sm:text-xs">
            {t.hero.eyebrow}
          </p>
          <h1 className="reveal max-w-full break-words font-display text-[clamp(2.65rem,14vw,5.2rem)] font-black leading-[0.95] text-ink dark:text-paper lg:text-8xl">
            {t.hero.title}
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base font-medium leading-7 text-ink/78 dark:text-paper/78 sm:text-lg sm:leading-8 lg:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="reveal mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a href="#projects" className="button-primary">
              {t.hero.primary}
              <ArrowDownRight size={20} />
            </a>
            <a href="#contact" className="button-secondary">
              {t.hero.secondary}
              <Send size={18} />
            </a>
          </div>
          <div className="reveal mt-8 grid max-w-3xl gap-3 sm:grid-cols-3 md:mt-10">
            {t.hero.stats.map((stat) => (
              <div key={stat.value} className="interactive-surface hero-stat-card p-4">
                <p className="font-display text-xl font-black sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-sm font-bold uppercase text-ink/62 dark:text-paper/62">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
