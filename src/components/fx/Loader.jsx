import { useEffect, useRef, useState } from "react";

/**
 * Intro curta (~1.8s): contador + barra. Ao terminar, marca <html class="is-loaded">,
 * o que dispara as animações de entrada do hero (CSS) e remove o loader.
 */
export function Loader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const counter = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 200 : 1800;
    root.classList.add("is-loading");

    let raf = 0;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      if (counter.current) counter.current.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      if (bar.current) bar.current.style.transform = `scaleX(${eased})`;
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        root.classList.remove("is-loading");
        root.classList.add("is-loaded");
        setLeaving(true);
        setTimeout(() => setGone(true), 800);
      }
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("is-loading");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`loader fixed inset-0 z-[95] flex flex-col items-center justify-center bg-ink text-paper ${leaving ? "is-leaving" : ""}`}
      role="status"
      aria-label="Loading"
    >
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-paper/60">&lt;igor parizi /&gt;</p>
      <p ref={counter} className="mt-4 font-display text-7xl font-bold tabular-nums text-gradient sm:text-8xl">
        000
      </p>
      <div className="mt-6 h-px w-48 overflow-hidden bg-paper/15">
        <div ref={bar} className="h-full origin-left bg-acid" style={{ transform: "scaleX(0)" }} />
      </div>
    </div>
  );
}

