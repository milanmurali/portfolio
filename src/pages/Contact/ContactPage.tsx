import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Info,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PROFILE } from '@/data/profile'
import { SplitText } from '@/components/animations/SplitText'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter at least 2 characters for your name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  subject: z.string().trim().min(3, 'Please provide a brief subject (at least 3 characters).'),
  message: z.string().trim().min(10, 'Please enter a message of at least 10 characters.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

export function ContactPage() {
  usePageMeta({
    title: 'Contact | Milan Murali',
    description:
      'Get in touch with Milan Murali via email, phone, GitHub, or LinkedIn for full-stack and frontend developer opportunities.',
    path: '/contact',
  })

  const [copiedEmail, setCopiedEmail] = useState(false)
  const [submitState, setSubmitState] = useState<
    | { status: 'idle' }
    | { status: 'success'; message: string }
    | { status: 'unconfigured'; draft: ContactFormValues }
    | { status: 'error'; message: string }
  >({ status: 'idle' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      window.location.href = `mailto:${PROFILE.email}`
    }
  }

  const onSubmit = async (values: ContactFormValues) => {
    if (!CONTACT_ENDPOINT) {
      setSubmitState({ status: 'unconfigured', draft: values })
      return
    }

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error(`Endpoint responded with status ${response.status}`)
      }

      setSubmitState({
        status: 'success',
        message: 'Message delivered. Thank you for reaching out—I will reply as soon as possible.',
      })
      reset()
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unable to send message right now.'
      setSubmitState({
        status: 'error',
        message: `Delivery failed (${msg}). Please email ${PROFILE.email} directly.`,
      })
    }
  }

  const buildMailtoHref = (draft: ContactFormValues) => {
    const subject = encodeURIComponent(draft.subject)
    const body = encodeURIComponent(
      `Hi Milan,\n\n${draft.message}\n\nBest regards,\n${draft.name}\n${draft.email}`,
    )
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="border-b border-[var(--border)] pb-12 space-y-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          CONTACT
        </p>
        <SplitText
          as="h1"
          text="Start a Conversation"
          className="font-display text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl"
        />
        <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
          Available for full-stack and frontend developer roles, project collaborations, or technical conversations.
        </p>
      </header>

      <div className="grid gap-12 pt-12 lg:grid-cols-12">
        {/* Direct Channels */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="border border-[var(--border)] bg-[var(--surface)] divide-y divide-[var(--border)]">
            <div className="p-5 space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Direct Email
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span>{PROFILE.email}</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-sm border border-[var(--border)] bg-[var(--bg)] px-2.5 font-mono text-xs text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)] cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[var(--success)]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-5 space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Phone
              </p>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--text)] hover:text-[var(--accent)]"
              >
                <Phone className="h-4 w-4 text-[var(--accent)]" />
                <span>{PROFILE.phone}</span>
              </a>
            </div>

            <div className="p-5 space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Profiles
              </p>
              <div className="space-y-2.5 pt-1">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <GitHubIcon className="h-4 w-4 text-[var(--accent)]" />
                    github.com/milanmurali
                  </span>
                  <span className="font-mono text-xs">↗</span>
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <LinkedInIcon className="h-4 w-4 text-[var(--accent)]" />
                    linkedin.com/in/milanmurali
                  </span>
                  <span className="font-mono text-xs">↗</span>
                </a>
              </div>
            </div>

            <div className="p-5 space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Location
              </p>
              <p className="inline-flex items-center gap-2 text-sm text-[var(--text)]">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                <span>{PROFILE.location}</span>
              </p>
            </div>
          </div>

          {!CONTACT_ENDPOINT && (
            <div className="border border-[var(--border)] bg-[var(--surface)] p-5 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--text)]">
                <Info className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>Email Draft Mode</span>
              </div>
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                Direct server submission requires configuring <code className="text-[var(--text)]">VITE_CONTACT_ENDPOINT</code> (e.g. Formspree, Web3Forms, or a custom API). Until connected, submitting validates your message and opens a pre-filled draft in your email client.
              </p>
            </div>
          )}
        </aside>

        {/* Contact Form */}
        <section className="lg:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block font-mono text-xs text-[var(--text-muted)]">
                  Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  {...register('name')}
                />
                {errors.name && (
                  <p role="alert" className="text-xs text-[var(--danger)]">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="block font-mono text-xs text-[var(--text-muted)]">
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  {...register('email')}
                />
                {errors.email && (
                  <p role="alert" className="text-xs text-[var(--danger)]">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="block font-mono text-xs text-[var(--text-muted)]">
                Subject
              </label>
              <Input
                id="contact-subject"
                placeholder="Role inquiry, collaboration, or project question"
                aria-invalid={Boolean(errors.subject)}
                {...register('subject')}
              />
              {errors.subject && (
                <p role="alert" className="text-xs text-[var(--danger)]">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="block font-mono text-xs text-[var(--text-muted)]">
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Share details about your team, role, or project..."
                aria-invalid={Boolean(errors.message)}
                {...register('message')}
              />
              {errors.message && (
                <p role="alert" className="text-xs text-[var(--danger)]">
                  {errors.message.message}
                </p>
              )}
            </div>

            {submitState.status === 'success' && (
              <div
                role="status"
                className="flex items-start gap-3 border border-[var(--success)]/40 bg-[var(--bg)] p-4 text-sm text-[var(--text)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                <span>{submitState.message}</span>
              </div>
            )}

            {submitState.status === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-3 border border-[var(--danger)]/40 bg-[var(--bg)] p-4 text-sm text-[var(--text)]"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--danger)]" />
                <span>{submitState.message}</span>
              </div>
            )}

            {submitState.status === 'unconfigured' && (
              <div
                role="status"
                className="border border-[var(--accent)]/50 bg-[var(--bg)] p-5 space-y-3"
              >
                <div className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <div className="space-y-1">
                    <p className="font-medium">Form validation passed — endpoint not yet connected</p>
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                      To enable direct submission from this form, set <code className="text-[var(--text)]">VITE_CONTACT_ENDPOINT</code> to a form service (such as Formspree, Web3Forms, or an Express mail endpoint). In the meantime, open your validated message directly in your email client:
                    </p>
                  </div>
                </div>
                <div className="pt-1">
                  <Button asChild size="sm">
                    <a href={buildMailtoHref(submitState.draft)}>
                      <Mail className="h-3.5 w-3.5" />
                      <span>Open Draft in Email Client</span>
                    </a>
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <Button type="submit" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                <span>
                  {isSubmitting
                    ? 'Sending...'
                    : CONTACT_ENDPOINT
                      ? 'Send Message'
                      : 'Validate & Prepare Email'}
                </span>
              </Button>
              <span className="font-mono text-xs text-[var(--text-subtle)]">
                Direct reply via {PROFILE.email}
              </span>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
