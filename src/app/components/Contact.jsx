import { motion } from "motion/react";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { useTheme } from "../context/ThemeContext";

const CYAN = "#00E5CC";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Github, label: "GITHUB", href: "https://github.com/YazanChaya" },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/yazan-chaya-012b421a5/",
    },
    {
      icon: Instagram,
      label: "INSTAGRAM",
      href: "https://www.instagram.com/yazanchaya/",
    },
    {
      icon: PiWhatsappLogoLight,
      label: "WHATSAPP",
      href: "https://wa.me/+963994701005",
    },
    {
      icon: Facebook,
      label: "FACEBOOK",
      href: "https://www.facebook.com/yazan.chaya",
    },
    {
      icon: Mail,
      label: "MAIL",
      href: "mailto:yazan.chaya73@gmail.com",
    },
  ];

  return (
    <section id="contact" className="relative">
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
            color:
              theme === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)",
          }}
        >
          // CONTACT_//
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: theme === "dark" ? "#ffffff" : "#1A1A1A",
                marginBottom: "24px",
              }}
            >
              Let's Build
              <br />
              <span style={{ color: CYAN, fontStyle: "italic" }}>
                Something.
              </span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color:
                  theme === "dark"
                    ? "rgba(255,255,255,0.38)"
                    : "rgba(0,0,0,0.5)",
                maxWidth: "400px",
                marginBottom: "40px",
              }}
            >
              Open for freelance projects, full-time roles, and collaboration on
              ambitious ideas. Reach out and let's talk architecture.
            </p>

            {/* Availability status */}
            <div
              className="flex items-center gap-3 mb-10"
              style={{
                border:
                  theme === "dark"
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0,0,0,0.12)",
                padding: "14px 20px",
                display: "inline-flex",
              }}
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
                  color:
                    theme === "dark"
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(0,0,0,0.5)",
                }}
              >
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 mt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blanck"
                  className="group flex items-center gap-2"
                  style={{
                    border:
                      theme === "dark"
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "1px solid rgba(0,0,0,0.12)",
                    padding: "10px 16px",
                    textDecoration: "none",
                    color:
                      theme === "dark"
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(0,0,0,0.5)",
                    transition: "border-color 0.3s, color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = CYAN;
                    e.currentTarget.style.color = CYAN;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      theme === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.12)";
                    e.currentTarget.style.color =
                      theme === "dark"
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(0,0,0,0.5)";
                  }}
                >
                  <social.icon size={15} style={{ color: "inherit" }} />
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      color: "inherit",
                    }}
                  >
                    {social.label}
                  </span>
                  <ArrowUpRight size={12} style={{ color: "inherit" }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Name */}
              <div
                style={{
                  borderBottom:
                    theme === "dark"
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.12)",
                }}
                className="pb-6 mb-6"
              >
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color:
                      theme === "dark"
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,0,0,0.4)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  NAME_//
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: theme === "dark" ? "#ffffff" : "#1A1A1A",
                    fontSize: "16px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                />
              </div>

              {/* Email */}
              <div
                style={{
                  borderBottom:
                    theme === "dark"
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.12)",
                }}
                className="pb-6 mb-6"
              >
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color:
                      theme === "dark"
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,0,0,0.4)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  EMAIL_//
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: theme === "dark" ? "#ffffff" : "#1A1A1A",
                    fontSize: "16px",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                />
              </div>

              {/* Message */}
              <div
                style={{
                  borderBottom:
                    theme === "dark"
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.12)",
                }}
                className="pb-6 mb-8"
              >
                <label
                  htmlFor="contact-message"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color:
                      theme === "dark"
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,0,0,0.4)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  MESSAGE_//
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: theme === "dark" ? "#ffffff" : "#1A1A1A",
                    fontSize: "16px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-3 group"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  color: sent ? "#080808" : CYAN,
                  backgroundColor: sent ? CYAN : "transparent",
                  border: `1px solid ${CYAN}`,
                  padding: "14px 32px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!sent) {
                    e.currentTarget.style.backgroundColor = CYAN;
                    e.currentTarget.style.color = "#080808";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!sent) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = CYAN;
                  }
                }}
              >
                {sent ? "MESSAGE_SENT //" : "SEND_MESSAGE"}
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop:
            theme === "dark"
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(0,0,0,0.08)",
          padding: "24px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color:
                theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)",
            }}
          >
            YAZAN_CHAYA. ALL_RIGHTS_RESERVED.
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color:
                theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)",
            }}
          >
            © 2026 // YAZAN_CHAYA
          </span>
        </div>
      </div>
    </section>
  );
}
