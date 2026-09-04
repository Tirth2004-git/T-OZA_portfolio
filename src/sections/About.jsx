import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaMicrochip, FaSatellite } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import { personalInfo } from "../data/portfolioData";
import { coreCompetencies } from "../data/skillsData";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          label="Background"
          title="Engineering Mindset &amp;"
          highlight="Foundations"
          description="A blend of deep algorithmic problem solving, modern full-stack web architectures, and stateful multi-agent AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Biography Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 font-sans text-sm sm:text-base text-theme-muted leading-relaxed"
          >
            {personalInfo.bio.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}

            {/* Core Competencies Matrix */}
            <div className="pt-4">
              <h4 className="font-display font-semibold text-sm text-theme-text mb-3">
                Core Competencies &amp; Research Focus:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-md bg-theme-surface border border-theme-border text-xs text-theme-text font-sans font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-teal shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Academic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Profile Photo Card */}
            <GlowCard className="p-5 sm:p-6" accent="accent">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-theme-accent/60 shadow-lg shadow-theme-accent/10 bg-theme-surface-alt">
                    <img
                      src={personalInfo.avatar || "/img/Oza_Tirth.png"}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-theme-surface rounded-full animate-pulse" title="Available for roles" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-theme-accent uppercase tracking-wider block font-semibold">
                    Developer Profile
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-theme-text truncate">
                    {personalInfo.name}
                  </h3>
                  <p className="font-sans text-xs text-theme-muted mt-0.5">
                    {personalInfo.title}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={personalInfo.resume || "/img/Tirth_Oza_Resume.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-theme-accent bg-theme-accent/10 hover:bg-theme-accent hover:text-theme-bg px-2.5 py-1 rounded transition-colors"
                    >
                      View Resume PDF &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-6 sm:p-7" accent="teal">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-md bg-theme-surface-alt border border-theme-border text-theme-teal">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-theme-teal uppercase tracking-wider block font-semibold">
                    Academic Background
                  </span>
                  <h3 className="font-display font-bold text-lg text-theme-text">
                    {personalInfo.education.institution}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 font-sans text-xs text-theme-muted border-t border-theme-border/60 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-theme-text">Degree:</span>
                  <span>{personalInfo.education.degree}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-theme-text">Timeline:</span>
                  <span>{personalInfo.education.period}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-theme-text">Academic Merit:</span>
                  <span className="font-mono font-bold text-theme-accent bg-theme-surface-alt border border-theme-border px-2 py-0.5 rounded">
                    {personalInfo.education.gpa}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-theme-text">Location:</span>
                  <span>{personalInfo.education.location}</span>
                </div>
              </div>
            </GlowCard>

            {/* Radar / ISRO Hackathon Highlight Banner */}
            <div className="p-5 rounded-lg border border-theme-border bg-theme-surface-alt/60 text-xs text-theme-muted font-sans flex items-start gap-3">
              <FaSatellite className="text-theme-accent text-lg shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-theme-text block font-display mb-1">
                  ISRO Bharatiya Antariksh Hackathon 2026
                </span>
                Analyzed Chandrayaan-2 DFSAR polar radar &amp; OHRC optical sensor data for lunar subsurface ice detection.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

