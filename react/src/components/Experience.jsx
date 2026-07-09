import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import { experience, caseStudy } from '../data/content.js'
import './Experience.css'

const study = [
  { k: 'problem', v: caseStudy.problem },
  { k: 'constraint', v: caseStudy.constraint },
  { k: 'solution', v: caseStudy.solution },
  { k: 'trade-off', v: caseStudy.tradeoff },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead idx="03" title="experience" />

        {experience.map((job) => (
          <Reveal key={`${job.title}-${job.start}`}>
            <div className="job panel">
              <div className="job-head">
                <div>
                  <h3>{job.title}</h3>
                  <p className="job-company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="job-period">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="job-intro">{job.intro}</p>
              <ul className="job-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.12}>
          <div className="case panel">
            <p className="case-label">
              <span className="green">$</span> case study — {caseStudy.label}
            </p>
            <h3>{caseStudy.title}</h3>
            <dl className="case-rows">
              {study.map((row) => (
                <div className="case-row" key={row.k}>
                  <dt>{row.k}</dt>
                  <dd>{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
