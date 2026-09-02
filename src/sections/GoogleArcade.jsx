import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCloudUploadAlt, FaAward } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import AnimatedButton from "../components/AnimatedButton";
import { googleArcadeData } from "../data/googleArcadeData";

const GoogleArcade = () => {
  const { stats, achievements, technologies } = googleArcadeData;

  return (
    <section id="arcade" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          label="Cloud Milestones"
          title="Google Cloud"
          highlight="Arcade"
          description="Recognized in Google Cloud Arcade Season 1 & 2 for practical cloud engineering, Generative AI, and container deployments."
        />

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlowCard className="p-5 flex items-center justify-between" accent="teal">
                  <div>
                    <span className="font-mono text-[10px] text-theme-muted uppercase tracking-wider block mb-1">
                      {stat.label}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-theme-text">
                      {stat.value}
                    </h3>
                  </div>
                  <div className="p-3 rounded-lg bg-theme-surface-alt border border-theme-border text-theme-teal text-xl">
                    <StatIcon />
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {achievements.map((ach, idx) => {
            const BadgeIcon = ach.badgeIcon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <GlowCard className="p-6 sm:p-8 h-full flex flex-col justify-between" accent="default">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <span className="font-mono text-[10px] text-theme-accent font-semibold block mb-1">
                          {ach.period} &middot; {ach.points}
                        </span>
                        <h3 className="font-display font-bold text-xl text-theme-text">
                          {ach.phase}
                        </h3>
                      </div>
                      <div className="p-2.5 rounded-lg bg-theme-surface-alt border border-theme-border text-theme-accent text-lg">
                        <BadgeIcon />
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-theme-muted leading-relaxed mb-4">
                      {ach.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6 pt-4 border-t border-theme-border/60 font-sans text-xs text-theme-muted">
                      {ach.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-theme-teal mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verification CTA */}
                  <AnimatedButton
                    variant="secondary"
                    href={ach.verifyUrl}
                    target="_blank"
                    className="w-full !py-2 !text-xs justify-center"
                  >
                    <SiGooglecloud className="text-sm" /> Verify {ach.badgeText} Profile
                  </AnimatedButton>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies Explored Grid */}
        <div className="rounded-lg border border-theme-border bg-theme-surface p-6 sm:p-7">
          <h3 className="font-display font-bold text-sm text-theme-text mb-4 flex items-center gap-2">
            <FaCloudUploadAlt className="text-theme-teal text-base" /> Cloud Domains &amp; Technologies
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {technologies.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-md bg-theme-surface-alt/70 border border-theme-border"
                >
                  <TechIcon className="text-theme-teal text-base shrink-0" />
                  <span className="font-sans text-xs text-theme-text font-medium">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleArcade;

