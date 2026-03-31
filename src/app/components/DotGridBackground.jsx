import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export function DotGridBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 34;
    const DOT_R = 1.4;
    const MOUSE_RADIUS = 130;
    const PUSH = 14;
    const LERP = 0.1;

    let W = 0;
    let H = 0;
    let mx = -9999;
    let my = -9999;
    let raf = 0;

    let dots = [];

    function build() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      dots = [];
      for (let y = 0; y <= H + SPACING; y += SPACING) {
        for (let x = 0; x <= W + SPACING; x += SPACING) {
          dots.push({ bx: x, by: y, cx: x, cy: y });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const R2 = MOUSE_RADIUS * MOUSE_RADIUS;

      for (const d of dots) {
        const dx = d.bx - mx;
        const dy = d.by - my;
        const dist2 = dx * dx + dy * dy;

        let tx = d.bx;
        let ty = d.by;

        if (dist2 < R2) {
          const dist = Math.sqrt(dist2);
          const proximity = 1 - dist / MOUSE_RADIUS;
          const f = proximity * PUSH;
          if (dist > 0.01) {
            tx = d.bx + (dx / dist) * f;
            ty = d.by + (dy / dist) * f;
          }
        }

        d.cx += (tx - d.cx) * LERP;
        d.cy += (ty - d.cy) * LERP;

        const nearDist = Math.sqrt((d.cx - mx) ** 2 + (d.cy - my) ** 2);
        const nearProx = Math.max(0, 1 - nearDist / MOUSE_RADIUS);
        
        let r, g, b, alpha;
        
        if (theme === "dark") {
          // Dark theme: violet to cyan - always visible
          const baseAlpha = 0.15 + nearProx * 0.45;  // زيادة الشفافية الأساسية
          r = Math.round(139 + nearProx * -43);  // 139 → 96
          g = Math.round(92  + nearProx * 130);   // 92  → 222
          b = Math.round(246 + nearProx * 8);     // 246 → 254
          alpha = baseAlpha;
        } else {
          // Light theme: soft blue to cyan
          const baseAlpha = 0.12 + nearProx * 0.5;
          r = Math.round(100 + nearProx * -4);    // 100 → 96
          g = Math.round(150 + nearProx * 72);    // 150 → 222
          b = Math.round(220 + nearProx * 34);    // 220 → 254
          alpha = baseAlpha;
        }

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.beginPath();
        ctx.arc(d.cx, d.cy, DOT_R + nearProx * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    function onMove(e) { mx = e.clientX; my = e.clientY; }
    function onLeave()  { mx = -9999; my = -9999; }
    function onResize() { build(); }

    build();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none transition-opacity duration-500"
      style={{ zIndex: 1 }}
    />
  );
}
