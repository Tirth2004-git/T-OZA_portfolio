import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import CodingProfiles from "./sections/CodingProfiles";
import GoogleArcade from "./sections/GoogleArcade";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import ParticleBackground from "./components/ParticleBackground";
import CyberGrid from "./components/CyberGrid";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  
  // Spring smooth scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden
      ${theme === "dark" 
        ? "bg-[#020408] text-[#e8f4f8]" 
        : "bg-[#f4f7f6] text-[#0b132b]"
      }
    `}>
      {/* Glow Scroll Progress Bar at the top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[200] origin-left bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink shadow-[0_0_10px_rgba(0,240,255,0.8)]"
      />

      {/* Cyber Noise texture and Scanline overlays (configured via tailwind/css) */}
      <div className="cyber-overlay pointer-events-none fixed inset-0 z-40 opacity-[0.03] dark:opacity-[0.05]" />
      <div className="scanlines-overlay pointer-events-none fixed inset-0 z-[41] opacity-[0.02] dark:opacity-[0.03]" />

      {/* Interactive Background Systems */}
      <CyberGrid />
      <ParticleBackground />

      {/* Main UI Layout */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto">
          <Hero />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <About />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <Skills />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <Projects />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <Experience />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <Certifications />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <GoogleArcade />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <CodingProfiles />
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-border/40 to-transparent" />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
