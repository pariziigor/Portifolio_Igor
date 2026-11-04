import Lenis from "lenis";
import { useEffect, useRef } from "react";

/**
 * Smooth scroll com Lenis (desativado com prefers-reduced-motion).
 * Retorna a ref da instância para pausar/retomar (ex.: ao abrir o modal).
 */
export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 } });
    lenisRef.current = lenis;

    let raf = 0;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}

