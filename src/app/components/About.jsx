import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import AboutImage from "../../assets/images/gemini-2.5-flash-image_أريد_خلفية_جميلة_واحترافية_للصورة_تخص_التكن-0 (2).jpg";
import { useTheme } from "../context/ThemeContext";

const CYAN = "#00E5CC";

const principles = [
  {
    num: "01",
    title: "PERFORMANCE FIRST",
    desc: "Every render, every bundle, every interaction is optimised for speed and efficiency.",
  },
  {
    num: "02",
    title: "DESIGN SYSTEMS",
    desc: "Consistent, scalable component libraries that teams can trust and extend.",
  },
  {
    num: "03",
    title: "FRONTEND INFRA",
    desc: "Build tooling, CI pipelines, and architecture that make shipping effortless.",
  },
];

export function About() {
  const { theme } = useTheme();
  
  return (
    <section
      id="about"
      className="relative transition-colors duration-500"
      style={{ borderBottom: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.18em",
            color: theme === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)",
          }}
        >
          // ABOUT_ME
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: theme === "dark" ? "#ffffff" : "#1A1A1A",
                marginBottom: "28px",
              }}
            >
              Building the future,
              <br />
              one component at a time.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-12"
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)",
                maxWidth: "480px",
              }}
            >
              I'm a passionate software engineer with over 5 years of experience
              crafting digital products that make a difference. I specialize in
              React, Next.js, and TypeScript, building everything from sleek
              landing pages to complex enterprise applications. When I'm not
              coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer
              community.
            </motion.p>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative overflow-hidden"
            style={{
              border: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)",
              height: "480px",
            }}
          >
            <ImageWithFallback
              src={AboutImage}
              alt="Architecture"
              className="w-full h-full object-cover"
              style={{ opacity: 0.5, mixBlendMode: "luminosity" }}
            />
            {/* Grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: theme === "dark"
                  ? "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
                  : "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            {/* Cyan badge top-left */}
            <div
              className="absolute top-5 left-5"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.14em",
                color: "#080808",
                backgroundColor: CYAN,
                padding: "4px 12px",
              }}
            >
              LIVE
            </div>
          </motion.div>
        </div>

        {/* Principles list */}
        <div className="space-y-0">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 + 0.25, duration: 0.6 }}
              className="group flex items-start gap-6 py-5 relative"
              style={{
                borderTop: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)",
                cursor: "default",
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: CYAN,
                  flexShrink: 0,
                  placeSelf: "center",
                }}
              >
                {principle.num}
              </div>

              {/* Content */}
              <div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    color: theme === "dark" ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.75)",
                    marginBottom: "4px",
                  }}
                >
                  {principle.title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: theme === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)",
                  }}
                >
                  {principle.desc}
                </p>
              </div>

              {/* Hover accent */}
              <div
                className="absolute left-[-5px] top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: CYAN }}
              />
            </motion.div>
          ))}
          <div style={{ borderTop: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }} />
        </div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-center justify-center mt-9">
            <div 
              className="rounded-2xl p-6 flex items-center justify-center w-fit transition-all duration-500"
              style={{
                backgroundColor: theme === "dark" ? "rgba(26, 35, 41, 0.5)" : "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(16px)",
                border: theme === "dark" ? "1px solid rgba(36, 43, 50, 0.5)" : "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: theme === "dark" 
                  ? "0 0 20px rgba(0, 229, 204, 0.2), inset 0 0 20px rgba(0, 229, 204, 0.05)"
                  : "0 0 20px rgba(0, 229, 204, 0.15), inset 0 0 20px rgba(0, 229, 204, 0.03)"
              }}
            >
              <p 
                className="text-lg font-medium italic"
                style={{
                  color: theme === "dark" ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.8)"
                }}
              >
                "My mission is to create digital experiences that are not just
                functional, but truly delightful."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
