import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiJsonwebtokens,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import {
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaCogs,
  FaNetworkWired,
  FaBrain,
  FaServer,
  FaLayerGroup,
  FaTerminal,
  FaTools,
  FaCss3Alt,
} from "react-icons/fa";
import { GiBrain, GiArtificialIntelligence, GiNetworkBars } from "react-icons/gi";


export const skillGroups = [
  {
    id: "ai-llm",
    name: "AI & Multi-Agent Systems",
    description: "Multi-agent graph workflows, LLM orchestration, RAG pipelines, and ML algorithms.",
    skills: [
      { name: "LangGraph", level: "Advanced", desc: "Stateful multi-agent conditional routing & memory" },
      { name: "LangChain", level: "Advanced", desc: "Prompt templates, output parsers & chains" },
      { name: "RAG Systems", level: "Advanced", desc: "Context retrieval with vector embeddings" },
      { name: "Prompt Engineering", level: "Expert", desc: "Few-shot, structured JSON & reasoning schemas" },
      { name: "LLM APIs", level: "Advanced", desc: "Gemini 2.5, OpenAI, Grok integrations" },
      { name: "Scikit-Learn & ML", level: "Advanced", desc: "Classification, regression & clustering models" },
    ],
  },
  {
    id: "backend-api",
    name: "Backend & API Architecture",
    description: "Modular microservices, secure authorization pipelines, and scalable RESTful interfaces.",
    skills: [
      { name: "Node.js", level: "Expert", desc: "Event loop concurrency & asynchronous pipelines" },
      { name: "Express.js", level: "Expert", desc: "Modular route handlers, middleware & error guards" },
      { name: "REST API Design", level: "Expert", desc: "Stateless endpoint design, CRUD & pagination" },
      { name: "JWT Auth & Security", level: "Advanced", desc: "Bearer tokens, RBAC roles & refresh cycles" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend & UI Engineering",
    description: "Responsive web architectures, modern component design systems, and fluid motion.",
    skills: [
      { name: "React.js", level: "Expert", desc: "Custom hooks, state management & component lifecycle" },
      { name: "JavaScript (ES6+)", level: "Expert", desc: "Async/await, DOM pipelines & event dispatchers" },
      { name: "Next.js", level: "Advanced", desc: "Server/client components & routing patterns" },
      { name: "HTML5 & Semantic UI", level: "Expert", desc: "Accessible DOM trees & SEO metadata" },
      { name: "CSS3 & Modern Layouts", level: "Expert", desc: "Flexbox, CSS Grid, keyframes & transitions" },
      { name: "Tailwind CSS", level: "Expert", desc: "Utility architecture & design token scaling" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Caching",
    description: "NoSQL document stores, relational normalization, and high-throughput memory caches.",
    skills: [
      { name: "MongoDB", level: "Advanced", desc: "Document schemas, indexing & aggregation pipelines" },
      { name: "Mongoose", level: "Advanced", desc: "Schema validation, population & query hooks" },
      { name: "MySQL / SQL", level: "Advanced", desc: "Normalized schemas, relational keys & joins" },
      { name: "Redis", level: "Intermediate", desc: "In-memory key-value caching & rate limiting" },
    ],
  },
  {
    id: "programming",
    name: "Programming Languages",
    description: "Core algorithmic problem solving, typed logic, and backend scripting.",
    skills: [
      { name: "JavaScript", level: "Expert", desc: "Primary language for full-stack and microservices" },
      { name: "Python", level: "Advanced", desc: "Data processing, ML modeling & automation scripts" },
      { name: "C++", level: "Advanced", desc: "Competitive programming & OOP systems (450+ DSA)" },
      { name: "SQL", level: "Advanced", desc: "Complex queries, aggregations & database operations" },
    ],
  },
  {
    id: "tools-devops",
    name: "Tools & DevOps Ecosystem",
    description: "Containerization, version control workflows, API testing, and Unix environments.",
    skills: [
      { name: "Docker", level: "Intermediate", desc: "Containerized environments & multi-stage builds" },
      { name: "Git & GitHub", level: "Expert", desc: "Branching strategies, PR workflows & CI actions" },
      { name: "Postman", level: "Advanced", desc: "API testing collections, mock servers & environments" },
      { name: "Linux / Shell", level: "Intermediate", desc: "Bash command line, file systems & SSH configs" },
    ],
  },
];

export const coreCompetencies = [
  "Multi-Agent AI Orchestration (LangGraph)",
  "Full-Stack MERN Architecture",
  "Constraint-Based Scheduling Algorithms",
  "Radar & Satellite Remote Sensing Data",
  "450+ DSA Competitive Problem Solving",
  "Microservice Architecture & REST APIs"
];
