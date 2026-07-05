const baseUrl = import.meta.env.BASE_URL

const projects = [
  {
    title: 'Retail Returns Analytics Platform',
    category: 'Data Engineering / Analytics Engineering',
    tools: ['Snowflake', 'dbt', 'Databricks', 'PySpark', 'Streamlit', 'SQL', 'Python'],
    image: `${baseUrl}screenshots/retail-returns/returns-dashboard.png`,
    imageClass: 'object-contain object-right bg-slate-950',
    description:
      'Flagship data platform project with parallel warehouse and lakehouse implementations for synthetic retail returns analytics.',
    links: {
      github: 'https://github.com/afk-m/retail-return-analytics',
      caseStudy: '#retail-returns',
      demo: '#',
    },
  },
  {
    title: 'F.R.A.U.D.S. Credit Card Fraud Detection Platform',
    category: 'Machine Learning / Full-Stack AI Application',
    tools: ['Python', 'XGBoost', 'Random Forest', 'Isolation Forest', 'FastAPI', 'AWS EC2/S3', 'SHAP'],
    image: `${baseUrl}screenshots/frauds/frauds-screenshot.png`,
    imageClass: 'object-contain object-right bg-slate-950',
    description:
      'Award-winning fraud detection platform for a senior capstone project using supervised, unsupervised, and rule-based methods to prioritize suspicious transactions.',
    links: {
      github: 'https://github.com/F-R-A-U-D-S',
      caseStudy: '#frauds',
      demo: '#',
    },
  },
  {
    title: 'RBC Wealth Management Data Analyst Co-op',
    category: 'Professional Data & AI Experience',
    tools: ['Python', 'Bash', 'SFTP', 'AWS S3', 'Snowflake', 'Stonebranch', 'Elasticsearch', 'LangChain'],
    image: `${baseUrl}screenshots/rbc/rbc.jpg`,
    description:
      'Worked across data engineering and AI-enabled workflow projects in a professional banking environment, including batch data migration, validation documentation, advisor knowledge retrieval, and stakeholder-facing handoff work.',
    links: {
      caseStudy: '#rbc-coop',
    },
  },
]

const caseStudies = [
  {
    id: 'retail-returns',
    title: 'Retail Returns Analytics Platform',
    category: 'Data Engineering / Analytics Engineering',
    image: `${baseUrl}screenshots/retail-returns/returns-dashboard.png`,
    imageClass: 'object-contain object-right bg-slate-950',
    positioning: 'Flagship data platform project.',
    summary:
      'Built parallel warehouse and lakehouse versions of a retail returns analytics pipeline using Snowflake, dbt, Databricks, PySpark, and Streamlit.',
    sections: [
      {
        title: 'Business Problem',
        body: 'Retail teams need a reliable way to understand return volume, refund impact, product categories, and validation issues before the data reaches analytics users.',
      },
      {
        title: 'Synthetic Data',
        body: 'The project uses synthetic CSV data so the full pipeline can be shared, tested, and iterated on without exposing private business data.',
      },
      {
        title: 'Snowflake/dbt Warehouse Version',
        body: 'Raw CSV data is modeled through raw, staging, intermediate, and mart layers. dbt tests and validation checks help confirm key fields, relationships, and business rules before dashboard use.',
      },
      {
        title: 'Databricks/PySpark Lakehouse Version',
        body: 'A parallel lakehouse flow uses bronze, silver, and gold Delta tables to ingest, clean, validate, and aggregate returns data in Databricks with PySpark.',
      },
      {
        title: 'Dashboard and Screenshots',
        body: 'A Streamlit dashboard surfaces return metrics and trends. Placeholder screenshots are included now and can be replaced with final dashboard captures.',
      },
      {
        title: 'Production Improvements',
        body: 'In production, I would add stronger orchestration, monitoring, incremental loading, access controls, data contracts, and alerting around failed checks.',
      },
    ],
  },
  {
    id: 'frauds',
    title: 'F.R.A.U.D.S. Credit Card Fraud Detection Platform',
    category: 'Machine Learning / Full-Stack AI Application',
    image: `${baseUrl}screenshots/frauds/frauds-screenshot.png`,
    imageClass: 'object-contain object-right bg-slate-950',
    positioning: 'ML, backend/API, cloud, and explainability project.',
    summary:
      'Built an award-winning fraud detection platform that uses supervised, unsupervised, and rule-based methods to prioritize suspicious transactions for analyst review.',
    sections: [
      {
        title: 'Fraud Detection Problem',
        body: 'The system ranks synthetic credit card transactions so analysts can focus on the highest-risk activity first instead of reviewing every event manually through black-box systems.',
      },
      {
        title: 'Modeling Approach',
        body: 'The workflow combines XGBoost, Random Forest, Isolation Forest, and rule-based fraud flags to balance predictive scoring, anomaly detection, and transparent business logic.',
      },
      {
        title: 'Feature Engineering and Evaluation',
        body: 'Preprocessing and feature engineering prepare transaction signals for model evaluation. Outputs are combined into review-priority scores for analyst triage.',
      },
      {
        title: 'Explainability',
        body: 'SHAP explanations help show which features contributed to model decisions, making the review workflow easier to inspect and communicate.',
      },
      {
        title: 'API and Cloud Deployment',
        body: 'FastAPI services support the application flow, with AWS EC2/S3 deployment, encrypted upload handling, and CSV/PDF exports for review artifacts.',
      },
      {
        title: 'Accolades',
        body: (
          <>
            Won top project in the Data Analytics stream, and made it to top 3 capstone
            projects in the Honours Bachelor of Computer Science program at Sheridan
            College. Work featured in a{' '}
            <a
              href="https://www.sheridancollege.ca/newsroom/articles/science-technology/2026-computer-science-degree-capstone-showcase#:~:text=Optimizing%20fraud%20investigation%20processes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-emerald-100 px-1 font-semibold text-emerald-800 underline decoration-emerald-600 decoration-2 underline-offset-4 transition-colors hover:bg-emerald-300 hover:text-emerald-950"
            >
              Sheridan College press release
            </a>
            .
          </>
        ),
      }
    ],
  },
  {
    id: 'rbc-coop',
    title: 'RBC Wealth Management Data Analyst Co-op',
    category: 'Professional Data & AI Experience',
    image: `${baseUrl}screenshots/rbc/rbc.jpg`,
    positioning: 'Confidentiality-safe professional experience case study.',
    summary:
      'Supported data engineering and AI workflows across batch data migration, advisor knowledge retrieval, document preparation, and AI assistant proof-of-concepts.',
    sections: [
      {
        title: 'Overview',
        body: 'Worked across data migration, AI workflow support, validation, documentation, and stakeholder-facing delivery in a professional wealth management environment.',
      },
      {
        title: 'Data Migration Pipeline',
        body: 'Built and handed off a scheduled batch data migration pipeline using Python, Bash, SFTP, AWS S3, Snowflake, and Stonebranch. Added validation checks and documentation to make the process easier to run, verify, and support.',
      },
      {
        title: 'Advisor AI / Retrieval Workflows',
        body: 'Prepared internal advisor knowledge content for retrieval-based AI workflows. This included organizing documents, supporting chunking and embedding work, and helping make process information easier to search and retrieve.',
      },
      {
        title: 'PEGA Chatbot Proof of Concept',
        body: 'Developed and presented a PEGA chatbot proof of concept for advisor form and process support. The goal was to reduce confusion around internal workflows and help advisors find the right guidance faster.',
      },
      {
        title: 'Tools Used',
        body: 'Python, Bash, SFTP, AWS S3, Snowflake, Stonebranch, Elasticsearch, LangChain, document preparation workflows, Jira, Confluence, and Microsoft Excel.',
      },
      {
        title: 'What I Learned',
        body: 'Built stronger habits around validation, documentation, stakeholder communication, confidentiality, and handoff quality. I learned how important it is for data and AI work to be reliable, explainable, and useful to the people who depend on it.',
      },
    ],
  },
]

const experience = [
  {
    role: 'Data Analyst Co-op, Data Engineering & AI',
    company: 'RBC Wealth Management',
    period: '12 months',
    bullets: [
      'Worked across multiple RBC Wealth Management teams on data engineering, advisor AI, validation, documentation, and stakeholder-facing workflow support.',
      'Built and handed off a scheduled batch data migration pipeline using Python, Bash, SFTP, AWS S3, Snowflake, and Stonebranch for downstream ingestion.',
      'Created validation checks and run documentation covering file transfer, parsing, S3 delivery, Snowflake ingestion readiness, and operational handoff steps.',
      'Prepared retrieval-ready knowledge content from approximately 500 advisor forms, process documents, and process-owner input for workflow classification and form-selection use cases.',
      'Supported advisor AI and retrieval workflows through document formatting, chunking, embeddings, Elasticsearch Vector Search, LangChain workflows, and similarity analysis with scikit-learn.',
      'Collaborated with data engineers, developers, product owners, and business stakeholders while documenting requirements, testing notes, and handoff details in Jira and Confluence.',
      'Selected for a small-group RBC Technology & Operations executive student roundtable following strong co-op performance feedback.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Data Engineering',
    skills: ['Snowflake', 'dbt', 'Databricks', 'PySpark', 'SQL', 'AWS S3', 'ETL', 'validation'],
  },
  {
    title: 'AI/ML',
    skills: ['scikit-learn', 'XGBoost', 'Random Forest', 'Isolation Forest', 'SHAP', 'feature engineering', 'model evaluation'],
  },
  {
    title: 'GenAI/RAG',
    skills: ['LangChain', 'embeddings', 'Elasticsearch Vector Search', 'Rasa', 'document chunking', 'knowledge retrieval'],
  },
  {
    title: 'Software/Cloud',
    skills: ['FastAPI', 'AWS EC2/S3', 'Docker', 'GitHub Actions', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'Analytics',
    skills: ['Streamlit', 'Power BI', 'Tableau', 'pandas', 'NumPy'],
  },
]

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-20 border-b border-black bg-black/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-sm font-bold tracking-[0.24em] text-white transition hover:text-emerald-300">
            <span className="brand-prompt" aria-hidden="true">&gt;</span>
            MNI
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label.toLowerCase()}
              </a>
            ))}
          </div>
          <a href={`${baseUrl}resume.pdf`} className="nav-button">
            Resume
          </a>
        </nav>
      </header>

      <section id="home" className="hero-grid border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="section-reveal">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Matthew Nocera-Iozzo
            </p>
            <h1 className="max-w-4xl break-words text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Data & AI Developer
              <span className="terminal-cursor" aria-hidden="true" />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I build practical data and AI systems: pipelines, machine learning workflows, retrieval-based AI tools,
              dashboards, APIs, and cloud-backed analytics applications.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap">
              <a href="#projects" className="primary-button">
                Projects
              </a>
              <a href={`${baseUrl}resume.pdf`} className="secondary-button">
                Resume
              </a>
              <a href="https://github.com/afk-m" className="secondary-button">
                GitHub
              </a>
              <a href="https://linkedin.com/in/mniozzo" className="secondary-button">
                LinkedIn
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              <span className="status-pill">pipelines</span>
              <span className="status-pill">ml workflows</span>
              <span className="status-pill">data sourcing</span>
              <span className="status-pill">dashboards</span>
            </div>
          </div>

          <div className="terminal-window section-reveal relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-stone-50 px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs font-semibold text-slate-500">mniozzo.ts</p>
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:p-6">
              <div className="terminal-code overflow-hidden rounded-md bg-slate-950 p-5 text-xs leading-7 text-slate-100 sm:p-6 sm:text-sm">
                <p>
                  <span className="text-emerald-300">pipeline</span>.ingest("SFTP → S3 → Snowflake")
                </p>
                <p>
                  <span className="text-emerald-300">dbt</span>.model("raw → staging → marts")
                </p>
                <p>
                  <span className="text-emerald-300">spark</span>.build("bronze → silver → gold")
                </p>
                <p>
                  <span className="text-emerald-300">ml</span>.score("fraud review priority")
                </p>
                <p>
                  <span className="text-emerald-300">rag</span>.retrieve("advisor knowledge")
                </p>
                <p>
                  <span className="text-emerald-300">api</span>.serve("dashboards + reports")
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['PIPELINES', 'ML', 'RAG', 'APIs'].map((item) => (
                  <div key={item} className="hero-metric relative min-h-28 rounded-md border border-slate-200 bg-stone-50 p-4 text-center">
                    <p className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-xs font-semibold uppercase tracking-normal text-slate-500">
                      {item}
                    </p>
                    <p className="absolute left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-emerald-700">
                      +
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="section-reveal grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Hands-on data and AI development with practical delivery in mind.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I build data and AI systems that turn messy inputs into something people can actually use.
            </p>
            <p>
              A lot of my work focuses on reducing friction- helping teams find the right information faster, making review workflows easier to prioritize, turning raw data into trusted reporting, and making things clearer through documentation and validation. My projects have included batch data pipelines, Snowflake ingestion, Databricks lakehouse layers, fraud detection workflows using machine learning, retrieval-ready knowledge datasets, dashboards, APIs, and cloud-backed applications.
            </p>
            <p>
              I care about practical systems. Think tools that are understandable, testable, documented, and useful beyond a simple demo. The goal is not just to make something technically impressive, but to make the work easier for the people who depend on it, whether it be financial advisors or analysts. Because let's face it- data and AI work matters most when it makes real tasks easier for the people using it.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="section-reveal mb-10 max-w-3xl">
            <p className="section-kicker">Featured Projects</p>
            <h2 className="section-title">Data platforms, ML systems, retrieval workflows, APIs, and analytics apps.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="project-card section-reveal group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-emerald-500/60 hover:shadow-md">
                <div className="overflow-hidden border-b border-slate-200 bg-slate-950">
                  <img
                    src={project.image}
                    alt=""
                    className={`aspect-[16/10] w-full opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100 ${project.imageClass ?? 'bg-stone-50 object-cover'}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{project.category}</p>
                  <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-md border border-slate-200 bg-stone-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                  {project.links.github || project.links.demo ? (
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {project.links.github ? (
                        <a className="project-link" href={project.links.github}>
                          GitHub
                        </a>
                      ) : (
                        <span className="project-link-muted">Private</span>
                      )}
                      <a className="project-link" href={project.links.caseStudy}>
                        Case Study
                      </a>
                      {project.links.demo ? (
                        <a className="project-link" href={project.links.demo}>
                          Demo Video
                        </a>
                      ) : (
                        <span className="project-link-muted">Confidential</span>
                      )}
                    </div>
                  ) : (
                    <a className="project-link mt-6 w-full" href={project.links.caseStudy}>
                      Case Study
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="section-reveal mb-10 max-w-3xl">
          <p className="section-kicker">Project Details</p>
          <h2 className="section-title">Concise case studies for the work behind the cards.</h2>
        </div>

        <div className="grid gap-8">
          {caseStudies.map((study) => (
            <article key={study.id} id={study.id} className="project-card section-reveal scroll-mt-24 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
                <img
                  src={study.image}
                  alt=""
                  className={`h-full min-h-64 w-full border-b border-slate-200 opacity-85 lg:border-b-0 lg:border-r ${study.imageClass ?? 'object-cover'}`}
                />
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{study.category}</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">{study.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-950">{study.positioning}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p>
                </div>
              </div>
              <div className="grid gap-3 border-t border-slate-200 bg-stone-50 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
                {study.sections.map((section) => (
                  <section key={section.title} className="rounded-md border border-slate-200 bg-white p-4">
                    <h4 className="text-sm font-bold text-slate-950">{section.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-slate-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="section-reveal mb-10 max-w-3xl">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Professional data and AI experience in a stakeholder-facing environment.</h2>
          </div>

          <div className="grid gap-6">
            {experience.map((item) => (
              <article key={item.company} className="project-card section-reveal rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">{item.company}</p>
                  </div>
                  <p className="text-sm font-bold text-emerald-700">{item.period}</p>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-600 sm:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-md border border-slate-200 bg-stone-50 p-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="section-reveal mb-10 max-w-3xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Skill areas for practical data and AI applications.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <section key={group.title} className="project-card section-reveal rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-emerald-500/60">
              <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-slate-200 bg-stone-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="section-reveal rounded-lg border border-slate-200 bg-white p-8 text-slate-800 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Resume</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">View my resume.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                A more concise summary of my education, project work, technical skills, and RBC Wealth Management experience.
              </p>
            </div>
            <a href={`${baseUrl}resume.pdf`} className="primary-button">
              Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="section-reveal grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Open to data, AI, analytics engineering, and backend-focused roles.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <a className="contact-link" href="mailto:mnoceraiozzo@gmail.com">
                Email
              </a>
              <a className="contact-link" href="https://linkedin.com/in/mniozzo">
                LinkedIn
              </a>
              <a className="contact-link" href="https://github.com/afk-m">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        Matthew Nocera-Iozzo / Data & AI Developer
      </footer>
    </main>
  )
}

export default App
