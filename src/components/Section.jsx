export function Section({ id, kicker, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-b border-ink/10 dark:border-white/10"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          {kicker ? (
            <p className="flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-widest text-acid">
              <span>{`// ${kicker}`}</span>
              <span className="h-px w-10 bg-gradient-to-r from-acid to-transparent" aria-hidden="true" />
            </p>
          ) : null}
          <h2
            id={`${id}-title`}
            className="break-words font-display text-[clamp(2.25rem,10vw,4rem)] font-bold uppercase leading-none tracking-tight text-ink dark:text-paper sm:text-6xl"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
