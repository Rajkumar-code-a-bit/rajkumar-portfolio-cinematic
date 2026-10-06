import { useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/portfolio'

type Props = {
  active: string
  open: boolean
  solid: boolean
  onToggle: () => void
  onClose: () => void
  onNavigate: (id: string) => void
}

export function Navbar({ active, open, solid, onToggle, onClose, onNavigate }: Props) {
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Escape closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      onClose()
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <header className={`site-nav ${solid || open ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}>
      <nav aria-label="Primary">
        <button type="button" className="brand" onClick={() => onNavigate('home')} aria-label="Rajkumar Devadoss — back to top">
          RAJ <span aria-hidden="true">/ 2026</span>
        </button>
        <ul id="primary-menu" className="nav-items">
          {navigation.map(item => (
            <li key={item.id}>
              <button
                type="button"
                className={active === item.id ? 'active' : ''}
                aria-current={active === item.id ? 'true' : undefined}
                data-testid={`nav-${item.id}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          ref={toggleRef}
          type="button"
          className="menu-button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={onToggle}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  )
}
