import type { ProjectItem } from '@/types/portfolio'
import { cn } from '@/lib/utils'

interface ProjectPreviewProps {
  project: ProjectItem
  className?: string
}

export function ProjectPreview({ project, className }: ProjectPreviewProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-200 group-hover:border-[var(--border-strong)]',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-elevated)] px-3.5 py-2">
        <span className="font-mono text-[11px] text-[var(--text-muted)]">
          {project.title.toLowerCase()} · system blueprint
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
          {project.category}
        </span>
      </div>

      <div className="aspect-[16/10] w-full p-4 sm:p-5 flex flex-col justify-between bg-[var(--bg)] hairline-grid-bg">
        {project.previewKind === 'careersync' && <CareerSyncSchematic />}
        {project.previewKind === 'civiceye' && <CivicEyeSchematic />}
        {project.previewKind === 'mediq' && <MediQSchematic />}
        {project.previewKind === 'taskflow' && <TaskFlowSchematic />}
        {project.previewKind === 'cryptify' && <CryptifySchematic />}
        {project.previewKind === 'busnav' && <BusNavSchematic />}
        {project.previewKind === 'n8n' && <N8nSchematic />}
      </div>
    </div>
  )
}

function CareerSyncSchematic() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
            POST /ai/check-compatibility
          </p>
          <p className="mt-0.5 text-sm font-medium text-[var(--text)]">
            AI Placement Matching &amp; Recruitment Flow
          </p>
        </div>
        <span className="border border-[var(--border-strong)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
          JWT Protected
        </span>
      </div>

      <div className="my-auto space-y-2 py-3">
        <div className="border border-[var(--border)] bg-[var(--surface)] p-3">
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span className="text-[var(--text)]">studentProfile + jobListing</span>
            <span className="text-[var(--accent)]">JSON Match Output</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1.5 font-mono text-[10px] text-[var(--text-muted)]">
            <span className="border border-[var(--border)] px-1.5 py-1">compatibilityScore</span>
            <span className="border border-[var(--border)] px-1.5 py-1">matchingSkills</span>
            <span className="border border-[var(--border)] px-1.5 py-1">missingSkills</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
          <div className="border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[var(--text-muted)]">
            Verification: Verified / Under Review
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[var(--text-muted)]">
            Interviews: Scheduled / Completed
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border)] pt-2.5 font-mono text-[10px] text-[var(--text-subtle)]">
        <span>/ai · /jobs · /user · /feedback</span>
        <span>Express · MongoDB · Formik</span>
      </div>
    </>
  )
}

function CivicEyeSchematic() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
            Complaint Lifecycle · Mongoose Schema
          </p>
          <p className="mt-0.5 text-sm font-medium text-[var(--text)]">
            Citizen Reporting → Admin Resolution
          </p>
        </div>
        <span className="border border-[var(--border-strong)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
          /proofs static
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 my-auto py-3">
        {[
          { label: 'Pending', note: 'New submission + Multer media', tone: 'text-[var(--accent)]' },
          { label: 'Approved', note: 'Verified by admin review', tone: 'text-[var(--text)]' },
          { label: 'Resolved', note: 'Closed with resolvedAt stamp', tone: 'text-[var(--success)]' },
          { label: 'Feedback', note: 'Citizen post-resolution input', tone: 'text-[var(--text-muted)]' },
        ].map((stage) => (
          <div
            key={stage.label}
            className="border border-[var(--border)] bg-[var(--surface)] p-2.5"
          >
            <p className={cn('font-mono text-[11px] font-medium', stage.tone)}>{stage.label}</p>
            <p className="mt-1 text-[11px] text-[var(--text-muted)] leading-snug">{stage.note}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-2.5 font-mono text-[10px] text-[var(--text-subtle)]">
        <span>/user · /complaint · /feedback</span>
        <span>Recharts Analytics · JWT</span>
      </div>
    </>
  )
}

function MediQSchematic() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
            Kiosk Flow · Dual Backend Parity
          </p>
          <p className="mt-0.5 text-sm font-medium text-[var(--text)]">
            Patient Check-In → Department Token
          </p>
        </div>
        <span className="border border-[var(--border-strong)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
          SQLite
        </span>
      </div>

      <div className="my-auto space-y-2.5 py-3">
        <div className="grid grid-cols-4 gap-1.5 font-mono text-[10px]">
          {['Welcome', 'Register', 'Token', 'Admin'].map((step, i) => (
            <div key={step} className="border border-[var(--border)] bg-[var(--surface)] p-2 text-center">
              <span className="block text-[var(--accent)]">0{i + 1}</span>
              <span className="text-[var(--text)]">{step}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
          <div className="border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[var(--text-muted)]">
            Python: FastAPI + SQLAlchemy
          </div>
          <div className="border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[var(--text-muted)]">
            Tokens: GEN · CAR · ORT · DER · PED
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border)] pt-2.5 font-mono text-[10px] text-[var(--text-subtle)]">
        <span>POST /api/patients · GET /api/patients</span>
        <span>react-to-print · a11y</span>
      </div>
    </>
  )
}

function TaskFlowSchematic() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="font-mono text-[11px] text-[var(--accent)]">MERN CRUD · taskschema.js</span>
        <span className="font-mono text-[10px] text-[var(--text-muted)]">task-flow-plum-kappa.vercel.app</span>
      </div>
      <div className="my-auto space-y-2 py-3">
        {[
          { title: 'GET /task/view — Load persisted tasks', done: true },
          { title: 'POST /task/add — Create new entry', done: true },
          { title: 'PUT /task/update/:id — Inline title or status toggle', done: false },
          { title: 'DELETE /task/delete/:id — Remove record', done: false },
        ].map((row) => (
          <div
            key={row.title}
            className="flex items-center gap-2.5 border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
          >
            <span
              className={cn(
                'h-3.5 w-3.5 rounded-[2px] border flex items-center justify-center font-mono text-[9px]',
                row.done
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]'
                  : 'border-[var(--border-strong)]',
              )}
            >
              {row.done ? '✓' : ''}
            </span>
            <span className={cn('text-xs', row.done ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text)]')}>
              {row.title}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] pt-2.5 font-mono text-[10px] text-[var(--text-subtle)]">
        React · Express · Mongoose
      </div>
    </>
  )
}

function CryptifySchematic() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="font-mono text-[11px] text-[var(--accent)]">Redux Toolkit Store · Slice.js</span>
        <span className="font-mono text-[10px] text-[var(--text-muted)]">Pinned Repo</span>
      </div>
      <div className="my-auto grid grid-cols-3 gap-2 py-3 font-mono text-[11px]">
        {['Home.jsx', 'DashBoard.jsx', 'CoinDetails.jsx'].map((comp) => (
          <div key={comp} className="border border-[var(--border)] bg-[var(--surface)] p-3 text-center">
            <p className="text-[var(--text)]">{comp}</p>
            <p className="mt-1 text-[10px] text-[var(--text-subtle)]">React Router</p>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] pt-2.5 font-mono text-[10px] text-[var(--text-subtle)]">
        React · Redux Toolkit · Tailwind CSS · Flowbite
      </div>
    </>
  )
}

function BusNavSchematic() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="font-mono text-[11px] text-[var(--accent)]">Django Multi-App Architecture</span>
        <span className="font-mono text-[10px] text-[var(--text-muted)]">Academic · 2024</span>
      </div>
      <div className="my-auto grid grid-cols-3 gap-2 py-3 font-mono text-[10px]">
        {['bus_register', 'bus_route', 'bus_route_stop', 'bus_schedule', 'attractions', 'crowdsource'].map((app) => (
          <div key={app} className="border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[var(--text-muted)]">
            {app}/
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] pt-2.5 font-mono text-[10px] text-[var(--text-subtle)]">
        Python · Django · SQL · Templates
      </div>
    </>
  )
}

function N8nSchematic() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="font-mono text-[11px] text-[var(--accent)]">Amelie v0.3 &amp; Takashi v0.5</span>
        <span className="font-mono text-[10px] text-[var(--text-muted)]">n8n Workflows</span>
      </div>
      <div className="my-auto space-y-2.5 py-3 font-mono text-[10px]">
        <div className="border border-[var(--border)] bg-[var(--surface)] p-2.5">
          <p className="text-[var(--text)]">Amelie — RSS Reader</p>
          <p className="mt-1 text-[var(--text-muted)]">Schedule Trigger → RSS Read → Categorize → Telegram</p>
        </div>
        <div className="border border-[var(--border)] bg-[var(--surface)] p-2.5">
          <p className="text-[var(--text)]">Takashi — Financial Memory</p>
          <p className="mt-1 text-[var(--text-muted)]">Telegram Input → Open-Source LLM → Supabase</p>
        </div>
      </div>
      <div className="border-t border-[var(--border)] pt-2.5 font-mono text-[10px] text-[var(--text-subtle)]">
        n8n · Telegram · Supabase · LLMs
      </div>
    </>
  )
}
