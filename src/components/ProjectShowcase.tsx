import type { Project } from '../data/portfolio'
import { Reveal } from './Reveal'

type Props = { project: Project; total: number; reversed: boolean }

export function ProjectShowcase({ project, total, reversed }: Props) {
  const titleId = `project-${project.number}-title`
  return (
    <article
      className={`project ${reversed ? 'is-reversed' : ''} ${project.featured ? 'is-featured' : ''}`}
      data-testid="project-card"
      aria-labelledby={titleId}
    >
      <Reveal className="project-visual" y={40}>
        <div aria-hidden="true" className="project-plate">
          <span className="project-plate-label">{project.type}</span>
          <span className="project-numeral">{project.number}</span>
          <ul className="project-layers">
            {project.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </Reveal>
      <Reveal className="project-copy" delay={0.1}>
        <p className="project-index">{project.number} <span>/ {String(total).padStart(2, '0')}</span></p>
        <h3 id={titleId}>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-facts">
          <div>
            <dt>Discipline</dt>
            <dd>{project.type}</dd>
          </div>
          {project.highlight && (
            <div>
              <dt>Impact</dt>
              <dd><strong>{project.highlight.value}</strong> {project.highlight.label}</dd>
            </div>
          )}
          <div>
            <dt>Stack</dt>
            <dd>{project.tags.join(' · ')}</dd>
          </div>
        </dl>
      </Reveal>
    </article>
  )
}
