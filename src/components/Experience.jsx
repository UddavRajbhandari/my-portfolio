import { useEffect, useRef } from 'react'
import './Experience.css'

const EXPERIENCE = [
  {
    date:     'May — August 2025',
    role:     'AI Developer Intern',
    company:  'Tech Manthan',
    cert:     'Certificate of Internship Completion — Er. Sushil Dyopala, CEO & Founder',
    desc:     `Over 3 months, progressed from ML fundamentals to building and deploying production-level
               AI systems. The internship covered a broad spectrum — starting from mathematical foundations,
               moving through classical ML, deep learning, computer vision, NLP, and modern GenAI concepts
               including LLMs, RAG systems, and LangChain. Contributed directly to two team projects,
               taking ownership of the NLP and summarization pipeline in the Meeting Minute Generation system,
               and independently building the text-based communication assessment system for the Soft Skill Trainer.`,
    highlights: [
      'Classical ML — linear/logistic regression, SVMs, decision trees, ensemble methods, hyperparameter tuning, EDA',
      'Deep Learning — CNNs, RNNs, LSTMs, GRUs, autoencoders, seq2seq models, transformers from scratch',
      'Computer Vision — image processing with OpenCV, image segmentation (U-Net), object detection (YOLOv8, Mask-RCNN), object tracking (SORT, DeepSORT, ByteTrack)',
      'NLP — text preprocessing, BoW, TF-IDF, Word2Vec, GloVe, sentiment analysis, fine-tuning BART for abstractive summarization',
      'Transformers & LLMs — transformer architecture, HuggingFace, PEFT, LoRA, QLoRA, LLM fine-tuning with Unsloth',
      'GenAI & Agents — RAG systems, vector databases, LangChain, LangGraph, prompt engineering, AI agents',
      'MLOps — experiment tracking with MLflow and WandB, FastAPI for model serving, Streamlit for demo UIs',
    ],
    tags: ['PyTorch', 'NLP', 'BART', 'FastAPI', 'Streamlit', 'LangChain', 'RAG', 'MLflow', 'WandB', 'HuggingFace'],
  },
]

function ExpItem({ item }) {
  return (
    <div className="exp-item">
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
      <p className="exp-desc">{item.desc}</p>

      <div className="exp-highlights">
        <div className="exp-highlights-title">What I worked on &amp; learned:</div>
        <ul className="exp-highlights-list">
          {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>

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
    <section id="experience" className="section section--alt">
      <div className="section-label">// 03. experience</div>
      <h2 className="section-title">My <span className="accent">Experience</span></h2>

      <div className="exp-timeline fade-in" ref={ref}>
        {EXPERIENCE.map(e => <ExpItem key={e.role} item={e} />)}
      </div>
    </section>
  )
}