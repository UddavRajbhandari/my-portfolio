import { useEffect, useRef } from 'react'
import './Education.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
// Add / remove education items here. They render as a vertical timeline.
const EDUCATION = [
  {
    date:    '2022 — 2026 (Expected)',
    degree:  'Bachelor in Computer Engineering',
    school:  'Khwopa College of Engineering, Bhaktapur, Nepal',
    desc:    `Pursuing a full Computer Engineering degree with a strong focus on AI and machine learning.
              Completed major project on Nepali hate speech detection and minor project on real-time
              posture correction using deep learning.`,
    courses: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Structures & Algorithms', 'DBMS'],
  },
  {
    date:    'Jan — Feb 2025',
    degree:  'Deep Learning with Python (45h)',
    school:  'Khwopa College of Engineering × CECAB × Almonds AI',
    desc:    `Intensive 45-hour course covering Neural Networks, CNNs, Computer Vision, and PyTorch.
              Performance rated: Excellent.`,
    courses: ['Neural Networks', 'CNNs', 'Computer Vision', 'PyTorch'],
  },
  {
    date:    'Jun — Aug 2024',
    degree:  'Python & Data Science Certification',
    school:  'Khwopa College of Engineering × DeepMind Creations',
    desc:    `Covered Python fundamentals, Exploratory Data Analysis (EDA), and end-to-end Scikit-learn
              ML workflows. Performance rated: Excellent.`,
    courses: ['Python', 'EDA', 'Scikit-learn', 'ML Workflows'],
  },
]

function EduItem({ item }) {
  return (
    <div className="edu-item">
      <div className="edu-date">{item.date}</div>
      <div className="edu-degree">{item.degree}</div>
      <div className="edu-school">{item.school}</div>
      <p className="edu-desc">{item.desc}</p>
      <div className="edu-courses">
        {item.courses.map(c => <span key={c} className="tag tag--blue">{c}</span>)}
      </div>
    </div>
  )
}

export default function Education() {
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
    <section id="education" className="section section--dark">
      <div className="section-label">// 04. education</div>
      <h2 className="section-title">My <span className="accent">Background</span></h2>

      <div className="edu-timeline fade-in" ref={ref}>
        {EDUCATION.map(e => <EduItem key={e.degree} item={e} />)}
      </div>
    </section>
  )
}
