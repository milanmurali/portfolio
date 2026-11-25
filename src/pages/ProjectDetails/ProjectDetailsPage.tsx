import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getProjectBySlug, PROJECTS } from '@/data/projects'
import { ProjectPreview } from '@/components/projects/ProjectPreview'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  usePageMeta({
    title: project ? `${project.title} | Milan Murali` : 'Project Not Found | Milan Murali',
    description: project
      ? project.overview
      : 'The requested project case study could not be found.',
    path: project ? `/projects/${project.slug}` : '/projects',
    type: 'article',
  })

  if (!project) {
    return <NotFoundPage />
  }

  const currentIdx = PROJECTS.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIdx > 0 ? PROJECTS[currentIdx - 1] : null
  const nextProject = currentIdx < PROJECTS.length - 1 ? PROJECTS[currentIdx + 1] : null

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-xs text-[var(--text-subtle)]">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text)]">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Projects</span>
        </Link>
        <span>/</span>
        <span className="text-[var(--accent)]">{project.title}</span>
      </nav>

      {/* Header */}
      <header className="border-b border-[var(--border)] pb-10 space-y-6">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-subtle)]">
          <span className="text-[var(--accent)]">{project.index}</span>
          <span>/</span>
          <span>{project.category}</span>
          <span>/</span>
          <span>{project.year}</span>
          <span>/</span>
          <span className="text-[var(--text-muted)]">{project.status}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 space-y-3">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg font-medium text-[var(--text-muted)]">
              {project.subtitle}
            </p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Button asChild variant="secondary">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub Repo</span>
              </a>
            </Button>
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="solid">
              {tech}
            </Badge>
          ))}
        </div>
      </header>

      {/* System Blueprint Preview (no screenshots) */}
      <section className="border-b border-[var(--border)] py-12">
        <ProjectPreview project={project} className="max-w-4xl" />
      </section>

      {/* Problem & Approach */}
      <section className="grid gap-10 border-b border-[var(--border)] py-12 md:grid-cols-2">
        <ScrollReveal>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Problem
            </p>
            <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
              What needed solving
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              {project.problem}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Approach
            </p>
            <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
              Engineering solution
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              {project.approach}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Key Features */}
      <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Capabilities
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Key Features
          </h2>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {project.keyFeatures.map((feature, idx) => (
              <li key={feature} className="flex items-start gap-4 py-4 text-sm sm:text-base text-[var(--text-muted)]">
                <span className="font-mono text-xs text-[var(--accent)] pt-1">
                  0{idx + 1}
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Architecture */}
      <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Structure
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Architecture &amp; Modules
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-4">
          {project.architecture.map((node) => (
            <div
              key={node.layer}
              className="border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3"
            >
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-[var(--accent)]" />
                <h3 className="font-display text-base font-medium text-[var(--text)]">
                  {node.layer}
                </h3>
              </div>
              <p className="text-sm text-[var(--text-muted)]">{node.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {node.modules.map((mod) => (
                  <Badge key={mod}>{mod}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Takeaways
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Challenges &amp; Learnings
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {project.challengesAndLearnings.map((item) => (
            <p
              key={item}
              className="border-l-2 border-[var(--accent)] pl-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Prev / Next Project Navigation */}
      <nav aria-label="Project pagination" className="grid gap-4 pt-10 sm:grid-cols-2">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-subtle)]">
              <ArrowLeft className="h-3.5 w-3.5" />
              Previous Project
            </span>
            <p className="mt-2 font-display text-lg font-medium text-[var(--text)] group-hover:text-[var(--accent)]">
              {prevProject.title}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {nextProject && (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group border border-[var(--border)] bg-[var(--surface)] p-5 text-right transition-colors hover:border-[var(--border-strong)]"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-subtle)]">
              Next Project
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <p className="mt-2 font-display text-lg font-medium text-[var(--text)] group-hover:text-[var(--accent)]">
              {nextProject.title}
            </p>
          </Link>
        )}
      </nav>
    </article>
  )
}
