import { useEffect, useRef } from 'react'
import './Experience.css'

const EXPERIENCE = [
  {
    date:    'May — August 2025',
    role:    'AI Developer Intern',
    company: 'Tech Manthan',
    cert:    'Certificate of Internship Completion — Er. Sushil Dyopala, CEO & Founder',
    desc:    `Over 3 months, progressed from ML fundamentals to building and deploying production-level
              AI systems — covering classical ML, deep learning, computer vision, NLP, and modern GenAI
              concepts including LLMs, RAG systems, and LangChain.`,
    projects: [
      { title: 'Meeting Minute Generation System', role: 'NLP & Summarization' },
      { title: 'AI-Powered Soft Skill Trainer',    role: 'Assessment System'   },
    ],
    highlights: [
      { icon: '📐', label: 'Classical ML',         desc: 'Regression, SVMs, decision trees, ensemble methods, hyperparameter tuning, EDA' },
      { icon: '🧠', label: 'Deep Learning',         desc: 'CNNs, RNNs, LSTMs, GRUs, autoencoders, seq2seq models, transformers from scratch' },
      { icon: '👁️', label: 'Computer Vision',       desc: 'OpenCV, U-Net segmentation, YOLOv8 & Mask-RCNN detection, SORT/DeepSORT/ByteTrack tracking' },
      { icon: '🔤', label: 'NLP',                   desc: 'BoW, TF-IDF, Word2Vec, GloVe, sentiment analysis, fine-tuning BART for summarization' },
      { icon: '⚡', label: 'Transformers & LLMs',   desc: 'HuggingFace, PEFT, LoRA, QLoRA, LLM fine-tuning with Unsloth' },
      { icon: '🤖', label: 'GenAI & Agents',        desc: 'RAG systems, vector databases, LangChain, LangGraph, prompt engineering, AI agents' },
      { icon: '📊', label: 'MLOps',                 desc: 'MLflow & WandB experiment tracking, FastAPI for model serving, Streamlit demos' },
    ],
    tags: ['PyTorch', 'NLP', 'BART', 'FastAPI', 'Streamlit', 'LangChain', 'RAG', 'MLflow', 'WandB', 'HuggingFace'],
  },
]

function ExpItem({ item }) {
  return (
    <div className="exp-item">

      {/* ── Header ── */}
      <div className="exp-header">
        <div className="exp-header-left">
          <div className="exp-date">{item.date}</div>
          <div className="exp-role">{item.role}</div>
          <div className="exp-company">{item.company}</div>
          <a
            href="https://www.linkedin.com/in/uddav-rajbhandari-4998252ab/overlay/Position/2641001879/treasury/?profileId=ACoAAEqx1nUBkF024kb57B3CeEU5nFQFHCwkSKY"
            target="_blank"
            rel="noreferrer"
            className="exp-cert exp-cert--link"
          >
            🏅 {item.cert} ↗
          </a>
        </div>
        <p className="exp-desc">{item.desc}</p>
      </div>

      {/* ── Projects delivered — compact pills ── */}
      <div className="exp-projects-row">
        <span className="exp-projects-label">Delivered</span>
        {item.projects.map(p => (
          <div key={p.title} className="exp-project-pill">
            <span className="exp-project-pill-dot" />
            <div>
              <div className="exp-project-pill-title">{p.title}</div>
              <div className="exp-project-pill-role">{p.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Learning highlights — infinite marquee ── */}
      <div className="exp-highlights-label">What I learned</div>
      <div className="exp-marquee-wrap">
        {/* Row 1 — slides left */}
        <div className="exp-marquee exp-marquee--left">
          <div className="exp-marquee-track">
            {[...item.highlights, ...item.highlights].map((h, i) => (
              <div key={i} className="exp-marquee-cell">
                <span className="exp-marquee-icon">{h.icon}</span>
                <div>
                  <div className="exp-marquee-label">{h.label}</div>
                  <div className="exp-marquee-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 — slides right (reversed order) */}
        <div className="exp-marquee exp-marquee--right">
          <div className="exp-marquee-track">
            {[...item.highlights.slice().reverse(), ...item.highlights.slice().reverse()].map((h, i) => (
              <div key={i} className="exp-marquee-cell">
                <span className="exp-marquee-icon">{h.icon}</span>
                <div>
                  <div className="exp-marquee-label">{h.label}</div>
                  <div className="exp-marquee-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tags ── */}
      <div className="exp-tags">
        {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

    </div>
  )
}

export default function Experience() {
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
    <section id="experience" className="section section--dark">
      <div className="section-label">// 03. experience</div>
      <h2 className="section-title">My <span className="accent">Experience</span></h2>
      <div className="exp-timeline fade-in" ref={ref}>
        {EXPERIENCE.map(e => <ExpItem key={e.role} item={e} />)}
      </div>
    </section>
  )
}