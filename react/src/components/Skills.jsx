import { motion } from 'framer-motion'
import SectionHead from './SectionHead.jsx'
import { skills } from '../data/content.js'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead idx="03" title="skills" />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="skill-dot" />
              <span className="skill-name">{s.name}</span>
              <span className="skill-level">{s.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
