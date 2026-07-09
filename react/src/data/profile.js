// Single source of truth for every fact on the site AND in the generated
// resume PDF (resume/generate.mjs). Change facts here, nowhere else.
// NDA rule: no employer, product, client, or internal repo names — ever.

export const profile = {
  name: 'Mckyle Meyer',
  role: 'Software Developer',
  tagline: 'I build a production .NET platform by day — and the AI tooling that speeds it up around everything else.',
  location: 'Pretoria, Gauteng, South Africa',
  email: 'mckylemeyer12@gmail.com',
  github: 'https://github.com/MckyleM',
  githubLabel: 'github.com/MckyleM',
  linkedin: 'https://www.linkedin.com/in/mckyle-meyer-b605a9242/',
  linkedinLabel: 'in/mckyle-meyer',
  site: 'https://meetmckyle.mckylemeyer12.workers.dev/',
  siteLabel: 'meetmckyle.mckylemeyer12.workers.dev',
  open_to_work: true,
  openToWorkLine: 'Open to opportunities and collaboration. The fastest way to reach me is email.',
  resumePdf: 'assets/Mckyle-Meyer-resume.pdf',

  // Hero developer.json card — rendered from data, not hard-coded.
  heroCard: [
    { k: 'name', v: 'Mckyle Meyer', t: 's' },
    { k: 'role', v: 'Software Developer', t: 's' },
    { k: 'since', v: 2018, t: 'n' },
    { k: 'focus', v: 'AI · web · systems', t: 's' },
    { k: 'open_to_work', v: true, t: 'b' },
  ],

  // Resume summary. Site About section uses `about` below.
  summary:
    'C#/.NET developer on a production financial-services practice-management platform — ' +
    'Blazor front ends and ASP.NET Core services across a multi-repo architecture. Strongest at ' +
    'authentication flows, cross-service API contracts, and refactoring at scale. Builds ' +
    'AI-augmented engineering workflows: agent-readable knowledge vaults, code knowledge graphs ' +
    'for pre-refactor impact analysis, and locally served LLMs.',

  about: [
    'By day I build a financial-services practice-management platform in C#/.NET — Blazor front ends, ASP.NET Core services, and the authentication flows and API contracts that hold a multi-repo architecture together.',
    'I also set up and scaled the platform’s automated test project (Playwright/TypeScript, ~300 tests and counting) and trained the interns who now maintain it.',
    'Around the day job I run an AI-augmented engineering workflow — agent-readable knowledge vaults, code knowledge graphs for impact analysis before refactors, and small LLMs served on my own hardware — and I’m deliberately building toward applied ML/AI engineering.',
  ],
  aboutFacts: [
    { k: 'based in', v: 'Pretoria, South Africa' },
    { k: 'coding since', v: '2018' },
    { k: 'production .NET since', v: '2024' },
    { k: 'off-screen', v: 'guitar · MMA · gaming' },
  ],

  experience: [
    {
      title: 'Software Developer',
      company: 'Financial-services software company',
      location: 'Gauteng, South Africa',
      start: 'Oct 2024',
      end: 'Present',
      intro:
        'Develops a financial-services practice-management platform (.NET) spanning a legacy ASP.NET Core MVC application and a modern Blazor/microservices line.',
      bullets: [
        'Designed and implemented OIDC authentication for a Microsoft Outlook add-in (Office.js) using a Backend-for-Frontend with a one-time-code server-side relay — working around Outlook-on-the-Web’s broken dialog-messaging channel — and configured ASP.NET Data Protection key persistence so sessions survive restarts and scale-out.',
        'Leading the extraction of a settings module out of a large Blazor CRM application into a standalone app: dependency injection, Fluxor state and namespaces re-architected across 30+ components, services and models while both solutions keep building green.',
        'Built a Microsoft Outlook add-in end-to-end: a React/TypeScript task pane backed by a .NET BFF that proxies to internal services via OpenAPI-generated typed clients (NSwag) and renders emails to PDF through a headless-Chromium sidecar; shipped to production on Azure as a multi-container deployment.',
        'Set up and scaled the platform’s automated test project (Playwright/TypeScript against a Blazor UI, CI in Azure Pipelines): wrote the first ~130 of its ~300 tests, eliminated flaky failures from UI virtualization and fixed-timeout waits, and ran 250-iteration stability loops to surface intermittent failures before CI.',
        'Trained 3 interns (Sep 2025 – Feb 2026), taking them from zero Playwright/TypeScript experience to independently maintaining the ~300-test suite.',
      ],
    },
  ],

  // Story-A case study card — rendered in the Experience section.
  caseStudy: {
    label: 'professional work — proprietary',
    title: 'OIDC sign-in from an Outlook task pane',
    problem:
      'The platform ships a Microsoft Outlook add-in (Office.js) that needs OIDC sign-in from a task pane. The standard flow opens an auth popup that hands its result back over Office’s dialog-messaging channel.',
    constraint:
      'In Outlook on the Web that channel fails: the popup completes sign-in but can never deliver the result back to the task pane.',
    solution:
      'A Backend-for-Frontend with a one-time-code server-side relay — the popup deposits a short-lived, single-use code with the server, and the task pane redeems it server-side for its session. Secrets never reach the client; ASP.NET Data Protection key persistence keeps sessions valid across restarts and multi-instance scale-out.',
    tradeoff:
      'More moving parts than plain SPA OIDC — but it works where the standard flow is broken, and it keeps secrets server-side.',
  },

  education: [
    {
      school: 'Belgium Campus',
      qualification: 'Bachelor of Computing (NQF 8)',
      period: '2022 — 2025',
    },
    {
      school: 'HTS Middelburg',
      qualification: 'Matric',
      period: '2017 — 2021',
    },
  ],

  // Grouped, no self-ratings.
  skills: [
    { group: 'Languages', items: ['C#', 'TypeScript / JavaScript', 'Python', 'SQL'] },
    { group: 'Frameworks', items: ['ASP.NET Core', 'Blazor', 'React'] },
    { group: 'Cloud & infrastructure', items: ['Azure (Blob Storage)', 'Docker', 'Git'] },
    { group: 'APIs & testing', items: ['OpenAPI / REST (NSwag typed clients)', 'Playwright'] },
  ],

  projects: [
    {
      id: 'smallpenny',
      name: 'Smallpenny',
      blurb:
        'A working blockchain built from scratch in Python — blocks, hashing, proof-of-work and chain validation, with no framework doing the heavy lifting.',
      stack: ['Python'],
      diagram: 'blockchain',
      link: 'https://github.com/MckyleM',
    },
    {
      id: 'transformer-1bit',
      name: 'Transformer from scratch + 1-bit QAT',
      blurb:
        'A Llama-style decoder in a single PyTorch file — RMSNorm, RoPE, SwiGLU, causal self-attention — extended with 1-bit quantization-aware training: 1.125 bits per weight via group-wise scales and a straight-through estimator, verified end-to-end (loss 4.2 → 2.32, exact-size bit-packed export).',
      stack: ['Python', 'PyTorch'],
      note: 'private — write-up coming',
    },
    {
      id: 'portfolio-site',
      name: 'This website',
      blurb:
        'React + Vite single-page portfolio deployed on Cloudflare Workers. Every fact on the site and in the resume PDF renders from one data file.',
      stack: ['React', 'Cloudflare Workers'],
      link: 'https://github.com/MckyleM/MckyleM.github.io',
    },
  ],

  // Projects that appear on the resume PDF (subset, in order).
  resumeProjects: ['smallpenny', 'transformer-1bit', 'portfolio-site'],
}
