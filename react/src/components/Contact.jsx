import { motion } from 'framer-motion'
import SectionHead from './SectionHead.jsx'
import { profile } from '../data/content.js'
import './Contact.css'

const channels = [
  { k: 'email', v: profile.email, href: `mailto:${profile.email}` },
  { k: 'github', v: 'github.com/MckyleM', href: profile.github },
  { k: 'linkedin', v: 'in/mckyle-meyer', href: profile.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead idx="07" title="contact" />
        <div className="contact-grid">
          <motion.div
            className="contact-pitch"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="contact-prompt">
              <span className="green">$</span> say hello
            </p>
            <h3>Let’s build something.</h3>
            <p className="contact-sub">{profile.openToWorkLine}</p>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              start a conversation ↗
            </a>
          </motion.div>

          <div className="contact-list">
            {channels.map((c, i) => (
              <motion.a
                key={c.k}
                className="contact-row"
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <span className="contact-k">{c.k}</span>
                <span className="contact-v">{c.v}</span>
                <span className="contact-arrow" aria-hidden>→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
