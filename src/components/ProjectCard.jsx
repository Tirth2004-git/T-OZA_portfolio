import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlowCard from "./GlowCard";
import AnimatedButton from "./AnimatedButton";

const ProjectCard = ({ project }) => {
  return (
    <GlowCard borderGlow="purple" className="p-8 h-full flex flex-col justify-between">
      <div>
        {/* Project Tag / ID */}
        <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.2em] text-cyber-muted mb-4 uppercase">
          <span>PROJECT_{project.id}</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-orbitron font-extrabold text-xl mb-4 tracking-wide text-cyber-text leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-cyber-muted leading-relaxed mb-6 font-syne font-medium">
          {project.description}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="font-mono text-[9px] font-semibold text-cyber-cyan border border-cyber-cyan/35 bg-cyber-cyan/5 px-2 py-0.5 rounded-sm uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-auto">
        <AnimatedButton
          variant="primary"
          href={project.github}
          target="_blank"
          className="flex-1 !px-4 !py-2.5 flex items-center justify-center gap-2 !text-[10px]"
        >
          <FaGithub className="text-xs" /> Code
        </AnimatedButton>
        {project.live && project.live !== "#" && (
          <AnimatedButton
            variant="ghost"
            href={project.live}
            target="_blank"
            className="flex-1 !px-4 !py-2.5 flex items-center justify-center gap-2 !text-[10px]"
          >
            <FaExternalLinkAlt className="text-[9px]" /> Demo
          </AnimatedButton>
        )}
      </div>
    </GlowCard>
  );
};

export default ProjectCard;



