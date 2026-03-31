import { motion } from "motion/react";
import HeroImage from "../../assets/images/photo_2026-02-10_16-24-08-removebg-preview.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../context/ThemeContext";

const CYAN = "#00E5CC";

export function Hero() {
  const { theme } = useTheme();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col transition-colors duration-500"
      style={{ paddingTop: "56px" }}
    >
      <div className="flex-1 grid md:grid-cols-2">
        {/* Left content */}
        <div
          className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 transition-colors duration-500"
          style={{ borderRight: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: CYAN }}
            />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
              }}
            >
              STATUS: LIVE // 2026
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: "clamp(44px, 7vw, 88px)",
                fontWeight: 700,
                lineHeight: 1.02,
                color: theme === "dark" ? "#ffffff" : "#1A1A1A",
                letterSpacing: "-0.02em",
              }}
            >
              Crafting digital
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{
                fontSize: "clamp(44px, 7vw, 88px)",
                fontWeight: 700,
                lineHeight: 1.02,
                color: CYAN,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
              }}
            >
              experience with precision.
            </motion.h1>
          </div>

          {/* Explore CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-10"
          >
            <a
              href="#projects"
              style={{
                display: "inline-block",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.14em",
                color: CYAN,
                border: `1px solid ${CYAN}`,
                padding: "12px 28px",
                textDecoration: "none",
                fontWeight: 400,
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = CYAN;
                el.style.color = "#080808";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = CYAN;
              }}
            >
              EXPLORE_WORK
            </a>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ maxWidth: "420px" }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: theme === "dark" ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)",
              }}
            >
              Hi, I'm Yazan Chaya - a Frontend Developer specializing in React,
              Next.js, and TypeScript. I build scalable, performant web
              applications that users love.
            </p>
          </motion.div>
        </div>

        {/* Right side — dark panel with image overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative block transition-colors duration-500"
          style={{ backgroundColor: theme === "dark" ? "#0d0d0d" : "#E8EAED" }}
        >
          <ImageWithFallback
            src={HeroImage}
            alt="Abstract tech visual"
            className="w-full h-full object-cover"
            style={{ opacity: theme === "dark" ? 0.65 : 0.5 }}
          />
          {/* Overlay grid lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: theme === "dark"
                ? "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
                : "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Cyan glow at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: `linear-gradient(to top, ${CYAN}${theme === "dark" ? "18" : "12"}, transparent)`,
            }}
          />
          {/* Corner label */}
          <div
            className="absolute bottom-8 right-8"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.25)",
            }}
          >
            REACT.JS // TAILWIND.CSS
          </div>
        </motion.div>
      </div>

      {/* Bottom divider line */}
      <div
        className="w-full transition-colors duration-500"
        style={{ height: "1px", backgroundColor: theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)" }}
      />
    </section>
  );
}
