import { SiGooglecloud, SiWebauthn } from "react-icons/si";
import { FaCloud, FaShieldAlt, FaServer, FaBrain, FaNetworkWired, FaTerminal, FaTrophy, FaCube } from "react-icons/fa";
import { GiBrain, GiRank3 } from "react-icons/gi";

export const googleArcadeData = {
  title: "Google Cloud",
  subtitle: "Arcade Milestones",
  stats: [
    {
      label: "Season 2 Legend Tier",
      value: "95+ Pts",
      countUp: false,
      icon: FaTrophy,
    },
    {
      label: "Season 1 Trooper Tier",
      value: "40+ Pts",
      countUp: false,
      icon: GiRank3,
    },
    {
      label: "Total Skill Badges",
      value: "125+",
      countUp: false,
      icon: SiWebauthn,
    }
  ],
  achievements: [
    {
      phase: "Season 2: Arcade Legend Tier",
      period: "Jul – Dec 2025",
      points: "95+ Points",
      tier: "Arcade Legend Tier",
      badgeText: "LEGEND",
      badgeIcon: FaTrophy,
      description: "Achieved the top Arcade Legend Tier with 95+ points mastering Generative AI, Document AI, Kubernetes, BigQuery, and Terraform architectures.",
      highlights: [
        "Generative AI & Document AI pipeline deployments",
        "Google Kubernetes Engine (GKE) container orchestration",
        "BigQuery enterprise data warehousing & Terraform IaC"
      ],
      verifyUrl: "https://www.skills.google/public_profiles/a9607d8b-5884-46a9-9521-c2ae1b140c5c"
    },
    {
      phase: "Season 1: Arcade Trooper Tier",
      period: "Jan – Jun 2025",
      points: "40+ Points",
      tier: "Arcade Trooper Tier",
      badgeText: "TROOPER",
      badgeIcon: GiRank3,
      description: "Completed the foundational cloud computing milestones earning 40+ points through hands-on cloud infrastructure, networking, and security labs.",
      highlights: [
        "40+ verified skill points earned",
        "Cloud IAM, VPC networking, and security fundamentals",
        "Compute Engine instance configuration and storage architectures"
      ],
      verifyUrl: "https://www.skills.google/public_profiles/e6aa4b14-e602-4259-8c7d-73c9a277e2bb"
    }
  ],
  technologies: [
    { name: "Generative AI", icon: GiBrain },
    { name: "Document AI", icon: FaBrain },
    { name: "Kubernetes (GKE)", icon: FaCube },
    { name: "BigQuery", icon: FaServer },
    { name: "Terraform IaC", icon: FaTerminal },
    { name: "Google Cloud Platform", icon: SiGooglecloud },
    { name: "VPC & Networking", icon: FaNetworkWired },
    { name: "Cloud Security", icon: FaShieldAlt },
  ]
};

export default googleArcadeData;

