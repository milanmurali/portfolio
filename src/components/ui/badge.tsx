import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-tight rounded-sm border transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)]',
        accent: 'bg-[var(--surface)] text-[var(--accent)] border-[var(--border-strong)]',
        solid: 'bg-[var(--surface-elevated)] text-[var(--text)] border-[var(--border-strong)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
