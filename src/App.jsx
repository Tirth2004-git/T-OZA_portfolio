import React, { useEffect } from "react";
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

import CyberGrid from "./components/CyberGrid";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();

  // Silent fire-and-forget visitor notification ping on page load
  useEffect(() => {
    try {
      fetch("/api/visitor-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: window.location.pathname || "/",
          referrer: document.referrer || "Direct Visit",
        }),
        keepalive: true,
      }).catch(() => {
        // Fail completely silently for the visitor
      });
    } catch (e) {
      // Fail silently
    }
  }, []);

  // Spring smooth scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  return (
    <div className="relative min-h-screen bg-theme-bg text-theme-text transition-colors duration-200 overflow-x-hidden">
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left bg-theme-accent"
      />

      {/* Subtle Signal Grid & Ambient Background */}
      <CyberGrid />

      {/* Main UI Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-7xl mx-auto w-full">
          <Hero />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <About />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <Projects />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <Skills />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <Experience />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <Certifications />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <GoogleArcade />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <CodingProfiles />

          <div className="h-[1px] w-full max-w-6xl mx-auto bg-theme-border/60" />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

