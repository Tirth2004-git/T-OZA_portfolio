import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import { experienceData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          label="Experience"
          title="Professional &amp;"
          highlight="Internships"
          description="Industry engineering experience contributing across the software development lifecycle on applied AI systems."
        />

        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <GlowCard className="p-6 sm:p-8" accent="default">
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-theme-accent font-semibold block mb-1">
                      {exp.period} &middot; {exp.type}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text">
                      {exp.role}
                    </h3>
                    <h4 className="font-display font-medium text-sm text-theme-teal mt-0.5">
                      {exp.company} &middot; <span className="text-theme-muted font-sans font-normal">{exp.location}</span>
                    </h4>
                  </div>
                  <div className="p-2.5 rounded-md bg-theme-surface-alt border border-theme-border text-theme-accent">
                    <FaBriefcase className="text-base" />
                  </div>
                </div>

                {exp.summary && (
                  <p className="font-sans text-xs sm:text-sm text-theme-muted mb-4 leading-relaxed font-medium">
                    {exp.summary}
                  </p>
                )}

                {/* Bullets */}
                <ul className="space-y-2.5 pt-4 border-t border-theme-border/60 font-sans text-xs sm:text-sm text-theme-muted">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

