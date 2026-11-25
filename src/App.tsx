import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'

const HomePage = lazy(() =>
  import('@/pages/Home/HomePage').then((m) => ({ default: m.HomePage })),
)
const AboutPage = lazy(() =>
  import('@/pages/About/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ProjectsPage = lazy(() =>
  import('@/pages/Projects/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
)
const ProjectDetailsPage = lazy(() =>
  import('@/pages/ProjectDetails/ProjectDetailsPage').then((m) => ({
    default: m.ProjectDetailsPage,
  })),
)
const ExperiencePage = lazy(() =>
  import('@/pages/Experience/ExperiencePage').then((m) => ({ default: m.ExperiencePage })),
)
const ContactPage = lazy(() =>
  import('@/pages/Contact/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex min-h-[60vh] max-w-6xl items-center px-4 sm:px-6 lg:px-8"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-subtle)]">
        Loading view...
      </span>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
