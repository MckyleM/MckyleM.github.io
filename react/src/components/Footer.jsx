import { profile } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-mark">
          <span className="green">{'<'}</span>mckyle<span className="green">{'/>'}</span>
        </div>
        <p className="footer-note">
          built with react · designed &amp; coded by {profile.name}
        </p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">github</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
          <a href="#top">back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
