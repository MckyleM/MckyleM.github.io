// Thin adapter over the single source of truth in profile.js.
// Components import from here; facts live in profile.js only.
import { profile as data } from './profile.js'

export const profile = {
  ...data,
  // Legacy field name some components use for the PDF path.
  resume: data.resumePdf,
}

export const about = data.about
export const aboutFacts = data.aboutFacts
export const skills = data.skills
export const education = data.education
export const projects = data.projects
export const experience = data.experience
export const caseStudy = data.caseStudy
export const heroCard = data.heroCard

export const nav = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'resume', label: 'resume' },
  { id: 'contact', label: 'contact' },
]
