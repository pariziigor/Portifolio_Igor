import { ArrowUpRight } from "lucide-react";

const BARS = [0.5, 0.85, 0.65, 1, 0.75, 0.95];

/** Card de projeto: tilt 3D (data-tilt), brilho do mouse (.glass-card) e mini-preview animado no hover. */
export function ProjectCard({ project, index, onSelect, detailsLabel }) {
  return (
    <button
      type="button"
      data-tilt
      onClick={onSelect}
      className="reveal group glass-card flex min-h-[280px] min-w-0 flex-col justify-between overflow-hidden p-5 text-left text-ink hover:shadow-glow dark:text-paper sm:min-h-[340px] sm:p-6"
      aria-label={`${detailsLabel}: ${project.title}`}
    >
      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="font-mono text-sm font-bold text-acid">{`0${index + 1} /`}</span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/10 backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-acid group-hover:text-ink dark:border-white/10">
            <ArrowUpRight size={20} />
          </span>
        </div>

        {/* Preview animado decorativo */}
        <div className="card-bars mb-6 flex h-10 items-end gap-1.5" aria-hidden="true">
          {BARS.map((h, i) => (
            <span key={i} className="w-3" style={{ "--h": h, "--i": i }} />
          ))}
        </div>

        <h3 className="break-words font-display text-xl font-bold leading-tight sm:text-2xl">{project.title}</h3>
        <p className="mt-4 leading-7 text-ink/70 dark:text-paper/65">{project.description}</p>
      </div>
      <div className="relative z-10 mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="glass-pill px-2.5 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-wide">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
