import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  y?: number
  amount?: number
}

const ease = [0.22, 0.61, 0.36, 1] as [number, number, number, number]

/** Scroll-triggered reveal that fires once. Falls back to the final state. */
export function Reveal({ children, className, style, delay = 0, y = 56, amount = 0.3 }: Props) {
  const reduced = useReducedMotion()
  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1.2, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
