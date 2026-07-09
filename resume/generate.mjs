// Regenerates the resume PDF from the single source of truth.
// Usage: npm run resume  (from the repo root)
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'
import { profile } from '../react/src/data/profile.js'
import { render } from './template.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const htmlPath = join(here, 'resume.html')
const outputs = [
  join(here, '..', 'react', 'public', 'assets', 'Mckyle-Meyer-resume.pdf'),
  join(here, '..', 'Mckyle-Meyer-resume.pdf'),
]

writeFileSync(htmlPath, render(profile))

const browser = await chromium.launch({ channel: 'chrome' })
try {
  const page = await browser.newPage()
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' })
  const pdf = await page.pdf({ format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } })
  for (const out of outputs) {
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, pdf)
    console.log(`wrote ${out} (${pdf.length} bytes)`)
  }
} finally {
  await browser.close()
}
