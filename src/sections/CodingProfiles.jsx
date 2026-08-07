import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import AnimatedButton from "../components/AnimatedButton";
import { codingProfilesData } from "../data/portfolioData";

// Local CountUp Component
const ProfileCountUp = ({ value, duration = 1.8 }) => {
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

const CodingProfiles = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <SiLeetcode className="text-3xl" />;
      case "gfg":
        return <SiGeeksforgeeks className="text-3xl" />;
      case "github":
        return <SiGithub className="text-3xl" />;
      default:
        return <FaCode className="text-3xl" />;
    }
  };

  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="CODING METRICS"
          title="Competitive"
          highlight="Profiles"
        />

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {codingProfilesData.map((profile, idx) => {
            const hasNumber = /\d+/.test(profile.stats);
            const numVal = hasNumber ? profile.stats.match(/\d+/)[0] : null;
            const suffix = hasNumber ? profile.stats.replace(numVal, "") : profile.stats;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <GlowCard
                  borderGlow={profile.color}
                  className="p-8 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div
                        className={`p-3 rounded-sm bg-cyber-surface border border-cyber-border/40
                          ${profile.color === "gold" ? "text-cyber-gold border-cyber-gold/25" : ""}
                          ${profile.color === "green" ? "text-cyber-green border-cyber-green/25" : ""}
                          ${profile.color === "cyan" ? "text-cyber-cyan border-cyber-cyan/25" : ""}
                        `}
                      >
                        {getIcon(profile.icon)}
                      </div>
                      <span className="font-mono text-[9px] text-cyber-muted tracking-wider uppercase bg-cyber-surface/50 border border-cyber-border/20 px-2.5 py-0.5">
                        {profile.platform}
                      </span>
                    </div>

                    {/* Stats Counter */}
                    <h3 className="font-orbitron font-black text-2xl md:text-3xl mb-3 tracking-wide text-cyber-text">
                      {numVal ? (
                        <>
                          <ProfileCountUp value={numVal} />
                          {suffix}
                        </>
                      ) : (
                        profile.stats
                      )}
                    </h3>

                    {/* Details */}
                    <p className="text-xs text-cyber-purple font-mono uppercase tracking-wider mb-3 leading-snug">
                      @{profile.username}
                    </p>
                    <p className="text-xs text-cyber-muted font-medium leading-relaxed mb-8">
                      {profile.details}
                    </p>
                  </div>

                  {/* Profile Link Button */}
                  <AnimatedButton
                    variant="ghost"
                    href={profile.url}
                    target="_blank"
                    className="w-full !px-4 !py-2.5 flex items-center justify-center gap-2 !text-[9px]"
                  >
                    Launch Terminal //
                  </AnimatedButton>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
