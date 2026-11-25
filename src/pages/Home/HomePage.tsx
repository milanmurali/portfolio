import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PROFILE, STACK_GROUPS } from '@/data/profile'
import { PROJECTS } from '@/data/projects'
import { EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '@/data/experience'
import { SplitText } from '@/components/animations/SplitText'
import { BlurText } from '@/components/animations/BlurText'
import { Magnet } from '@/components/animations/Magnet'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { FeaturedProjectRow } from '@/components/projects/FeaturedProjectRow'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TechIcon } from '@/components/ui/TechIcon'

export function HomePage() {
  usePageMeta({
    title: 'Milan Murali | Full Stack Web Developer',
    description:
      'Portfolio of Milan Murali, a Full Stack Web Developer from Kozhikode, Kerala experienced in React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, Python, FastAPI, Vizru Workflows, and Docker.',
    path: '/',
  })

  const heroRef = useRef<HTMLElement | null>(null)
  const reducedMotion = useReducedMotion()
  const [copiedEmail, setCopiedEmail] = useState(false)

  const featuredProjects = PROJECTS.filter((p) => p.featured)
  const latestInternship = EXPERIENCE_ITEMS[0]
  const earlierInternships = EXPERIENCE_ITEMS.slice(1)
  const primaryEducation = EDUCATION_ITEMS[0]

  useEffect(() => {
    const el = heroRef.current
    if (!el || reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-stagger]',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          delay: 0.16,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        },
      )
    }, el)

    return () => ctx.revert()
  }, [reducedMotion])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      window.location.href = `mailto:${PROFILE.email}`
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative border-b border-[var(--border)] hairline-grid-bg"
      >
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-7">
              <div
                data-hero-stagger
                className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-[var(--text-muted)]"
              >
                <span className="inline-flex items-center gap-2 text-[var(--text)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--success)]" aria-hidden="true" />
                  {PROFILE.availability}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
                  {PROFILE.location}
                </span>
              </div>

              <div className="space-y-3">
                <p
                  data-hero-stagger
                  className="font-mono text-sm text-[var(--accent)]"
                >
                  {PROFILE.heroGreeting}
                </p>

                <SplitText
                  as="h1"
                  text={PROFILE.name}
                  className="font-display text-5xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl lg:text-[4.25rem]"
                />

                <p
                  data-hero-stagger
                  className="font-display text-xl font-medium text-[var(--text-muted)] sm:text-2xl"
                >
                  {PROFILE.role}
                </p>

                <BlurText
                  text={PROFILE.heroSummary}
                  className="max-w-2xl pt-2 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
                  delay={0.2}
                />
              </div>

              <div data-hero-stagger className="flex flex-wrap items-center gap-3 pt-1">
                <Magnet>
                  <Button asChild size="lg">
                    <Link to="/projects">
                      <span>View Projects</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Magnet>

                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>

                <div className="flex items-center gap-2 sm:ml-2">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Milan Murali on GitHub"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Milan Murali on LinkedIn"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Summary Index */}
            <aside
              data-hero-stagger
              aria-label="Developer profile summary"
              className="lg:col-span-4 border border-[var(--border)] bg-[var(--surface)]"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-[var(--text-subtle)]">
                <span>Current Snapshot</span>
                <span className="text-[var(--accent)]">2026</span>
              </div>
              <dl className="divide-y divide-[var(--border)] text-sm">
                <div className="flex items-start justify-between gap-4 px-4 py-3.5">
                  <dt className="font-mono text-xs text-[var(--text-subtle)]">Latest Role</dt>
                  <dd className="text-right font-medium text-[var(--text)]">
                    Associate Software Engineer Intern
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-3.5">
                  <dt className="font-mono text-xs text-[var(--text-subtle)]">Company</dt>
                  <dd className="text-right text-[var(--text-muted)]">
                    Invigo Software (Vizru) · Jun–Sep 2026
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-3.5">
                  <dt className="font-mono text-xs text-[var(--text-subtle)]">Core Stack</dt>
                  <dd className="text-right text-[var(--text-muted)]">
                    React · Next.js · Node · FastAPI
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-3.5">
                  <dt className="font-mono text-xs text-[var(--text-subtle)]">Education</dt>
                  <dd className="text-right text-[var(--text-muted)]">
                    BCA · CAS IHRD (2024)
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div
            data-hero-stagger
            className="mt-12 flex items-center justify-between border-t border-[var(--border)] pt-6"
          >
            <a
              href="#featured-projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              <ArrowDown className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Scroll to selected work</span>
            </a>
            <span className="hidden sm:inline font-mono text-xs text-[var(--text-subtle)]">
              github.com/milanmurali
            </span>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between pb-10">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / Selected Work
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              <span>View all {PROJECTS.length} projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div>
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectRow
              key={project.slug}
              project={project}
              reversed={idx % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]/45">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4 space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                  02 / Background
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text)]">
                  About
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg leading-relaxed text-[var(--text)] sm:text-xl">
                  {PROFILE.aboutLead}
                </p>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">
                  {PROFILE.aboutStory[0]} {PROFILE.aboutStory[1]}
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                  >
                    <span>Read full background &amp; engineering approach</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Stack Matrix */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <ScrollReveal>
            <div className="space-y-2 pb-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                03 / Technical Stack
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                Technologies &amp; Tools
              </h2>
              <p className="max-w-2xl text-sm text-[var(--text-muted)]">
2                Frameworks, languages, and infrastructure used across internships and production builds.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerSelector="[data-stack-row]">
            <div className="border-t border-[var(--border)]">
              {STACK_GROUPS.map((group) => (
                <div
                  key={group.id}
                  data-stack-row
                  className="grid gap-5 border-b border-[var(--border)] py-6 md:grid-cols-12 md:items-start"
                >
                  <div className="md:col-span-4 space-y-1">
                    <h3 className="font-display text-base font-medium text-[var(--text)]">
                      {group.label}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-subtle)]">
                      {group.description}
                    </p>
                  </div>
                  <div className="md:col-span-8 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item.name}
                        variant="solid"
                        className="px-3 py-1.5 text-xs font-sans text-[var(--text)]"
                      >
                        <TechIcon iconKey={item.iconKey} className="h-3.5 w-3.5 text-[var(--accent)]" />
                        <span>{item.name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience & Education Preview (Invigo prioritized first) */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]/45">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between pb-10">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                  04 / Experience &amp; Education
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text)]">
                  Recent Experience
                </h2>
              </div>
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                <span>All {EXPERIENCE_ITEMS.length} internships &amp; certifications</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerSelector="[data-exp-item]">
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Primary spotlight on latest Invigo Software (Vizru) internship */}
              <article
                data-exp-item
                className="lg:col-span-7 border border-[var(--border-strong)] bg-[var(--bg)] p-6 sm:p-8 space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="text-[var(--accent)]">Latest Internship</span>
                  <span className="text-[var(--text-subtle)]">{latestInternship.period}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
                    {latestInternship.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">
                    {latestInternship.company} · {latestInternship.location}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {latestInternship.summary}
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  {latestInternship.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {latestInternship.technologies.slice(0, 7).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </article>

              {/* Earlier Internships + BCA Education */}
              <div data-exp-item className="lg:col-span-5 flex flex-col gap-4">
                {earlierInternships.map((exp) => (
                  <article
                    key={exp.id}
                    className="border border-[var(--border)] bg-[var(--bg)] p-5 space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-subtle)]">
                      <span>{exp.company}</span>
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-[var(--text)]">
                      {exp.role}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                      {exp.summary}
                    </p>
                  </article>
                ))}

                <article className="border border-[var(--border)] bg-[var(--bg)] p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-subtle)]">
                    <span className="text-[var(--accent)]">Education</span>
                    <span>{primaryEducation.period}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-[var(--text)]">
                    {primaryEducation.degree}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    {primaryEducation.institution} · {primaryEducation.location}
                  </p>
                </article>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <ScrollReveal>
            <div className="border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8 space-y-3">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                    05 / Get in Touch
                  </p>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                    Open to full-stack and frontend developer roles.
                  </h2>
                  <p className="max-w-xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                    If you&apos;re hiring for a React, Next.js, or MERN / FastAPI role, or want to discuss a project, feel free to reach out directly.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                  <Magnet>
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link to="/contact">
                        <span>Contact Page</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </Magnet>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--bg)] px-4 font-mono text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[var(--success)]" />
                        <span>Copied {PROFILE.email}</span>
                      </>
                    ) : (
                      <>
                        <Mail className="h-3.5 w-3.5 text-[var(--accent)]" />
                        <span>{PROFILE.email}</span>
                        <Copy className="h-3 w-3 opacity-70" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
