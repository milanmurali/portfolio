import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_-.'

interface DecryptedTextProps {
  text: string
  className?: string
  animateOnMount?: boolean
}

export function DecryptedText({
  text,
  className,
  animateOnMount = false,
}: DecryptedTextProps) {
  const [display, setDisplay] = useState(text)
  const reducedMotion = useReducedMotion()
  const intervalRef = useRef<number | null>(null)

  const runScramble = () => {
    if (reducedMotion) return
    if (intervalRef.current) window.clearInterval(intervalRef.current)

    let iteration = 0
    intervalRef.current = window.setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return text[index]
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join(''),
      )

      iteration += 0.65
      if (iteration >= text.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current)
        setDisplay(text)
      }
    }, 24)
  }

  useEffect(() => {
    if (animateOnMount && !reducedMotion) {
      runScramble()
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, animateOnMount, reducedMotion])

  return (
    <span
      onMouseEnter={runScramble}
      className={cn('font-mono inline-block', className)}
    >
      {display}
    </span>
  )
}
