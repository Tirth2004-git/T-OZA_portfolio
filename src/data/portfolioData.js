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
  SiDocker,
  SiRedis,
} from "react-icons/si";
import { FaBrain, FaDatabase, FaNetworkWired, FaCode, FaCogs, FaProjectDiagram, FaJs, FaSatellite, FaAward } from "react-icons/fa";
import { GiBrain, GiArtificialIntelligence, GiRadarSweep } from "react-icons/gi";

export const personalInfo = {
  name: "Tirth Oza",
  title: "MERN & AI / LLM Developer",
  status: "Available for Roles & Research",
  avatar: "/img/Oza_Tirth.png",
  resume: "/img/Tirth_Oza_Resume.pdf",
  tagline: "Building multi-agent AI systems, full-stack platforms, and radar signal analytics.",
  email: "ozatirth51@gmail.com",
  phone: "+91 93*** *****",
  location: "Vadodara / Gujarat, India",
  linkedin: "https://www.linkedin.com/in/ozatirth9124/",
  github: "https://github.com/Tirth2004-git",
  bio: [
    "Final-year B.Tech Information Technology student at Parul University (2023–2027) with a CGPA of 8.44/10. Specializing in multi-agent AI systems using LangGraph, scalable full-stack web applications with the MERN stack, and applied machine learning.",
    "Experienced in designing modular microservice architectures, constraint-based algorithms, and RESTful API ecosystems. Solved 450+ Data Structures & Algorithms problems across LeetCode and GeeksforGeeks.",
    "Recognized in ISRO's Bharatiya Antariksh Hackathon 2026 for lunar subsurface ice detection using Chandrayaan-2 radar and optical datasets, and achieved Arcade Legend tier in the Google Cloud Arcade program."
  ],
  education: {
    institution: "Parul University",
    degree: "B.Tech in Information Technology",
    gpa: "CGPA: 8.44 / 10",
    period: "2023 – 2027",
    location: "Vadodara, Gujarat",
  },
  stats: [
    { label: "DSA Solved (LeetCode + GFG)", value: "450+", countUp: false },
    { label: "Degree CGPA / 10", value: "8.44", countUp: false },
    { label: "NPTEL ML Rank", value: "Top 5%", countUp: false },
  ]
};

export const experienceData = [
  {
    role: "Artificial Intelligence Intern",
    company: "EdiGlobe",
    period: "AUG 2025 – OCT 2025",
    type: "Internship",
    location: "Remote / Hybrid",
    summary: "Contributed across the software development lifecycle on production-oriented AI applications.",
    bullets: [
      "Scoped requirements and engineered architectural pipelines prior to development for minor and major AI applications.",
      "Implemented machine learning preprocessing, model evaluation workflows, and API integration layers.",
      "Collaborated under structured mentorship to deliver robust, tested software components on schedule."
    ]
  }
];

export const projectsData = [
  {
    id: "cortex-ai",
    year: "2026",
    title: "CortexAI — Multi-Agent AI Platform",
    tag: "LangGraph Multi-Agent Orchestration",
    description:
      "Full-stack multi-agent AI platform that dynamically routes complex user requests across specialized autonomous agents for conversation, code generation, live web search, document processing, and image synthesis.",
    architecture:
      "Engineered with a modular Node.js/Express microservice architecture (auth, agent, and chat services communicating via REST). Utilizes LangGraph for stateful task routing, context-aware memory retention, Redis caching, and Dockerized backend deployment.",
    tech: [
      "React.js",
      "Node.js",
      "LangGraph",
      "LangChain",
      "MongoDB",
      "Redis",
      "Docker",
      "REST APIs"
    ],
    github: "https://github.com/Tirth2004-git/Multi-Agent-AI-Platform",
    live: "#",
    featured: true,
  },
  {
    id: "edux-planner",
    year: "2025",
    title: "EduX — Smart Faculty & Timetable Planner",
    tag: "Constraint-Based Scheduling Engine",
    description:
      "Full-stack MERN management system for academic institutions that automates timetable generation using constraint-based scheduling algorithms with conflict resolution.",
    architecture:
      "Validates teacher availability, classroom capacity, and department division constraints in real time. Implements role-based access control (Admin, Faculty, Student) with JWT authentication and RESTful APIs across faculties, classrooms, and leaves.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Tailwind CSS"
    ],
    github: "https://github.com/Tirth2004-git/EduX_Time_Table_Managment",
    live: "#",
    featured: true,
  },
  {
    id: "sympto-ai",
    year: "2025",
    title: "SymptoAI — ML Health Diagnostic Engine",
    tag: "Multi-Model Disease Classification",
    description:
      "Machine learning healthcare platform predicting potential medical conditions from multi-symptom user input with confidence metrics and actionable health insights.",
    architecture:
      "Full machine learning pipeline covering data cleaning, categorical feature encoding, multi-algorithm training (Random Forest, SVM), and deployment via Flask REST endpoints.",
    tech: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Pandas",
      "Streamlit",
      "ML Pipelines"
    ],
    github: "https://github.com/Tirth2004-git/SymptoAI",
    live: "#",
    featured: false,
  },
  {
    id: "drive-ease",
    year: "2025",
    title: "DriveEase — Enterprise Vehicle Rental Platform",
    tag: "Full-Stack Booking & Inventory",
    description:
      "Production-ready vehicle reservation and fleet management system featuring dynamic vehicle catalogs, real-time availability filters, and administrative inventory controls.",
    architecture:
      "Built with secure JWT token authorization, MongoDB aggregation queries for booking calendars, and scalable REST API endpoints.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth"
    ],
    github: "https://github.com/Tirth2004-git/DriveEase-Car-Rental-Booking-System",
    live: "#",
    featured: false,
  }
];

export const hackathonsData = [
  {
    title: "ISRO Bharatiya Antariksh Hackathon (BAH)",
    year: "2026",
    issuer: "Indian Space Research Organisation (ISRO)",
    badge: "National Space Hackathon",
    description:
      "Developed a lunar subsurface ice and water presence detection system using Chandrayaan-2 DFSAR (Dual-Frequency Synthetic Aperture Radar) and OHRC (Optical High Resolution Camera) planetary datasets.",
    highlights: [
      "Processed polar radar backscatter and high-res optical imagery for dielectric anomaly identification.",
      "Implemented spatial filtering and signal-to-noise enhancement algorithms for subsurface mapping.",
      "Explored planetary geosciences and radar remote sensing telemetry."
    ],
    verifyUrl: "https://github.com/Tirth2004-git",
  }
];

export const certificationsData = [
  {
    title: "Machine Learning (ML)",
    issuer: "NPTEL (IIT Madras / Swayam)",
    year: "2025",
    score: "Elite + Top 5% (71%)",
    category: "AI & Machine Learning",
    image: "/img/Machine Learning (ML) in Hindi_page-0001.jpg",
    verifyUrl: "https://drive.google.com/file/d/1MX76jPtSw4ayjnoc2PqAxq7A41xxt_-g/view?usp=sharing",
  },
  {
    title: "Computer Networks & Internet Protocol",
    issuer: "NPTEL (IIT Kharagpur / Swayam)",
    year: "2025",
    score: "Elite Certificate (61%)",
    category: "Core Computer Science",
    image: "/img/Computer Networks And Internet Protocol_page-0001.jpg",
    verifyUrl: "https://drive.google.com/file/d/1byOq7FkYYwtlmI2JYGFXID50j-NWJJ8B/view?usp=sharing",
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "EdiGlobe",
    year: "2025",
    score: "Credential ID: EGICZ0189",
    category: "Industry Experience",
    image: "/img/AI_Ediglobe_inteship_complete_page-0001.jpg",
    verifyUrl: "https://drive.google.com/file/d/1T1DDsCS5M-eTmwNuc7NwPMEHIVqzW6Dh/view?usp=drive_link",
  },
  {
    title: "JavaScript Programming — Self Paced",
    issuer: "GeeksforGeeks",
    year: "2025",
    score: "Certificate of Completion",
    category: "Frontend & Core JS",
    image: "/img/javascript_gfg_certificate.png",
    verifyUrl: "https://drive.google.com/file/d/18kQz_QN5kRD6oe2NmyDUKdMQsyS5FGpQ/view?usp=sharing",
  }
];

export const codingProfilesData = [
  {
    platform: "LeetCode",
    username: "OzaTirth_2004",
    stats: "300+ Problems Solved",
    details: "Algorithms, Dynamic Programming, Trees, Graphs, and Hash Tables.",
    icon: "leetcode",
    url: "https://leetcode.com/u/OzaTirth_2004/",
  },
  {
    platform: "GeeksforGeeks",
    username: "ozatirth51",
    stats: "150+ Problems Solved",
    details: "Core Data Structures, Mathematical Algorithms, and Optimization.",
    icon: "gfg",
    url: "https://www.geeksforgeeks.org/user/ozatirth51/",
  },
  {
    platform: "GitHub",
    username: "Tirth2004-git",
    stats: "19+ Repositories Built",
    details: "Multi-agent systems, full-stack MERN codebases, ML pipelines.",
    icon: "github",
    url: "https://github.com/Tirth2004-git",
  }
];
