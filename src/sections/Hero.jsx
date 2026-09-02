import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";
import AnimatedButton from "../components/AnimatedButton";
import AgentSignalGraph from "../components/AgentSignalGraph";

const Hero = () => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.6,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          roleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          statsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          visualRef.current,
          {
            opacity: 0,
            scale: 0.96,
            duration: 0.9,
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-[85vh] flex items-center justify-center pt-28 pb-16 relative"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Signal Status Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 font-mono text-xs text-theme-accent bg-theme-surface border border-theme-border px-3 py-1 rounded-full w-fit mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-theme-accent animate-signal-pulse" />
            <span>MERN &amp; Multi-Agent AI Developer</span>
          </div>

          {/* Heading */}
          <h1
            ref={titleRef}
            className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-theme-text leading-[1.08] mb-4"
          >
            Tirth <span className="text-theme-accent">Oza</span>
          </h1>

          {/* Role Subheading */}
          <p
            ref={roleRef}
            className="font-display font-medium text-lg sm:text-xl text-theme-text/90 mb-4"
          >
            LangGraph Orchestration &middot; Full-Stack Systems &middot; Applied ML
          </p>

          {/* Positioning Summary */}
          <p
            ref={descRef}
            className="font-sans text-sm sm:text-base text-theme-muted leading-relaxed max-w-xl mb-8"
          >
            Final-year B.Tech IT student at Parul University (CGPA 8.44/10). Specializing in autonomous multi-agent state routing with LangGraph, scalable MERN architectures, and ISRO lunar radar subsurface analytics.
          </p>

          {/* CTAs & Socials */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-10">
            <AnimatedButton variant="primary" href="#projects">
              View Projects
            </AnimatedButton>
            <AnimatedButton
              variant="secondary"
              href="/img/Tirth_resume.jpg"
              download="Tirth_Oza_Resume.jpg"
            >
              Resume
            </AnimatedButton>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-2.5 ml-2 text-theme-muted">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-md border border-theme-border bg-theme-surface hover:text-theme-accent hover:border-theme-accent transition-colors"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-md border border-theme-border bg-theme-surface hover:text-theme-accent hover:border-theme-accent transition-colors"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="https://leetcode.com/u/OzaTirth_2004/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2 rounded-md border border-theme-border bg-theme-surface hover:text-theme-accent hover:border-theme-accent transition-colors"
              >
                <SiLeetcode className="text-sm" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/ozatirth51/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks Profile"
                className="p-2 rounded-md border border-theme-border bg-theme-surface hover:text-theme-accent hover:border-theme-accent transition-colors"
              >
                <SiGeeksforgeeks className="text-sm" />
              </a>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-theme-border/70"
          >
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display font-bold text-2xl sm:text-3xl text-theme-text">
                  {stat.value}
                </span>
                <span className="font-sans text-xs text-theme-muted mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Column (Agent Routing & Radar Graph) */}
        <div ref={visualRef} className="lg:col-span-6 flex flex-col justify-center">
          <AgentSignalGraph />
        </div>
      </div>
    </section>
  );
};

export default Hero;

