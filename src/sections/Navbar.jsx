import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXP", href: "#experience" },
  { name: "CREDENTIALS", href: "#certifications" },
  { name: "PROFILES", href: "#profiles" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection for background glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "certifications", "profiles", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies the center
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-b
        ${scrolled 
          ? "bg-cyber-bg/85 border-cyber-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md" 
          : "bg-transparent border-transparent"
        }
        light:scrolled:bg-cyber-bgLight/85 light:scrolled:border-cyber-borderLight
      `}
    >
      <div className="flex items-center justify-between w-full">
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleLinkClick(e, "#hero")}
        className="flex items-center gap-2"
      >
        {personalInfo.logo.image ? (
          <img
            src={personalInfo.logo.image}
            alt={personalInfo.logo.text}
            className="h-8 w-auto object-contain select-none pointer-events-none filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
          />
        ) : (
          <span className="font-orbitron font-black text-xl tracking-[0.15em] transition-all duration-300 hover:scale-105 select-none">
            <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">T</span>
            <span className="text-cyber-pink drop-shadow-[0_0_10px_rgba(255,45,120,0.8)] animate-pulse">//</span>
            <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">OZA</span>
          </span>
        )}
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative font-mono text-[10px] tracking-[0.15em] transition-all duration-300 py-1.5
                  ${isActive 
                    ? "text-cyber-cyan font-bold drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" 
                    : "text-cyber-muted hover:text-cyber-cyan"
                  }
                `}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-cyber-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300
                    ${isActive ? "w-full" : "w-0 hover:w-full"}
                  `}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Action Controls (Theme + Hamburger) */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xs border border-cyber-border/50 hover:border-cyber-cyan/80 bg-cyber-surface/60 text-cyber-cyan hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all duration-300"
          title="Toggle Cyber Palette"
        >
          {theme === "dark" ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xs border border-cyber-border/50 bg-cyber-surface/60 text-cyber-cyan"
        >
          {isOpen ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
        </button>
      </div>
    </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className={`fixed inset-x-0 bottom-0 top-[68px] z-40 flex flex-col items-center justify-start overflow-y-auto pt-10 pb-16 border-t
          ${theme === "dark"
            ? "bg-[#020408] border-cyber-border/30"
            : "bg-[#f4f7f6] border-cyber-borderLight"
          }
          md:hidden animate-fade-in
        `}>
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-orbitron text-lg tracking-[0.2em] transition-colors duration-300
                      ${isActive ? "text-cyber-cyan font-extrabold" : "text-cyber-muted"}
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
