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
import { FaBrain, FaDatabase, FaNetworkWired, FaCode, FaCogs, FaProjectDiagram, FaCss3Alt, FaJs } from "react-icons/fa";
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
  linkedin: "https://www.linkedin.com/in/ozatirth9124/",
  github: "https://github.com/Tirth2004-git",
  bio: [
  "I'm a B.Tech Information Technology student at Parul University passionate about building scalable full-stack applications, AI-powered systems, and cloud-ready solutions. I work with modern technologies including MERN stack, LLMs, Docker, and cloud platforms to develop production-ready applications.",

  "My development journey includes building advanced AI agent platforms, machine learning applications, and enterprise-level web systems. I have hands-on experience with REST APIs, database design, authentication systems, containerization, and deploying applications using modern DevOps practices.",

  "I have completed Google Cloud Skills Boost Arcade milestones, including Trooper Tier and advanced cloud achievements, gaining practical exposure to cloud infrastructure, Kubernetes, networking, and cloud services. I continuously improve my problem-solving skills through competitive programming and system design learning."
],
  education: {
    institution: "Parul University",
    degree: "B.Tech in Information Technology",
    gpa: "CGPA: 8.44 / 10",
    period: "2023 – 2027",
  },
  stats: [
    { label: "LeetCode Solved", value: 342, countUp: true },
    { label: "GFG Solved", value: 161, countUp: true },
    { label: "CGPA / 10", value: 8.44, countUp: false },
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

export const projectsData = [
  {
    id: "01",
    year: "2025",
    title: "Smart Faculty & Timetable Planner (EduX System)",
    description:
      "Full-stack academic management platform for faculty, students, and administrators. Generates conflict-free timetables using constraint-based scheduling logic with teacher availability validation, classroom allocation, JWT authentication, role-based access control, and PDF timetable export.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],
    github:
      "https://github.com/Tirth2004-git/EduX_Time_Table_Managment",
    live: "#",
    image: "/img/timetable.png"
  },

  {
    id: "02",
    year: "2026",
    title: "Multi-Agent AI Chatbot Platform",
    description:
      "Advanced AI-powered conversational platform built with a multi-agent architecture. Supports specialized AI agents for chat, web search, code generation, image generation, and document creation. Implements LangGraph and LangChain workflows with RAG-based context retrieval, Gemini and Grok API integration, Redis caching, and Dockerized backend services.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "LangChain",
      "LangGraph",
      "RAG",
      "Gemini API",
      "Grok API",
      "Redis",
      "Docker",
      "MongoDB"
    ],
    github:
      "https://github.com/Tirth2004-git/Multi-Agent-AI-Platform",
    live: "#",
    image: "/img/ai_agent.png"
  },

  {
    id: "03",
    year: "2025",
    title: "SymptoAI: AI-Powered Disease Prediction Platform",
    description:
      "Machine learning-based healthcare prediction platform that predicts multiple diseases from user symptoms through an interactive web interface. Includes complete ML pipeline with data preprocessing, feature engineering, model training, evaluation, and deployment using Flask and Streamlit.",
    tech: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Pandas",
      "Machine Learning",
      "Streamlit"
    ],
    github:
      "https://github.com/Tirth2004-git/SymptoAI",
    live: "#",
    image: "/img/sympto_ai.png"
  },

  {
    id: "04",
    year: "2025",
    title: "Car Rental Booking System",
    description:
      "End-to-end MERN stack car rental platform enabling users to browse vehicles, manage bookings, and handle rental operations. Includes secure authentication, admin dashboard, booking management, filtering, and scalable RESTful API architecture.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],
    github:
      "https://github.com/Tirth2004-git/DriveEase-Car-Rental-Booking-System",
    live: "#",
    image: "/img/car_rental.png"
  }
];
export const certificationsData = [
  {
    title: "Artificial Intelligence Internship",
    issuer: "EDIGLOBE",
    year: "2025",
    icon: GiArtificialIntelligence,
    iconColor: "#00f0ff",
    glowColor: "cyan",
    score: "ID: EGICZ0189",
    image: "/img/AI_Ediglobe_inteship_complete_page-0001.jpg",
    verifyUrl:
      "https://drive.google.com/file/d/1T1DDsCS5M-eTmwNuc7NwPMEHIVqzW6Dh/view?usp=drive_link",
  },

  {
    title: "Computer Networks & Internet Protocol",
    issuer: "NPTEL",
    year: "2025",
    icon: FaNetworkWired,
    iconColor: "#7b2fff",
    glowColor: "purple",
    score: "ELITE CERTIFICATE · 61%",
    image: "/img/Computer Networks And Internet Protocol_page-0001.jpg",
    verifyUrl:
      "https://drive.google.com/file/d/1byOq7FkYYwtlmI2JYGFXID50j-NWJJ8B/view?usp=sharing",
  },

  {
    title: "Machine Learning in Hindi",
    issuer: "NPTEL",
    year: "2025",
    icon: GiBrain,
    iconColor: "#00ff88",
    glowColor: "green",
    score: "ELITE + TOP 5% · 71%",
    image: "/img/Machine Learning (ML) in Hindi_page-0001.jpg",
    verifyUrl:
      "https://drive.google.com/file/d/1MX76jPtSw4ayjnoc2PqAxq7A41xxt_-g/view?usp=sharing",
  },

  {
    title: "JavaScript Programming Course - Self Paced",
    issuer: "GeeksforGeeks",
    year: "2025",
    icon: FaJs,
    iconColor: "#f7df1e",
    glowColor: "yellow",
    score: "CERTIFICATE OF COMPLETION",
    image: "/img/javascript_gfg_certificate.png",
    verifyUrl:
      "https://drive.google.com/file/d/18kQz_QN5kRD6oe2NmyDUKdMQsyS5FGpQ/view?usp=sharing",
  }
];
export const codingProfilesData = [
  {
    platform: "LeetCode",
    username: "ozatirth51",
    stats: "300+ Solved",
    details: "Focus: Data Structures, Algorithms, Dynamic Programming",
    icon: "code",
    color: "gold",
    url: "https://leetcode.com/u/OzaTirth_2004/",
  },
  {
    platform: "GeeksforGeeks",
    username: "ozatirth51",
    stats: "150+ Solved",
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
