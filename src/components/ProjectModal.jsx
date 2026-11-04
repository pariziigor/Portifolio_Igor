import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function MockPreview({ item, index }) {
  return (
    <figure className="project-modal-preview h-full overflow-hidden rounded-[1.75rem] border shadow-glass backdrop-blur-2xl">
      <div className="project-modal-header border-b px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-acid" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-paper/30" />
        </div>
      </div>
      <div className="grid min-h-56 gap-3 p-4 sm:aspect-[16/9] sm:grid-cols-[0.72fr_1.28fr] lg:min-h-0">
        <div className="project-modal-surface rounded-3xl border p-4 shadow-glass">
          <div className="h-4 w-3/4 rounded-full bg-current opacity-60" />
          <div className="mt-4 h-20 rounded-3xl bg-acid/80 shadow-glow" />
          <div className="mt-4 h-3 w-full rounded-full bg-current opacity-20" />
          <div className="mt-2 h-3 w-2/3 rounded-full bg-current opacity-20" />
        </div>
        <div className="grid gap-3">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((cell) => (
              <div key={cell} className={cell === index % 3 ? "h-12 rounded-3xl bg-cyan/80 shadow-glow" : "project-modal-surface h-12 rounded-3xl border"} />
            ))}
          </div>
          <div className="project-modal-surface h-20 rounded-3xl border" />
          <div className="grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((cell) => (
              <div key={cell} className="h-9 rounded-2xl bg-acid/50" />
            ))}
          </div>
        </div>
      </div>
      <figcaption className="border-t border-ink/10 p-4 dark:border-white/10">
        <p className="font-display text-lg font-black leading-tight sm:text-xl">{item.title}</p>
        <p className="mt-1 text-sm font-medium leading-6 text-ink/68 dark:text-paper/68">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

export function ProjectModal({ project, labels, onClose }) {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useLayoutEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyLeft = document.body.style.left;
    const originalBodyRight = document.body.style.right;
    const originalBodyWidth = document.body.style.width;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalHtmlScrollBehavior = document.documentElement.style.scrollBehavior;
    const originalHtmlOverscrollBehavior = document.documentElement.style.overscrollBehavior;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.documentElement.style.overscrollBehavior = originalHtmlOverscrollBehavior;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.left = originalBodyLeft;
      document.body.style.right = originalBodyRight;
      document.body.style.width = originalBodyWidth;
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      document.documentElement.style.scrollBehavior = originalHtmlScrollBehavior;
    };
  }, [onClose]);

  useEffect(() => {
    setActiveSlide(0);
    carouselRef.current?.scrollTo({ left: 0 });
  }, [project]);

  if (!project) return null;

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const boundedIndex = Math.max(0, Math.min(index, project.gallery.length - 1));
    carousel.scrollTo({
      left: boundedIndex * carousel.clientWidth,
      behavior: "smooth",
    });
    setActiveSlide((current) => (current === boundedIndex ? current : boundedIndex));
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const nextSlide = Math.round(carousel.scrollLeft / carousel.clientWidth);
    setActiveSlide((current) => (current === nextSlide ? current : nextSlide));
  };

  return (
    <div data-lenis-prevent className="modal-backdrop fixed inset-0 z-[70] overflow-hidden bg-ink/20 p-2 backdrop-blur-xl dark:bg-ink/75 dark:backdrop-blur-2xl sm:p-4" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button className="fixed inset-0 h-full w-full cursor-default" onClick={onClose} aria-label={labels.close} />

      <article className="modal-panel project-modal-panel relative mx-auto flex h-[calc(100svh-1rem)] max-w-7xl flex-col overflow-hidden rounded-[2rem] border shadow-glass backdrop-blur-xl dark:backdrop-blur-2xl sm:h-[calc(100svh-2rem)] sm:rounded-[2.5rem]">
        <div className="project-modal-header flex shrink-0 items-start justify-between gap-3 border-b p-4 backdrop-blur-xl dark:backdrop-blur-2xl sm:gap-4 sm:p-6">
          <div className="min-w-0">
            <p className="w-fit rounded-full bg-acid/80 px-3 py-1.5 font-display text-[0.68rem] font-black uppercase text-ink shadow-glow">{labels.overview}</p>
            <h3 id="project-modal-title" className="mt-3 max-w-4xl break-words font-display text-[clamp(1.65rem,6vw,3.25rem)] font-black leading-[0.98]">
              {project.title}
            </h3>
          </div>
          <button className="icon-button shrink-0" onClick={onClose} aria-label={labels.close} title={labels.close}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-scroll grid min-h-0 min-w-0 flex-1 gap-5 overflow-y-auto p-4 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:overflow-hidden">
          <div className="modal-scroll space-y-5 lg:min-h-0 lg:overflow-y-auto lg:pr-3">
            <p className="project-modal-surface rounded-3xl border p-4 text-sm font-medium leading-7 text-ink/76 backdrop-blur-xl dark:text-paper/76 sm:p-5 sm:text-base">{project.description}</p>

            <section className="border-l border-ink/15 pl-4 dark:border-white/15">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/58 dark:text-paper/58">{labels.problem}</h4>
              <p className="mt-2 text-sm leading-7 text-ink/72 dark:text-paper/72 sm:text-base">{project.problem}</p>
            </section>

            <section className="border-l border-ink/15 pl-4 dark:border-white/15">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/58 dark:text-paper/58">{labels.solution}</h4>
              <p className="mt-2 text-sm leading-7 text-ink/72 dark:text-paper/72 sm:text-base">{project.solution}</p>
            </section>

            <section>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/58 dark:text-paper/58">{labels.technologies}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="max-w-full break-words rounded-full bg-acid/80 px-3 py-1.5 text-xs font-black uppercase text-ink transition duration-300 hover:-translate-y-0.5 dark:shadow-glow">
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/58 dark:text-paper/58">{labels.highlights}</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="project-modal-surface rounded-2xl border px-3 py-2 text-sm font-bold backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-acid/80 hover:text-ink dark:shadow-glass dark:hover:shadow-glow">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="project-modal-surface min-w-0 rounded-[2rem] border p-3 shadow-glass backdrop-blur-xl dark:backdrop-blur-2xl sm:p-4 lg:flex lg:min-h-0 lg:flex-col">
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/58 dark:text-paper/58">{labels.gallery}</h4>
              <div className="hidden gap-2 sm:flex">
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => scrollToSlide(activeSlide - 1)}
                  aria-label="Previous preview"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => scrollToSlide(activeSlide + 1)}
                  aria-label="Next preview"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className="no-scrollbar mt-3 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth lg:min-h-0 lg:flex-1"
            >
              {project.gallery.map((item, index) => (
                <div key={item.title} className="w-full shrink-0 snap-center">
                  <MockPreview item={item} index={index} />
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              {project.gallery.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={
                    index === activeSlide
                      ? "h-2.5 w-8 rounded-full bg-acid shadow-glow transition-all duration-300"
                      : "h-2.5 w-2.5 rounded-full bg-ink/20 transition-all duration-300 hover:w-5 hover:bg-acid dark:bg-paper/20"
                  }
                  onClick={() => scrollToSlide(index)}
                  aria-label={`Go to preview ${index + 1}`}
                />
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
