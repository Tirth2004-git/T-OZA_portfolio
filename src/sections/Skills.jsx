import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import { skillGroups } from "../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          label="Technical Stack"
          title="Skills &amp;"
          highlight="Domains"
          description="Grouped by domain expertise across autonomous agent orchestration, backend architecture, and core computer science foundations."
        />

        {/* Grouped Domain Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="h-full"
            >
              <GlowCard className="p-6 h-full flex flex-col justify-between" accent="teal">
                <div>
                  {/* Domain Header */}
                  <div className="mb-4">
                    <span className="font-mono text-[10px] text-theme-teal font-semibold block mb-1">
                      DOMAIN 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg text-theme-text leading-snug">
                      {group.name}
                    </h3>
                    <p className="font-sans text-xs text-theme-muted mt-1 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills List in Domain */}
                  <div className="space-y-3 pt-3 border-t border-theme-border/60">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-display font-semibold text-theme-text">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-theme-accent font-medium">
                            {skill.level}
                          </span>
                        </div>
                        {skill.desc && (
                          <span className="font-sans text-[11px] text-theme-muted mt-0.5 leading-normal">
                            {skill.desc}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

