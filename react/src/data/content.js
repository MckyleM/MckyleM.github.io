// All site content lives here so copy is easy to edit in one place.

export const profile = {
  name: 'Mckyle Meyer',
  role: 'Software Developer',
  tagline: 'Dedicated developer, software enthusiast, always ready to learn.',
  location: 'South Africa',
  email: 'mckylemeyer12@gmail.com',
  github: 'https://github.com/MckyleM',
  linkedin: 'https://www.linkedin.com/in/mckyle-meyer-b605a9242/',
  resume: 'assets/Mckyle-Meyer-resume.pdf',
}

export const about = [
  'A dedicated developer and software enthusiast — always ready to learn.',
  'I have been coding since 2018 and have been learning new things ever since. I am a curious person who strives to truly understand everything I come across.',
  'With a deep interest in AI, I am ready to make a serious impact on the future of our world. I bring drive, honesty, commitment and dedication to every team I join.',
]

export const skills = [
  { name: 'Python', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Java', level: 'Proficient' },
  { name: 'C#', level: 'Proficient' },
  { name: 'SQL', level: 'Proficient' },
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'React', level: 'Learning' },
]

export const education = [
  {
    school: 'Belgium Campus',
    qualification: "Bachelor's Degree, Computer Science",
    period: '2022 — 2025',
  },
  {
    school: 'HTS Middelburg',
    qualification: 'Matric',
    period: 'Jun 2017 — Jun 2021',
  },
]

export const projects = [
  {
    id: 'youtube-downloader',
    name: 'YouTube Downloader',
    blurb: 'A Python script for downloading YouTube videos straight from the terminal.',
    stack: ['Python'],
    images: ['assets/projects/yt-snip.png', 'assets/projects/yt-result.png'],
    link: 'https://github.com/MckyleM',
  },
  {
    id: 'calculator',
    name: 'Calculator',
    blurb: 'A working calculator keypad written in JavaScript. Try it — it runs right here.',
    stack: ['JavaScript'],
    interactive: 'calculator',
  },
  {
    id: 'template-site',
    name: 'Template Website',
    blurb: 'A website built as a template for a kindergarten.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    images: ['assets/projects/template-site.png'],
    link: 'https://github.com/MckyleM',
  },
  {
    id: 'image-editor',
    name: 'Image Editor',
    blurb: 'A Python script that processes and edits images. Drag the handle to compare.',
    stack: ['Python'],
    compare: {
      before: 'assets/projects/img-original.png',
      after: 'assets/projects/img-edited.jpg',
    },
    link: 'https://github.com/MckyleM',
  },
  {
    id: 'smallpenny',
    name: 'Smallpenny',
    blurb: 'A small blockchain implementation I built from scratch.',
    stack: ['Python'],
    images: ['assets/projects/blockchain.png', 'assets/projects/blockchain-snip.png'],
    link: 'https://github.com/MckyleM',
  },
]

export const nav = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'resume', label: 'resume' },
  { id: 'contact', label: 'contact' },
]
