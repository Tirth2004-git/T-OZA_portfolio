import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { FaSatellite, FaExternalLinkAlt, FaAward } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import AnimatedButton from "../components/AnimatedButton";
import { codingProfilesData, hackathonsData } from "../data/portfolioData";

const CodingProfiles = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "leetcode":
        return <SiLeetcode className="text-2xl text-[#FFA116]" />;
      case "gfg":
        return <SiGeeksforgeeks className="text-2xl text-[#2F8D46]" />;
      case "github":
        return <SiGithub className="text-2xl text-theme-text" />;
      default:
        return <FaAward className="text-2xl text-theme-accent" />;
    }
  };

  return (
    <section id="profiles" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          label="Research &amp; Metrics"
          title="Achievements &amp;"
          highlight="Profiles"
          description="National space hackathons, planetary radar data analytics, and continuous algorithmic problem solving."
        />

        {/* Featured ISRO Hackathon Card */}
        {hackathonsData.map((hack, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <GlowCard className="p-6 sm:p-8" accent="default">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-theme-surface-alt border border-theme-border text-theme-accent">
                    <FaSatellite className="text-2xl" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-theme-accent font-semibold block mb-0.5">
                      {hack.badge} &middot; {hack.year}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text">
                      {hack.title}
                    </h3>
                    <p className="font-sans text-xs text-theme-teal mt-0.5 font-medium">
                      {hack.issuer}
                    </p>
                  </div>
                </div>

                <AnimatedButton
                  variant="secondary"
                  href={hack.verifyUrl}
                  target="_blank"
                  className="!px-3.5 !py-2 !text-xs"
                >
                  <FaExternalLinkAlt className="text-xs" /> View Project
                </AnimatedButton>
              </div>

              <p className="font-sans text-xs sm:text-sm text-theme-muted leading-relaxed mb-4">
                {hack.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-theme-border/60">
                {hack.highlights.map((hl, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-md bg-theme-surface-alt/70 border border-theme-border text-xs text-theme-muted leading-relaxed font-sans"
                  >
                    <span className="font-mono text-[10px] text-theme-teal block mb-1 font-semibold">
                      SIGNAL 0{hIdx + 1}
                    </span>
                    {hl}
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}

        {/* Coding Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfilesData.map((profile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-full"
            >
              <GlowCard className="p-6 h-full flex flex-col justify-between" accent="teal">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-md bg-theme-surface-alt border border-theme-border">
                      {getIcon(profile.icon)}
                    </div>
                    <span className="font-mono text-[10px] text-theme-muted bg-theme-surface-alt border border-theme-border px-2 py-0.5 rounded">
                      {profile.platform}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-theme-text mb-1">
                    {profile.stats}
                  </h3>
                  <p className="font-mono text-xs text-theme-accent mb-3 font-medium">
                    @{profile.username}
                  </p>
                  <p className="font-sans text-xs text-theme-muted leading-relaxed mb-6">
                    {profile.details}
                  </p>
                </div>

                <AnimatedButton
                  variant="secondary"
                  href={profile.url}
                  target="_blank"
                  className="w-full !py-2 !text-xs justify-center"
                >
                  <FaExternalLinkAlt className="text-xs" /> View Profile
                </AnimatedButton>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

