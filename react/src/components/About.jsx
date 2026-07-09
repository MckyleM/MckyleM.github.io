import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import { about, aboutFacts } from '../data/content.js'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead idx="01" title="about" />
        <div className="about-grid">
          <div className="about-text">
            {about.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={i === 0 ? 'lead' : ''}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="about-aside">
            <ul className="facts panel">
              {aboutFacts.map((f) => (
                <li key={f.k}>
                  <span className="fk">{f.k}</span>
                  <span className="fv">{f.v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
