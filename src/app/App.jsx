import { DotGridBackground } from "./components/DotGridBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen overflow-x-hidden transition-colors duration-500"
      style={{
        backgroundColor: theme === "dark" ? "#080808" : "#F8F9FA",
        color: theme === "dark" ? "#ffffff" : "#1A1A1A",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Fixed interactive dot-grid — sits below all content */}
      <DotGridBackground />

      {/* All page content above the dot grid */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
