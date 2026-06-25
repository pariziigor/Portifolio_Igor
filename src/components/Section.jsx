export function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b-2 border-ink py-14 dark:border-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          {kicker ? (
            <p className="font-display text-sm font-black uppercase text-ink/60 dark:text-paper/60">{kicker}</p>
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
