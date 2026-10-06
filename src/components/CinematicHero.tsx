import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { heroMedia, profile } from '../data/portfolio'

type Props = { onNavigate: (id: string) => void }

type NetworkInformation = { saveData?: boolean }

/** Reduced motion or an explicit data-saving preference → show the final pose as a still. */
function prefersStill(reduceMotion: boolean | null) {
  if (reduceMotion) return true
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
  return Boolean(connection?.saveData)
}

export function CinematicHero({ onNavigate }: Props) {
  const reduceMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [useStill, setUseStill] = useState(() => prefersStill(reduceMotion))
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    if (prefersStill(reduceMotion)) setUseStill(true)
  }, [reduceMotion])

  // React sets `muted` as a property, not an attribute, so some browsers
  // (notably iOS Safari) block autoplay. Enforce it and start playback once.
  useEffect(() => {
    const video = videoRef.current
    if (useStill || !video) return
    video.muted = true
    video.defaultMuted = true
    const attempt = video.play()
    if (attempt) attempt.catch(() => setUseStill(true))
  }, [useStill])

  const resting = useStill || ended

  return (
    <section id="home" className={`hero ${resting ? 'is-resting' : ''}`} data-testid="hero-section" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-media" aria-hidden="true">
        {useStill ? (
          <img src={heroMedia.still} alt="" decoding="async" fetchPriority="high" />
        ) : (
          <video
            ref={videoRef}
            data-testid="hero-video"
            muted
            autoPlay
            playsInline
            preload="auto"
            poster={heroMedia.poster}
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            onEnded={() => setEnded(true)}
            onError={() => setUseStill(true)}
          >
            {/* VP9 is ~5× smaller; H.264 covers browsers without WebM support. */}
            <source src={heroMedia.videoWebm} type='video/webm; codecs="vp9"' />
            {/* <source> errors don't bubble to <video>; the last one failing means nothing can play. */}
            <source src={heroMedia.video} type="video/mp4" onError={() => setUseStill(true)} />
          </video>
        )}
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow hero-rise" style={{ animationDelay: '0.3s' }}>
          Portfolio <span aria-hidden="true">/</span> 2026
        </p>
        <h1 id="hero-title">
          <span className="hero-name hero-rise" style={{ animationDelay: '0.45s' }}>{profile.name}</span>
          <span className="hero-role hero-rise" style={{ animationDelay: '0.6s' }}>
            Senior <em>Frontend</em> Engineer.
          </span>
          <span className="hero-subrole hero-rise" style={{ animationDelay: '0.75s' }}>{profile.subtitle}</span>
        </h1>
        <div className="hero-bottom hero-rise" style={{ animationDelay: '0.9s' }}>
          <p>{profile.statement}</p>
          <div className="hero-actions">
            <button type="button" className="button button-light" data-testid="hero-projects-button" onClick={() => onNavigate('work')}>
              View selected work <ArrowDownRight size={18} aria-hidden="true" />
            </button>
            <button type="button" className="button button-ghost" data-testid="hero-contact-button" onClick={() => onNavigate('contact')}>
              Get in touch
            </button>
          </div>
        </div>
      </div>

      <p className="hero-side hero-rise" style={{ animationDelay: '1.1s' }}>
        Frontend · React · TypeScript<br />Backend · Node.js · NestJS
      </p>
      <button type="button" className="scroll-note" onClick={() => onNavigate('about')}>
        Scroll to discover <span aria-hidden="true">↓</span>
      </button>
    </section>
  )
}
