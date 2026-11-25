import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Award, Briefcase, GraduationCap } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { usePageMeta } from '@/hooks/usePageMeta'
import { CERTIFICATIONS, EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '@/data/experience'
import { PROFILE } from '@/data/profile'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ExperiencePage() {
  usePageMeta({
    title: 'Experience | Milan Murali',
    description:
      'Internships at Invigo Software (Vizru), Infotact Solutions, and Softroniics, along with BCA education and certifications of Milan Murali.',
    path: '/experience',
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="border-b border-[var(--border)] pb-12 space-y-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          EXPERIENCE &amp; CREDENTIALS
        </p>
        <SplitText
          as="h1"
          text="Internships, Education & Certifications"
          className="font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl max-w-4xl"
        />
        <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
          Chronological software engineering internships—starting with my latest work at Invigo Software (Vizru)—alongside my academic background and technical certifications.
        </p>
      </header>

      {/* Experience Section — Latest First (Invigo prioritized) */}
      <section className="border-b border-[var(--border)] py-14 space-y-8">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            01 / Internships (Latest First)
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE_ITEMS.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={idx * 0.05}>
              <article
                className={cn(
                  'border bg-[var(--surface)] p-6 sm:p-10 space-y-7',
                  exp.featured
                    ? 'border-[var(--accent)]/60'
                    : 'border-[var(--border)]',
                )}
              >
                <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="inline-flex items-center gap-1.5 text-[var(--accent)]">
                        <Briefcase className="h-3.5 w-3.5" />
                        <span>{exp.type}</span>
                      </span>
                      {exp.featured && (
                        <Badge variant="accent">Latest</Badge>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="text-base text-[var(--text-muted)]">
                      {exp.company} · {exp.location}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="font-mono text-xs text-[var(--text)]">
                      {exp.period}
                    </span>
                    {exp.repoUrl && (
                      <a
                        href={exp.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>softroniics repository</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-base leading-relaxed text-[var(--text-muted)]">
                  {exp.summary}
                </p>

                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                      Key Contributions &amp; Responsibilities
                    </h4>
                    <ul className="space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
                      {exp.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="solid">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {exp.modulesExplored && (
                  <div className="border-t border-[var(--border)] pt-6 space-y-4">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                      Training Repository Modules
                    </h4>
                    <div className="grid gap-4 md:grid-cols-3">
                      {exp.modulesExplored.map((mod) => (
                        <div
                          key={mod.area}
                          className="border border-[var(--border)] bg-[var(--bg)] p-4 space-y-2"
                        >
                          <p className="font-display text-sm font-medium text-[var(--text)]">
                            {mod.area}
                          </p>
                          <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                            {mod.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b border-[var(--border)] py-14 space-y-8">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            02 / Education
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Academic Background
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION_ITEMS.map((edu) => (
            <ScrollReveal key={edu.degree}>
              <article className="h-full border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
                    <GraduationCap className="h-4 w-4" />
                    <span>Education</span>
                  </span>
                  <span className="font-mono text-xs text-[var(--text-subtle)]">{edu.period}</span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {edu.institution} · {edu.location}
                  </p>
                </div>

                <ul className="space-y-2 border-t border-[var(--border)] pt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  {edu.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="border-b border-[var(--border)] py-14 space-y-8">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            03 / Certifications
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Verified Assessments &amp; Bootcamps
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-3.5 border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
              <div className="space-y-1">
                <h3 className="font-display text-base font-medium text-[var(--text)]">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-[var(--text-subtle)]">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn & Next Step */}
      <section className="py-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-1.5">
          <p className="font-mono text-xs text-[var(--text-subtle)]">
            Connect Online
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            View my LinkedIn profile or browse my full-stack projects and architecture details.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild>
            <Link to="/projects">
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
