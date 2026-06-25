import { useEffect, useState } from "react";
import { ContactForm } from "./components/ContactForm.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { ProjectModal } from "./components/ProjectModal.jsx";
import { Section } from "./components/Section.jsx";
import { SkillIcon } from "./components/SkillIcon.jsx";
import { useI18n } from "./context/I18nContext.jsx";

function App() {
  const { language, t } = useI18n();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const selectedProject =
    selectedProjectIndex === null ? null : t.projects[selectedProjectIndex];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-ink dark:text-paper">
      <Header />
      <main>
        <Hero />

        <Section id="about" kicker="01" title={t.about.title}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="reveal border-2 border-current bg-cyan p-5 text-ink shadow-brutalSm sm:p-6 sm:shadow-brutal">
              <p className="font-display text-[clamp(2.5rem,14vw,4.5rem)] font-black uppercase leading-none">
                Data.
                <br />
                Code.
                <br />
                Flow.
              </p>
            </div>
            <p className="reveal max-w-4xl text-base font-medium leading-8 text-ink/78 dark:text-paper/78 sm:text-lg lg:text-xl lg:leading-9">
              {t.about.body}
            </p>
            <div className="reveal lg:col-start-2">
              <div className="flex flex-wrap gap-3">
                {t.about.pillars.map((pillar) => (
                  <span key={pillar} className="max-w-full break-words border-2 border-current bg-paper px-3 py-2 font-display text-xs font-black uppercase shadow-brutalSm dark:bg-ink sm:text-sm">
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
                className="reveal grid min-w-0 gap-5 border-2 border-current bg-paper p-5 shadow-brutalSm dark:bg-ink sm:p-6 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)]"
              >
                <div className="flex flex-col gap-3">
                  <span className="w-fit border-2 border-current bg-acid px-3 py-1.5 font-display text-xs font-black uppercase text-ink">
                    {experience.type}
                  </span>
                  <span className="font-display text-5xl font-black text-ink/14 dark:text-paper/14">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="flex flex-col gap-2 border-b-2 border-current pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="break-words font-display text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
                        {experience.role}
                      </h3>
                      <p className="mt-2 break-words font-bold text-ink/68 dark:text-paper/68">{experience.place}</p>
                    </div>
                    <p className="w-fit shrink-0 border-2 border-current px-3 py-1.5 font-display text-xs font-black uppercase">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-5 max-w-4xl leading-8 text-ink/76 dark:text-paper/76">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span key={highlight} className="max-w-full break-words border border-current px-2.5 py-1 text-xs font-black uppercase">
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
          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                detailsLabel={t.projectDetails.open}
                onSelect={() => setSelectedProjectIndex(index)}
              />
            ))}
          </div>
        </Section>

        <Section id="skills" kicker="04" title={t.skillsTitle}>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.skills.map((group) => (
              <article
                key={group.title}
                className="reveal min-w-0 border-2 border-current bg-paper p-5 shadow-brutalSm dark:bg-ink sm:p-6"
              >
                <h3 className="break-words font-display text-xl font-black sm:text-2xl">{group.title}</h3>
                <ul className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-w-0 items-center gap-3 border-2 border-current bg-paper px-3 py-3 font-bold transition hover:bg-acid hover:text-ink dark:bg-ink dark:hover:bg-acid dark:hover:text-ink"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-current bg-acid text-ink">
                        <SkillIcon name={item} />
                      </span>
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker="05" title={t.contact.title}>
          <ContactForm />
        </Section>
      </main>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          labels={t.projectDetails}
          onClose={() => setSelectedProjectIndex(null)}
        />
      ) : null}
    </div>
  );
}

export default App;
