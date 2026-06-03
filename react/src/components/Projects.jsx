import { motion } from 'framer-motion'
import SectionHead from './SectionHead.jsx'
import Calculator from './Calculator.jsx'
import ImageCompare from './ImageCompare.jsx'
import { projects } from '../data/content.js'
import './Projects.css'

function ProjectMedia({ p }) {
  if (p.interactive === 'calculator') return <Calculator />
  if (p.compare) return <ImageCompare before={p.compare.before} after={p.compare.after} />
  if (p.images?.length === 2) {
    return (
      <div className="media-pair">
        <img src={p.images[0]} alt={`${p.name} 1`} />
        <img src={p.images[1]} alt={`${p.name} 2`} />
      </div>
    )
  }
  return <img className="media-single" src={p.images[0]} alt={p.name} />
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead idx="02" title="projects" />
        <div className="projects">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="project panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project-media">
                <ProjectMedia p={p} />
              </div>
              <div className="project-body">
                <div className="project-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    view on github <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
