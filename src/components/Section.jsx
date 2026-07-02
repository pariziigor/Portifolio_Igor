export function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-ink/10 py-14 transition-colors duration-300 dark:border-white/10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          {kicker ? (
            <p className="flex items-center gap-3 font-display text-sm font-black uppercase text-ink/60 dark:text-paper/60">
              <span>{kicker}</span>
              <span className="h-0.5 w-10 bg-current opacity-50" aria-hidden="true" />
            </p>
          ) : null}
          <h2 className="break-words font-display text-[clamp(2.25rem,11vw,4rem)] font-black uppercase leading-none text-ink dark:text-paper sm:text-6xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
