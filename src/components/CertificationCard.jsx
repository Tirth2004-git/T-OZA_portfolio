import React from "react";
import { FaEye, FaAward } from "react-icons/fa";
import GlowCard from "./GlowCard";

const CertificationCard = ({ cert, onClick }) => {
  return (
    <GlowCard
      className="p-6 h-full flex flex-col justify-between group cursor-pointer"
      accent="teal"
    >
      <div>
        {/* Header with category tag and preview button */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-[10px] text-theme-teal font-semibold">
            {cert.category || "Certification"}
          </span>
          <button
            onClick={onClick}
            className="p-1.5 rounded text-theme-muted hover:text-theme-accent hover:bg-theme-surface-alt transition-colors"
            title="Preview Credential"
          >
            <FaEye className="text-xs" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base text-theme-text group-hover:text-theme-accent transition-colors mb-1.5 leading-snug">
          {cert.title}
        </h3>

        {/* Issuer & Year */}
        <p className="font-sans text-xs text-theme-muted mb-4">
          {cert.issuer} · {cert.year}
        </p>
      </div>

      {/* Footer Info & Score Badge */}
      <div className="flex items-center justify-between pt-3.5 border-t border-theme-border/60">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-theme-accent">
          <FaAward className="text-xs shrink-0" />
          {cert.score}
        </span>
        <span className="font-mono text-[11px] text-theme-muted group-hover:text-theme-accent transition-colors font-medium">
          Inspect →
        </span>
      </div>
    </GlowCard>
  );
};

export default CertificationCard;

