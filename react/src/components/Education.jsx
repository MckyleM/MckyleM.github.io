import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data/content.js'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead idx="05" title="education" />
        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1}>
              <div className="edu">
                <span className="edu-node" />
                <div className="edu-period">{e.period}</div>
                <h3>{e.school}</h3>
                <p>{e.qualification}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
