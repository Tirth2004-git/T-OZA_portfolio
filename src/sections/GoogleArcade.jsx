import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCloudUploadAlt } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import AnimatedButton from "../components/AnimatedButton";
import { googleArcadeData } from "../data/googleArcadeData";

// Local CountUp Component
const ArcadeCountUp = ({ value, duration = 1.8 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(10, Math.floor(totalMiliseconds / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const GoogleArcade = () => {
  const { title, subtitle, stats, achievements, technologies, profiles, theme } = googleArcadeData;

  return (
    <section id="arcade" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="CLOUD MILESTONES"
          title="Google Cloud"
          highlight="Arcade"
        />

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlowCard borderGlow={idx === 0 ? "cyan" : idx === 1 ? "purple" : "green"} className="p-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-cyber-muted uppercase tracking-widest block mb-1">
                      {stat.label}
                    </span>
                    <h3 className="font-orbitron font-black text-2xl md:text-3xl text-cyber-text tracking-wide">
                      {stat.countUp ? <ArcadeCountUp value={stat.value} /> : stat.value}
                      {stat.countUp && "+"}
                    </h3>
                  </div>
                  <div
                    style={{ color: stat.color, borderColor: `${stat.color}33` }}
                    className="p-3 border rounded-sm bg-cyber-surface text-2xl flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]"
                  >
                    <StatIcon />
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative z-10">
          {achievements.map((ach, idx) => {
            const BadgeIcon = ach.badgeIcon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <GlowCard borderGlow={ach.glowColor} className="p-8 h-full flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="font-mono text-[10px] text-cyber-purple tracking-widest uppercase block mb-1">
                          {ach.period}
                        </span>
                        <h3 className="font-orbitron font-extrabold text-lg text-cyber-text leading-snug">
                          {ach.phase}
                        </h3>
                      </div>
                      
                      <div
                        style={{ color: ach.color, borderColor: `${ach.color}33` }}
                        className="p-2.5 rounded-sm border bg-cyber-surface text-xl flex items-center justify-center filter drop-shadow-[0_0_6px_rgba(255,255,255,0.05)]"
                      >
                        <BadgeIcon />
                      </div>
                    </div>

                    {/* Tier and Points Summary */}
                    <div className="flex flex-wrap gap-3 mb-6 font-mono text-[10px]">
                      <span className="border border-cyber-cyan/35 bg-cyber-cyan/5 px-2.5 py-1 rounded-sm text-cyber-cyan font-bold uppercase tracking-wider">
                        {ach.tier}
                      </span>
                      <span className="border border-cyber-gold/30 bg-cyber-gold/5 px-2.5 py-1 rounded-sm text-cyber-gold font-bold uppercase tracking-wider">
                        SCORE: {ach.points} POINTS
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-cyber-muted leading-relaxed font-medium mb-6">
                      {ach.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-8 text-xs font-medium text-cyber-muted">
                      {ach.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2.5">
                          <span style={{ color: ach.color }} className="select-none font-bold mt-0.5">▸</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Profile Verification for this phase */}
                  <AnimatedButton
                    variant="ghost"
                    href={profiles[idx].url}
                    target="_blank"
                    className="w-full !px-4 !py-2.5 flex items-center justify-center gap-2 !text-[9px]"
                  >
                    <SiGooglecloud /> Verify {ach.badgeText} Tier //
                  </AnimatedButton>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies Explored Grid */}
        <div className="border border-cyber-border/40 bg-cyber-surface/60 rounded-sm p-8 relative z-10">
          <h3 className="font-orbitron font-extrabold text-[10px] tracking-[0.2em] text-cyber-cyan uppercase mb-6 flex items-center gap-3">
            <FaCloudUploadAlt className="text-sm shrink-0" /> // CLOUD DOMAINS EXPLORED
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {technologies.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                  style={{ borderColor: `${tech.color}25` }}
                  className="flex items-center gap-3 p-3 border bg-cyber-bg/40 hover:bg-cyber-surface transition-all duration-300 rounded-xs select-none"
                >
                  <div style={{ color: tech.color }} className="text-xl flex items-center justify-center shrink-0">
                    <TechIcon />
                  </div>
                  <span className="font-mono text-[9px] text-cyber-text tracking-wider uppercase font-semibold leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GoogleArcade;
