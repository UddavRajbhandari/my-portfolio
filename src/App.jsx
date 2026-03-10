import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

// ─── Custom cursor ────────────────────────────────────────────────────────────
function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const pos  = useRef({ x: 0, y: 0 })
  const ring_pos = useRef({ x: 0, y: 0 })
  const raf  = useRef(null)

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.12
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.12
      if (ring.current) {
        ring.current.style.left = ring_pos.current.x + 'px'
        ring.current.style.top  = ring_pos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    raf.current = requestAnimationFrame(animate)

    const interactables = document.querySelectorAll('a, button, .card-hover')
    const grow   = () => { if (dot.current)  dot.current.style.transform  = 'translate(-50%,-50%) scale(2.5)'; if (ring.current) ring.current.style.opacity = '0.2' }
    const shrink = () => { if (dot.current)  dot.current.style.transform  = 'translate(-50%,-50%) scale(1)';   if (ring.current) ring.current.style.opacity = '0.5' }
    interactables.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 Uddav Rajbhandari — Built with ♥ from Nepal</span>
      <span>Designed &amp; coded from scratch</span>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
