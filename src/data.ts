export const resumeData = {
  basics: {
    name: "POORNIMA TALEY",
    title: "",
    summary: "Computer Science undergraduate passionate about artificial intelligence, machine learning, and full-stack web development, with hands-on experience designing, developing, and deploying scalable web applications and AI-driven solutions that improve user experience and deliver measurable impact.",
    resumeUrl: "/resume.pdf",
    location: "Bhopal, India",
    email: "poornataley@gmail.com",
    phone: "+91 9340612826",
    links: [
      { label: "Portfolio", url: "https://poornimataley.vercel.app", icon: "Globe" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/poornima-taley-006895368", icon: "Linkedin" },
      { label: "GitHub", url: "https://github.com/poorna825", icon: "Github" },
      { label: "LeetCode", url: "https://leetcode.com/u/PoornaT", icon: "Code2" }
    ]
  },
  education: [
    {
      institution: "Banasthali Vidyapith, Jaipur, India",
      degree: "Bachelor of Technology in Computer Science Engineering",
      dates: "July 2024 – June 2028 (Expected)",
      details: "Current CGPA: 9.50"
    },
    {
      institution: "Kendriya Vidyalaya No.1 O.F. Itarsi, Itarsi, India",
      degree: "Class XII (CBSE)",
      dates: "2024",
      details: "90.8%"
    },
    {
      institution: "Kendriya Vidyalaya No.1 O.F. Itarsi, Itarsi, India",
      degree: "Class X (CBSE)",
      dates: "2022",
      details: "97.2%"
    }
  ],
  skills: [
    { category: "Programming Languages", items: ["Python", "C", "C++", "SQL", "JavaScript", "TypeScript"] },
    { category: "Core Computer Science", items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOPs)", "Database Management Systems (DBMS)", "System Design (Beginner)"] },
    { category: "Frameworks & Tools", items: ["React", "Node.js", "Express", "FastAPI", "Git", "GitHub", "VS Code", "Replit", "Vercel", "MySQL", "SQLite", "Oracle", "Jupyter Notebook"] },
    { category: "Familiar With", items: ["Solidity (CryptoZombies)", "AWS Cloud (Foundational)", "Prisma ORM", "JWT Authentication", "REST APIs"] }
  ],
  projects: [
    {
      title: "Nebula – Multi-Platform Search Engine",
      type: "Full-Stack Project",
      url: "https://github.com/poorna825/exa-url-search",
      liveUrl: "https://exa-url-search.vercel.app/",
      bullets: [
        "Developed a full-stack multi-platform search engine aggregating content from 8+ platforms using FastAPI backend and React/TypeScript frontend.",
        "Implemented an 'internet census' feature that surfaces what the internet collectively thinks about a topic by combining multi-platform search results with AI-powered summaries from OpenAI GPT-4 and Exa AI Search.",
        "Deployed backend on Render and frontend on Vercel, delivering a responsive, dark-mode-enabled UI with real-time search functionality."
      ]
    },
    {
      title: "SereneSpace – Mental Health Support Platform",
      type: "Full-Stack Project",
      url: "https://github.com/poorna825/SereneSpace",
      bullets: [
        "Designed and developed a full-stack mental health platform featuring an AI-powered chatbot, peer support hub, appointment scheduling, and curated resources for users.",
        "Architected an admin dashboard and secure RESTful APIs to manage users, posts, and appointments while ensuring privacy through a dual-identity system.",
        "Implemented JWT authentication, role-based access control, and responsive UI components, with Prisma ORM managing database schemas, migrations, and data integrity."
      ]
    }
  ],
  achievements: [
    {
      title: "Sakura Science Exchange Program",
      context: "Selected for Sakura Science Exchange Program (2023, Japan) – 1 of 50 students nationwide for a competitive international program promoting science, technology, and cultural understanding.",
      type: "International Program"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      context: "Completed foundational cloud computing certification on Coursera.",
      type: "Certification"
    }
  ],
  extra: []
};
