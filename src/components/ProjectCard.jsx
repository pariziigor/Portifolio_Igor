import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project, index, onSelect, detailsLabel }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="reveal group glass-card relative flex min-h-[280px] min-w-0 flex-col justify-between overflow-hidden p-5 text-left text-ink transition duration-300 hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-acid/50 dark:text-paper sm:min-h-[320px] sm:p-6"
      aria-label={`${detailsLabel}: ${project.title}`}
    >
      <span className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-acid transition duration-500 group-hover:scale-x-100" aria-hidden="true" />
      <div>
        <div className="mb-8 flex items-start justify-between gap-4">
          <span className="font-display text-5xl font-black text-ink/20 transition duration-300 group-hover:text-ink/30 dark:text-paper/20 dark:group-hover:text-paper/30">
            0{index + 1}
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/40 shadow-glass backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-acid/80 group-hover:text-ink dark:border-white/10 dark:bg-white/10 dark:group-hover:bg-acid/80">
            <ArrowUpRight size={20} />
          </span>
        </div>
        <h3 className="break-words font-display text-xl font-black leading-tight transition duration-300 group-hover:translate-x-1 sm:text-2xl">{project.title}</h3>
        <p className="mt-4 leading-7 text-ink/70 dark:text-paper/70">{project.description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="glass-pill px-2.5 py-1 text-xs font-black uppercase">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
