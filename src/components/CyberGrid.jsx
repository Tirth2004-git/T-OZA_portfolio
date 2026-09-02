import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const CyberGrid = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Radar & Signal Matrix Grid */}
      <div className="absolute inset-0 signal-grid" />

      {/* Restrained Ambient Gradient Glows (Copper & Teal) */}
      {theme === "dark" ? (
        <>
          {/* Top-Right Faint Copper Accent */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[140px] top-[-150px] right-[-100px] pointer-events-none opacity-20"
            style={{ backgroundColor: "var(--accent-primary)" }}
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Bottom-Left Faint Teal Node Accent */}
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full blur-[140px] bottom-[10%] left-[-150px] pointer-events-none opacity-15"
            style={{ backgroundColor: "var(--accent-secondary)" }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : (
        <>
          {/* Light Mode Faint Warm Accent */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[130px] top-[-100px] right-[-100px] pointer-events-none opacity-[0.06]"
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
          {/* Light Mode Faint Teal Accent */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bottom-[20%] left-[-100px] pointer-events-none opacity-[0.05]"
            style={{ backgroundColor: "var(--accent-secondary)" }}
          />
        </>
      )}
    </div>
  );
};

export default CyberGrid;

