// Single source of truth for every fact on the site AND in the generated
// resume PDF (resume/generate.mjs). Change facts here, nowhere else.
// NDA rule: no employer, product, client, or internal repo names — ever.

export const profile = {
  name: 'Mckyle Meyer',
  role: 'Full-Stack Software Developer',
  tagline: 'Full-stack developer — I ship production platforms by day and build the AI tooling that speeds them up around everything else.',
  location: 'Pretoria, Gauteng, South Africa',
  email: 'mckylemeyer12@gmail.com',
  github: 'https://github.com/MckyleM',
  githubLabel: 'github.com/MckyleM',
  linkedin: 'https://www.linkedin.com/in/mckyle-meyer-b605a9242/',
  linkedinLabel: 'in/mckyle-meyer',
  site: 'https://me.mckyle.dev/',
  siteLabel: 'me.mckyle.dev',
  open_to_work: true,
  openToWorkLine: 'Open to opportunities and collaboration. The fastest way to reach me is email.',
  resumePdf: 'assets/Mckyle-Meyer-resume.pdf',

  // Hero developer.json card — rendered from data, not hard-coded.
  heroCard: [
    { k: 'name', v: 'Mckyle Meyer', t: 's' },
    { k: 'role', v: 'Full-Stack Developer', t: 's' },
    { k: 'since', v: 2018, t: 'n' },
    { k: 'focus', v: 'AI · web · systems', t: 's' },
    { k: 'open_to_work', v: true, t: 'b' },
  ],

  // Resume summary. Site About section uses `about` below.
  summary:
    'Full-stack developer on a production C#/.NET platform — ASP.NET Core services with Blazor ' +
    'and React front ends — who ships products end-to-end: most recently a Microsoft Outlook ' +
    'add-in built as a React/TypeScript task pane on a .NET backend and deployed ' +
    'multi-container on Azure. Uses AI aggressively as an engineering multiplier: ' +
    'agent-readable knowledge vaults, code knowledge graphs for pre-refactor impact analysis, ' +
    'and locally served LLMs.',

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
        'Develops a financial-services practice-management platform (.NET) spanning a legacy ASP.NET Core MVC application and a modern microservices line.',
      bullets: [
        'Built a Microsoft Outlook add-in end-to-end: a React/TypeScript task pane backed by a .NET BFF that proxies to internal services via OpenAPI-generated typed clients (NSwag) and renders emails to PDF through a headless-Chromium sidecar; shipped to production on Azure as a multi-container deployment.',
        'Designed and implemented OIDC authentication for a Microsoft Outlook add-in (Office.js) using a Backend-for-Frontend with a one-time-code server-side relay — working around Outlook-on-the-Web’s broken dialog-messaging channel — and configured ASP.NET Data Protection key persistence so sessions survive restarts and scale-out.',
        'Set up and scaled the platform’s automated test project (Playwright/TypeScript, CI in Azure Pipelines) so UI changes ship without manual regression passes: wrote the first ~130 of its ~300 tests and eliminated flaky failures from UI virtualization and fixed-timeout waits.',
        'Trained 3 interns (Sep 2025 – Feb 2026), taking them from zero Playwright/TypeScript experience to independently maintaining the ~300-test suite.',
        'Leading the extraction of a settings module out of a large CRM application into a standalone app: dependency injection, state management and namespaces re-architected across 30+ components, services and models while both solutions keep building green.',
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
    { group: 'Frameworks', items: ['ASP.NET Core', 'React', 'Blazor'] },
    { group: 'Cloud & infrastructure', items: ['Cloudflare Workers', 'Azure (multi-container deployments, Blob Storage)', 'Docker', 'Git'] },
    { group: 'APIs & testing', items: ['OpenAPI / REST (NSwag typed clients)', 'Playwright'] },
  ],

  projects: [
    {
      id: 'aloe-ferox',
      name: 'Aloe Ferox Algorithm',
      blurb:
        'A computer-vision classifier that recognises Aloe ferox plants from photographs — PyTorch models trained in Jupyter, a data script that builds its own train/test image sets, and a Dash web app for running predictions.',
      stack: ['Python', 'PyTorch', 'Dash'],
      link: 'https://github.com/MckyleM/AloeFeroxAlgorithm',
    },
    {
      id: 'fraud-detection',
      name: 'Card-fraud detection',
      blurb:
        'A classical-ML pipeline on card-transaction data — logistic regression, decision tree and random forest trained and compared in a step-by-step notebook, with the final model served through a Dash web app deployed to Render.',
      stack: ['Python', 'scikit-learn', 'Dash'],
      link: 'https://github.com/MckyleM/MLG_Project2_Fraud_Detection',
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
  resumeProjects: ['aloe-ferox', 'fraud-detection', 'portfolio-site'],
}
