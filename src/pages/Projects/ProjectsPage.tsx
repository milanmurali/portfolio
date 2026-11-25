import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PROJECTS } from '@/data/projects'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { FeaturedProjectRow } from '@/components/projects/FeaturedProjectRow'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const TECH_FILTERS = ['All', 'React', 'Node.js', 'Python', 'MongoDB', 'SQLite', 'n8n'] as const
type TechFilter = (typeof TECH_FILTERS)[number]

export function ProjectsPage() {
  usePageMeta({
    title: 'Projects | Milan Murali',
    description:
      'Selected full-stack MERN, React, FastAPI, Django, and automation projects built by Milan Murali.',
    path: '/projects',
  })

  const [activeFilter, setActiveFilter] = useState<TechFilter>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS
    return PROJECTS.filter((project) =>
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(activeFilter.toLowerCase()),
      ),
    )
  }, [activeFilter])

  const primaryShowcase = filteredProjects.filter((p) => p.featured)
  const additionalBuilds = filteredProjects.filter((p) => !p.featured)

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="border-b border-[var(--border)] pb-10 space-y-6">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            PROJECTS ARCHIVE
          </p>
          <SplitText
            as="h1"
            text="Selected Applications & Builds"
            className="font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl"
          />
          <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
            Curated full-stack, frontend, academic, and workflow automation projects verified from my GitHub repositories.
          </p>
        </div>

        {/* Technology Filter */}
        <div
          role="group"
          aria-label="Filter projects by technology"
          className="flex flex-wrap items-center gap-2 pt-2"
        >
          {TECH_FILTERS.map((filter) => {
            const active = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'rounded-sm border px-3.5 py-1.5 font-mono text-xs transition-colors cursor-pointer',
                  active
                    ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)] font-semibold'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]',
                )}
              >
                {filter}
              </button>
            )
          })}
          <span className="ml-auto font-mono text-xs text-[var(--text-subtle)]">
            Showing {filteredProjects.length} of {PROJECTS.length}
          </span>
        </div>
      </header>

      {/* Primary Editorial Showcase */}
      {primaryShowcase.length > 0 && (
        <section aria-label="Featured projects">
          {primaryShowcase.map((project, index) => (
            <FeaturedProjectRow
              key={project.slug}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </section>
      )}

      {/* Additional & Exploratory Projects (Structured Editorial Rows) */}
      {additionalBuilds.length > 0 && (
        <section className="border-t border-[var(--border)] pt-14 pb-6 space-y-8">
          <ScrollReveal>
            <div className="space-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Additional Builds
              </p>
              <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
                Focused Apps, Academic &amp; Automation Work
              </h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {additionalBuilds.map((project) => (
              <ScrollReveal key={project.slug}>
                <article className="grid gap-6 py-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-3 space-y-1">
                    <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-subtle)]">
                      <span className="text-[var(--accent)]">{project.index}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="transition-colors hover:text-[var(--accent)]"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="font-mono text-xs text-[var(--text-subtle)]">
                      {project.status}
                    </p>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <p className="text-sm font-medium text-[var(--text)]">
                      {project.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-wrap items-center gap-4 lg:justify-end">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)]"
                    >
                      <span>Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      <span>Repo</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
