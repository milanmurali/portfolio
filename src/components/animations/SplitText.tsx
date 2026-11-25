import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  stagger?: number
  mode?: 'words' | 'chars'
  triggerOnScroll?: boolean
}

export function SplitText({
  text,
  as: Tag = 'h1',
  className,
  delay = 0,
  stagger = 0.035,
  mode = 'words',
  triggerOnScroll = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = containerRef.current
    if (!el || reducedMotion) return

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>('[data-split-unit]')
      if (!targets.length) return

      gsap.fromTo(
        targets,
        { y: '105%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.72,
          delay,
          stagger,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          ...(triggerOnScroll
            ? {
                scrollTrigger: {
                  trigger: el,
                  start: 'top 86%',
                  once: true,
                },
              }
            : {}),
        },
      )
    }, el)

    return () => ctx.revert()
  }, [text, delay, stagger, triggerOnScroll, reducedMotion])

  const words = text.split(' ')

  return (
    <Tag
      ref={containerRef as React.RefObject<never>}
      className={cn('leading-[1.06]', className)}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block overflow-hidden align-top mr-[0.26em] last:mr-0">
          {mode === 'chars' ? (
            word.split('').map((char, charIndex) => (
              <span
                key={`${char}-${charIndex}`}
                data-split-unit
                aria-hidden="true"
                className="inline-block will-change-transform"
              >
                {char}
              </span>
            ))
          ) : (
            <span
              data-split-unit
              aria-hidden="true"
              className="inline-block will-change-transform"
            >
              {word}
            </span>
          )}
        </span>
      ))}
    </Tag>
  )
}
