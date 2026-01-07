
export const PERSONAL = {
  name: "Hrithik Sham",
  title: "Engineer. Designer. Builder.",
  tagline: "I craft software with precision and soul.",
  email: "hrithikksham@gmail.com",
  phone: "+91 9500677722",
  location: "Kumbakonam, TN",
  linkedin: "https://linkedin.com/in/hrithik-sham-d2811",
  // Updated bio from your image
  bio: "Full-stack engineer with hands-on experience building scalable web and mobile applications, AI-driven systems, and real-world business software. I focus on clean architecture, backend performance, and thoughtful UI/UX—shipping production-ready products where engineering clarity and design intent align naturally.",
  chips: ["Full-stack", "Backend", "Designer"],
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
    id: "yournote",
    title: "Yournote",
    tagline: "Secure Client-Server Notes",
    description:
      "A scalable, privacy-focused note-taking application with offline support and encrypted storage.",
    tags: ["React Native", "FastAPI", "MongoDB", "Redis"],
    problem:
      "Existing note apps lacked strong security, offline reliability, and performance at scale.",
    solution:
      "Built a React Native client with a FastAPI backend, JWT authentication, Redis-based state management, and optimized MongoDB schemas to reduce API fetches by ~35%.",
    role: "Full Stack & Mobile Engineer",
    metrics: ["10k+ Notes Supported", "Offline Sync", "35% Reduced API Load"],
    link: "https://hrithikksham.github.io/yournoteappapk/"
  },
  {
    id: "payroll",
    title: "Payroll Management System",
    tagline: "Automated Payroll Platform",
    description:
      "A full-stack payroll system for managing employee salaries, deductions, and reports.",
    tags: ["MERN Stack", "JWT", "Chart.js", "Tailwind CSS"],
    problem:
      "Manual payroll processing caused frequent errors and consumed excessive administrative time.",
    solution:
      "Implemented JWT-secured REST APIs with automated salary calculations and real-time dashboards for payroll insights.",
    role: "Full Stack Developer",
    metrics: ["50+ Employees Managed", "30% Accuracy Improvement", "40% Efficiency Gain"],
    link: "https://anjosalary.vercel.app/"
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    tagline: "Scalable Backend Service",
    description:
      "A low-latency URL shortening service optimized for high read traffic and reliability.",
    tags: ["Node.js", "Redis", "MongoDB", "REST APIs"],
    problem:
      "High-traffic redirect systems require extremely fast reads and protection against abuse.",
    solution:
      "Designed a cache-first architecture using Redis, asynchronous analytics processing, and rate limiting to ensure consistent redirect performance under load.",
    role: "Backend Engineer",
    metrics: ["Low-Latency Redirects", "Read-Heavy Optimization", "Rate-Limited APIs"],
    link: "https://makeitshort-ten.vercel.app/"
  },
  {
    id: "llm-agent",
    title: "Autonomous LLM Agent",
    tagline: "AI-Powered API Intelligence",
    description:
      "An autonomous AI agent that understands API documentation and executes live API calls from natural language queries.",
    tags: ["React", "FastAPI", "LangChain", "Cosmos DB"],
    problem:
      "Developers spend significant time reading and understanding complex API documentation.",
    solution:
      "Built a LangChain-based reasoning loop that parses API docs, extracts intent, and auto-generates executable API calls in real time.",
    role: "AI Engineer",
    metrics: ["3X Faster Responses", "80-90% Retrieval Accuracy"],
    link: "Yet to deploy"
  }
];

/**
 * Work Experience
 * Source: Resume (Work Experience section)
 */

export const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "Anjo Aqua World",
    period: "Apr 2025 – Jun 2025",
    bullets: [
      "Developed a full-stack payroll system managing 50+ employee records with automated salary processing.",
      "Implemented JWT-secured REST APIs tested via Postman, improving data accuracy by 30% and reducing manual effort.",
      "Built real-time salary dashboards using Chart.js and Tailwind CSS, boosting operational efficiency by 40%."
    ]
  },
  {
    role: "Backend Developer Intern",
    company: "InnoByte Services",
    period: "Aug 2025 – Oct 2025",
    bullets: [
      "Developed a scalable REST API (15+ endpoints) for task management and authentication.",
      "Optimized backend performance by 40% through database indexing and pagination while handling 500+ concurrent requests via Nginx load balancing.",
      "Implemented secure JWT authentication, role-based access control, and file uploads with Swagger-documented APIs for seamless handover."
    ]
  }
];
export const COMPANIES = [
  {
    name: "HUDO",
    role: "Founder & Product Engineer",
    period: "2025 – Present",
    description: "HUDO is a product-focused software venture building practical SaaS tools for small businesses and local service providers.",
    focusAreas: [
      "Business management software",
      "SaaS for salons & local businesses",
      "Payment integration & automation",
      "Minimalist UI/UX systems"
    ],
    responsibilities: [
      "Directly interacted with business owners to understand real-world pain points.",
      "Designed and built full-stack solutions from scratch.",
      "Handled pricing, onboarding, and client communication.",
      "Owned UI/UX, backend architecture, and deployment."
    ],
    highlights: [
      "Converted real conversations into shipped software.",
      "End-to-end ownership: product, engineering, and delivery.",
      "Early-stage SaaS execution experience."
    ]
  }
];  