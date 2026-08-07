import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";
import AnimatedButton from "../components/AnimatedButton";

// Typing Effect Component
const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
  }, [text]);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text]);

  return <span>{displayedText}</span>;
};

// CountUp Component
const CountUp = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(10, Math.floor(totalMiliseconds / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Floating tags mapping
  const floatingTags = [
    { name: "React.js", x: "-110px", y: "-90px", delay: 0 },
    { name: "Node.js", x: "120px", y: "-70px", delay: 0.5 },
    { name: "MongoDB", x: "-120px", y: "80px", delay: 1 },
    { name: "Express.js", x: "110px", y: "70px", delay: 1.5 },
    { name: "Tailwind CSS", x: "0px", y: "-130px", delay: 2 },
  ];

  return (
    <section
      id="hero"
      className="min-height-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Hero Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="font-mono text-xs md:text-sm text-cyber-cyan tracking-[0.25em] uppercase mb-4"
          >
            [ <TypingText text=" FULL STACK DEVELOPER " /> ]
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-4"
          >
            TIRTH
            <div className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.4)] relative inline-block select-none animate-pulse-slow">
              OZA
            </div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-syne font-semibold text-lg md:text-xl text-cyber-muted mb-4 tracking-wide"
          >
            Full Stack Developer &amp; AI Enthusiast
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-cyber-muted max-w-[460px] leading-relaxed mb-8"
          >
            Crafting scalable, user-focused web applications with modern technologies. Passionate about turning complex problems into elegant digital experiences.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10"
          >
            <AnimatedButton variant="primary" href="#projects">
              VIEW PROJECTS
            </AnimatedButton>
            <AnimatedButton variant="ghost" href="/img/Tirth_resume.jpg" download="Tirth_Oza_Resume.jpg">
              DOWNLOAD RESUME
            </AnimatedButton>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 items-center mb-10 text-cyber-muted"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">CONNECT //</span>
            <a
              href="https://github.com/Tirth2004-git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-cyber-cyan hover:drop-shadow-[0_0_8px_#00f0ff] transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/oza-tirth-28b031269"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-cyber-cyan hover:drop-shadow-[0_0_8px_#00f0ff] transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/OzaTirth_2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-cyber-cyan hover:drop-shadow-[0_0_8px_#00f0ff] transition-all"
            >
              <FaCode />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/ozatirth51/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-cyber-cyan hover:drop-shadow-[0_0_8px_#00f0ff] transition-all"
            >
              <SiGeeksforgeeks />
            </a>
          </motion.div>

          {/* Counters Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-cyber-border/40 max-w-[500px]"
          >
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-orbitron font-black text-2xl md:text-3xl text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
                  {stat.countUp ? <CountUp value={stat.value} /> : stat.value}
                  {stat.countUp && "+"}
                </span>
                <span className="font-mono text-[9px] text-cyber-muted uppercase tracking-wider mt-1 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Right Visual */}
        <div className="hidden md:flex justify-center items-center relative h-[450px]">
          {/* Animated Glowing Orbs */}
          <div className="relative w-[580px] h-[780px]">
            {/* Outer Spinning Ring */}
            {/* <motion.div
              className="absolute inset-[-20px] rounded-full border border-dashed border-cyber-cyan/35"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            /> */}
            {/* Mid Spinning Ring */}
            {/* <motion.div
              className="absolute inset-[-10px] rounded-full border border-cyber-purple/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            /> */}
            
            {/* Core Avatar Container (Static white shadow with transparent background) */}
            <div className="absolute inset-[15%] overflow-hidden flex items-center justify-center bg-transparent">
              <img
                src="/img/Oza_Tirth.png"
                alt="Tirth Oza"
                className="w-full h-full object-cover opacity-100 select-none pointer-events-none"
              />
            </div>

            {/* Orbiting Tech Tags
            {floatingTags.map((tag, idx) => (
              <motion.div
                key={idx}
                className="absolute font-mono text-[9px] font-semibold text-cyber-cyan bg-cyber-surface/90 border border-cyber-cyan/30 px-2.5 py-1 rounded-sm shadow-[0_0_10px_rgba(0,240,255,0.15)] whitespace-nowrap select-none"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  x: [tag.x, `${parseInt(tag.x) + 10}px`, `${parseInt(tag.x) - 10}px`, tag.x],
                  y: [tag.y, `${parseInt(tag.y) - 15}px`, `${parseInt(tag.y) + 10}px`, tag.y],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tag.delay,
                }}
              >
                {tag.name}
              </motion.div>
            ))} */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
