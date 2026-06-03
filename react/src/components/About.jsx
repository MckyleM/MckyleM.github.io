import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import { about } from '../data/content.js'
import './About.css'

const facts = [
  { k: 'coding since', v: '2018' },
  { k: 'core values', v: 'honesty · commitment · dedication' },
  { k: 'into', v: 'AI · web · building things' },
  { k: 'off-screen', v: 'guitar · MMA · gaming' },
]

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
            <div className="about-photo panel">
              <img src="assets/about.jpeg" alt="Mckyle Meyer" />
            </div>
            <ul className="facts">
              {facts.map((f) => (
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
