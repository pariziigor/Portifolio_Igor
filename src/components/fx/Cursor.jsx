import { useEffect, useRef } from "react";

const HOVERABLE = "a, button, [role='button'], input, textarea, label, summary";
const MAGNETIC = ".button-primary, .button-secondary, .icon-button, .nav-link";

/**
 * Camada de interações de ponteiro (somente dispositivos com mouse):
 *  - cursor customizado (ponto + anel com atraso = rastro) e luz ambiente
 *  - magnetismo em botões/links
 *  - tilt 3D em [data-tilt]
 *  - brilho que segue o mouse nos .glass-card (via --mx/--my)
 *  - parallax em [data-parallax="velocidade"]
 * Tudo usa transform/translate (sem layout). Desligado em touch e reduced-motion.
 */
export function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const glow = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const pos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    const glowPos = { x: -100, y: -100 };
    let raf = 0;
    let fxFrame = 0;
    let visible = false;
    let lastTarget = null;
    let lastTilt = null;
    let lastMag = null;

    const resetTilt = (el) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    const resetMag = (el) => {
      el.style.translate = "";
    };

    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      glowPos.x += (pos.x - glowPos.x) * 0.07;
      glowPos.y += (pos.y - glowPos.y) * 0.07;
      dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      glow.current.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0)`;
      const settled =
        Math.abs(pos.x - ringPos.x) < 0.1 && Math.abs(pos.y - ringPos.y) < 0.1 &&
        Math.abs(pos.x - glowPos.x) < 0.1 && Math.abs(pos.y - glowPos.y) < 0.1;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) {
        visible = true;
        [dot, ring, glow].forEach((r) => r.current.classList.add("cursor-visible"));
      }
      if (!raf) raf = requestAnimationFrame(tick);
      lastTarget = e.target instanceof Element ? e.target : null;
      // Agrupa as interações em 1x por frame (em vez de a cada evento do mouse)
      if (!fxFrame) fxFrame = requestAnimationFrame(applyFx);
    };

    const applyFx = () => {
      fxFrame = 0;
      const target = lastTarget;
      const { x, y } = pos;
      const card = target?.closest(".glass-card, .hero-stat-card") || null;
      const tilt = target?.closest("[data-tilt]") || null;
      const mag = target?.closest(MAGNETIC) || null;

      // 1) Todas as leituras de layout primeiro...
      const cardRect = card?.getBoundingClientRect();
      const tiltRect = tilt?.getBoundingClientRect();
      const magRect = mag?.getBoundingClientRect();

      // 2) ...depois todas as escritas (evita "layout thrashing")
      ring.current.dataset.state = target?.closest(HOVERABLE) ? "hover" : "idle";

      if (card) {
        card.style.setProperty("--mx", `${x - cardRect.left}px`);
        card.style.setProperty("--my", `${y - cardRect.top}px`);
      }

      if (lastTilt && lastTilt !== tilt) resetTilt(lastTilt);
      if (tilt) {
        const px = (x - tiltRect.left) / tiltRect.width - 0.5;
        const py = (y - tiltRect.top) / tiltRect.height - 0.5;
        tilt.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
      }
      lastTilt = tilt;

      if (lastMag && lastMag !== mag) resetMag(lastMag);
      if (mag) {
        const dx = (x - (magRect.left + magRect.width / 2)) * 0.2;
        const dy = (y - (magRect.top + magRect.height / 2)) * 0.2;
        mag.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
      }
      lastMag = mag;
    };

    const onDown = () => (ring.current.dataset.state = "down");
    const onUp = () => (ring.current.dataset.state = "idle");
    const onLeave = () => {
      visible = false;
      [dot, ring, glow].forEach((r) => r.current.classList.remove("cursor-visible"));
      if (lastTilt) resetTilt(lastTilt);
      if (lastMag) resetMag(lastMag);
      lastTilt = lastMag = null;
    };

    // Parallax por scroll
    let scrollFrame = 0;
    const parallaxEls = document.querySelectorAll("[data-parallax]");
    const parallax = () => {
      scrollFrame = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.5) return; // só anima enquanto o hero está por perto
      parallaxEls.forEach((el) => {
        el.style.translate = `0 ${(y * Number(el.dataset.parallax)).toFixed(1)}px`;
      });
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(parallax);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      root.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf);
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(fxFrame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={glow} className="cursor-glow" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" data-state="idle" aria-hidden="true">
        <i />
      </div>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

