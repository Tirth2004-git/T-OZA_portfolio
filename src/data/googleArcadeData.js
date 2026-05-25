import { SiGooglecloud, SiWebauthn } from "react-icons/si";
import { FaCloud, FaShieldAlt, FaServer, FaBrain, FaNetworkWired, FaTerminal, FaTrophy } from "react-icons/fa";
import { GiBrain, GiRank3 } from "react-icons/gi";

export const googleArcadeData = {
  title: "Cloud Arcade",
  subtitle: "Achievements & Milestones",
  theme: {
    glowColor: "cyan",
    gradient: "from-[#4285F4] via-[#34A853] to-[#7b2fff]", // Google colors + purple
  },
  stats: [
    {
      label: "Total Points Earned",
      value: 139, // 43 + 96
      countUp: true,
      icon: FaTrophy,
      color: "#ffd700",
    },
    {
      label: "Milestones Conquered",
      value: 2,
      countUp: false,
      icon: GiRank3,
      color: "#00f0ff",
    },
    {
      label: "Skills Badges",
      value: 125,
      countUp: true,
      icon: SiWebauthn,
      color: "#00ff88",
    }
  ],
  achievements: [
    {
      phase: "Phase 1: Trooper Ascension",
      period: "Jan – Jun 2025",
      points: 43,
      tier: "Arcade Trooper Tier",
      badgeText: "TROOPER",
      badgeIcon: GiRank3,
      color: "#00f0ff", // Neon Cyan
      gradient: "from-cyber-cyan/15 to-transparent",
      glowColor: "cyan",
      animationDelay: 0.1,
      description: "Successfully entered the Google Cloud learning loop, earning 43 points through hands-on labs and skill challenges.",
      highlights: [
        "Conquered 43 total points",
        "Achieved Trooper Rank status",
        "Ranked for cloud fundamentals challenges"
      ]
    },
    {
      phase: "Phase 2: Ultimate Conqueror",
      period: "Jul – Dec 2025",
      points: 96,
      tier: "Ultimate Milestone",
      badgeText: "ULTIMATE",
      badgeIcon: FaTrophy,
      color: "#7b2fff", // Electric Purple
      gradient: "from-cyber-purple/15 to-transparent",
      glowColor: "purple",
      animationDelay: 0.2,
      description: "Scaled the arcade leaderboard, scoring 96 points and conquering the top Ultimate Milestone credential tier.",
      highlights: [
        "Earned 96 total points",
        "Reached Ultimate Milestone Tier",
        "Executed high-level serverless and architecture labs"
      ]
    }
  ],
  technologies: [
    { name: "Google Cloud Platform", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Cloud Infrastructure", icon: FaServer, color: "#EA4335" },
    { name: "Cloud Computing", icon: FaCloud, color: "#FBBC05" },
    { name: "Artificial Intelligence", icon: GiBrain, color: "#00f0ff" },
    { name: "Machine Learning", icon: FaBrain, color: "#00ff88" },
    { name: "Cybersecurity", icon: FaShieldAlt, color: "#ff2d78" },
    { name: "Networking", icon: FaNetworkWired, color: "#7b2fff" },
    { name: "Hands-on Labs", icon: FaTerminal, color: "#fff" },
  ],
  profiles: [
    {
      label: "Trooper Profile Verify",
      url: "https://www.skills.google/public_profiles/e6aa4b14-e602-4259-8c7d-73c9a277e2bb", 
      color: "cyan",
    },
    {
      label: "Ultimate Profile Verify",
      url: "https://www.skills.google/public_profiles/a9607d8b-5884-46a9-9521-c2ae1b140c5c",
      color: "purple",
    }
  ]
};

export default googleArcadeData;
