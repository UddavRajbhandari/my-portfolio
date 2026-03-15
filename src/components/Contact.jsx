import { useRef, useEffect, useState } from 'react'
import './Contact.css'

// ─── Your social / contact links ──────────────────────────────────────────────
// Replace each href and label with your real details
const LINKS = [
  { icon: '✉',  label: 'Email',    href: 'mailto:uddavraj123@gmail.com',                              text: 'uddavraj123@gmail.com'          },
  { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com/in/uddav-rajbhandari-4998252ab',       text: 'uddav-rajbhandari-4998252ab'    },
  { icon: '⌥',  label: 'GitHub',   href: 'https://github.com/UddavRajbhandari',                       text: 'github.com/UddavRajbhandari'    },
]

// ─── Contact form ─────────────────────────────────────────────────────────────
// Uses Formspree (free, no backend needed):
// 1. Go to https://formspree.io and sign up
// 2. Create a new form → copy the form ID
// 3. Replace YOUR_FORM_ID below
const FORMSPREE_ID = 'xjgabkgn'

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="your@email.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="What's this about?" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." required />
      </div>

      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>

      {status === 'sent'  && <p className="form-feedback form-feedback--ok">✓ Message sent! I'll get back to you soon.</p>}
      {status === 'error' && <p className="form-feedback form-feedback--err">✗ Something went wrong. Try emailing directly.</p>}
    </form>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add('visible') },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section section--dark">
      <div className="section-label">// 05. contact</div>
      <h2 className="section-title">Get In <span className="accent">Touch</span></h2>

      <div className="contact-grid fade-in" ref={ref}>
        {/* ── Left: blurb + links ── */}
        <div className="contact-info">
          <p>
            I'm open to AI/ML roles, internships, freelance projects, and research collaborations —
            especially in NLP. Whether you have an opportunity or just want to talk
            about building AI for Nepali language, reach out anytime.
          </p>
          <div className="contact-links">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-link-item card-hover">
                <div className="contact-link-icon">{l.icon}</div>
                <div>
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-text">{l.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <ContactForm />
      </div>
    </section>
  )
}
