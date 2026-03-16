import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpItem, staggerContainer, viewport, viewportMid } from '../animations'
import './Education.css'

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

function EduItem({ item, index }) {
  return (
    <motion.div
      className="edu-item"
      variants={fadeUpItem}
      custom={index}
    >
      <div className="edu-date">{item.date}</div>
      <div className="edu-degree">{item.degree}</div>
      <div className="edu-school">{item.school}</div>
      <p className="edu-desc">{item.desc}</p>
      <motion.div
        className="edu-courses"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {item.courses.map(c => (
          <motion.span key={c} className="tag tag--blue" variants={fadeUpItem}>{c}</motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="section-label">// 05. education</div>
        <h2 className="section-title">My <span className="accent">Background</span></h2>
      </motion.div>

      <motion.div
        className="edu-timeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportMid}
      >
        {EDUCATION.map((e, i) => <EduItem key={e.degree} item={e} index={i} />)}
      </motion.div>
    </section>
  )
}