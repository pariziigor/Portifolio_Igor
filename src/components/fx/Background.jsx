import { useEffect, useRef } from "react";

/**
 * Fundo dinâmico: rede de partículas em <canvas> que reage ao mouse.
 * - DPR limitado a 2, quantidade proporcional à área (menos partículas no mobile)
 * - Limitado a ~30fps e pausado durante o scroll (menos recálculo do blur dos cards)
 * - Pausa quando a aba está oculta; frame estático com prefers-reduced-motion
 * - Cores lidas das variáveis CSS (--c-acid / --c-violet), acompanhando o tema
 */
export function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let frame = 0;
    let colors = ["124 108 255", "192 132 252"];
    const mouse = { x: -9999, y: -9999 };
    const LINK = 130;

    const readColors = () => {
      const style = getComputedStyle(document.documentElement);
      colors = ["--c-acid", "--c-violet"].map((name) => style.getPropertyValue(name).trim());
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(Math.max((width * height) / 26000, 20), 50));
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.4 + 0.6,
        c: i % 4 === 0 ? 1 : 0,
      }));
      if (reduce) draw();
    };

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reduce) {
          // Repulsão suave do cursor
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 160 * 160) {
            const f = (1 - Math.sqrt(d2) / 160) * 0.6;
            p.x += (dx / (Math.sqrt(d2) || 1)) * f;
            p.y += (dy / (Math.sqrt(d2) || 1)) * f;
          }
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        ctx.fillStyle = `rgb(${colors[p.c]} / 0.8)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const lx = p.x - q.x;
          const ly = p.y - q.y;
          const dist = lx * lx + ly * ly;
          if (dist < LINK * LINK) {
            ctx.strokeStyle = `rgb(${colors[p.c]} / ${(1 - Math.sqrt(dist) / LINK) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
    }

    let last = 0;
    let scrollTimer = 0;
    let scrolling = false;
    const loop = (now) => {
      frame = requestAnimationFrame(loop);
      if (scrolling || now - last < 33) return; // ~30fps
      last = now;
      draw();
    };
    const onScroll = () => {
      scrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => (scrolling = false), 160);
    };
    const start = () => {
      if (!reduce && !frame) frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    readColors();
    resize();
    start();

    // Atualiza cores ao trocar de tema (classe "dark" no <html>)
    const themeObserver = new MutationObserver(() => {
      readColors();
      if (reduce) draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      themeObserver.disconnect();
      clearTimeout(scrollTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <div className="bg-blobs" aria-hidden="true" />
      <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
    </>
  );
}

