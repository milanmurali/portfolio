import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { PROFILE } from '@/data/profile'
import { Magnet } from '@/components/animations/Magnet'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/experience', label: 'Experience', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export function Navbar() {
  const [openAtPath, setOpenAtPath] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const mobileOpen = openAtPath === location.pathname
  const setMobileOpen = (open: boolean) => {
    setOpenAtPath(open ? location.pathname : null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-colors duration-200',
        scrolled
          ? 'border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur-md'
          : 'border-[var(--border)]/70 bg-[var(--bg)]/85 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 -ml-3">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'relative px-3.5 py-2 text-sm transition-colors duration-200 rounded-sm',
                  isActive
                    ? 'text-[var(--text)] font-medium'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)]',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute bottom-1 left-3.5 right-3.5 h-px bg-[var(--accent)] transition-transform duration-200 origin-left',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <Magnet strength={0.22} padding={20}>
            <Link
              to="/contact"
              className="ml-1 inline-flex h-9 items-center gap-1.5 rounded-sm bg-[var(--accent)] px-3.5 text-xs font-semibold text-[var(--accent-ink)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Magnet>
        </div>

        {/* Mobile Header Controls (no top-left logo/name) */}
        <div className="flex w-full items-center justify-between md:hidden">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
            {NAV_LINKS.find((n) => (n.end ? location.pathname === n.to : location.pathname.startsWith(n.to)))?.label ?? 'Menu'}
          </span>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileOpen}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)]"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="font-display text-base font-semibold text-[var(--text)]">
                  Navigation
                </SheetTitle>
                <SheetDescription className="mt-1 font-mono text-xs text-[var(--text-subtle)]">
                  {PROFILE.location}
                </SheetDescription>

                <nav aria-label="Mobile navigation" className="mt-8 flex flex-col border-t border-[var(--border)]">
                  {NAV_LINKS.map((item, idx) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center justify-between border-b border-[var(--border)] py-4 text-base transition-colors',
                          isActive
                            ? 'text-[var(--accent)] font-medium'
                            : 'text-[var(--text)] hover:text-[var(--accent)]',
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-[var(--text-subtle)]">
                        0{idx + 1}
                      </span>
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-[var(--border)] space-y-4">
                  <div className="flex items-center gap-3">
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 h-10 items-center justify-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--text)]"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 h-10 items-center justify-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--text)]"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                  <p className="font-mono text-xs text-[var(--text-muted)]">
                    {PROFILE.email}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
