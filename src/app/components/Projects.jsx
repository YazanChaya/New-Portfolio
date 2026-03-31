import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Project1 from "../../assets/images/projects/Project2.png";
import Project2 from "../../assets/images/projects/Project1.png";
import Project3 from "../../assets/images/projects/Project4.png";
import Project4 from "../../assets/images/projects/Project5.png";
import Project5 from "../../assets/images/projects/Project3.png";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const CYAN = "#00E5CC";

const projects = [
  {
    index: "01",
    label: "FEAT_PROJECT_01",
    title: "React Commerce",
    subtitle: "Platform",
    quote:
      '"A high-performance e-commerce system designed for the curation of digital products with seamless checkout flows."',
    tags: ["REACT.JS", "TAILWIND", "JAVASCRIPT", "REDUX"],
    image: Project1,
    href: "https://full-react-ecommerce.vercel.app/",
  },
  {
    index: "02",
    label: "FEAT_PROJECT_02",
    title: "DriveLine",
    subtitle: "Luxury Travel Service",
    quote:
      '"A premium service platform for booking exotic vehicles, private aviation, and yacht charters. Features a sleek, responsive interface that highlights high-end travel experiences and concierge-level service."',
    tags: ["REACT.JS", "TAILWIND"],
    image: Project2,
    href: "https://driveline-final-project-gbf8.vercel.app/",
  },
  {
    index: "03",
    label: "FEAT_PROJECT_03",
    title: "Weather App",
    subtitle: "Website",
    quote:
      '"A functional weather dashboard that fetches real-time weather data based on user input or geolocation. Displays current conditions, temperature, and forecasts with a responsive UI."',
    tags: ["REACT", "MUI", "REDUX", "AXIOS"],
    image: Project3,
    href: "https://weather-app-project-react.vercel.app/",
  },
  {
    index: "04",
    label: "FEAT_PROJECT_04",
    title: "EduLearn",
    subtitle: "Course Platform",
    quote:
      '"A modern educational platform showcasing courses, trainers, and student statistics. Features a responsive layout with course cards, pricing, and instructor information."',
    tags: ["REACT", "TAILWIND", "SWIPPER", "AOS", "REACT ROUTER", "KIRO IDE"],
    image: Project4,
    href: "https://yazan-chaya-final-task-kiro.vercel.app/",
  },
  {
    index: "04",
    label: "FEAT_PROJECT_04",
    title: "To-Do List",
    subtitle: "App",
    quote:
      '"A clean and intuitive task management application that allows users to add, complete, and delete tasks. Demonstrates core front-end functionality with persistent state management."',
    tags: ["REACT", "MUI"],
    image: Project5,
    href: "https://to-do-list-project-react.vercel.app/",
  },
];

export function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative">
      {projects.map((project, i) => (
        <motion.div
          key={project.index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative transition-colors duration-500"
          style={{
            borderBottom:
              theme === "dark"
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid rgba(0,0,0,0.08)",
            backgroundColor:
              i % 2 === 1
                ? theme === "dark"
                  ? "rgba(255,255,255,0.01)"
                  : "rgba(0,0,0,0.015)"
                : "transparent",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                color:
                  theme === "dark"
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(0,0,0,0.35)",
              }}
            >
              {project.label}
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
              {/* Left: large title */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  style={{
                    fontSize: "clamp(56px, 9vw, 110px)",
                    fontWeight: 700,
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                    color: theme === "dark" ? "#ffffff" : "#1A1A1A",
                  }}
                >
                  {project.title}
                  <br />
                  <span
                    style={{
                      color:
                        theme === "dark"
                          ? "rgba(255,255,255,0.18)"
                          : "rgba(0,0,0,0.2)",
                    }}
                  >
                    {project.subtitle}
                  </span>
                </motion.h2>
              </div>

              {/* Right: quote + button + tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p
                  className="mb-8"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.75,
                    color:
                      theme === "dark"
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(0,0,0,0.5)",
                    fontStyle: "italic",
                    maxWidth: "400px",
                  }}
                >
                  {project.quote}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.14em",
                      color: "#080808",
                      backgroundColor: CYAN,
                      padding: "12px 28px",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    VIEW_PROJECT
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        color:
                          theme === "dark"
                            ? "rgba(255,255,255,0.3)"
                            : "rgba(0,0,0,0.4)",
                        border:
                          theme === "dark"
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "1px solid rgba(0,0,0,0.12)",
                        padding: "4px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Project image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 relative overflow-hidden group"
              style={{
                border:
                  theme === "dark"
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid rgba(0,0,0,0.08)",
                height: "260px",
              }}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ opacity: 0.35, mixBlendMode: "luminosity" }}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full transition-all z-100 cursor-pointer"
                  style={{
                    backgroundColor:
                      theme === "dark"
                        ? "rgba(26, 35, 41, 0.5)"
                        : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(16px)",
                    border:
                      theme === "dark"
                        ? "1px solid rgba(36, 43, 50, 0.5)"
                        : "1px solid rgba(0, 0, 0, 0.08)",
                    color: CYAN,
                  }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              {/* Cyan overlay glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, ${CYAN}${
                    theme === "dark" ? "15" : "10"
                  } 0%, transparent 70%)`,
                }}
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    theme === "dark"
                      ? "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
                      : "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Index watermark */}
              <div
                className="absolute bottom-4 right-6"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  color:
                    theme === "dark"
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(0,0,0,0.2)",
                }}
              >
                TECH_SPEAKROOM
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
