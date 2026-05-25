import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiLinux,
  SiTailwindcss,
  SiJsonwebtokens,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiHtml5,
} from "react-icons/si";
import { FaBrain, FaDatabase, FaNetworkWired, FaCode, FaCogs, FaProjectDiagram, FaCss3Alt } from "react-icons/fa";
import { GiBrain, GiArtificialIntelligence } from "react-icons/gi";

export const personalInfo = {
  name: "Tirth Oza",
  title: "TIRTH OZA",
  tagline: "FULL STACK DEVELOPER",
  logo: {
    text: "T//OZA",
    image: "", // Add a path here, e.g. "/img/your-logo.png", to use an image logo dynamically
  },
  role: "Full Stack Developer | MERN Stack Developer | AI Enthusiast",
  email: "ozatirth51@gmail.com",
  phone: "+91 93*** *****",
  location: "PATAN, GUJARAT · INDIA",
  linkedin: "https://linkedin.com/in/oza-tirth-28b031269",
  github: "https://github.com/Tirth2004-git",
  bio: [
    "I'm a B.Tech Information Technology student at Parul University with a deep passion for full-stack web development. I build production-ready applications using the MERN stack, focusing on clean architecture and scalable systems.",
    "My journey in tech spans from crafting conflict-free scheduling algorithms to building RESTful APIs and immersive user interfaces. I've completed an AI internship where I sharpened real-world development workflows and project delivery skills.",
    "On the competitive programming front, I've solved 219+ problems on LeetCode and earned Elite + Top 5% recognition in NPTEL's Machine Learning certification — driven by a genuine love for algorithms and problem-solving.",
  ],
  education: {
    institution: "Parul University",
    degree: "B.Tech in Information Technology",
    gpa: "CGPA: 8.45 / 10",
    period: "2023 – 2027",
  },
  stats: [
    { label: "LeetCode Solved", value: 238, countUp: true },
    { label: "GFG Solved", value: 59, countUp: true },
    { label: "CGPA / 10", value: 8.45, countUp: false },
  ]
};


export const experienceData = [
  {
    role: "Artificial Intelligence Intern",
    company: "EdiGlobe",
    period: "AUG 2025 – OCT 2025",
    bullets: [
      "Worked on AI-based minor and major projects as part of a structured internship program.",
      "Gained practical exposure to real-world development workflows, problem-solving, and teamwork.",
      "Applied project lifecycle skills including planning, development, and delivery under mentorship.",
    ]
  }
];

// export const projectsData = [
//   {
//     id: "01",
//     year: "2025",
//     title: "Smart Faculty & Timetable Planner (EduX System)",
//     description: "Full-stack web application generating conflict-free academic timetables with normalized MongoDB schema, real-time teacher clash validation, and constraint-based scheduling logic. Includes JWT authentication and PDF export.",
//     tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
//     github: "https://github.com/Tirth2004-git/EduX_Time_Table_Managment",
//     live: "#"
//   },
//   {
//     id: "02",
//     year: "2025",
//     title: "Car Rental Booking System",
//     description: "End-to-end MERN stack car rental platform covering listings, bookings, and user role management. Features user authentication, admin dashboard, booking management with filtering, and RESTful APIs following clean modular architecture.",
//     tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     github: "https://github.com/Tirth2004-git/DriveEase-Car-Rental-Booking-System",
//     live: "#"
//   }
// ];


export const projectsData = [
  {
    id: "01",
    year: "2025",
    title: "Smart Faculty & Timetable Planner (EduX System)",
    description:
      "Full-stack web application generating conflict-free academic timetables with normalized MongoDB schema, real-time teacher clash validation, and constraint-based scheduling logic. Includes JWT authentication and PDF export.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/Tirth2004-git/EduX_Time_Table_Managment",
    live: "#"
  },

  {
    id: "02",
    year: "2025",
    title: "Car Rental Booking System",
    description:
      "End-to-end MERN stack car rental platform covering listings, bookings, and user role management. Features user authentication, admin dashboard, booking management with filtering, and RESTful APIs following clean modular architecture.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github:
      "https://github.com/Tirth2004-git/DriveEase-Car-Rental-Booking-System",
    live: "#"
  },

  {
    id: "03",
    year: "2026",
    title: "SkillGap AI — Career Readiness Analyzer",
    description:
      "AI-powered MERN web application that analyzes student resumes using the Gemini API to evaluate career readiness and ATS compatibility. Features secure JWT authentication, PDF resume parsing, AI-driven skill gap analysis, personalized resume improvement suggestions, and a dynamic 30-day learning roadmap with curated course recommendations.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT",
      "Tailwind CSS"
    ],
    github: "https://github.com/Tirth2004-git/SkillGap-AI",
    live: "#"
  }
];

export const certificationsData = [
  {
    title: "Artificial Intelligence Internship",
    issuer: "EDIGLOBE",
    year: "2025",
    icon: GiArtificialIntelligence,
    iconColor: "#00f0ff", // Neon Cyan
    glowColor: "cyan",
    score: "ID: EGICZ0189",
    image: "/img/AI_Ediglobe_inteship_complete_page-0001.jpg",
    verifyUrl: "https://drive.google.com/file/d/1T1DDsCS5M-eTmwNuc7NwPMEHIVqzW6Dh/view?usp=drive_link",
  },
  {
    title: "Computer Networks & Internet Protocol",
    issuer: "NPTEL",
    year: "2025",
    icon: FaNetworkWired,
    iconColor: "#7b2fff", // Electric Purple
    glowColor: "purple",
    score: "ELITE CERTIFICATE · 61%",
    image: "/img/Computer Networks And Internet Protocol_page-0001.jpg",
    verifyUrl: "https://drive.google.com/file/d/1byOq7FkYYwtlmI2JYGFXID50j-NWJJ8B/view?usp=sharing",
  },
  {
    title: "Machine Learning in Hindi",
    issuer: "NPTEL",
    year: "2025",
    icon: GiBrain,
    iconColor: "#00ff88", // Neon Green
    glowColor: "green",
    score: "ELITE + TOP 5% · 71%",
    image: "/img/Machine Learning (ML) in Hindi_page-0001.jpg",
    verifyUrl: "https://drive.google.com/file/d/1MX76jPtSw4ayjnoc2PqAxq7A41xxt_-g/view?usp=sharing",
  }
];

export const codingProfilesData = [
  {
    platform: "LeetCode",
    username: "ozatirth51",
    stats: "238+ Solved",
    details: "Focus: Data Structures, Algorithms, Dynamic Programming",
    icon: "code",
    color: "gold",
    url: "https://leetcode.com/u/OzaTirth_2004/",
  },
  {
    platform: "GeeksforGeeks",
    username: "ozatirth51",
    stats: "59+ Solved",
    details: "Focus: Math, Core CS Problems, Array-based validations",
    icon: "gfg",
    color: "green",
    url: "https://www.geeksforgeeks.org/profile/ozatirtgav6?tab=activity",
  },
  {
    platform: "GitHub",
    username: "Tirth2004-git",
    stats: "19+ Repositories Built",
    details: "Full Stack repositories, AI project releases",
    icon: "github",
    color: "cyan",
    url: "https://github.com/Tirth2004-git",
  }
];
