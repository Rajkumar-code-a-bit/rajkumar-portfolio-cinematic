import { profile } from '../data/portfolio'

type Props = { onNavigate: (id: string) => void }

export function Footer({ onNavigate }: Props) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.role} · {profile.subtitle}</span>
        </div>
        <p>React · TypeScript · Node.js · NestJS</p>
        <nav aria-label="Footer" className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<span className="visually-hidden"> (opens in a new tab)</span></a>
          <button type="button" onClick={() => onNavigate('home')}>Back to top ↑</button>
        </nav>
        <small>© 2026 {profile.name}</small>
      </div>
    </footer>
  )
}
