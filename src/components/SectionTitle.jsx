import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ label, title, highlight, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 max-w-3xl"
    >
      {/* Category Indicator */}
      {label && (
        <div className="flex items-center gap-2 text-xs font-mono text-theme-accent font-medium mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
          <span>{label}</span>
        </div>
      )}

      {/* Main Display Heading */}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-theme-text tracking-tight leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="text-theme-accent">{highlight}</span>
        )}
      </h2>

      {/* Optional Contextual Subheading */}
      {description && (
        <p className="mt-3 text-sm sm:text-base text-theme-muted font-sans leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

