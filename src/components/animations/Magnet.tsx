import { useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface MagnetProps {
  children: ReactNode
  className?: string
  strength?: number
  padding?: number
}

export function Magnet({
  children,
  className,
  strength = 0.28,
  padding = 36,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const reducedMotion = useReducedMotion()

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return

    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = event.clientX - centerX
    const distY = event.clientY - centerY

    if (
      Math.abs(distX) < rect.width / 2 + padding &&
      Math.abs(distY) < rect.height / 2 + padding
    ) {
      setActive(true)
      setOffset({ x: distX * strength, y: distY * strength })
    }
  }

  const handleMouseLeave = () => {
    setActive(false)
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('inline-block', className)}
    >
      <div
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px, 0)`,
          transition: active
            ? 'transform 0.16s cubic-bezier(0.22, 1, 0.36, 1)'
            : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
