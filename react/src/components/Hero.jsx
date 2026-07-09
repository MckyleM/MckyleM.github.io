import { motion } from 'framer-motion'
import { profile, heroCard } from '../data/content.js'
import './Hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const line = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="eyebrow" variants={line}>
            // welcome — you’ve reached
          </motion.p>

          <motion.h1 className="hero-name" variants={line}>
            {profile.name}
          </motion.h1>

          <motion.div className="hero-role" variants={line}>
            <span className="kw">const</span> role <span className="op">=</span>{' '}
            <span className="str">“{profile.role}”</span>
            <span className="caret" />
          </motion.div>

          <motion.p className="hero-tagline" variants={line}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero-actions" variants={line}>
            <a className="btn btn-primary" href="#projects">
              view projects <span aria-hidden>↘</span>
            </a>
            <a className="btn" href="#contact">
              get in touch
            </a>
          </motion.div>

          <motion.div className="hero-links" variants={line}>
            <a href={profile.github} target="_blank" rel="noreferrer">github</a>
            <span className="sep">/</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
            <span className="sep">/</span>
            <a href={`mailto:${profile.email}`}>email</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-card panel"
          initial={{ opacity: 0, y: 26, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="card-bar">
            <span className="dot r" /><span className="dot y" /><span className="dot g" />
            <span className="card-file">developer.json</span>
          </div>
          <div className="card-body">
            <img className="avatar" src="assets/selfie.jpg" alt="Mckyle Meyer" />
            <pre className="code">
              {'{\n'}
              {heroCard.map((f, i) => (
                <span key={f.k}>
                  {'  '}
                  <span className="k">"{f.k}"</span>
                  {': '}
                  {f.t === 's' && <span className="s">"{f.v}"</span>}
                  {f.t === 'n' && <span className="n">{f.v}</span>}
                  {f.t === 'b' && <span className="b">{String(f.v)}</span>}
                  {i < heroCard.length - 1 ? ',' : ''}
                  {'\n'}
                </span>
              ))}
              {'}'}
            </pre>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span>scroll</span>
        <span className="arrow">↓</span>
      </a>
    </section>
  )
}
