import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ExperienceSection() {
  return (
    <section id="experience" className="experience section" data-testid="experience-section" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="container">
        <div className="split-heading">
          <SectionHeading index="06" kicker="Career progression" id="experience-title">
            Progress built <em>with purpose.</em>
          </SectionHeading>
          <Reveal className="split-heading-note" delay={0.1}>
            <p className="timeline-key">2020 <span>—</span> 2024 <span>—</span> 2025 <span>—</span> Now</p>
          </Reveal>
        </div>
        <ol className="timeline">
          {experience.map(job => (
            <li key={job.period} className="timeline-item">
              <Reveal className="timeline-row">
                <p className="timeline-years" aria-hidden="true">{job.years}</p>
                <div className="timeline-body">
                  <p className="timeline-period">{job.period}</p>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                  <p className="timeline-text">{job.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
