const BARS = [0.5, 0.85, 0.65, 1, 0.75, 0.95];

/** Card de projeto (somente visual): tilt 3D (data-tilt), brilho do mouse (.glass-card) e mini-preview animado no hover. */
export function ProjectCard({ project, index }) {
  return (
    <article
      data-tilt
      className="reveal group glass-card flex min-h-[280px] min-w-0 flex-col justify-between overflow-hidden p-5 text-left text-ink hover:shadow-glow dark:text-paper sm:min-h-[320px] sm:p-6"
    >
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="font-mono text-sm font-bold text-acid">{`0${index + 1} /`}</span>
          {/* Preview animado decorativo */}
          <div className="card-bars flex h-8 items-end gap-1.5" aria-hidden="true">
            {BARS.map((h, i) => (
              <span key={i} className="w-2.5" style={{ "--h": h, "--i": i }} />
            ))}
          </div>
        </div>

        <h3 className="break-words font-display text-xl font-bold leading-tight sm:text-2xl">{project.title}</h3>
        <p className="mt-4 leading-7 text-ink/70 dark:text-paper/65">{project.description}</p>
      </div>
      <ul className="relative z-10 mt-8 flex flex-wrap gap-2" aria-label="Tecnologias">
        {project.tags.map((tag) => (
          <li key={tag} className="glass-pill px-2.5 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-wide">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
