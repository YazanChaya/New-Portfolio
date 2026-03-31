import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const CYAN = "#00E5CC";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "HOME_//", href: "#home" },
    { name: "ABOUT_//", href: "#about" },
    { name: "PROJECTS_//", href: "#projects" },
    { name: "SKILLS_//", href: "#skills" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: theme === "dark" ? "rgba(8,8,8,0.9)" : "rgba(248,249,250,0.95)",
        borderBottom: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              color: CYAN,
              fontWeight: 400,
              textDecoration: "none",
            }}
          >
            YAZAN_CHAYA //
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="relative group"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: theme === "dark" ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = CYAN;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme === "dark" ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)";
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center justify-center"
            style={{
              width: "36px",
              height: "36px",
              border: theme === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
              backgroundColor: "transparent",
              color: theme === "dark" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = CYAN;
              e.currentTarget.style.color = CYAN;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
              e.currentTarget.style.color = theme === "dark" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)";
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Hire CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:block"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "#080808",
              backgroundColor: CYAN,
              padding: "6px 18px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            HIRE_//
          </motion.a>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              style={{ 
                color: theme === "dark" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px"
              }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ 
                color: theme === "dark" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-4 pt-2"
            style={{ borderTop: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  color: theme === "dark" ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)",
                  textDecoration: "none",
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-3"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#080808",
                backgroundColor: CYAN,
                padding: "6px 18px",
                textDecoration: "none",
              }}
            >
              HIRE_//
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
