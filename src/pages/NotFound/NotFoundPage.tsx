import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  const { pathname } = useLocation()

  usePageMeta({
    title: '404 — Page Not Found | Milan Murali',
    description: 'The requested page could not be found on Milan Murali’s portfolio.',
    path: '/404',
  })

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Error 404 · Route Not Found
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
          This route does not exist.
        </h1>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          No page matched <code className="border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-xs text-[var(--text)]">{pathname}</code>. You can return to the homepage or browse the projects archive.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/projects">
              <span>Browse Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
