
export const PERSONAL = {
  name: "Hrithik Sham",
  title: "Engineer. Designer. Builder.",
  tagline: "I craft software with precision and soul.",
  email: "hrithikksham@gmail.com",
  phone: "+91 9500677722",
  location: "Kumbakonam, TN",
  linkedin: "https://linkedin.com/in/hrithik-sham-d2811",
  // Updated bio from your image
  bio: "Full-stack engineer specializing in scalable architecture and AI-driven interfaces. I merge technical depth with cinematic design to build software that feels inevitable.",
  chips: ["Full-stack", "Mobile", "AI-driven Apps"]
};

// ... rest of the file remains the same (SKILLS, PROJECTS, etc.)
export const SKILLS = [
  { category: "Frontend", items: ["React.js", "Next.js", "React Native", "TailwindCSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js (Express)", "FastAPI", "Microservices", "JWT Auth", "Redis"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "Cosmos DB", "SQL"] },
  { category: "DevOps", items: ["Docker", "Azure", "Vercel", "Nginx", "Git"] },
  { category: "Languages", items: ["Python", "JavaScript/TypeScript", "C/C++", "Java"] }
];

export const PROJECTS = [
  {
    id: "distrax",
    title: "DistraX",
    tagline: "Minimalist Productivity OS",
    description: "A distraction-free environment designed for deep focus with cinematic transitions.",
    tags: ["Next.js", "Framer Motion", "Supabase"],
    problem: "Digital distraction overwhelms most productivity apps with clutter and notifications.",
    solution: "Built a distraction-free environment with cinematic transitions, state isolation, and offline-first architecture.",
    role: "Lead Engineer & Designer",
    metrics: ["60fps Animation Pipeline", "Custom Motion System", "Offline Sync"]
  },
  {
    id: "payroll",
    title: "Payroll System",
    tagline: "Automated Enterprise Solution",
    description: "Full-stack payroll system managing 50+ employee records with automated salary processing.",
    tags: ["MERN Stack", "Chart.js", "Tailwind"],
    problem: "Manual payroll processing led to errors and time wastage.",
    solution: "Implemented JWT-secured REST APIs and real-time dashboards.",
    role: "Full Stack Developer",
    metrics: ["30% Data Accuracy Boost", "40% Efficiency Gain", "Auto Salary Gen"]
  },
  {
    id: "yournote",
    title: "Yournote App",
    tagline: "Secure Client-Server Notes",
    description: "Scalable note app with encryption, handling 10,000+ notes.",
    tags: ["React Native", "FastAPI", "MongoDB"],
    problem: "Need for a secure, offline-capable note-taking app.",
    solution: "Designed reduced API fetches by 35% using optimized schemas.",
    role: "Mobile Architect",
    metrics: ["10k+ Notes Handled", "Offline Sync", "35% Less API Load"]
  },
  {
    id: "llm-agent",
    title: "Autonomous Agent",
    tagline: "AI-Driven Query Engine",
    description: "LLM chatbot that parses API docs and generates live calls.",
    tags: ["React", "LangChain", "Cosmos DB"],
    problem: "Complex API documentation slows down developer integration.",
    solution: "Reasoning loop with LangChain agents to auto-generate calls.",
    role: "AI Engineer",
    metrics: ["3x Faster Responses", "90% Retrieval Accuracy"]
  }
];

export const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "InnoByte Services",
    period: "Aug 2025 - Oct 2025",
    bullets: [
      "Built 15+ scalable REST APIs for task management.",
      "Optimized backend performance by 40% via indexing.",
      "Handled 500+ concurrent requests using Nginx load balancing.",
      "Implemented JWT auth & RBAC with Swagger docs."
    ]
  }
];

export const TESTIMONIALS = [
  {
    text: "Hrithik brings a rare combination of engineering rigor and design intuition.",
    author: "Senior PM, InnoByte"
  },
  {
    text: "The DistraX interface is unlike anything I've used. Pure focus.",
    author: "Beta User"
  }
];