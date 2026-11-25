import { Link } from 'react-router-dom'
import { ArrowRight, Award, Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PROFILE, STACK_GROUPS } from '@/data/profile'
import { CERTIFICATIONS, EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '@/data/experience'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SpotlightSurface } from '@/components/animations/SpotlightSurface'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TechIcon } from '@/components/ui/TechIcon'

export function AboutPage() {
  usePageMeta({
    title: 'About | Milan Murali',
    description:
      'Background, Invigo Software (Vizru), Infotact Solutions, Softroniics internships, education, and engineering approach of Milan Murali.',
    path: '/about',
  })

  const latestInternship = EXPERIENCE_ITEMS[0]

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      {/* Header */}
      <header className="border-b border-[var(--border)] pb-12 space-y-5">
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[var(--text-subtle)]">
          <span className="text-[var(--accent)]">ABOUT</span>
          <span>/</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {PROFILE.location}
          </span>
        </div>

        <SplitText
          as="h1"
          text="A practical approach to full-stack web engineering."
          className="font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl max-w-4xl"
        />

        <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {PROFILE.aboutLead}
        </p>
      </header>

      {/* Narrative */}
      <section className="grid gap-10 border-b border-[var(--border)] py-14 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            01 / Journey
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            How I work &amp; build
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5 text-base leading-relaxed text-[var(--text-muted)]">
          {PROFILE.aboutStory.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Latest Experience & Education snapshot */}
      <section className="grid gap-8 border-b border-[var(--border)] py-14 md:grid-cols-2">
        <ScrollReveal>
          <div className="h-full border border-[var(--border-strong)] bg-[var(--surface)] p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
                  <Briefcase className="h-4 w-4" />
                  Latest Internship
                </span>
                <span className="font-mono text-xs text-[var(--text-subtle)]">{latestInternship.period}</span>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-[var(--text)]">
                  {latestInternship.role}
                </h2>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {latestInternship.company} · {latestInternship.location}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {latestInternship.summary}
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
              >
                <span>View all 3 internships</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="h-full border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <div className="divide-y divide-[var(--border)]">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.degree} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-display text-lg font-semibold text-[var(--text)]">
                      {edu.degree}
                    </h2>
                    <span className="font-mono text-xs text-[var(--text-subtle)]">{edu.period}</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="border-b border-[var(--border)] py-14">
        <ScrollReveal>
          <div className="space-y-2 pb-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              02 / Development Philosophy
            </p>
            <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
              Principles I apply to every build
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {PROFILE.philosophy.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.06}>
              <SpotlightSurface className="h-full p-6 space-y-3">
                <span className="font-mono text-xs text-[var(--accent)]">0{idx + 1}</span>
                <h3 className="font-display text-lg font-medium text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.description}
                </p>
              </SpotlightSurface>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Areas of interest & Certifications */}
      <section className="border-b border-[var(--border)] py-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            03 / Focus &amp; Credentials
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Areas of Interest
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-10">
          <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {PROFILE.interests.map((interest) => (
              <li
                key={interest}
                className="flex items-center justify-between py-4 text-sm sm:text-base text-[var(--text)]"
              >
                <span>{interest}</span>
                <span className="font-mono text-xs text-[var(--accent)]">→</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <h3 className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
              <Award className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Certifications</span>
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert.title}
                  className="border border-[var(--border)] bg-[var(--surface)] p-4 space-y-1"
                >
                  <p className="text-sm font-medium text-[var(--text)]">{cert.title}</p>
                  <p className="font-mono text-xs text-[var(--text-subtle)]">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Full Tech Stack */}
      <section className="py-14 space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            04 / Tooling
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--text)]">
            Technologies I Work With
          </h2>
        </div>

        <div className="border-t border-[var(--border)]">
          {STACK_GROUPS.map((group) => (
            <div
              key={group.id}
              className="grid gap-4 border-b border-[var(--border)] py-5 md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-4 font-display text-sm font-medium text-[var(--text)]">
                {group.label}
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item.name} variant="solid" className="px-3 py-1.5 font-sans text-xs text-[var(--text)]">
                    <TechIcon iconKey={item.iconKey} className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>{item.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/projects">
              <span>Explore My Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
