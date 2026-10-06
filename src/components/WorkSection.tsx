import { projects } from '../data/portfolio'
import { ProjectShowcase } from './ProjectShowcase'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function WorkSection() {
  return (
    <section id="work" className="work section section-dark" data-testid="projects-section" aria-labelledby="work-title" tabIndex={-1}>
      <div className="container">
        <div className="split-heading">
          <SectionHeading index="04" kicker="Selected work" id="work-title">
            Built for the real <em>world.</em>
          </SectionHeading>
          <Reveal className="split-heading-note" delay={0.1}>
            <p>Representative case studies from product, systems, and performance work. No external links are shown where public project URLs are unavailable.</p>
          </Reveal>
        </div>
        <ol className="work-list">
          {projects.map((project, index) => (
            <li key={project.number}>
              <ProjectShowcase project={project} total={projects.length} reversed={index % 2 === 1} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
