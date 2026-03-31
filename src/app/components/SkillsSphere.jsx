import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const SKILLS = [
  { name: "React.js",   color: "#61DAFB" },
  { name: "TypeScript", color: "#4F8EF7" },
  { name: "JavaScript", color: "#F7C948" },
  { name: "Next.js",    color: "#C8C8C8" },
  { name: "Tailwind",   color: "#38BDF8" },
  { name: "HTML5",      color: "#F06529" },
  { name: "CSS3",       color: "#5B9BD5" },
  { name: "Node.js",    color: "#6DA55F" },
  { name: "Git",        color: "#F1502F" },
  { name: "Figma",      color: "#F472B6" },
  { name: "Redux",      color: "#9B72CF" },
  { name: "Vite",       color: "#BD34FE" },
];

/** Evenly distribute N points on a unit sphere using the Fibonacci lattice */
function fibSphere(n) {
  const ga = Math.PI * (3 - Math.sqrt(5)); // golden angle
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = ga * i;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });
}

/** Rotate a 3D point: first around Y axis (ry), then around X axis (rx) */
function rot3d(x, y, z, ry, rx) {
  const x1 =  x * Math.cos(ry) + z * Math.sin(ry);
  const z1 = -x * Math.sin(ry) + z * Math.cos(ry);
  const y2 =  y * Math.cos(rx) - z1 * Math.sin(rx);
  const z2 =  y * Math.sin(rx) + z1 * Math.cos(rx);
  return { x: x1, y: y2, z: z2 };
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

/** Draw a rounded pill shape on canvas */
function drawPill(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function SkillsSphere() {
  const canvasRef   = useRef(null);
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const positions = fibSphere(SKILLS.length);
    let raf = 0;
    let W = 0, H = 0;

    let rotY      = 0;
    let rotX      = 0;
    let targetRotX = 0;
    let hoveredIdx = -1;

    /* ── Resize ───────────────────────────────────────────────── */
    function resize() {
      const rect = container.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width  = W;
      canvas.height = H;
    }

    /* ── Wireframe sphere (lat/lon lines) ─────────────────────── */
    function drawWireframe(cx, cy, R) {
      const LSTEPS = 48;
      const latDegs = [-60, -30, 0, 30, 60];
      for (const deg of latDegs) {
        const latRad = (deg * Math.PI) / 180;
        const yLat   = Math.sin(latRad);
        const rLat   = Math.cos(latRad);
        let prevSx = 0, prevSy = 0;
        for (let i = 0; i <= LSTEPS; i++) {
          const theta = (i / LSTEPS) * 2 * Math.PI;
          const x = rLat * Math.cos(theta);
          const z = rLat * Math.sin(theta);
          const p = rot3d(x, yLat, z, rotY, rotX);
          const sx = cx + p.x * R;
          const sy = cy - p.y * R;
          const depth = (p.z + 1) / 2;
          if (i > 0) {
            ctx.globalAlpha = theme === "dark" ? (0.06 + depth * 0.18) : (0.08 + depth * 0.22);  // زيادة الوضوح في الوضع الفاتح
            ctx.strokeStyle = theme === "dark" ? "rgb(0,229,204)" : "rgb(0,180,160)";
            ctx.lineWidth   = theme === "dark" ? 0.8 : 0.85;  // خطوط أسمك في الوضع الفاتح
            ctx.beginPath();
            ctx.moveTo(prevSx, prevSy);
            ctx.lineTo(sx, sy);
            ctx.stroke();
          }
          prevSx = sx; prevSy = sy;
        }
      }

      const ASTEPS  = 36;
      const lonDegs = [0, 45, 90, 135, 180, 225, 270, 315];
      for (const deg of lonDegs) {
        const lonRad = (deg * Math.PI) / 180;
        let prevSx = 0, prevSy = 0;
        for (let i = 0; i <= ASTEPS; i++) {
          const phi = (i / ASTEPS) * Math.PI;
          const x = Math.sin(phi) * Math.cos(lonRad);
          const y = Math.cos(phi);
          const z = Math.sin(phi) * Math.sin(lonRad);
          const p = rot3d(x, y, z, rotY, rotX);
          const sx = cx + p.x * R;
          const sy = cy - p.y * R;
          const depth = (p.z + 1) / 2;
          if (i > 0) {
            ctx.globalAlpha = theme === "dark" ? (0.05 + depth * 0.15) : (0.06 + depth * 0.18);  // زيادة الوضوح في الوضع الفاتح
            ctx.strokeStyle = theme === "dark" ? "rgb(139,92,246)" : "rgb(120,80,220)";
            ctx.lineWidth   = theme === "dark" ? 0.65 : 0.7;  // خطوط أسمك في الوضع الفاتح
            ctx.beginPath();
            ctx.moveTo(prevSx, prevSy);
            ctx.lineTo(sx, sy);
            ctx.stroke();
          }
          prevSx = sx; prevSy = sy;
        }
      }
    }

    /* ── Skill pill labels ────────────────────────────────────── */
    function drawSkills(cx, cy, R) {
      const projected = positions.map((pos, i) => {
        const p     = rot3d(pos.x, pos.y, pos.z, rotY, rotX);
        const sx    = cx + p.x * R;
        const sy    = cy - p.y * R;
        const depth = (p.z + 1) / 2;
        const isHov  = i === hoveredIdx;
        const scale   = isHov ? (0.5 + depth * 0.65) * 1.35 : 0.5 + depth * 0.65;
        const opacity = isHov
          ? Math.min(1, (0.08 + depth * 0.87) * 1.6)
          : 0.08 + depth * 0.87;
        return { idx: i, sx, sy, depth, scale, opacity };
      });

      projected.sort((a, b) => a.depth - b.depth);

      for (const p of projected) {
        const skill = SKILLS[p.idx];
        const { r, g, b } = hexToRgb(skill.color);
        const s  = p.scale;
        const fs = Math.max(8, Math.round(10 * s));

        ctx.font = `500 ${fs}px 'IBM Plex Mono', monospace`;
        const tw    = ctx.measureText(skill.name).width;
        const padH  = 12 * s;
        const padV  = 6  * s;
        const pillW = tw + padH * 2;
        const pillH = fs + padV * 2;
        const rad   = pillH / 2;
        const px    = p.sx - pillW / 2;
        const py    = p.sy - pillH / 2;

        ctx.globalAlpha = p.opacity;

        drawPill(ctx, px, py, pillW, pillH, rad);
        const bgOpacity = theme === "dark" ? 0.1 : 0.15;
        ctx.fillStyle   = `rgba(${r},${g},${b},${bgOpacity})`;
        ctx.fill();

        const borderOpacity = theme === "dark" ? 0.45 : 0.55;
        ctx.strokeStyle = `rgba(${r},${g},${b},${borderOpacity})`;
        ctx.lineWidth   = 0.85;
        ctx.stroke();

        ctx.fillStyle    = `rgb(${r},${g},${b})`;
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(skill.name, p.sx, p.sy);
      }
    }

    /* ── Main render loop ─────────────────────────────────────── */
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1;

      const cx = W / 2;
      const cy = H / 2;
      const R  = Math.min(W, H) * 0.37;

      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.1);
      if (theme === "dark") {
        grd.addColorStop(0,   "rgba(0,229,204,0.12)");
        grd.addColorStop(0.5, "rgba(139,92,246,0.08)");
        grd.addColorStop(1,   "rgba(0,0,0,0)");
      } else {
        grd.addColorStop(0,   "rgba(0,229,204,0.15)");  // زيادة الوضوح في الوضع الفاتح
        grd.addColorStop(0.5, "rgba(139,92,246,0.1)");  // زيادة الوضوح في الوضع الفاتح
        grd.addColorStop(1,   "rgba(0,0,0,0)");
      }
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2);
      ctx.fill();

      drawWireframe(cx, cy, R);
      ctx.globalAlpha = 1;
      drawSkills(cx, cy, R);
      ctx.globalAlpha = 1;

      rotY += 0.0045;
      rotX += (targetRotX - rotX) * 0.032;

      raf = requestAnimationFrame(draw);
    }

    /* ── Mouse interaction ────────────────────────────────────── */
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;

      const dy = (e.clientY - cy) / (rect.height / 2);
      targetRotX = dy * 0.38;

      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const R  = Math.min(rect.width, rect.height) * 0.37;
      const localCx = rect.width  / 2;
      const localCy = rect.height / 2;

      let closest = -1, closestDist = 44;
      for (let i = 0; i < positions.length; i++) {
        const p  = rot3d(positions[i].x, positions[i].y, positions[i].z, rotY, rotX);
        const sx = localCx + p.x * R;
        const sy = localCy - p.y * R;
        const d  = Math.sqrt((mx - sx) ** 2 + (my - sy) ** 2);
        if (d < closestDist) { closestDist = d; closest = i; }
      }
      hoveredIdx = closest;
    }

    function onMouseLeave() {
      targetRotX = 0;
      hoveredIdx = -1;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    resize();
    draw();
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        cursor: "crosshair",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
