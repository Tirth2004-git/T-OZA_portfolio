import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import { experienceData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="WORK HISTORY"
          title="Experience &amp;"
          highlight="Internships"
        />

        {/* Timeline Path */}
        <div className="relative pl-8 md:pl-12 border-l border-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent z-10 max-w-[800px] mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              {/* Timeline Bullet Node */}
              <span className="absolute left-[-37px] md:left-[-53px] top-6 w-4 h-4 rounded-full bg-cyber-cyan border-4 border-cyber-bg shadow-[0_0_12px_#00f0ff]" />

              <GlowCard borderGlow="cyan" className="p-8">
                {/* Period */}
                <div className="font-mono text-xs text-cyber-cyan tracking-wider mb-2 font-bold">
                  {exp.period}
                </div>

                {/* Role & Company */}
                <h3 className="font-orbitron font-extrabold text-xl text-cyber-text tracking-wide mb-1 leading-snug">
                  {exp.role}
                </h3>
                <h4 className="font-syne font-semibold text-sm text-cyber-purple mb-6 uppercase tracking-widest">
                  {exp.company}
                </h4>

                {/* Description Bullets */}
                <ul className="space-y-3.5 text-cyber-muted text-xs md:text-sm leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="text-cyber-cyan mt-1 select-none font-bold">▸</span>
                      <span>{bullet}</span>
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
