import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpItem, staggerContainer, viewport, viewportMid } from '../animations'
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
      { icon: '📐', label: 'Classical ML',       desc: 'Regression, SVMs, decision trees, ensemble methods, hyperparameter tuning, EDA' },
      { icon: '🧠', label: 'Deep Learning',       desc: 'CNNs, RNNs, LSTMs, GRUs, autoencoders, seq2seq models, transformers from scratch' },
      { icon: '👁️', label: 'Computer Vision',     desc: 'OpenCV, U-Net segmentation, YOLOv8 & Mask-RCNN detection, SORT/DeepSORT/ByteTrack tracking' },
      { icon: '🔤', label: 'NLP',                 desc: 'BoW, TF-IDF, Word2Vec, GloVe, sentiment analysis, fine-tuning LLMs' },
      { icon: '⚡', label: 'Transformers & LLMs', desc: 'HuggingFace, PEFT, LoRA, QLoRA, LLM fine-tuning with Unsloth' },
      { icon: '🤖', label: 'GenAI & Agents',      desc: 'RAG systems, vector databases, LangChain, LangGraph, prompt engineering, AI agents' },
      { icon: '📊', label: 'MLOps',               desc: 'MLflow & WandB experiment tracking, FastAPI for model serving, Streamlit demos' },
      { icon: '🔍', label: 'Responsible & Explainable AI', desc: 'Responsible AI principles, UX design for AI products, XAI techniques with LIME and SHAP for model interpretability' },
    
    ],
    tags: ['PyTorch', 'NLP', 'BART', 'FastAPI', 'Streamlit', 'LangChain', 'RAG', 'MLflow', 'WandB', 'HuggingFace'],
  },
]

function ExpItem({ item }) {
  return (
    <div className="exp-item">

      {/* ── Header ── */}
      <motion.div
        className="exp-header"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
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
      </motion.div>

      {/* ── Projects delivered ── */}
      <motion.div
        className="exp-projects-row"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
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
      </motion.div>

      {/* ── Learning highlights — staggered grid ── */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="exp-highlights-label">What I learned</div>
      </motion.div>

      <motion.div
        className="exp-highlights-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportMid}
      >
        {item.highlights.map((h) => (
          <motion.div
            key={h.label}
            className="exp-highlight-cell"
            variants={fadeUpItem}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
          >
            <div className="exp-highlight-icon">{h.icon}</div>
            <div>
              <div className="exp-highlight-label">{h.label}</div>
              <div className="exp-highlight-desc">{h.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Tags ── */}
      <motion.div
        className="exp-tags"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </motion.div>

    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section section--dark">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="section-label">// 03. experience</div>
        <h2 className="section-title">My <span className="accent">Experience</span></h2>
      </motion.div>

      <div className="exp-timeline">
        {EXPERIENCE.map(e => <ExpItem key={e.role} item={e} />)}
      </div>
    </section>
  )
}