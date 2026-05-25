import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import { personalInfo } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="ABOUT ME"
          title="Motivated by"
          highlight="Innovation"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Biography Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6"
          >
            {personalInfo.bio.map((para, idx) => (
              <p
                key={idx}
                className="text-cyber-muted text-sm md:text-base leading-relaxed font-medium"
                dangerouslySetInnerHTML={{
                  __html: para
                    .replace("B.Tech Information Technology", "<strong>B.Tech Information Technology</strong>")
                    .replace("MERN stack", "<strong>MERN stack</strong>")
                    .replace("conflict-free scheduling algorithms", "<strong>conflict-free scheduling algorithms</strong>")
                    .replace("AI internship", "<strong>AI internship</strong>")
                    .replace("219+ problems on LeetCode", "<strong>219+ problems on LeetCode</strong>")
                    .replace("Elite + Top 5%", "<strong>Elite + Top 5%</strong>")
                }}
              />
            ))}
          </motion.div>

          {/* Education timeline cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <GlowCard borderGlow="cyan" className="p-8">
              <h3 className="font-orbitron font-extrabold text-[10px] tracking-[0.2em] text-cyber-cyan uppercase mb-6">
                // EDUCATION PATH
              </h3>
              
              <div className="relative pl-6 border-l border-cyber-border/40">
                {/* Node marker */}
                <span className="absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00f0ff] border border-cyber-bg" />
                
                <h4 className="font-orbitron font-extrabold text-base text-cyber-text tracking-wide mb-1 leading-snug">
                  {personalInfo.education.institution}
                </h4>
                <p className="text-xs text-cyber-muted mb-4 font-semibold uppercase tracking-wider">
                  {personalInfo.education.degree}
                </p>

                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-cyber-gold font-bold drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]">
                    {personalInfo.education.gpa}
                  </span>
                  <span className="text-cyber-muted font-medium">
                    {personalInfo.education.period}
                  </span>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
