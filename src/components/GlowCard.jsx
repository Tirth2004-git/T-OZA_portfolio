import React, { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const GlowCard = ({ children, className = "", borderGlow = "cyan" }) => {
  const { theme } = useTheme();
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // 3D Tilt calculation
    const px = x / rect.width; // 0 to 1
    const py = y / rect.height; // 0 to 1
    const rotateX = (py - 0.5) * -10; // Max tilt -10 to 10 deg
    const rotateY = (px - 0.5) * 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      transition: "transform 0.5s ease",
    });
  };

  // Border glow styles based on prop
  const glowColors = {
    cyan: {
      border: "hover:border-cyber-cyan/40",
      shadow: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(0,240,255,0.15)]",
      spotlight: "rgba(0, 240, 255, 0.08)",
      topBorder: "from-cyber-cyan",
    },
    purple: {
      border: "hover:border-cyber-purple/40",
      shadow: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(123,47,255,0.15)]",
      spotlight: "rgba(123, 47, 255, 0.08)",
      topBorder: "from-cyber-purple",
    },
    pink: {
      border: "hover:border-cyber-pink/40",
      shadow: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(255,45,120,0.15)]",
      spotlight: "rgba(255, 45, 120, 0.08)",
      topBorder: "from-cyber-pink",
    },
    green: {
      border: "hover:border-cyber-green/40",
      shadow: "hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(0,255,136,0.15)]",
      spotlight: "rgba(0, 255, 136, 0.08)",
      topBorder: "from-cyber-green",
    },
  };

  const selectedGlow = glowColors[borderGlow] || glowColors.cyan;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`
        relative overflow-hidden rounded-sm transition-all duration-300
        background-blur-md border border-cyber-border dark:border-cyber-border/80
        bg-cyber-surface/75 dark:bg-cyber-surface/90
        light:bg-cyber-surfaceLight/80 light:border-cyber-borderLight
        ${selectedGlow.border} ${selectedGlow.shadow}
        ${className}
      `}
    >
      {/* Neon Top Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${selectedGlow.topBorder} to-transparent`}
      />

      {/* Spotlight Effect Background */}
      {isHovered && (
        <div
          className="absolute pointer-events-none inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${selectedGlow.spotlight}, transparent 65%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;
