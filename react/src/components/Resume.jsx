import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'
import './Resume.css'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHead idx="06" title="resume" />
        <Reveal>
          <div className="resume panel">
            <div className="resume-side">
              <p className="eyebrow">// curriculum vitae</p>
              <h3>Want the full story?</h3>
              <p className="resume-text">
                Grab a copy of my resume — experience, projects and references in one tidy PDF.
              </p>
              <div className="resume-actions">
                <a className="btn btn-primary" href={profile.resume} download>
                  download .pdf <span aria-hidden>↓</span>
                </a>
                <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
                  open in tab
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
