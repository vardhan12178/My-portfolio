import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import HomeMotion from "./components/HomeMotion";
import VKartGallery from "./components/VKartGallery";

const supportingProjects = [
  {
    title: "Image Magic Pro",
    type: "Image tool",
    description: "Convert and edit several images at once in the browser.",
    image: "/img/image-magic-pro.webp",
    live: "https://img.balavardhan.dev/",
    github: "https://github.com/vardhan12178/image-magic-pro",
  },
  {
    title: "FitTrack",
    type: "Full-stack app",
    description: "Track meals, workouts, and progress in one dashboard.",
    image: "/img/fit-tracker-pro.webp",
    live: "https://fittracker.balavardhan.dev/",
    github: "https://github.com/vardhan12178/Fitness-Tracker",
  },
  {
    title: "Weatherly",
    type: "Weather app",
    description: "Search cities and view forecasts and daily weather details.",
    image: "/img/weatherly.webp",
    live: "https://weatherly.balavardhan.dev/",
    github: "https://github.com/vardhan12178/Node-Weather",
  },
];

const experience = [
  {
    company: "HR Geckos",
    role: "Full-stack developer",
    period: "Oct 2024 — Present",
    highlights: [
      "Built an employee handbook used by multiple organizations, from the database to the mobile-friendly interface.",
      "Built policy review and approval steps with user roles, PDF files, and employee confirmation tracking.",
      "Added Stripe subscriptions, invoices, refunds, and payment updates.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Full-stack developer",
    period: "Dec 2021 — Jun 2024",
    highlights: [
      "Built reusable React screens and business dashboards.",
      "Connected REST APIs with Redux and React hooks to keep app data reliable.",
      "Made pages faster with lazy loading, smaller code bundles, and data caching.",
    ],
  },
];

const projectSignals = [
  ["Search", "Smart search that understands what users mean"],
  ["Login", "Google login, user roles, and two-step verification"],
  ["Store tools", "Products, stock, orders, payments, and refunds"],
];

export default function Home() {
  return (
    <>
      <HomeMotion />
      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <p className="hero-kicker hero-fade">Full-stack developer · Hyderabad</p>

            <h1 className="hero-title" aria-label="Bala Vardhan">
              <span className="hero-mask">
                <span className="hero-line">Bala</span>
              </span>
              <span className="hero-mask">
                <span className="hero-line">Vardhan</span>
              </span>
            </h1>

            <p className="hero-intro hero-fade">
              I build web applications from start to finish — React and Next.js for
              the interface, Node.js and databases for the backend.
            </p>

            <div className="hero-actions hero-fade">
              <a className="button button-primary" href="#projects">
                View work
              </a>
              <a
                className="button button-secondary"
                href="/Bala_Vardhan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>

            <p className="hero-meta hero-fade">
              <span>HR Geckos</span>
              <span aria-hidden="true">·</span>
              <span>Previously TCS</span>
              <span aria-hidden="true">·</span>
              <span>4+ years experience</span>
            </p>
          </div>

          <a
            className="hero-visual"
            href="https://vkart.balavardhan.dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open VKart live project"
          >
            <div className="hero-visual-frame">
              <div className="browser-chrome" aria-hidden="true">
                <span />
                <span />
                <span />
                <small>vkart.balavardhan.dev</small>
              </div>
              <Image
                src="/img/vkart.webp"
                alt="VKart product catalogue"
                width={2880}
                height={1800}
                priority
                quality={85}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
            <span className="hero-visual-caption">Main project — VKart</span>
          </a>
        </section>

        <section id="projects" className="work-section">
          <div className="section-shell">
            <div className="section-intro-row" data-reveal>
              <p className="eyebrow">01 — Selected work</p>
              <h2>Web products built from start to finish.</h2>
            </div>

            <article className="featured-project" data-reveal>
              <div className="featured-copy">
                <p className="project-index">Main project</p>
                <h3>VKart</h3>
                <p className="project-lead">
                  A full-stack shopping app with smart search, secure login, admin
                  tools, payments, and order tracking.
                </p>

                <dl className="project-signals">
                  {projectSignals.map(([term, detail]) => (
                    <div key={term}>
                      <dt>{term}</dt>
                      <dd>{detail}</dd>
                    </div>
                  ))}
                </dl>

                <div className="project-links">
                  <a href="https://vkart.balavardhan.dev/" target="_blank" rel="noreferrer">
                    Live app <ArrowUpRight size={16} />
                  </a>
                  <a href="https://github.com/vardhan12178/vkart" target="_blank" rel="noreferrer">
                    Frontend code <Github size={15} />
                  </a>
                  <a href="https://github.com/vardhan12178/backend" target="_blank" rel="noreferrer">
                    Backend code <Github size={15} />
                  </a>
                </div>
              </div>

              <div className="featured-visual">
                <VKartGallery />
              </div>
            </article>

            <div className="work-list" aria-label="More projects">
              {supportingProjects.map((project, index) => (
                <article className="work-row" key={project.title}>
                  <span className="work-row-index">0{index + 2}</span>
                  <a
                    className="work-row-thumb"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt=""
                      width={2880}
                      height={1800}
                      sizes="160px"
                    />
                  </a>
                  <div className="work-row-main">
                    <p className="work-row-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="work-row-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <ArrowUpRight size={15} />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Code <Github size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section section-shell">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">02 — Experience</p>
            <h2>Experience across product and enterprise teams.</h2>
          </div>

          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-item" key={job.company} data-reveal>
                <div className="experience-title">
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                  </div>
                  <time>{job.period}</time>
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

        <section id="skills" className="skills-strip section-shell" data-reveal>
          <p className="eyebrow">03 — Skills</p>
          <p className="skills-line">
            React · Next.js · TypeScript · Node.js · Express · MongoDB · MySQL · Redis · AWS · Stripe
          </p>
        </section>

        <section id="about" className="about-section section-shell">
          <div data-reveal>
            <p className="eyebrow">04 — About</p>
            <h2>Clear interfaces. Reliable delivery. Code that teams can maintain.</h2>
          </div>
          <div className="about-columns" data-reveal>
            <p>
              I take a requirement, break it into clear steps, and build from the
              interface through the API and database.
            </p>
            <p>
              I value clear communication and software that works well in production.
              I&apos;m open to full-time roles in Hyderabad or remote.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-inner" data-reveal>
            <div>
              <p className="eyebrow">05 — Contact</p>
              <h2>Have a role in mind? Let&apos;s talk.</h2>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:balavardhanpula@gmail.com">
                Email me
                <Mail size={18} aria-hidden="true" />
              </a>
              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/bala-vardhan-pula-753b011b9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Linkedin size={15} />
                </a>
                <a
                  href="https://github.com/vardhan12178"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Github size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
