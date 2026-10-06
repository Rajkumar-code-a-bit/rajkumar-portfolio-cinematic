import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'motion/react'

type Props = { children: ReactNode; className?: string; delay?: number; y?: number }

/** Fades and lifts content into view once; renders immediately when reduced motion is preferred. */
export function Reveal({ children, className, delay = 0, y = 28 }: Props) {
  const reduceMotion = useReducedMotion()
  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}
