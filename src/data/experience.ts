import type { CertificationItem, EducationItem, ExperienceItem } from '@/types/portfolio'

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'invigo-vizru',
    role: 'Associate Software Engineer Intern',
    company: 'Invigo Software Pvt. Ltd. (Vizru)',
    location: 'Kozhikode, India',
    period: 'Jun 2026 – Sep 2026',
    type: 'Latest Internship · Full-Stack & Workflow Engineering',
    featured: true,
    summary:
      'Developed and maintained full-stack application features across React.js, Next.js, TypeScript, Python, and FastAPI while building and debugging backend business logic in Vizru Workflows inside Dockerized local environments.',
    responsibilities: [
      'Developed and maintained full-stack application features using React.js, Next.js, TypeScript, Python, and FastAPI, working across frontend interfaces, backend services, and API integrations.',
      'Worked extensively with Vizru Workflows as the backend/business-logic layer of real-world applications—implementing, modifying, and debugging workflows involving data operations, conditional logic, and application processes.',
      'Debugged and resolved issues across real-world applications while working with Docker for local development, including Container setup and Volume management.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'Vizru Workflows',
      'Docker',
      'API Integration',
    ],
  },
  {
    id: 'infotact-solutions',
    role: 'Associate L1 Intern',
    company: 'Infotact Solutions',
    location: 'Bangalore, India',
    period: 'May 2025 – Sep 2025',
    type: 'Internship · Full-Stack Web Development',
    summary:
      'Collaborated on full-stack MERN web development tasks with an emphasis on maintainable code, debugging, code reviews, and agile project workflows.',
    responsibilities: [
      'Collaborated on full-stack web development tasks using React.js, Node.js, Express.js, and MongoDB.',
      'Wrote clean, maintainable code, debugged application issues, and participated in code reviews.',
      'Gained hands-on experience delivering real-world projects within agile team workflows.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Agile Workflows', 'Code Review'],
  },
  {
    id: 'softroniics-mern',
    role: 'MERN Full Stack Intern',
    company: 'Softroniics',
    location: 'Kozhikode, India',
    period: 'May 2024 – Dec 2024',
    type: 'Internship · MERN Stack Training & Builds',
    summary:
      'Built foundational full-stack proficiency across React.js, Tailwind CSS, Node.js, Express.js, and MongoDB through structured coding tasks and project-based training.',
    responsibilities: [
      'Gained hands-on experience in full-stack development using React.js, Node.js, Express.js, and MongoDB, focusing on clean, maintainable code and agile collaboration.',
      'Built responsive UI components with React.js and Tailwind CSS, and developed RESTful APIs using Node.js and Express.js.',
      'Completed progressive training modules across authentication (`NodeAuth`, `ReactAuth`), Vite/React, Next.js routing, and DBMS fundamentals.',
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'HTML5 / CSS3',
    ],
    repoUrl: 'https://github.com/milanmurali/softroniics',
    modulesExplored: [
      {
        area: 'Frontend Foundations & React',
        detail: 'HTML/CSS layouts, Bootstrap UI tasks, JavaScript exercises, React, ReactTailwind, ReactVite, and ReactAuth.',
      },
      {
        area: 'Backend & Authentication',
        detail: 'Node.js & Express APIs, TaskNode exercises, and NodeAuth controller/model/route authentication workflows.',
      },
      {
        area: 'Next.js & Databases',
        detail: 'Next.js App Router layouts and dynamic routes, DBMS fundamentals, and Python practice.',
      },
    ],
  },
]

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'Bachelors of Computer Application (BCA)',
    institution: 'College of Applied Science IHRD',
    location: 'Kozhikode, India',
    period: 'Jun 2021 – Apr 2024',
    highlights: [
      'Studied core computer science subjects including C programming, data structures, database management systems (DBMS), and web technologies.',
      'Built BusNav using Python and Django to structure city bus routes, schedules, and local transit data.',
    ],
  },
  {
    degree: 'Computer Science, Higher Secondary',
    institution: 'GBHSS Parayenchery',
    location: 'Kozhikode, India',
    period: 'Jun 2019 – Mar 2021',
    highlights: [
      'Completed higher secondary education in the Computer Science stream.',
    ],
  },
]

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Frontend Development Skill Certification Test',
    issuer: 'OneRoadmap',
  },
  {
    title: 'JavaScript Skill Certification Test',
    issuer: 'OneRoadmap',
  },
  {
    title: 'JavaScript Bootcamp',
    issuer: 'LetsUpgrade.in',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
  },
]
