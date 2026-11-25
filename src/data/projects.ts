import type { ProjectItem } from '@/types/portfolio'

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'careersync',
    index: '01',
    title: 'CareerSync',
    subtitle: 'Internal Placement Management & Job Tracking Platform',
    year: '2025 — 2026',
    status: 'Full-Stack Build',
    category: 'Full-Stack',
    featured: true,
    summary:
      'A centralized MERN platform for managing job opportunities, student verification, applications, and interviews within educational institutions—featuring AI-based job matching.',
    overview:
      'CareerSync organizes campus recruitment workflows into student and administrator dashboards. Students maintain verified academic profiles—skills, CGPA, education, and certificates—while administrators publish listings, verify student profiles, and schedule interviews. Integrated Google Gemini endpoints evaluate job compatibility and rank best-fit opportunities.',
    problem:
      'Campus placement tracking often relies on scattered spreadsheets and manual profile checks, making it difficult for students to gauge how well their skills match a listing or for admins to coordinate verification and interview stages.',
    approach:
      'Engineered an Express 5 + MongoDB backend with JWT authentication middleware, Formik & Yup form validation on the React frontend, and dedicated `/ai` endpoints powered by Google Gemini (`gemini-2.5-flash`) returning structured JSON compatibility assessments.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'REST API',
      'Formik & Yup',
      'Recharts',
      'Google Gemini API',
    ],
    keyFeatures: [
      'Role-based Student and Admin dashboards with JWT-authenticated routes.',
      'Student profile verification workflow (`Not Verified`, `Under Verification`, `Verified`, `Rejected`).',
      'Job listing management with required skills, minimum CGPA criteria, and applicant tracking.',
      'Interview scheduling model tracking student ID, date, time, mode, and status.',
      'AI Compatibility Checker (`/ai/check-compatibility`) scoring match percentage, matching/missing skills, and advice.',
      'AI Job Recommender (`/ai/suggest-jobs`) ranking top listings against the student profile.',
    ],
    architecture: [
      {
        layer: 'Role-Based Frontend',
        summary: 'Separate student and admin workspaces with Formik/Yup validation and Recharts summaries.',
        modules: ['StudentDashboard.jsx', 'Studentverification.jsx', 'Admindashboard.jsx', 'Addjob.jsx', 'Managejob.jsx'],
      },
      {
        layer: 'Express REST API & Auth',
        summary: 'JWT middleware protecting user, job listing, feedback, and AI routes.',
        modules: ['routes/userRouter.js', 'routes/listingRouter.js', 'routes/aiRoutes.js', 'middleware/auth.js'],
      },
      {
        layer: 'Gemini AI & Mongoose Layer',
        summary: 'Structured prompt engineering alongside Mongoose schemas.',
        modules: ['utils/aiStuff.js', 'models/userSchema.js', 'models/listingSchema.js'],
      },
    ],
    challengesAndLearnings: [
      'Designing structured prompts for Gemini 2.5 Flash to consistently return JSON fields (score, matching skills, missing skills, recommendation).',
      'Modeling multi-stage placement state—student verification status alongside per-job applied/selected/rejected arrays and embedded interview schedules.',
      'Using Formik and Yup for reliable validation on multi-field job creation and student profile forms.',
    ],
    repoUrl: 'https://github.com/milanmurali/CareerSync',
    previewKind: 'careersync',
  },
  {
    slug: 'civiceye',
    index: '02',
    title: 'CivicEye',
    subtitle: 'Citizen Complaint & Reporting System',
    year: '2025 — 2026',
    status: 'Completed · Live Demo',
    category: 'Full-Stack',
    featured: true,
    summary:
      'A MERN stack platform enabling citizens to report local civic issues with real-time status tracking and proof uploads, paired with an admin resolution dashboard.',
    overview:
      'CivicEye bridges local issue reporting and administrative resolution. Residents can register, submit categorized civic complaints with location details and photographic evidence, and monitor complaint progression, while administrators oversee user accounts, complaint statuses, and feedback.',
    problem:
      'Local civic issues often lack transparent status tracking or verifiable visual evidence once reported, leaving residents unsure whether a complaint has been reviewed, approved, or resolved.',
    approach:
      'Built a role-separated MERN application with dedicated Citizen and Admin views, Multer-backed image/media upload handling served via Express static routes, Mongoose schemas for users, complaints, and feedback, and Recharts visualizations for administrative oversight.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'React Router',
      'Axios',
      'Recharts',
      'Multer',
      'JWT',
    ],
    keyFeatures: [
      'Role-based citizen and administrator flows (Guest landing, User portal, Admin suite).',
      'Complaint submission with category, description, location, and Multer proof upload.',
      'Four-stage complaint lifecycle tracking: Pending, Approved, Resolved, and Rejected.',
      'Admin complaint management, user directory administration, and citizen feedback review.',
      'Dashboard data visualizations powered by Recharts and real-time toast notifications.',
    ],
    architecture: [
      {
        layer: 'React Client (CE Views)',
        summary: 'Dedicated portals for guests, registered citizens, and administrators.',
        modules: ['CEGuestHomePage.jsx', 'CEUserHomePage.jsx', 'CEMyComplaints.jsx', 'CEAdminDashboard.jsx', 'CEAdminComplaints.jsx'],
      },
      {
        layer: 'Express REST API',
        summary: 'Modular routers and controllers for user auth, complaints, and feedback.',
        modules: ['Routes/userRouter.js', 'Routes/complaintRouter.js', 'Routes/feedbackRouter.js', 'multer.js'],
      },
      {
        layer: 'MongoDB & Media Storage',
        summary: 'Mongoose models referencing user ObjectIds alongside static /proofs file hosting.',
        modules: ['Models/userSchema.js', 'Models/complaintSchema.js', 'Models/feedbackSchema.js'],
      },
    ],
    challengesAndLearnings: [
      'Handling multipart form uploads with Multer and linking stored proof paths cleanly to MongoDB complaint records.',
      'Structuring role-specific routes and admin views for managing complaints, users, and feedback without cluttering citizen workflows.',
      'Integrating Recharts analytics and real-time toast feedback across asynchronous API operations.',
    ],
    repoUrl: 'https://github.com/milanmurali/civiceye',
    liveUrl: 'https://civiceyefrontend.onrender.com',
    previewKind: 'civiceye',
  },
  {
    slug: 'mediq',
    index: '03',
    title: 'MediQ',
    subtitle: 'Self-Service Patient Registration Kiosk',
    year: '2026',
    status: 'Completed · Live Demo',
    category: 'Full-Stack',
    featured: true,
    summary:
      'A hospital check-in kiosk and administrative queue dashboard with department-prefixed token generation, printable slips, and persistent accessibility controls.',
    overview:
      'MediQ streamlines outpatient hospital check-in by separating the patient-facing self-service flow from the staff administration panel. Patients enter details, select a medical department, and receive a printable department-coded token, while hospital staff can search and filter active registrations in real time.',
    problem:
      'Front-desk registration queues often slow down when patients wait in a single line for routine check-in or department routing, and shared kiosks frequently overlook readable typography controls for visitors with varying vision needs.',
    approach:
      'Designed a four-route kiosk interface (Welcome, Registration, Token Confirmation, and Admin Panel) paired with two complete backend implementations—one in Python (FastAPI + SQLAlchemy + Pydantic) and one in Node.js (Express + better-sqlite3)—both sharing a clean SQLite schema and department prefix token service.',
    techStack: [
      'React.js',
      'React Router',
      'Tailwind CSS',
      'Axios',
      'Vite',
      'FastAPI',
      'Python',
      'SQLAlchemy',
      'Express.js',
      'SQLite',
      'react-to-print',
    ],
    keyFeatures: [
      'Guided kiosk check-in capturing name, age, gender, mobile, optional address, and department.',
      'Automatic department-prefixed sequential tokens (GEN, CAR, ORT, DER, PED — e.g., ORT-001).',
      'Printable token slip powered by react-to-print alongside instant confirmation details.',
      'Administrative dashboard supporting live search by patient name or ID and department filters.',
      'Adjustable font-size accessibility settings persisted in browser localStorage.',
      'Dual backend parity: Python FastAPI (SQLAlchemy/Pydantic) and Node.js Express (better-sqlite3).',
    ],
    architecture: [
      {
        layer: 'Frontend Kiosk & Admin UI',
        summary: 'Vite + React Router application split into Welcome, Register, Token, and Admin pages.',
        modules: ['Welcome.jsx', 'Register.jsx', 'Token.jsx', 'Admin.jsx'],
      },
      {
        layer: 'Python Backend (FastAPI)',
        summary: 'Typed Pydantic schemas, SQLAlchemy models, CRUD helpers, and token generator service.',
        modules: ['app/main.py', 'app/routers/patients.py', 'app/services/token.py', 'app/models.py'],
      },
      {
        layer: 'Node.js Backend (Express)',
        summary: 'Express controller/route layer with input validation and better-sqlite3 persistence.',
        modules: ['controllers/patientController.js', 'services/generateToken.js', 'utils/departmentCodes.js'],
      },
    ],
    challengesAndLearnings: [
      'Maintaining identical API contracts (`POST /api/patients`, `GET /api/patients?search=&department=`) across both FastAPI and Express backends.',
      'Formatting the token card cleanly for both kiosk display and thermal/standard print output via react-to-print.',
      'Persisting accessibility font scaling reliably across kiosk sessions using localStorage without layout breakage.',
    ],
    repoUrl: 'https://github.com/milanmurali/MediQ',
    liveUrl: 'https://medi-q-five.vercel.app/',
    previewKind: 'mediq',
  },
  {
    slug: 'taskflow',
    index: '04',
    title: 'TaskFlow',
    subtitle: 'Minimal Full-Stack Task Manager',
    year: '2025',
    status: 'Completed · Live Demo',
    category: 'Full-Stack',
    featured: false,
    summary:
      'A focused MERN CRUD application for creating, filtering, inline-editing, completing, and deleting tasks through a clean REST API.',
    overview:
      'TaskFlow is a streamlined full-stack task management app built to pair a fast React + Tailwind CSS frontend with an Express and MongoDB backend.',
    problem:
      'Simple daily task tracking benefits from immediate inline edits and clear status filters without heavy project-management overhead.',
    approach:
      'Implemented a concise Mongoose `task` schema (`title`, `status`, timestamps) and REST endpoints (`/task/view`, `/task/add`, `/task/update/:id`, `/task/delete/:id`) consumed via Axios with loading states and inline edit mode.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Axios',
      'React Hot Toast',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
    ],
    keyFeatures: [
      'Create, read, inline-edit, toggle completion, and delete tasks.',
      'Client-side filter tabs (`all` and status-based views) with instant UI feedback.',
      'RESTful Express + Mongoose backend with timestamped records.',
      'Deployed live on Vercel.',
    ],
    architecture: [
      {
        layer: 'React Frontend',
        summary: 'Single cohesive TaskFlow view managing state and inline edit controls.',
        modules: ['src/TaskFlow.jsx', 'src/App.jsx'],
      },
      {
        layer: 'Express + MongoDB Backend',
        summary: 'Lightweight MVC separation across taskRouter, taskController, and taskschema.',
        modules: ['routes/taskRouter.js', 'controllers/taskController.js', 'models/taskschema.js'],
      },
    ],
    challengesAndLearnings: [
      'Connecting a Vite frontend deployed on Vercel to an environment-configured backend API URL.',
      'Designing clean inline edit state transitions (`editTaskId`, `editTitle`, save/cancel handlers) with keyboard-friendly controls.',
    ],
    repoUrl: 'https://github.com/milanmurali/TaskFlow',
    liveUrl: 'https://task-flow-plum-kappa.vercel.app',
    previewKind: 'taskflow',
  },
  {
    slug: 'cryptify',
    index: '05',
    title: 'Cryptify',
    subtitle: 'Cryptocurrency Market Explorer',
    year: '2024 — 2025',
    status: 'Pinned Repository',
    category: 'Frontend',
    featured: false,
    summary:
      'A React and Redux Toolkit interface for browsing cryptocurrency market data, searching assets, and inspecting individual coin detail views.',
    overview:
      'Cryptify is a pinned frontend application exploring centralized Redux Toolkit state management, dynamic routing with React Router, and responsive Tailwind CSS + Flowbite layouts.',
    problem:
      'Tracking multiple coin metrics and navigating between market overviews and detail views requires predictable shared state and quick client-side filtering.',
    approach:
      'Structured Redux Toolkit store and slice logic alongside Home, Dashboard, and CoinDetails pages backed by Axios and JSON Server.',
    techStack: [
      'React.js',
      'Redux Toolkit',
      'React Router',
      'Tailwind CSS',
      'Flowbite',
      'Axios',
      'JSON Server',
    ],
    keyFeatures: [
      'Centralized Redux Toolkit state (`Store.js` and `Slice.js`).',
      'Live search filtering across cryptocurrency listings.',
      'Dedicated Dashboard and CoinDetails views with custom SVG branding assets.',
    ],
    architecture: [
      {
        layer: 'State & Routing',
        summary: 'Redux Toolkit store paired with React Router page navigation.',
        modules: ['Cryptify/Store.js', 'Cryptify/Slice.js', 'Cryptify/Home.jsx', 'Cryptify/DashBoard.jsx', 'Cryptify/CoinDetails.jsx'],
      },
    ],
    challengesAndLearnings: [
      'Organizing shared application state with Redux Toolkit slices and async data fetching via Axios.',
      'Designing custom SVG app icon assets (`AppIcon.svg`, `AppIconFull.svg`) alongside Tailwind UI components.',
    ],
    repoUrl: 'https://github.com/milanmurali/cryptify',
    previewKind: 'cryptify',
  },
  {
    slug: 'busnav',
    index: '06',
    title: 'BusNav',
    subtitle: 'Urban Public Transit & Route Platform',
    year: '2024',
    status: 'Academic Project · Pinned',
    category: 'Academic',
    featured: false,
    summary:
      'A Django web application built to help residents and tourists check private city bus schedules, routes, stops, and nearby attractions.',
    overview:
      'BusNav organizes urban private bus data into modular Django apps covering bus registration, routes, route stops, schedules, attractions, crowd-sourced updates, favorites, and feedback.',
    problem:
      'Urban private bus timings and stop sequences are frequently hard for daily commuters and visitors to discover in one structured place.',
    approach:
      'Built a multi-app Django architecture backed by SQL tables, separating administration workflows from passenger-facing search, favorites, and feedback.',
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'SQL'],
    keyFeatures: [
      'Modular Django apps for bus registration, routes, stops, schedules, and local attractions.',
      'Crowd-sourced updates, user favorites, notifications, and feedback modules.',
      'Role-separated admin management and commuter views.',
    ],
    architecture: [
      {
        layer: 'Modular Django Apps',
        summary: 'Domain-isolated apps connected through Django ORM and SQL.',
        modules: ['bus_register', 'bus_route', 'bus_route_stop', 'bus_schedule', 'attractions', 'crowdsource', 'realtime'],
      },
    ],
    challengesAndLearnings: [
      'Structuring relational models across routes, ordered stops, and schedules in Django.',
      'Managing multi-role HTML templates for bus operators, admins, and commuters.',
    ],
    repoUrl: 'https://github.com/milanmurali/BusNav',
    previewKind: 'busnav',
  },
  {
    slug: 'n8n-workflows',
    index: '07',
    title: 'n8n Automations',
    subtitle: 'Amelie RSS Digest & Takashi AI Memory Assistant',
    year: '2026',
    status: 'Automation Exploration',
    category: 'Automation',
    featured: false,
    summary:
      'Documented n8n workflow automations combining scheduled RSS aggregation, Telegram bots, Supabase persistence, and open-source LLM parsing.',
    overview:
      'A repository housing two practical n8n workflows: Amelie (v0.3), a scheduled RSS reader that categorizes feed updates into Telegram summaries, and Takashi (v0.5), a natural-language financial ledger assistant built with Telegram, Supabase, and LLMs.',
    problem:
      'Keeping track of scattered RSS updates and casual peer-to-peer IOUs manually creates friction in everyday personal workflows.',
    approach:
      'Modeled event-driven node graphs in n8n with fallback parsing logic, scheduled triggers, and Supabase storage.',
    techStack: ['n8n', 'Telegram Bot API', 'Supabase', 'RSS', 'Open-Source LLMs', 'JSON Workflows'],
    keyFeatures: [
      'Amelie: Scheduled trigger → RSS Read → Parse & Categorize → Formatted Telegram summary.',
      'Takashi: Natural-language expense/debt capture ("I owe X 250", "I paid X 100") with balance queries.',
      'Fallback handling for messy natural-language Telegram messages persisted to Supabase.',
    ],
    architecture: [
      {
        layer: 'Workflow Graphs',
        summary: 'Versioned JSON workflow definitions with standalone setup documentation.',
        modules: ['amelie/0.3/amelie.json', 'takashi/0.5/takashi.json'],
      },
    ],
    challengesAndLearnings: [
      'Handling inconsistent natural-language inputs gracefully with fallback branches inside visual workflow nodes.',
      'Documenting reproducible credentials and trigger setups clearly in workflow READMEs.',
    ],
    repoUrl: 'https://github.com/milanmurali/n8n-workflows',
    previewKind: 'n8n',
  },
]

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
