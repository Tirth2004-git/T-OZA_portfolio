import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlowCard from "./GlowCard";
import AnimatedButton from "./AnimatedButton";

const ProjectCard = ({ project }) => {
  return (
    <GlowCard className="p-6 sm:p-8 h-full flex flex-col justify-between" accent="default">
      <div>
        {/* Top Header: Tag & Year */}
        <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-theme-muted mb-3">
          <span className="inline-flex items-center gap-1.5 text-theme-accent font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
            {project.tag || "Full-Stack Project"}
          </span>
          <span className="text-theme-muted">{project.year}</span>
        </div>

        {/* Project Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-theme-muted leading-relaxed mb-4 font-sans">
          {project.description}
        </p>

        {/* Architecture Note if present */}
        {project.architecture && (
          <div className="p-3.5 mb-5 rounded-md bg-theme-surface-alt/70 border border-theme-border text-xs text-theme-muted leading-relaxed font-sans">
            <span className="font-semibold text-theme-text font-display block mb-1">Architecture &amp; Routing:</span>
            {project.architecture}
          </div>
        )}

        {/* Tech Stack Chips (JetBrains Mono only) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="font-mono text-[11px] text-theme-text bg-theme-surface-alt border border-theme-border px-2.5 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-theme-border/60">
        <AnimatedButton
          variant="primary"
          href={project.github}
          target="_blank"
          className="flex-1 min-w-[120px]"
        >
          <FaGithub className="text-sm" /> Code Repository
        </AnimatedButton>
        {project.live && project.live !== "#" && (
          <AnimatedButton
            variant="secondary"
            href={project.live}
            target="_blank"
            className="flex-1 min-w-[120px]"
          >
            <FaExternalLinkAlt className="text-xs" /> Live Demo
          </AnimatedButton>
        )}
      </div>
    </GlowCard>
  );
};

export default ProjectCard;
