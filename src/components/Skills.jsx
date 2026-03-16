import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpItem, staggerContainer, viewport } from '../animations'
import './Skills.css'

const CATEGORIES = [
  {
    label: 'Languages', accent: '#00f5c4', icon: '{ }',
    tools: [
      { icon: '🐍', name: 'Python',  size: 'lg' },
      { icon: '⚙️', name: 'C/C++' },
    ],
  },
  {
    label: 'ML / AI', accent: '#00aaff', icon: '◈',
    tools: [
      { icon: '📊', name: 'Classification',       size: 'lg' },
      { icon: '📈', name: 'Regression' },
      { icon: '🔧', name: 'Feature Engineering',  size: 'lg' },
      { icon: '🎯', name: 'Model Evaluation',     size: 'lg' },
      { icon: '⚗️', name: 'Hyperparameter Tuning', size: 'lg' },
      { icon: '🔍', name: 'EDA' },
    ],
  },
  {
    label: 'Deep Learning & NLP', accent: '#7b61ff', icon: '✦',
    tools: [
      { icon: '🧠', name: 'Neural Networks',       size: 'lg' },
      { icon: '👁️', name: 'CNNs' },
      { icon: '🔁', name: 'LSTM / BiLSTM',         size: 'lg' },
      { icon: '📝', name: 'BART' },
      { icon: '🔤', name: 'Text Classification',   size: 'lg' },
      { icon: '🚫', name: 'Hate Speech Detection', size: 'lg' },
      { icon: '🌍', name: 'Multilingual NLP',      size: 'lg' },
      { icon: '📋', name: 'Summarization' },
      { icon: '💬', name: 'Sentiment Analysis',    size: 'lg' },
    ],
  },
  {
    label: 'Libraries & Frameworks', accent: '#f59e0b', icon: '▸',
    tools: [
      { icon: '🔥', name: 'PyTorch',      size: 'lg' },
      { icon: '🧩', name: 'TensorFlow',   size: 'lg' },
      { icon: '⚗️', name: 'Scikit-learn', size: 'lg' },
      { icon: '🐼', name: 'Pandas' },
      { icon: '🔢', name: 'NumPy' },
      { icon: '📊', name: 'Matplotlib' },
      { icon: '🌊', name: 'Seaborn' },
      { icon: '👁️', name: 'OpenCV' },
    ],
  },
  {
    label: 'Tools & Platforms', accent: '#10b981', icon: '⌥',
    tools: [
      { icon: '⚡', name: 'FastAPI',    size: 'lg' },
      { icon: '📊', name: 'Streamlit',  size: 'lg' },
      { icon: '🐙', name: 'Git/GitHub', size: 'lg' },
      { icon: '📉', name: 'MLflow' },
      { icon: '🔭', name: 'WandB' },
    ],
  },
]

const BARS = [
  { name: 'Python',                 pct: 92 },
  { name: 'NLP / Text Classification', pct: 88 },
  { name: 'PyTorch / TensorFlow',   pct: 85 },
  { name: 'Deep Learning',          pct: 83 },
  { name: 'FastAPI / Streamlit',    pct: 78 },
  { name: 'Computer Vision',        pct: 75 },
]

function ToolPill({ icon, name, size, accent }) {
  return (
    <div
      className={`skill-pill ${size === 'lg' ? 'skill-pill--lg' : ''}`}
      style={{ '--accent': accent }}
    >
      <span className="skill-pill__icon">{icon}</span>
      <span className="skill-pill__name">{name}</span>
    </div>
  )
}

function SkillBar({ name, pct, delay }) {
  const fillRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && fillRef.current) {
        fillRef.current.style.animationPlayState = 'running'
      }
    }, { threshold: .5 })
    if (fillRef.current) observer.observe(fillRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div className="skill-bar" variants={fadeUpItem}>
      <div className="skill-bar__top">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{pct}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          ref={fillRef}
          className="skill-bar__fill"
          style={{ '--w': `${pct}%`, animationDelay: `${delay}s`, animationPlayState: 'paused' }}
        />
      </div>
    </motion.div>
  )
}

function SkillCategory({ cat }) {
  return (
    <div className="skill-bento" style={{ '--cat-accent': cat.accent }}>
      <div className="skill-bento__header">
        <span className="skill-bento__icon">{cat.icon}</span>
        <span className="skill-bento__label">{cat.label}</span>
      </div>
      <div className="skill-bento__pills">
        {cat.tools.map(t => (
          <ToolPill key={t.name} {...t} accent={cat.accent} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="section-label">// 03. skills</div>
        <h2 className="section-title">My <span className="accent">Toolkit</span></h2>
      </motion.div>

      {/* ── Bento grid — always visible, no animation ── */}
      <div className="skills-bento-grid">
        {CATEGORIES.map((cat, i) => (
          <SkillCategory key={cat.label} cat={cat} index={i} />
        ))}
      </div>

      {/* ── Proficiency bars — animate on scroll ── */}
      <motion.div
        className="skill-proficiency"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0, margin: '0px 0px -50px 0px' }}
      >
        <div className="skill-prof-label">Core Proficiency</div>
        <div className="skill-bars-grid">
          {BARS.map((b, i) => <SkillBar key={b.name} {...b} delay={i * 0.1} />)}
        </div>
      </motion.div>
    </section>
  )
}