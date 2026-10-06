import { metrics } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Metrics() {
  return (
    <section className="metrics section-tight" data-testid="metrics-section" aria-labelledby="metrics-title">
      <div className="container">
        <p className="kicker"><span>03</span>Proof, not promises</p>
        <h2 id="metrics-title" className="visually-hidden">Impact in numbers</h2>
        <dl className="metrics-grid">
          {metrics.map((metric, index) => (
            <Reveal key={metric.value} className="metric" delay={index * 0.08}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
