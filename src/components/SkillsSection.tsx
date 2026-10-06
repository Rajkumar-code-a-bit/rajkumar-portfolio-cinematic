import { engineering, stack } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  return (
    <section id="stack" className="skills section section-dark" data-testid="skills-section" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading index="05" kicker="Engineering & stack" id="skills-title">
          Engineering with <em>intent.</em>
        </SectionHeading>

        <h3 className="subhead">How I build</h3>
        <ul className="engineering-grid">
          {engineering.map((item, index) => (
            <li key={item.number}>
              <Reveal className="principle" delay={(index % 4) * 0.06}>
                <span className="principle-number">{item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <h3 className="subhead">The stack</h3>
        <div className="stack-groups">
          {stack.map((group, index) => (
            <Reveal key={group.name} className="stack-group" delay={index * 0.08}>
              <h4><span>{String(index + 1).padStart(2, '0')}</span>{group.name}</h4>
              <ul>
                {group.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
