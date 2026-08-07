import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { filterButtons, getSkillsByCategory } from "../data/skillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredSkills = getSkillsByCategory(activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="TECH STACK"
          title="Skills &amp;"
          highlight="Technologies"
        />

        {/* Dynamic Filter Buttons Bar */}
        <div className="flex flex-wrap gap-3 mb-10 relative z-10">
          {filterButtons.map((btn) => {
            const isSelected = activeCategory === btn.category;
            return (
              <button
                key={btn.category}
                onClick={() => setActiveCategory(btn.category)}
                className={`px-4 py-2 text-[10px] font-orbitron font-bold tracking-[0.15em] uppercase border transition-all duration-300 rounded-sm
                  ${isSelected
                    ? "bg-gradient-to-r from-cyber-cyan to-cyber-purple text-[#020408] border-transparent shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "bg-cyber-surface/60 border-cyber-border/40 text-cyber-muted hover:border-cyber-cyan/50 hover:text-cyber-cyan"
                  }
                `}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
