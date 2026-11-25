import {
  Bot,
  Box,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Route,
  Send,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react'

interface TechIconProps {
  iconKey: string
  className?: string
}

export function TechIcon({ iconKey, className = 'h-4 w-4' }: TechIconProps) {
  switch (iconKey) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4.1" />
          <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'nextjs':
      return <Globe className={className} aria-hidden="true" />
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 11h5M10.5 11v6M15.5 13.5c0-1 .8-1.5 1.8-1.5s1.7.5 1.7 1.3c0 1.6-3.5 1.1-3.5 2.7 0 .8.8 1.3 1.8 1.3 1 0 1.7-.4 1.9-1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'javascript':
      return <Braces className={className} aria-hidden="true" />
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M7.5 10.5C8.5 7.5 10.3 6 12.8 6c3.2 0 3.7 2.4 5.3 2.8 1 .2 1.9-.2 2.9-1.3-1 3-2.8 4.5-5.3 4.5-3.2 0-3.7-2.4-5.3-2.8-1-.2-1.9.2-2.9 1.3Z" />
          <path d="M3 16.5c1-3 2.8-4.5 5.3-4.5 3.2 0 3.7 2.4 5.3 2.8 1 .2 1.9-.2 2.9-1.3-1 3-2.8 4.5-5.3 4.5-3.2 0-3.7-2.4-5.3-2.8-1-.2-1.9.2-2.9 1.3Z" />
        </svg>
      )
    case 'router':
      return <Route className={className} aria-hidden="true" />
    case 'redux':
      return <Layers className={className} aria-hidden="true" />
    case 'html':
      return <FileCode2 className={className} aria-hidden="true" />
    case 'nodejs':
    case 'express':
      return <Server className={className} aria-hidden="true" />
    case 'python':
    case 'c':
      return <Terminal className={className} aria-hidden="true" />
    case 'fastapi':
    case 'vite':
      return <Zap className={className} aria-hidden="true" />
    case 'shield':
      return <ShieldCheck className={className} aria-hidden="true" />
    case 'mongodb':
    case 'mongoose':
    case 'sqlite':
    case 'sqlalchemy':
    case 'sql':
      return <Database className={className} aria-hidden="true" />
    case 'docker':
      return <Box className={className} aria-hidden="true" />
    case 'git':
      return <GitBranch className={className} aria-hidden="true" />
    case 'postman':
      return <Send className={className} aria-hidden="true" />
    case 'vercel':
    case 'render':
      return <Cloud className={className} aria-hidden="true" />
    case 'n8n':
    case 'workflow':
      return <Workflow className={className} aria-hidden="true" />
    case 'ai':
      return <Bot className={className} aria-hidden="true" />
    default:
      return <Code2 className={className} aria-hidden="true" />
  }
}
