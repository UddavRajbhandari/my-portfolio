import { useEffect, useRef } from 'react'
import './About.css'

const STATS = [
  { num: '4+', label: 'AI/ML Projects'    },
  { num: '1',  label: 'Internship Roles'  },
  { num: '10+', label: 'Tools & Libraries'},
  { num: '1',  label: 'Live Deployed App' },
]

const INTERESTS = [
  { icon: '🧠', title: 'Natural Language Processing', desc: 'Hate speech detection, multilingual NLP, text classification, sentiment analysis, and abstractive summarization — including fine-tuning BART for meeting minute generation and a focus on low-resource Nepali-language content.' },  { icon: '📊', title: 'ML Pipelines & Evaluation',   desc: 'End-to-end workflows from raw data to trained model — feature engineering, hyperparameter tuning, cross-validation, and performance analysis.' },
  { icon: '👁️', title: 'Computer Vision',              desc: 'Real-time posture detection and form correction using CNN+LSTM hybrid models built with TensorFlow and OpenCV.' },
  { icon: '🚀', title: 'Model Deployment',              desc: 'Shipping models to production via FastAPI and Streamlit, tracked with MLflow and WandB — from Jupyter prototype to live web app.' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { ref.current?.classList.add('visible') } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section section--alt">
      <div className="section-label">// 01. about</div>
      <h2 className="section-title">Who I <span className="accent">Am</span></h2>

      <div className="about-grid fade-in" ref={ref}>
        {/* ── Left: text + stats ── */}
        <div className="about-text">
          <p>
            I'm an <span className="hl">AI Engineer</span> specializing in NLP and Machine Learning, currently
            pursuing my Bachelor's in Computer Engineering at <span className="hl">Khwopa College of Engineering,
            Bhaktapur</span>. I build end-to-end intelligent systems — from raw data to deployed web apps.
          </p>
          <p>
            My work spans <span className="hl">Nepali hate speech detection</span>, real-time posture correction with computer vision, and corporate communication
            assessment tools. I've delivered production-level AI systems during my internship using FastAPI,
            BART, and the Gemini API.
          </p>
          <p>
            Based in <span className="hl">Lalitpur, Nepal</span>, I care deeply about making AI useful for
            underserved languages and communities — especially Nepali. I'm actively looking for opportunities
            where I can keep pushing that forward.
          </p>

          <div className="about-stats">
            {STATS.map(s => (
              <div key={s.label} className="stat-box">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: interests ── */}
        <div className="about-interests">
          {INTERESTS.map(i => (
            <div key={i.title} className="interest-item card-hover">
              <div className="interest-icon">{i.icon}</div>
              <div>
                <h4 className="interest-title">{i.title}</h4>
                <p className="interest-desc">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
