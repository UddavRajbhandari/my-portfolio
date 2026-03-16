import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpItem, staggerContainer, scaleIn, viewport, viewportMid } from '../animations'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    featured: true,
    liveDemo: true,
    title: 'Nepali Hate Content Classification',
    desc:`Major Project. Built a 4-class hate content detection system for Nepali-language social media —
classifying text as Non-Offensive, Other-Offensive, Offensive-Racist, or Offensive-Sexist.
Implemented ML baselines, a GRU model with Word2Vec embeddings, and fine-tuned transformer
models (XLM-RoBERTa, NepaliBERT) supporting Devanagari, Romanized Nepali, and mixed-script inputs.
Deployed as a real-time Streamlit inference app.`,
    tags: ['NLP', 'Deep Learning', 'Text Classification', 'Multilingual NLP', 'Streamlit', 'Transformers'],
    demoUrl:   'https://nepali-hate-content-detection.streamlit.app/',
    githubUrl: 'https://github.com/UddavRajbhandari/major-project',
  },
  {
    id: '02',
    featured: false,
    liveDemo: false,
    title: 'Meeting Minute Generation System',
    desc: `Audio-to-structured notes pipeline built during AI internship. Converts raw meeting audio
    to structured minutes using Whisper ASR, Gemini API segmentation, and
    BART summarization. Modular pipeline: ASR → NLP → summarization → PDF generation.`,
    tags: ['Whisper ASR', 'BART', 'Gemini API', 'NLP', 'Summarization', 'FastAPI', 'Python'],
    githubUrl: 'https://github.com/UddavRajbhandari/Techmanthan-meeting-minutes-generation',
  },
  {
    id: '03',
    featured: false,
    liveDemo: false,
    title: 'AI-Powered Soft Skill Trainer',
    desc: `Built during AI internship. A system evaluating Clarity, Grammar, Tone, and Persuasiveness
    using NLP heuristics, pattern matching, and rule-based scoring. FastAPI endpoints for MCQ
    generation, free-text scenario evaluation, and weighted combined-score computation.`,
    tags: ['NLP', 'FastAPI', 'Sentiment Analysis', 'Rule-based AI', 'Python', 'Scoring'],
    githubUrl: null,
  },
  {
    id: '04',
    featured: false,
    liveDemo: false,
    title: 'Upper Body Posture Correction',
    desc: `Minor Project. Real-time posture detection system using a TensorFlow CNN+LSTM hybrid model.
    Provides live form-correction feedback via webcam. Built with OpenCV for video capture and
    a deep learning pipeline for skeletal keypoint analysis.`,
    tags: ['Computer Vision', 'CNN', 'LSTM', 'TensorFlow', 'OpenCV', 'Pose Estimation'],
    githubUrl: 'https://github.com/UddavRajbhandari/Minor_project',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={`project-card card-hover ${project.featured ? 'project-card--featured' : ''}`}
      variants={fadeUpItem}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className="project-number">PROJECT — {project.id}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tags">
        {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="project-links">
        {project.liveDemo && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link project-link--demo">
            ▶ Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
            ⌥ GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="section section--dark">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="section-label">// 02. work</div>
        <h2 className="section-title">My <span className="accent">Projects</span></h2>
        <p className="projects-sub">End-to-end AI/ML projects spanning NLP, computer vision, and hate speech detection — one with a live demo.</p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportMid}
      >
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </motion.div>
    </section>
  )
}