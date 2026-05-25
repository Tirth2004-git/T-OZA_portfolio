import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const CyberGrid = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 transition-all duration-700 opacity-60 dark:opacity-40"
        style={{
          backgroundImage: theme === "dark"
            ? `linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)`
            : `linear-gradient(rgba(123, 47, 255, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(123, 47, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Futuristic Scanlines / Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,4,8,0.4)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,#020408_95%)]" />

      {/* Floating Neon Orbs (Dark Mode: Cyan, Purple, Pink, Green. Light Mode: Soft sky, lavender, teal) */}
      {theme === "dark" ? (
        <>
          {/* Orb 1: Cyan */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-cyber-cyan/10 blur-[120px] top-[-100px] left-[-100px]"
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -50, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Orb 2: Purple */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-cyber-purple/10 blur-[130px] bottom-[-200px] right-[-100px]"
            animate={{
              x: [0, -60, 40, 0],
              y: [0, 50, -40, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Orb 3: Pink */}
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full bg-cyber-pink/5 blur-[100px] top-[40%] right-[10%]"
            animate={{
              x: [0, 40, -40, 0],
              y: [0, -60, 60, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      ) : (
        <>
          {/* Light Orb 1: Soft Cyan/Blue */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-blue-300/15 blur-[100px] top-[-50px] left-[10%]"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, 40, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Light Orb 2: Soft Violet */}
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full bg-purple-200/15 blur-[110px] bottom-[-100px] right-[15%]"
            animate={{
              x: [0, -40, 30, 0],
              y: [0, -30, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
};

export default CyberGrid;
