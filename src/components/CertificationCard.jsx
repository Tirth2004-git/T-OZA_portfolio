import React from "react";
import { FaEye } from "react-icons/fa";
import GlowCard from "./GlowCard";

const CertificationCard = ({ cert, onClick }) => {
  const IconComponent = cert.icon;
  const glow = cert.glowColor || "cyan";

  return (
    <GlowCard
      borderGlow={glow}
      className="p-6 h-full flex flex-col justify-between group"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          {/* Glowing Cyber Tech Icon */}
          <div
            style={{ color: cert.iconColor, borderColor: `${cert.iconColor}33` }}
            className="p-2.5 rounded-sm bg-cyber-surface border text-2xl flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]"
          >
            {IconComponent && <IconComponent />}
          </div>
          
          <button
            onClick={onClick}
            className={`p-2 rounded-xs border border-cyber-border/40 bg-cyber-surface/60 text-cyber-muted transition-all duration-300
              ${glow === "cyan" ? "hover:border-cyber-cyan/60 hover:text-cyber-cyan" : ""}
              ${glow === "purple" ? "hover:border-cyber-purple/60 hover:text-cyber-purple" : ""}
              ${glow === "green" ? "hover:border-cyber-green/60 hover:text-cyber-green" : ""}
            `}
            title="View Certificate"
          >
            <FaEye className="text-sm" />
          </button>
        </div>

        {/* Title */}
        <h3 className={`font-orbitron font-extrabold text-sm text-cyber-text tracking-wide mb-2 transition-colors duration-300
          ${glow === "cyan" ? "group-hover:text-cyber-cyan" : ""}
          ${glow === "purple" ? "group-hover:text-cyber-purple" : ""}
          ${glow === "green" ? "group-hover:text-cyber-green" : ""}
        `}>
          {cert.title}
        </h3>
        
        <p className="font-mono text-[9px] text-cyber-muted uppercase tracking-wider mb-4">
          {cert.issuer} · {cert.year}
        </p>
      </div>

      {/* Footer info */}
      <div className="flex justify-between items-center pt-4 border-t border-cyber-border/30">
        <span className="font-orbitron font-bold text-xs text-cyber-gold drop-shadow-[0_0_6px_rgba(255,215,0,0.2)]">
          {cert.score}
        </span>
        <button
          onClick={onClick}
          className={`font-mono text-[9px] uppercase tracking-widest bg-transparent border-none transition-colors duration-300
            ${glow === "cyan" ? "text-cyber-cyan hover:text-cyber-purple" : ""}
            ${glow === "purple" ? "text-cyber-purple hover:text-cyber-pink" : ""}
            ${glow === "green" ? "text-cyber-green hover:text-cyber-cyan" : ""}
          `}
        >
          PREVIEW //
        </button>
      </div>
    </GlowCard>
  );
};

export default CertificationCard;
