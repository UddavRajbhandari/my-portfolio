import './Home.css'

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="section home">
      <div className="grid-bg" />
      <div className="orb orb--1" />
      <div className="orb orb--2" />

      {/* ── Left column ── */}
      <div className="home-left">
        <div className="hero-tag">▶ Available for opportunities</div>

        <h1 className="hero-name">Uddav Rajbhandari</h1>
        <p className="hero-role">AI Engineer — NLP & Machine Learning</p>

        <p className="hero-desc">
          AI Engineer who turns ideas into working systems. I care about the full
          pipeline — from raw data to a model people can actually use.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('work')}>View Projects</button>
          <button className="btn-ghost"   onClick={() => scrollTo('contact')}>Hire Me</button>
        </div>

        {/* Terminal block */}
        <div className="terminal">
          <div className="terminal-line"><span className="t-cmd">const</span> engineer = {'{'}</div>
          <div className="terminal-line">&nbsp;&nbsp;name: <span className="t-val">"Uddav Rajbhandari"</span>,</div>
          <div className="terminal-line">&nbsp;&nbsp;focus: <span className="t-val">"NLP & Hate Speech Detection"</span>,</div>
          <div className="terminal-line">&nbsp;&nbsp;location: <span className="t-val">"Lalitpur, Nepal"</span>,</div>
          <div className="terminal-line">&nbsp;&nbsp;status: <span className="t-val">"open_to_work"</span></div>
          <div className="terminal-line">{'}'}<span className="cursor-blink" /></div>
        </div>
      </div>

      {/* ── Right column — photo ── */}
      <div className="home-right">
        <div className="photo-frame">
          <div className="photo-inner">
            {/*
              ════════════════════════════════════════════
              HOW TO ADD YOUR PHOTO
              ════════════════════════════════════════════
              1. Put your photo in /public/profile.jpg
              2. Comment out the <div className="photo-placeholder">
                 block below.
              3. Uncomment the <img> tag.

              <img src="/profile.jpg" alt="Uddav Rajbhandari" className="photo-img" />
              ════════════════════════════════════════════
            */}
            <div className="photo-placeholder">
              <div className="photo-placeholder__icon">👤</div>
              <p>
                Add your photo to<br />
                <code>/public/profile.jpg</code><br />
                then swap this block with<br />
                <code>&lt;img src="/profile.jpg" /&gt;</code>
              </p>
            </div>
          </div>
        </div>

        <div className="photo-badge">
          <strong>2+</strong>
          AI Projects Live
        </div>
      </div>
    </section>
  )
}
