import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project, index, onSelect, detailsLabel }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="reveal group flex min-h-[280px] min-w-0 flex-col justify-between border-2 border-current bg-paper p-5 text-left text-ink shadow-brutalSm transition duration-300 hover:-translate-y-1 hover:shadow-none focus:outline-none focus:ring-4 focus:ring-acid dark:bg-ink dark:text-paper sm:min-h-[320px] sm:p-6 sm:shadow-brutal"
      aria-label={`${detailsLabel}: ${project.title}`}
    >
      <div>
        <div className="mb-8 flex items-start justify-between gap-4">
          <span className="font-display text-5xl font-black text-ink/16 dark:text-paper/16">
            0{index + 1}
          </span>
          <ArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className="break-words font-display text-xl font-black leading-tight sm:text-2xl">{project.title}</h3>
        <p className="mt-4 leading-7 text-ink/70 dark:text-paper/70">{project.description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="border border-current px-2.5 py-1 text-xs font-black uppercase">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
