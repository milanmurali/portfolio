import { Link } from 'react-router-dom'
import { ArrowUp, Mail, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { PROFILE } from '@/data/profile'

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text)]">
              <span className="h-2 w-2 rounded-full bg-[var(--success)]" aria-hidden="true" />
              <span>{PROFILE.availability}</span>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="link-underline text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send email"
              className="inline-flex h-9 items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 font-mono text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              <Mail className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>{PROFILE.email}</span>
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
              aria-label="Call phone number"
              className="inline-flex h-9 items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 font-mono text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              <Phone className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>{PROFILE.phone}</span>
            </a>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-[var(--text-subtle)]">
            &copy; {currentYear} · {PROFILE.location}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex w-fit items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
