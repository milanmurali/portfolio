import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  y?: number
  delay?: number
  staggerSelector?: string
}

export function ScrollReveal({
  children,
  className,
  y = 22,
  delay = 0,
  staggerSelector,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    const ctx = gsap.context(() => {
      const targets = staggerSelector
        ? el.querySelectorAll<HTMLElement>(staggerSelector)
        : [el]

      if (!targets.length) return

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          stagger: staggerSelector ? 0.08 : 0,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [y, delay, staggerSelector, reducedMotion])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
