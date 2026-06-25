import { X } from "lucide-react";
import { useEffect } from "react";

function MockPreview({ item, index }) {
  return (
    <figure className="border-2 border-current bg-paper text-ink shadow-brutalSm dark:bg-ink dark:text-paper">
      <div className="border-b-2 border-current bg-ink px-3 py-2 text-paper dark:bg-paper dark:text-ink">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-acid" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper dark:bg-ink" />
        </div>
      </div>
      <div className="grid min-h-60 gap-3 p-3 sm:aspect-[16/10] sm:grid-cols-[0.75fr_1.25fr] sm:p-4">
        <div className="space-y-3">
          <div className="h-5 w-3/4 bg-current opacity-80" />
          <div className="h-24 border-2 border-current bg-acid" />
          <div className="h-4 w-full bg-current opacity-30" />
          <div className="h-4 w-2/3 bg-current opacity-30" />
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((cell) => (
              <div key={cell} className={cell === index % 3 ? "h-10 border-2 border-current bg-cyan sm:h-14" : "h-10 border-2 border-current sm:h-14"} />
            ))}
          </div>
          <div className="h-20 border-2 border-current bg-paper dark:bg-ink sm:h-28" />
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((cell) => (
              <div key={cell} className="h-7 border-2 border-current bg-acid/70 sm:h-8" />
            ))}
          </div>
        </div>
      </div>
      <figcaption className="border-t-2 border-current p-4">
        <p className="font-display text-lg font-black">{item.title}</p>
        <p className="mt-1 text-sm font-medium text-ink/68 dark:text-paper/68">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

export function ProjectModal({ project, labels, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-ink/72 p-2 backdrop-blur-sm dark:bg-paper/20 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button className="fixed inset-0 h-full w-full cursor-default" onClick={onClose} aria-label={labels.close} />

      <article className="relative mx-auto my-3 max-w-6xl border-2 border-current bg-paper text-ink shadow-brutalSm dark:bg-ink dark:text-paper sm:my-6 sm:shadow-brutal">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b-2 border-current bg-paper p-4 dark:bg-ink sm:gap-4 sm:p-7">
          <div className="min-w-0">
            <p className="font-display text-xs font-black uppercase text-ink/58 dark:text-paper/58">{labels.overview}</p>
            <h3 id="project-modal-title" className="mt-2 break-words font-display text-[clamp(1.75rem,9vw,3rem)] font-black leading-tight sm:text-5xl">
              {project.title}
            </h3>
          </div>
          <button className="icon-button shrink-0" onClick={onClose} aria-label={labels.close} title={labels.close}>
            <X size={20} />
          </button>
        </div>

        <div className="grid min-w-0 gap-8 p-4 sm:p-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-7">
            <p className="text-base font-medium leading-8 text-ink/76 dark:text-paper/76 sm:text-lg">{project.description}</p>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.problem}</h4>
              <p className="mt-3 leading-7 text-ink/72 dark:text-paper/72">{project.problem}</p>
            </section>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.solution}</h4>
              <p className="mt-3 leading-7 text-ink/72 dark:text-paper/72">{project.solution}</p>
            </section>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.technologies}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="max-w-full break-words border-2 border-current bg-acid px-3 py-1.5 text-xs font-black uppercase text-ink">
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.highlights}</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="break-words border-2 border-current px-3 py-2 font-bold">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h4 className="font-display text-sm font-black uppercase">{labels.gallery}</h4>
            <div className="mt-4 grid gap-5">
              {project.gallery.map((item, index) => (
                <MockPreview key={item.title} item={item} index={index} />
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
