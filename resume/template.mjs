// Pure HTML template for the one-page A4 resume.
// All facts come from react/src/data/profile.js — this file only shapes them.

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// One-line condensed blurbs for the PDF (space is tight). Presentation-only
// trims of the blurbs in profile.js — keep consistent when those change.
const condensed = {
  smallpenny:
    'A working blockchain built from scratch — blocks, hashing, proof-of-work and chain validation.',
  'transformer-1bit':
    'Llama-style decoder in a single PyTorch file (RMSNorm, RoPE, SwiGLU) with 1-bit QAT — 1.125 bits/weight, loss 4.2 → 2.32.',
  'portfolio-site':
    'React + Vite portfolio on Cloudflare Workers; site and resume PDF render from one data file.',
}

export function render(p) {
  const job = p.experience[0]
  const projects = p.resumeProjects
    .map((id) => p.projects.find((x) => x.id === id))
    .filter(Boolean)

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(p.name)} — resume</title>
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 210mm; }
  body {
    font: 9.6pt/1.38 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #1a1d21;
    padding: 13mm 14mm 11mm;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  a { color: inherit; text-decoration: none; }
  header { border-bottom: 1.4pt solid #1a1d21; padding-bottom: 3.2mm; margin-bottom: 3.6mm; }
  h1 { font-size: 20pt; font-weight: 700; letter-spacing: .2pt; }
  .role { font-size: 10.5pt; color: #3d434b; margin-top: .8mm; }
  .contact { font-size: 8.8pt; color: #3d434b; margin-top: 1.6mm; }
  .contact span + span::before { content: ' · '; color: #9aa1a9; }
  section { margin-bottom: 3.4mm; }
  h2 {
    font-size: 8.2pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2pt;
    color: #565d66; border-bottom: .5pt solid #c9ced4; padding-bottom: .8mm; margin-bottom: 1.8mm;
  }
  .jobline { display: flex; justify-content: space-between; align-items: baseline; }
  .jobline strong { font-size: 10.2pt; }
  .jobline .dates { font-size: 8.8pt; color: #3d434b; white-space: nowrap; }
  .jobmeta { font-size: 8.8pt; color: #3d434b; margin-top: .4mm; }
  .intro { font-style: italic; color: #3d434b; margin: 1mm 0 1.4mm; }
  ul { list-style: none; }
  li { padding-left: 3.4mm; position: relative; margin-bottom: 1.15mm; }
  li::before { content: '—'; position: absolute; left: 0; color: #9aa1a9; }
  .proj { margin-bottom: 1.15mm; }
  .proj strong { font-size: 9.6pt; }
  .proj .stack { color: #565d66; }
  .edu { display: flex; justify-content: space-between; margin-bottom: 1mm; }
  .edu .dates { color: #3d434b; font-size: 8.8pt; }
  .skills div { margin-bottom: .9mm; }
  .skills b { display: inline-block; min-width: 34mm; }
</style>
</head>
<body>
  <header>
    <h1>${esc(p.name)}</h1>
    <div class="role">${esc(p.role)}</div>
    <div class="contact">
      <span>${esc(p.location)}</span>
      <span><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></span>
      <span><a href="${esc(p.linkedin)}">${esc(p.linkedinLabel)}</a></span>
      <span><a href="${esc(p.github)}">${esc(p.githubLabel)}</a></span>
      <span><a href="${esc(p.site)}">${esc(p.siteLabel)}</a></span>
    </div>
  </header>

  <section>
    <h2>Summary</h2>
    <p>${esc(p.summary)}</p>
  </section>

  <section>
    <h2>Experience</h2>
    <div class="jobline">
      <strong>${esc(job.title)} — ${esc(job.company)}</strong>
      <span class="dates">${esc(job.start)} – ${esc(job.end)}</span>
    </div>
    <div class="jobmeta">${esc(job.location)}</div>
    <p class="intro">${esc(job.intro)}</p>
    <ul>
      ${job.bullets.map((b) => `<li>${esc(b)}</li>`).join('\n      ')}
    </ul>
  </section>

  <section>
    <h2>Projects</h2>
    ${projects
      .map(
        (pr) => `<div class="proj"><strong>${esc(pr.name)}</strong>
      <span class="stack">(${pr.stack.map(esc).join(', ')})</span> —
      ${esc(condensed[pr.id] ?? pr.blurb)}</div>`
      )
      .join('\n    ')}
  </section>

  <section>
    <h2>Education</h2>
    ${p.education
      .map(
        (e) => `<div class="edu"><span><strong>${esc(e.qualification)}</strong> — ${esc(e.school)}</span>
      <span class="dates">${esc(e.period)}</span></div>`
      )
      .join('\n    ')}
  </section>

  <section class="skills">
    <h2>Skills</h2>
    ${p.skills
      .map((g) => `<div><b>${esc(g.group)}</b> ${g.items.map(esc).join(' · ')}</div>`)
      .join('\n    ')}
  </section>
</body>
</html>`
}
