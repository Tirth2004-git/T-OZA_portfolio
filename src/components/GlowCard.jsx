import React from "react";

const GlowCard = ({ children, className = "", hoverEffect = true, accent = "default" }) => {
  let accentBorder = "hover:border-theme-accent/50";
  if (accent === "teal") accentBorder = "hover:border-theme-teal/50";
  if (accent === "none") accentBorder = "";

  return (
    <div
      className={`
        relative rounded-lg border border-theme-border
        bg-theme-surface text-theme-text
        transition-all duration-200
        ${hoverEffect ? `hover:shadow-md hover:-translate-y-0.5 ${accentBorder}` : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlowCard;

