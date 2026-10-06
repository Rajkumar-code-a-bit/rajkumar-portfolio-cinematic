import { useCallback, useEffect, useState } from 'react'
import { LazyMotion, MotionConfig, domAnimation, useReducedMotion } from 'motion/react'
import { AboutSection } from './components/AboutSection'
import { CinematicHero } from './components/CinematicHero'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Metrics } from './components/Metrics'
import { Navbar } from './components/Navbar'
import { SkillsSection } from './components/SkillsSection'
import { WorkSection } from './components/WorkSection'
import { navigation } from './data/portfolio'

const observedSections = ['home', ...navigation.map(item => item.id)]

export default function App() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const navigate = useCallback((id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    // Move focus for keyboard and screen-reader users without a second jump.
    target.focus({ preventScroll: true })
    setMenuOpen(false)
  }, [reduceMotion])

  // A thin band across the middle of the viewport decides the active section,
  // which works for sections taller than the screen (unlike a ratio threshold).
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -54% 0px', threshold: 0 },
    )
    observedSections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#about">Skip to content</a>
      <Navbar
        active={active}
        open={menuOpen}
        solid={active !== 'home'}
        onToggle={() => setMenuOpen(open => !open)}
        onClose={closeMenu}
        onNavigate={navigate}
      />
      <main id="content">
        <CinematicHero onNavigate={navigate} />
        <AboutSection />
        <Metrics />
        <WorkSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer onNavigate={navigate} />
    </MotionConfig>
    </LazyMotion>
  )
}
