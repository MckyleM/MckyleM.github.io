import { motion } from 'framer-motion'
import SectionHead from './SectionHead.jsx'
import { skills } from '../data/content.js'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead idx="04" title="skills" />
        <div className="skills-grid">
          {skills.map((g, i) => (
            <motion.div
              key={g.group}
              className="skill panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="skill-dot" />
              <span className="skill-group">{g.group}</span>
              <ul className="skill-items">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
