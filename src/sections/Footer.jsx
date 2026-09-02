import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-theme-border bg-theme-surface py-10 px-6 z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        {/* Brand & Copyright */}
        <div>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTop();
            }}
            className="flex items-center justify-center sm:justify-start gap-2 mb-1 cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-theme-accent" />
            <span className="font-display font-bold text-base text-theme-text group-hover:text-theme-accent transition-colors">
              Tirth Oza
            </span>
            <span className="font-mono text-[10px] text-theme-muted bg-theme-surface-alt border border-theme-border px-1.5 py-0.5 rounded">
              DEV
            </span>
          </a>
          <p className="font-sans text-xs text-theme-muted">
            &copy; {new Date().getFullYear()} Tirth Oza. Built with LangGraph &amp; MERN principles.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-theme-muted">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md border border-theme-border bg-theme-surface-alt hover:text-theme-accent hover:border-theme-accent transition-colors"
          >
            <FaGithub className="text-sm" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md border border-theme-border bg-theme-surface-alt hover:text-theme-accent hover:border-theme-accent transition-colors"
          >
            <FaLinkedin className="text-sm" />
          </a>
          <a
            href="https://leetcode.com/u/OzaTirth_2004/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="p-2 rounded-md border border-theme-border bg-theme-surface-alt hover:text-theme-accent hover:border-theme-accent transition-colors"
          >
            <SiLeetcode className="text-sm" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/ozatirth51/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GeeksforGeeks"
            className="p-2 rounded-md border border-theme-border bg-theme-surface-alt hover:text-theme-accent hover:border-theme-accent transition-colors"
          >
            <SiGeeksforgeeks className="text-sm" />
          </a>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="p-2 rounded-md border border-theme-border bg-theme-surface-alt text-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors cursor-pointer ml-2"
            title="Back to Top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

