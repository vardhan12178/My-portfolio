import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import HomeMotion from "./components/HomeMotion";
import VKartGallery from "./components/VKartGallery";
import CopyEmailButton from "./components/CopyEmailButton";

const featuredProjects = [
  {
    title: "Image Magic Pro",
    type: "Browser image tool",
    description: "Batch convert and edit images directly in the browser with Web APIs.",
    image: "/img/image-magic-pro.webp",
    domain: "img.balavardhan.dev",
    live: "https://img.balavardhan.dev/",
    github: "https://github.com/vardhan12178/image-magic-pro",
    tags: ["React", "Browser APIs", "Canvas API", "Web Workers"],
  },
  {
    title: "FitTrack",
    type: "Full-stack application",
    description: "Track meals, workouts, and health metrics in one focused dashboard.",
    image: "/img/fit-tracker-pro.webp",
    domain: "fittracker.balavardhan.dev",
    live: "https://fittracker.balavardhan.dev/",
    github: "https://github.com/vardhan12178/Fitness-Tracker",
    tags: ["React", "Node.js", "Express", "REST APIs"],
  },
];

const tools = [
  { title: "JWT Inspector", type: "Developer tool", description: "Decode, inspect, and validate JWTs in the browser.", live: "https://jwt.balavardhan.dev/", github: "https://github.com/vardhan12178/jwt-inspector" },
  { title: "Regex Lab", type: "Developer tool", description: "Test patterns live with match highlighting and fail hints.", live: "https://regex.balavardhan.dev/", github: "https://github.com/vardhan12178/regex-lab" },
  { title: "Diff Pro", type: "Developer tool", description: "Compare text or files side by side with clear merge controls.", live: "https://diff.balavardhan.dev/", github: "https://github.com/vardhan12178/Diff-Pro" },
  { title: "MyIP Pro", type: "Network tool", description: "See public IP, location, ISP, and device details instantly.", live: "https://ip.balavardhan.dev/", github: "https://github.com/vardhan12178/myip-pro" },
  { title: "Weatherly", type: "Weather app", description: "Search cities and view forecasts and daily weather details.", live: "https://weatherly.balavardhan.dev/", github: "https://github.com/vardhan12178/Node-Weather" },
];

const experience = [
  {
    company: "HR Geckos",
    role: "Full-stack developer",
    period: "Oct 2024 — Present",
    current: true,
    scope: "Employee workflows, approvals, and billing integrations",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "PDF Generation"],
    highlights: [
      "Built an employee handbook application spanning database architecture and an accessible, responsive interface.",
      "Implemented policy review and approval workflows with multi-role permissions, PDF handling, and acknowledgement tracking.",
      "Integrated Stripe subscriptions, automated invoices, webhook reconciliation, and customer billing management.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Full-stack developer",
    period: "Dec 2021 — Jun 2024",
    current: false,
    scope: "Reusable React interfaces, enterprise state management, and performance",
    tags: ["React", "Redux Toolkit", "JavaScript (ES6+)", "REST APIs", "Performance Tuning"],
    highlights: [
      "Built reusable React interfaces and mission-critical business dashboards for enterprise clients.",
      "Architected clean REST API integration layers using Redux and React custom hooks for predictable state flow.",
      "Applied route lazy loading, bundle size reduction, and API caching strategies to boost page load speed.",
    ],
  },
];

const capabilities = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "HTML5 / CSS3"] },
  { label: "Backend & Data", items: ["Node.js", "Express", "MongoDB", "MySQL", "Redis", "REST APIs", "Authentication (JWT)"] },
  { label: "Delivery & Tools", items: ["AWS", "Stripe API", "Git & GitHub", "Docker", "Postman", "CI/CD Workflows", "System Design"] },
];

export default function Home() {
  return (
    <>
      <HomeMotion />
      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy" data-reveal>
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>Available for full-time roles</span>
            </div>
            <h1 className="hero-title">I build web products from interface to backend.</h1>
            <p className="hero-intro">
              Full-stack developer with 4+ years across product and enterprise teams. I build high-performance web applications with React, Next.js, Node.js, and databases.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View selected work <ArrowUpRight size={16} /></a>
              <a className="button button-secondary" href="/Bala_Vardhan_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/" target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a className="button button-ghost" href="https://github.com/vardhan12178" target="_blank" rel="noreferrer">
                <Github size={15} /> GitHub <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="hero-proof" aria-label="Professional highlights">
              <span><strong>HR Geckos</strong><small>Current role &bull; Product team</small></span>
              <span><strong>Previously TCS</strong><small>2.5+ yrs enterprise experience</small></span>
              <span><strong>Full-stack</strong><small>React &bull; Node &bull; TypeScript &bull; Cloud</small></span>
            </div>
          </div>

          <Link className="hero-visual" href="/projects/vkart" aria-label="Read the VKart case study">
            <div className="hero-visual-frame">
              <div className="browser-chrome" aria-hidden="true">
                <span /><span /><span /><small>vkart.balavardhan.dev</small>
              </div>
              <Image src="/img/vkart.webp" alt="VKart product catalogue interface" width={2880} height={1800} priority quality={85} sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
            <div className="hero-visual-caption">
              <span>Featured project</span>
              <strong>VKart / Full-stack Commerce Application</strong>
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </section>

        <section id="projects" className="work-section">
          <div className="section-shell">
            <div className="section-intro-row" data-reveal>
              <div>
                <p className="eyebrow">01 <span>/</span> Selected work</p>
                <h2>Products with a clear point of view.</h2>
              </div>
              <p>From commerce workflows to browser engineering tools, these projects demonstrate end-to-end product ownership and clean system architecture.</p>
            </div>

            <article className="featured-project" data-reveal>
              <div className="featured-copy">
                <div className="project-heading">
                  <p className="project-index">Featured project</p>
                  <span className="project-status">Flagship Full-stack Build</span>
                </div>
                <h3>VKart</h3>
                <p className="project-lead">A full-stack shopping platform with instant search, role-based authentication, admin inventory operations, Stripe payments, and order tracking.</p>
                <div className="project-tags">
                  <span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Stripe</span><span>Tailwind CSS</span>
                </div>
                <dl className="project-signals">
                  <div>
                    <dt>Product flow</dt>
                    <dd>Discovery, cart, secure checkout, and real-time order lifecycle tracking in one unified interface.</dd>
                  </div>
                  <div>
                    <dt>Architecture</dt>
                    <dd>Role-aware JWT middleware, webhook payment reconciliation, and admin inventory controls.</dd>
                  </div>
                </dl>
                <div className="project-links">
                  <Link className="button button-primary" href="/projects/vkart">Read case study <ArrowUpRight size={16} /></Link>
                  <a className="button button-secondary" href="https://vkart.balavardhan.dev/" target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>
                  <a className="text-link" href="https://github.com/vardhan12178/vkart" target="_blank" rel="noreferrer">Source code <Github size={15} /></a>
                </div>
              </div>
              <div className="featured-visual"><VKartGallery /></div>
            </article>

            <div className="supporting-grid" aria-label="Supporting projects">
              {featuredProjects.map((project, index) => (
                <article className="project-card" key={project.title} data-reveal>
                  <a className="project-card-image" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
                    <div className="browser-chrome" aria-hidden="true">
                      <span /><span /><span />
                      <small>{project.domain}</small>
                    </div>
                    <div className="project-card-img-wrap">
                      <Image src={project.image} alt={`${project.title} interface`} width={2880} height={1800} sizes="(max-width: 760px) 100vw, 50vw" />
                    </div>
                  </a>
                  <div className="project-card-body">
                    <div className="project-heading">
                      <p className="project-index">0{index + 2} <span>/</span> {project.type}</p>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-card-footer">
                      <div className="project-tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                      <div className="project-links">
                        <a className="button button-secondary button-sm" href={project.live} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={14} /></a>
                        <a className="text-link" href={project.github} target="_blank" rel="noreferrer">Source <Github size={14} /></a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section section-shell">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">02 <span>/</span> Experience</p>
            <h2>Professional work with end-to-end ownership.</h2>
            <p className="section-note">4+ years building production applications across high-growth product teams and global enterprise environments.</p>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-item" key={job.company} data-reveal>
                <div className="experience-title">
                  <div>
                    <div className="company-header">
                      <h3>{job.company}</h3>
                      {job.current && <span className="current-badge">Current Role</span>}
                    </div>
                    <p className="experience-role">{job.role} <span>/</span> {job.scope}</p>
                  </div>
                  <time>{job.period}</time>
                </div>
                <div className="experience-tags">
                  {job.tags.map((t) => <span key={t} className="experience-tag">{t}</span>)}
                </div>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="tools-section section-shell">
          <div className="section-intro-row" data-reveal>
            <div>
              <p className="eyebrow">03 <span>/</span> More tools</p>
              <h2>Small products, useful by design.</h2>
            </div>
            <p>Focused browser tools and developer utilities built to solve specific workflow friction with clean interfaces.</p>
          </div>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <article className="tool-row" key={tool.title} data-reveal>
                <span className="tool-number">0{index + 1}</span>
                <div>
                  <p className="project-index">{tool.type}</p>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </div>
                <div className="tool-links">
                  <a className="text-link" href={tool.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={14} /></a>
                  <a className="text-link" href={tool.github} target="_blank" rel="noreferrer">Code <Github size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-shell">
          <div data-reveal>
            <p className="eyebrow">04 <span>/</span> About &amp; Capabilities</p>
            <h2>Clear interfaces, reliable delivery, and code teams can maintain.</h2>
          </div>
          <div className="about-content" data-reveal>
            <p>I work across the interface, API, and database, breaking requirements into manageable steps and carrying features through implementation with strong product sense.</p>
            <p>My recent work includes enterprise employee workflows, billing integrations, and independent web products. I am interested in full-time roles in Hyderabad or with remote teams.</p>
            <div className="capabilities">
              {capabilities.map((capability) => (
                <div key={capability.label}>
                  <strong>{capability.label}</strong>
                  <div className="capability-tags">
                    {capability.items.map((item) => (
                      <span key={item} className="capability-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-inner" data-reveal>
            <div>
              <p className="eyebrow">05 <span>/</span> Contact</p>
              <h2>Let&apos;s talk about the work your team is building.</h2>
              <p>Open to full-time engineering opportunities in Hyderabad and remote teams worldwide.</p>
            </div>
            <div className="contact-actions">
              <div className="contact-email-row">
                <a className="contact-email" href="mailto:balavardhanpula@gmail.com">
                  balavardhanpula@gmail.com <Mail size={18} aria-hidden="true" />
                </a>
                <CopyEmailButton />
              </div>
              <div className="contact-links">
                <a href="/Bala_Vardhan_Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15} /></a>
                <a href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15} /></a>
                <a href="https://github.com/vardhan12178" target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
