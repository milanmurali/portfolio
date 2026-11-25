import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  as?: 'p' | 'span' | 'h2' | 'h3'
  className?: string
  delay?: number
  triggerOnScroll?: boolean
}

export function BlurText({
  text,
  as: Tag = 'p',
  className,
  delay = 0.12,
  triggerOnScroll = false,
}: BlurTextProps) {
  const ref = useRef<HTMLElement | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    const ctx = gsap.context(() => {
      const units = el.querySelectorAll<HTMLElement>('[data-blur-unit]')
      if (!units.length) return

      gsap.fromTo(
        units,
        { opacity: 0, filter: 'blur(6px)', y: 10 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.6,
          delay,
          stagger: 0.02,
          ease: 'power2.out',
          clearProps: 'transform,opacity,filter',
          ...(triggerOnScroll
            ? {
                scrollTrigger: {
                  trigger: el,
                  start: 'top 88%',
                  once: true,
                },
              }
            : {}),
        },
      )
    }, el)

    return () => ctx.revert()
  }, [text, delay, triggerOnScroll, reducedMotion])

  const words = text.split(' ')

  return (
    <Tag ref={ref as React.RefObject<never>} className={cn(className)} aria-label={text}>
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          data-blur-unit
          aria-hidden="true"
          className="inline-block mr-[0.26em] last:mr-0"
        >
          {word}
        </span>
      ))}
    </Tag>
  )
}
