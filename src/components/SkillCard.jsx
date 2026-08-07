import React from "react";
import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import { categoryColors } from "../data/skillsData";

const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon;
  
  // Resolve category color configurations
  const catConfig = categoryColors[skill.category] || categoryColors["Languages"];
  
  return (
    <GlowCard borderGlow={catConfig.glow} className="p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          
          {/* Brand Technology Icon with custom inline colored styles */}
          <div 
            style={{ color: skill.iconColor, borderColor: `${skill.iconColor}33` }} 
            className="p-2.5 rounded-sm bg-cyber-surface border text-2xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]"
          >
            {IconComponent && <IconComponent />}
          </div>
          
          {/* Dynamic Category Badge */}
          <span className={`text-[9px] font-mono tracking-[0.1em] uppercase border px-2 py-0.5 rounded-xs font-semibold
            ${catConfig.text} ${catConfig.border} ${catConfig.badgeBg}
          `}>
            {skill.category}
          </span>
        </div>

        {/* Skill Name */}
        <h3 className="font-orbitron font-bold text-sm text-cyber-text tracking-wide mb-3">
          {skill.skillName}
        </h3>
        
        {/* Skill Description */}
        <p className="text-[11px] text-cyber-muted leading-relaxed font-syne font-medium mb-6">
          {skill.description}
        </p>
      </div>

      <div>
        {/* Animated Progress Bar */}
        <div className="flex justify-between items-center text-[10px] font-mono mb-1.5">
          <span className="text-cyber-muted uppercase tracking-wider font-semibold">
            {skill.experienceLevel}
          </span>
          <span className="font-bold" style={{ color: skill.iconColor }}>
            {skill.proficiency}%
          </span>
        </div>
        <div className="w-full h-[3.5px] bg-cyber-border/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: skill.animationDelay || 0.1 }}
            style={{
              background: `linear-gradient(90deg, ${skill.iconColor}, #7b2fff)`
            }}
            className="h-full rounded-full"
          />
        </div>
      </div>
    </GlowCard>
  );
};

export default SkillCard;
