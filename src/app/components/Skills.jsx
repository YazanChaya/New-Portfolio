import { motion } from "motion/react";
import { SkillsSphere } from "./SkillsSphere";
import { useTheme } from "../context/ThemeContext";

const CYAN   = "#00E5CC";
const PURPLE = "#8B5CF6";

const skillGroups = [
  {
    num:   "01",
    color: CYAN,
    label: "FRONTEND",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    num:   "02",
    color: PURPLE,
    label: "TOOLS & ECOSYSTEM",
    items: ["Git & GitHub", "Figma", "Vite", "Redux", "REST API", "GraphQL"],
  },
  {
    num:   "03",
    color: "#F472B6",
    label: "PERFORMANCE & UX",
    items: ["Web Vitals", "Accessibility", "Animation", "SEO", "Testing", "CI/CD"],
  },
];

export function Skills() {
  const { theme } = useTheme();
  
  return (
    <section
      id="skills"
      className="relative transition-colors duration-500"
      style={{ borderBottom: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
    >
      {/* ── Section label bar ── */}
      <div
        className="px-6 md:px-12 lg:px-20 pt-14 pb-10"
        style={{ borderBottom: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily:    "'IBM Plex Mono', monospace",
            fontSize:      "11px",
            letterSpacing: "0.18em",
            color:         theme === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)",
          }}
        >
          // SKILLS_//
        </motion.p>
      </div>

      {/* ── Two-column layout ── */}
      <div className="grid lg:grid-cols-2" style={{ minHeight: "580px" }}>

        {/* Left — text content */}
        <div
          className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16"
          style={{ borderRight: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize:      "clamp(38px, 5.5vw, 64px)",
              fontWeight:    700,
              lineHeight:    1.05,
              letterSpacing: "-0.025em",
              color:         theme === "dark" ? "#ffffff" : "#1A1A1A",
              marginBottom:  "18px",
            }}
          >
            Technical
            <br />
            <span style={{ color: CYAN, fontStyle: "italic" }}>Expertise.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{
              fontSize:     "14px",
              lineHeight:   1.8,
              color:        theme === "dark" ? "rgba(255,255,255,0.36)" : "rgba(0,0,0,0.45)",
              maxWidth:     "380px",
              marginBottom: "44px",
            }}
          >
            A constellation of modern technologies. Hover the sphere on the right to explore each skill up close.
          </motion.p>

          {/* Skill group list */}
          <div className="space-y-0">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.13 + 0.28, duration: 0.55 }}
                className="group py-5 relative"
                style={{ borderTop: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
              >
                {/* Accent line on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: group.color }}
                />

                {/* Row: number + label */}
                <div className="flex items-center gap-4 mb-3 pl-1">
                  <span
                    style={{
                      fontFamily:    "'IBM Plex Mono', monospace",
                      fontSize:      "10px",
                      letterSpacing: "0.1em",
                      color:         group.color,
                    }}
                  >
                    {group.num}//
                  </span>
                  <span
                    style={{
                      fontFamily:    "'IBM Plex Mono', monospace",
                      fontSize:      "10px",
                      letterSpacing: "0.18em",
                      color:         theme === "dark" ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.6)",
                    }}
                  >
                    {group.label}
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 pl-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontFamily:    "'IBM Plex Mono', monospace",
                        fontSize:      "11px",
                        letterSpacing: "0.04em",
                        color:         theme === "dark" ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.5)",
                        border:        theme === "dark" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.12)",
                        padding:       "3px 10px",
                        transition:    "color 0.3s, border-color 0.3s",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }} />
          </div>
        </div>

        {/* Right — 3D Sphere */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative transition-colors duration-500"
          style={{
            backgroundColor: theme === "dark" ? "#0F0F0F" : "#DDE1E6",
            minHeight: "520px",
            height: "100%",
          }}
        >
          {/* Grid overlay for texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: theme === "dark"
                ? "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
                : "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* The sphere canvas */}
          <SkillsSphere />

          {/* Corner labels */}
          <div
            className="absolute bottom-5 right-6 pointer-events-none"
            style={{
              fontFamily:    "'IBM Plex Mono', monospace",
              fontSize:      "10px",
              letterSpacing: "0.14em",
              color:         theme === "dark" ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.2)",
            }}
          >
            INTERACTIVE_SPHERE //
          </div>

          <div
            className="absolute top-5 left-6 pointer-events-none flex items-center gap-2"
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: CYAN }}
            />
            <span
              style={{
                fontFamily:    "'IBM Plex Mono', monospace",
                fontSize:      "10px",
                letterSpacing: "0.14em",
                color:         theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)",
              }}
            >
              LIVE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
