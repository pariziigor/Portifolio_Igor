import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function MockPreview({ item, index }) {
  return (
    <figure className="h-full border-2 border-current bg-paper text-ink dark:bg-ink dark:text-paper">
      <div className="border-b-2 border-current bg-ink px-3 py-2 text-paper dark:bg-paper dark:text-ink">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-acid" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper dark:bg-ink" />
        </div>
      </div>
      <div className="grid min-h-32 gap-2 p-3 sm:aspect-[16/7] sm:min-h-0 sm:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-current opacity-80" />
          <div className="h-12 border-2 border-current bg-acid sm:h-14" />
          <div className="h-3 w-full bg-current opacity-30" />
          <div className="h-3 w-2/3 bg-current opacity-30" />
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((cell) => (
              <div key={cell} className={cell === index % 3 ? "h-8 border-2 border-current bg-cyan sm:h-10" : "h-8 border-2 border-current sm:h-10"} />
            ))}
          </div>
          <div className="h-10 border-2 border-current bg-paper dark:bg-ink sm:h-14" />
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((cell) => (
              <div key={cell} className="h-6 border-2 border-current bg-acid/70" />
            ))}
          </div>
        </div>
      </div>
      <figcaption className="border-t-2 border-current p-3">
        <p className="font-display text-base font-black sm:text-lg">{item.title}</p>
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
    setActiveSlide(boundedIndex);
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setActiveSlide(Math.round(carousel.scrollLeft / carousel.clientWidth));
  };

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden bg-ink/72 p-2 backdrop-blur-sm dark:bg-paper/20 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button className="fixed inset-0 h-full w-full cursor-default" onClick={onClose} aria-label={labels.close} />

      <article className="relative mx-auto flex h-[calc(100svh-1rem)] max-w-6xl flex-col overflow-hidden border-2 border-current bg-paper text-ink shadow-brutalSm dark:bg-ink dark:text-paper sm:h-[calc(100svh-2rem)] sm:shadow-brutal">
        <div className="flex shrink-0 items-start justify-between gap-3 border-b-2 border-current bg-paper p-4 dark:bg-ink sm:gap-4 sm:p-5">
          <div className="min-w-0">
            <p className="font-display text-xs font-black uppercase text-ink/58 dark:text-paper/58">{labels.overview}</p>
            <h3 id="project-modal-title" className="mt-2 break-words font-display text-[clamp(1.55rem,7vw,2.75rem)] font-black leading-tight">
              {project.title}
            </h3>
          </div>
          <button className="icon-button shrink-0" onClick={onClose} aria-label={labels.close} title={labels.close}>
            <X size={20} />
          </button>
        </div>

        <div className="grid min-h-0 min-w-0 flex-1 gap-4 overflow-y-auto p-4 sm:p-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:overflow-hidden">
          <div className="space-y-3 lg:min-h-0 lg:overflow-y-auto lg:pr-2">
            <p className="text-sm font-medium leading-7 text-ink/76 dark:text-paper/76 sm:text-base">{project.description}</p>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.problem}</h4>
              <p className="mt-2 text-sm leading-7 text-ink/72 dark:text-paper/72 sm:text-base">{project.problem}</p>
            </section>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.solution}</h4>
              <p className="mt-2 text-sm leading-7 text-ink/72 dark:text-paper/72 sm:text-base">{project.solution}</p>
            </section>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.technologies}</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="max-w-full break-words border-2 border-current bg-acid px-3 py-1.5 text-xs font-black uppercase text-ink">
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-display text-sm font-black uppercase">{labels.highlights}</h4>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="break-words border-2 border-current px-3 py-2 text-sm font-bold">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="min-w-0 lg:flex lg:min-h-0 lg:flex-col">
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-display text-sm font-black uppercase">{labels.gallery}</h4>
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
              className="no-scrollbar mt-2 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth lg:min-h-0 lg:flex-1"
            >
              {project.gallery.map((item, index) => (
                <div key={item.title} className="w-full shrink-0 snap-center pr-3 last:pr-0">
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
                      ? "h-2.5 w-8 border-2 border-current bg-acid"
                      : "h-2.5 w-2.5 border-2 border-current bg-transparent"
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
