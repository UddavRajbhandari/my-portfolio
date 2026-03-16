import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpItem, staggerContainer, slideInLeft, slideInRight, viewport, viewportMid } from '../animations'
import './Contact.css'

const LINKS = [
  { icon: '✉',  label: 'Email',    href: 'mailto:uddavraj123@gmail.com',                        text: 'uddavraj123@gmail.com'       },
  { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com/in/uddav-rajbhandari-4998252ab', text: 'uddav-rajbhandari-4998252ab' },
  { icon: '⌥',  label: 'GitHub',   href: 'https://github.com/UddavRajbhandari',                 text: 'github.com/UddavRajbhandari' },
]

const FORMSPREE_ID = 'xjgabkgn'

function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST', body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportMid}
    >
      {['name', 'email', 'subject'].map(field => (
        <motion.div key={field} className="form-group" variants={fadeUpItem}>
          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            id={field} name={field}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={field === 'name' ? 'Your name' : field === 'email' ? 'your@email.com' : "What's this about?"}
            required={field !== 'subject'}
          />
        </motion.div>
      ))}
      <motion.div className="form-group" variants={fadeUpItem}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." required />
      </motion.div>
      <motion.button
        type="submit"
        className="form-submit"
        disabled={status === 'sending'}
        variants={fadeUpItem}
        whileHover={{ y: -2, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.97 }}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </motion.button>
      {status === 'sent'  && <p className="form-feedback form-feedback--ok">✓ Message sent! I'll get back to you soon.</p>}
      {status === 'error' && <p className="form-feedback form-feedback--err">✗ Something went wrong. Try emailing directly.</p>}
    </motion.form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section section--dark">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="section-label">// 06. contact</div>
        <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportMid}
        >
          <p>
            I'm open to AI/ML roles, internships, freelance projects, and research collaborations —
            especially in NLP. Whether you have an opportunity or just want to talk
            about building AI for Nepali language, reach out anytime.
          </p>
          <motion.div
            className="contact-links"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportMid}
          >
            {LINKS.map(l => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link-item card-hover"
                variants={fadeUpItem}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
              >
                <div className="contact-link-icon">{l.icon}</div>
                <div>
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-text">{l.text}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportMid}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}