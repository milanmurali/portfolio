import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import type { ProjectItem } from '@/types/portfolio'
import { Badge } from '@/components/ui/badge'
import { ProjectPreview } from '@/components/projects/ProjectPreview'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils'

interface FeaturedProjectRowProps {
  project: ProjectItem
  reversed?: boolean
}

export function FeaturedProjectRow({ project, reversed = false }: FeaturedProjectRowProps) {
  return (
    <ScrollReveal>
      <article className="group grid gap-8 border-t border-[var(--border)] py-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-14">
        <div
          className={cn(
            'lg:col-span-7',
            reversed ? 'lg:order-2' : 'lg:order-1',
          )}
        >
          <Link
            to={`/projects/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="block focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <ProjectPreview project={project} />
          </Link>
        </div>

        <div
          className={cn(
            'lg:col-span-5 flex flex-col justify-between space-y-5',
            reversed ? 'lg:order-1' : 'lg:order-2',
          )}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-subtle)]">
              <span className="text-[var(--accent)]">{project.index}</span>
              <span>/</span>
              <span>{project.year}</span>
              <span>/</span>
              <span>{project.status}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)]">
              <Link
                to={`/projects/${project.slug}`}
                className="transition-colors hover:text-[var(--accent)]"
              >
                {project.title}
              </Link>
            </h3>

            <p className="text-sm font-medium text-[var(--text-muted)]">
              {project.subtitle}
            </p>

            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 6).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.techStack.length > 6 && (
              <Badge variant="solid">+{project.techStack.length - 6}</Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              <span>Case Study</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>Source</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
