import { useEffect, useState } from "react";
import { ChartNoAxesCombined, Database, Layers, MonitorSmartphone, ServerCog } from "lucide-react";
import { ContactForm } from "./components/ContactForm.jsx";
import { Footer, ProjectFilter, ScrollProgress } from "./components/Extras.jsx";
import { Header } from "./components/Header.jsx";
import { Background } from "./components/fx/Background.jsx";
import { Cursor } from "./components/fx/Cursor.jsx";
import { Loader } from "./components/fx/Loader.jsx";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";
import { Hero } from "./components/Hero.jsx";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { Section } from "./components/Section.jsx";
import { SkillIcon } from "./components/SkillIcon.jsx";
import { useI18n } from "./context/I18nContext.jsx";
import profilePhoto from "./assets/minha-foto-optimized.jpg";

// Ícone de cada grupo de habilidades (mesma ordem de `skills` em content.js)
const skillGroupIcons = [MonitorSmartphone, ServerCog, Database, ChartNoAxesCombined];

function App() {
  const { language, t } = useI18n();
  const [activeTag, setActiveTag] = useState(null);
  useSmoothScroll();
  const allTags = [...new Set(t.projects.flatMap((project) => project.tags))];

  useEffect(() => setActiveTag(null), [language]);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    const groupedElements = new Map();

    elements.forEach((element) => {
      const parentSection = element.closest("section")?.id || "page";
      const sectionElements = groupedElements.get(parentSection) || [];
      sectionElements.push(element);
      groupedElements.set(parentSection, sectionElements);
    });

    groupedElements.forEach((sectionElements) => {
      sectionElements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language, activeTag]);

  return (
    <div className="min-h-screen text-ink transition-colors duration-500 dark:text-paper">
      <Loader />
      <Background />
      <Cursor />
      <Header />
      <main>
        <Hero />

        <Section id="about" kicker="01" title={t.about.title}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)]">
            <div className="reveal interactive-surface glass-card w-full max-w-72 justify-self-center overflow-hidden sm:max-w-80 lg:justify-self-start">
              <img
                src={profilePhoto}
                alt={language === "pt" ? "Foto de perfil" : "Profile photo"}
                className="block aspect-square w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="reveal max-w-4xl text-base font-medium leading-8 text-ink/78 dark:text-paper/78 sm:text-lg lg:text-xl lg:leading-9">
              {t.about.body}
            </p>
            <div className="reveal lg:col-start-2">
              <div className="flex flex-wrap gap-3">
                {t.about.pillars.map((pillar) => (
                  <span key={pillar} className="glass-pill max-w-full break-words px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition duration-300 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-glow sm:text-sm">
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" kicker="02" title={t.experienceTitle}>
          <div className="space-y-5">
            {t.experiences.map((experience, index) => (
              <article
                key={`${experience.type}-${experience.role}`}
                className="reveal interactive-surface glass-card grid min-w-0 gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)]"
              >
                <div className="flex flex-col gap-3">
                  <span className="w-fit rounded-full bg-acid/80 px-3 py-1.5 font-display text-xs font-black uppercase text-ink shadow-glow">
                    {experience.type}
                  </span>
                  <span className="font-display text-5xl font-black text-ink/20 dark:text-paper/20">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="flex flex-col gap-2 border-b border-ink/10 pb-5 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="break-words font-display text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
                        {experience.role}
                      </h3>
                      <p className="mt-2 break-words font-bold text-ink/68 dark:text-paper/68">{experience.place}</p>
                    </div>
                    <p className="glass-pill w-fit shrink-0 px-3 py-1.5 font-display text-xs font-black uppercase">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-5 max-w-4xl leading-8 text-ink/76 dark:text-paper/76">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span key={highlight} className="glass-pill max-w-full break-words px-2.5 py-1 text-xs font-black uppercase">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" kicker="03" title={t.projectsTitle}>
          <ProjectFilter tags={allTags} active={activeTag} onChange={setActiveTag} />
          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.map((project, index) =>
              activeTag && !project.tags.includes(activeTag) ? null : (
                <ProjectCard key={project.title} project={project} index={index} />
              )
            )}
          </div>
        </Section>

        <Section id="skills" kicker="04" title={t.skillsTitle}>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.skills.map((group, index) => {
              const GroupIcon = skillGroupIcons[index] || Layers;
              return (
                <article key={group.title} className="reveal interactive-surface glass-card flex min-w-0 flex-col p-6">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-acid/15 text-acid ring-1 ring-acid/30">
                      <GroupIcon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-bold text-ink/40 dark:text-paper/40">{`0${index + 1}`}</span>
                  </div>
                  <h3 className="relative z-10 mt-5 font-display text-xl font-bold sm:text-2xl">{group.title}</h3>
                  <p className="relative z-10 mt-2 text-sm leading-6 text-ink/65 dark:text-paper/60">{group.description}</p>
                  <ul className="relative z-10 mt-6 flex flex-wrap gap-2 border-t border-ink/10 pt-5 dark:border-white/10">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="glass-pill inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-acid/50 hover:text-acid"
                      >
                        <SkillIcon name={item} className="h-4 w-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="contact" kicker="05" title={t.contact.title}>
          <ContactForm />
        </Section>
      </main>
      <Footer />
      <ScrollProgress />
    </div>
  );
}

export default App;
