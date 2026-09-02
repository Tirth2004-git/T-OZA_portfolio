import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Credentials", href: "#certifications" },
  { name: "Profiles", href: "#profiles" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "experience", "certifications", "profiles", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-6 py-3.5 border-b
        ${scrolled
          ? "bg-theme-bg/85 border-theme-border backdrop-blur-md shadow-sm"
          : "bg-transparent border-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-theme-accent animate-signal-pulse" />
          <span className="font-display font-bold text-lg tracking-tight text-theme-text group-hover:text-theme-accent transition-colors">
            Tirth Oza
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-theme-muted bg-theme-surface-alt border border-theme-border px-2 py-0.5 rounded">
            AI / MERN
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-sans text-xs font-medium px-3.5 py-1.5 rounded-md transition-colors
                  ${isActive
                    ? "text-theme-accent bg-theme-surface-alt font-semibold"
                    : "text-theme-muted hover:text-theme-text hover:bg-theme-surface-alt/50"
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Status + Theme Switcher + Mobile Button */}
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-theme-muted bg-theme-surface border border-theme-border px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-teal" />
            <span>Open for roles</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-theme-border bg-theme-surface text-theme-text hover:border-theme-accent hover:text-theme-accent transition-colors cursor-pointer"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <FaSun className="text-sm text-theme-accent" />
            ) : (
              <FaMoon className="text-sm text-theme-muted" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md border border-theme-border bg-theme-surface text-theme-text"
          >
            {isOpen ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[61px] z-40 bg-theme-bg/95 backdrop-blur-lg border-t border-theme-border md:hidden animate-fade-in p-6 flex flex-col justify-between overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-3 px-4 rounded-lg font-display text-lg font-semibold transition-colors
                      ${isActive
                        ? "text-theme-accent bg-theme-surface-alt"
                        : "text-theme-muted hover:text-theme-text hover:bg-theme-surface-alt/50"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 border-t border-theme-border font-mono text-xs text-theme-muted flex items-center justify-between">
            <span>ozatirth51@gmail.com</span>
            <span className="text-theme-teal">STATUS: ACTIVE</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

