import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const SectionTitle = ({ label, title, highlight }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 relative z-10"
    >
      {/* Small Category Label */}
      <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-cyber-cyan mb-2 font-semibold">
        <span className="w-10 h-[1px] bg-cyber-cyan shadow-[0_0_8px_#00f0ff] inline-block" />
        {label}
      </div>

      {/* Main Glitch Title */}
      <h2 className="font-orbitron font-black text-3xl md:text-5xl tracking-tight leading-none text-cyber-text dark:text-cyber-text">
        {title}{" "}
        <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {highlight}
        </span>
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
