import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaArrowUp } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-cyber-border/40 bg-cyber-bg/95 py-8 px-6 mt-16 z-10">
      {/* Animated Top Line Glow */}
      <div className="absolute top-[-1px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_8px_#00f0ff] animate-pulse" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo and Copy */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTop();
            }}
            className="flex items-center gap-2 mb-1.5"
          >
            {personalInfo.logo.image ? (
              <img
                src={personalInfo.logo.image}
                alt={personalInfo.logo.text}
                className="h-6 w-auto object-contain select-none pointer-events-none filter drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]"
              />
            ) : (
              <span className="font-orbitron font-black text-base tracking-[0.15em] transition-all duration-300 hover:scale-105 select-none">
                <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">T</span>
                <span className="text-cyber-pink drop-shadow-[0_0_8px_rgba(255,45,120,0.8)] animate-pulse">//</span>
                <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">OZA</span>
              </span>
            )}
          </a>
          <span className="font-mono text-[9px] text-cyber-muted uppercase tracking-widest">
            © {new Date().getFullYear()} TIRTH OZA. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-cyber-muted">
          <a
            href="https://github.com/Tirth2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-cyber-cyan hover:drop-shadow-[0_0_6px_#00f0ff] transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/oza-tirth-28b031269"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-cyber-cyan hover:drop-shadow-[0_0_6px_#00f0ff] transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/ozatirth51/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-cyber-cyan hover:drop-shadow-[0_0_6px_#00f0ff] transition-all"
          >
            <FaCode />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/ozatirth51/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-cyber-cyan hover:drop-shadow-[0_0_6px_#00f0ff] transition-all"
          >
            <SiGeeksforgeeks />
          </a>
        </div>

        {/* Back-To-Top Button */}
        <div>
          <button
            onClick={handleScrollTop}
            className="flex items-center justify-center p-3 rounded-full border border-cyber-border bg-cyber-surface/60 text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all animate-bounce"
            title="Return to Core"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
