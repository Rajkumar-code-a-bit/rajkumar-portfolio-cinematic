import { portrait, profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function AboutSection() {
  return (
    <section id="about" className="about section" data-testid="about-section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="container about-grid">
        <Reveal className="about-portrait">
          <figure>
            <img src={portrait.src} alt={portrait.alt} width={1536} height={1024} loading="lazy" decoding="async" />
            <figcaption>{profile.name} — {profile.role}</figcaption>
          </figure>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <p className="kicker"><span>02</span>The engineer</p>
            <h2 id="about-title">I build digital products that feel <em>considered</em> at every layer.</h2>
          </Reveal>
          <Reveal className="about-text" delay={0.12}>
            <p className="lead">
              I’m Rajkumar, a senior frontend engineer and frontend-heavy full stack developer with 5+ years of experience building
              scalable web applications. The interface is where I go deepest — React and TypeScript — and I carry features through
              the backend with Node.js, NestJS, Express, and MongoDB, turning complex requirements into fast, accessible,
              maintainable products.
            </p>
            <p className="caption">
              From interface systems and API integration to performance and delivery, I care about the details users feel even
              when they never notice them.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
