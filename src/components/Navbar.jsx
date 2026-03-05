import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Home',      to: 'home'      },
  { label: 'About',     to: 'about'     },
  { label: 'Work',      to: 'work'      },
  { label: 'Skills',    to: 'skills'    },
  { label: 'Education', to: 'education' },
  { label: 'Contact',   to: 'contact'   },
]

export default function Navbar() {
  const [active, setActive]   = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]       = useState(false)

  // Track scroll position → highlight active nav link + shrink navbar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = LINKS.map(l => document.getElementById(l.to)).filter(Boolean)
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 220) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Logo */}
      <button className="nav-logo" onClick={() => scrollTo('home')}>
        Uddav<span>.dev</span>
      </button>

      {/* Desktop links */}
      <ul className="nav-links">
        {LINKS.map(l => (
          <li key={l.to}>
            <button
              className={`nav-link ${active === l.to ? 'nav-link--active' : ''}`}
              onClick={() => scrollTo(l.to)}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-drawer">
          {LINKS.map(l => (
            <button key={l.to} className="mobile-link" onClick={() => scrollTo(l.to)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
