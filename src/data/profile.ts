import type { StackGroup } from '@/types/portfolio'

export const PROFILE = {
  name: 'Milan Murali',
  role: 'Full Stack Web Developer',
  location: 'Kozhikode, Kerala, India',
  availability: 'Available for Full Stack & Frontend Roles',
  email: 'milanmurali.prof@gmail.com',
  phone: '+91 956 744 0899',
  githubUrl: 'https://github.com/milanmurali',
  linkedinUrl: 'https://www.linkedin.com/in/milanmurali',
  siteUrl: 'https://milanmurali.dev',
  heroGreeting: "Hello, I'm",
  heroSummary:
    'Full Stack Web Developer building scalable web applications with React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and Python (FastAPI). Focused on clean reusable code, REST APIs, and turning requirements into dependable software.',
  aboutLead:
    'Full Stack Web Developer with hands-on experience across three software engineering internships—most recently at Invigo Software (Vizru) working with React, Next.js, TypeScript, FastAPI, Vizru Workflows, and Docker.',
  aboutStory: [
    'I completed my Bachelor of Computer Applications (BCA) at College of Applied Science IHRD, Kozhikode in 2024, following Higher Secondary Computer Science at GBHSS Parayenchery.',
    'Across internships at Invigo Software Pvt. Ltd. (Vizru), Infotact Solutions, and Softroniics, I progressed from core MERN stack development to building production features across React.js, Next.js, TypeScript, Python/FastAPI, Vizru Workflows, and Dockerized local environments.',
    'Outside of internships, I build practical full-stack applications—such as CareerSync, CivicEye, and MediQ—focusing on clear data modeling, responsive interfaces, and maintainable API boundaries.',
  ],
  philosophy: [
    {
      title: 'Clean, reusable architecture',
      description:
        'Writing maintainable components and separating frontend state, REST APIs, and workflow logic so features remain easy to debug and extend.',
    },
    {
      title: 'End-to-end ownership',
      description:
        'Working comfortably across UI implementation, backend business workflows, API integrations, and Dockerized local environments.',
    },
    {
      title: 'Practical problem solving',
      description:
        'Translating real-world requirements—from campus placement tracking to civic reporting and hospital check-in—into clear, functional software.',
    },
  ],
  interests: [
    'Full-stack engineering with React, Next.js & TypeScript',
    'Backend APIs & business workflows (Node.js, Express, FastAPI, Vizru)',
    'Database modeling with MongoDB & SQLite/SQLAlchemy',
    'Containerized local development with Docker',
    'AI-assisted matching & n8n workflow automation',
  ],
} as const

export const STACK_GROUPS: StackGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Component architecture, routing, state management, and responsive UI.',
    items: [
      { name: 'React.js', iconKey: 'react' },
      { name: 'Next.js', iconKey: 'nextjs' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'JavaScript (ES6+)', iconKey: 'javascript' },
      { name: 'Tailwind CSS', iconKey: 'tailwind' },
      { name: 'HTML5 & CSS3', iconKey: 'html' },
      { name: 'React Router', iconKey: 'router' },
      { name: 'Redux Toolkit', iconKey: 'redux' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Workflows',
    description: 'REST APIs, business-logic workflows, authentication, and server architecture.',
    items: [
      { name: 'Node.js', iconKey: 'nodejs' },
      { name: 'Express.js', iconKey: 'express' },
      { name: 'Python', iconKey: 'python' },
      { name: 'FastAPI', iconKey: 'fastapi' },
      { name: 'Vizru Workflows', iconKey: 'workflow' },
      { name: 'REST APIs & JWT', iconKey: 'shield' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    description: 'Document stores, relational schemas, and ORM/ODM modeling.',
    items: [
      { name: 'MongoDB', iconKey: 'mongodb' },
      { name: 'Mongoose', iconKey: 'mongoose' },
      { name: 'SQLite', iconKey: 'sqlite' },
      { name: 'SQLAlchemy', iconKey: 'sqlalchemy' },
      { name: 'SQL', iconKey: 'sql' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    description: 'Core languages used across internships, projects, and coursework.',
    items: [
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'Python', iconKey: 'python' },
      { name: 'C', iconKey: 'c' },
      { name: 'SQL', iconKey: 'sql' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    description: 'Containers, API testing, build tools, version control, and deployment.',
    items: [
      { name: 'Docker', iconKey: 'docker' },
      { name: 'Git & GitHub', iconKey: 'git' },
      { name: 'Postman', iconKey: 'postman' },
      { name: 'Vite', iconKey: 'vite' },
      { name: 'Vercel', iconKey: 'vercel' },
      { name: 'Render', iconKey: 'render' },
      { name: 'n8n', iconKey: 'n8n' },
      { name: 'Gemini API', iconKey: 'ai' },
    ],
  },
]
