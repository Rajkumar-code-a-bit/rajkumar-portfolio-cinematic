import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = { index: string; kicker: string; id: string; children: ReactNode; className?: string }

export function SectionHeading({ index, kicker, id, children, className = '' }: Props) {
  return (
    <Reveal className={`section-heading ${className}`}>
      <p className="kicker"><span>{index}</span>{kicker}</p>
      <h2 id={id}>{children}</h2>
    </Reveal>
  )
}
