import { useEffect, useRef } from 'react'
import './Skills.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Add / remove tools from any category freely
const CATEGORIES = [
  {
    label: 'Languages',
    tools: [
      { icon: '🐍', name: 'Python'  },
      { icon: '⚙️', name: 'C/C++'  },
    ],
  },
  {
    label: 'ML / AI',
    tools: [
      { icon: '📊', name: 'Classification'          },
      { icon: '📈', name: 'Regression'              },
      { icon: '🔧', name: 'Feature Engineering'     },
      { icon: '🎯', name: 'Model Evaluation'        },
      { icon: '⚗️', name: 'Hyperparameter Tuning'  },
      { icon: '🔍', name: 'EDA'                     },
    ],
  },
  {
    label: 'Deep Learning & NLP',
    tools: [
      { icon: '🧠', name: 'Neural Networks'      },
      { icon: '👁️', name: 'CNNs'                 },
      { icon: '🔁', name: 'LSTM / BiLSTM'        },
      { icon: '📝', name: 'BART'                  },
      { icon: '🎙️', name: 'Whisper ASR'           },
      { icon: '🔤', name: 'Text Classification'   },
      { icon: '🚫', name: 'Hate Speech Detection' },
      { icon: '🌍', name: 'Multilingual NLP'      },
      { icon: '📋', name: 'Summarization'         },
      { icon: '💬', name: 'Sentiment Analysis'    },
    ],
  },
  {
    label: 'Libraries & Frameworks',
    tools: [
      { icon: '🔥', name: 'PyTorch'      },
      { icon: '🧩', name: 'TensorFlow'   },
      { icon: '⚗️', name: 'Scikit-learn' },
      { icon: '🐼', name: 'Pandas'       },
      { icon: '🔢', name: 'NumPy'        },
      { icon: '📊', name: 'Matplotlib'   },
      { icon: '🌊', name: 'Seaborn'      },
      { icon: '👁️', name: 'OpenCV'       },
    ],
  },
  {
    label: 'Tools & Platforms',
    tools: [
      { icon: '⚡', name: 'FastAPI'    },
      { icon: '📊', name: 'Streamlit'  },
      { icon: '🐙', name: 'Git/GitHub' },
      { icon: '📉', name: 'MLflow'     },
      { icon: '🔭', name: 'WandB'      },
    ],
  },
]

const BARS = [
  { name: 'Python',                pct: 92 },
  { name: 'NLP / Text Classification', pct: 88 },
  { name: 'PyTorch / TensorFlow',  pct: 85 },
  { name: 'Deep Learning',         pct: 83 },
  { name: 'FastAPI / Streamlit',   pct: 78 },
  { name: 'Computer Vision',       pct: 75 },
]

// ─── Sub-components ───────────────────────────────────────────────────────────
function ToolPill({ icon, name }) {
  return (
    <div className="skill-pill card-hover">
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
    <div className="skill-bar">
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
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Skills() {
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
    <section id="skills" className="section section--alt">
      <div className="section-label">// 03. skills</div>
      <h2 className="section-title">My <span className="accent">Toolkit</span></h2>

      <div className="fade-in" ref={ref}>
        {CATEGORIES.map(cat => (
          <div key={cat.label} className="skill-category">
            <div className="skill-cat-label">{cat.label}</div>
            <div className="skills-grid">
              {cat.tools.map(t => <ToolPill key={t.name} {...t} />)}
            </div>
          </div>
        ))}

        <div className="skill-category">
          <div className="skill-cat-label">Core Proficiency</div>
          <div className="skill-bars-grid">
            {BARS.map((b, i) => <SkillBar key={b.name} {...b} delay={i * 0.1} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
