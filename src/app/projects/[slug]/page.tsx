import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getTechColor } from "../../../../lib/projects";

// --- Optional: pre-generate static params (faster prod builds) ---
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found · Bala Vardhan", description: "The project you’re looking for doesn’t exist." };
  }
  return {
    title: `${project.title} · Bala Vardhan`,
    description: project.description ?? project.fullDescription ?? "",
    openGraph: {
      title: project.title,
      description: project.description ?? "",
      type: "article",
      images: [{ url: project.imgUrl }],
    },
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  // Derive some niceties
  const year = project.year ?? new Date().getFullYear();
  const role = project.role ?? "Full-Stack Developer";
  const scope = project.scope ?? ["UI", "API", "Deploy"]; // show what you touched
  const stack = project.technologies;

  // Related: overlap by at least 1 tech
  const related = projects
    .filter((p) => p.slug !== project.slug && p.technologies.some((t) => stack.includes(t)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#projects" className="hover:text-gray-200">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{project.title}</span>
        </nav>

        {/* Title + meta */}
        <header className="mb-8">
          <h1 className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-gray-300">{project.description || project.fullDescription}</p>
        </header>

        {/* Hero */}
        <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 shadow">
          <div className="relative h-64 w-full md:h-[28rem]">
            <Image
              src={project.imgUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
          {/* subtle gradient at bottom for readability on hover captions if needed */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"
          />
        </div>

        {/* Meta strip */}
        <section className="mb-10 grid gap-4 md:grid-cols-[1.2fr,0.8fr]">
          {/* Left: details */}
          <article className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
            <h2 className="mb-3 text-xl font-semibold text-purple-300">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Scope pills */}
            {scope?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {scope.map((s: string) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </article>

          {/* Right: quick facts + actions */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">Quick Facts</h3>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-gray-400">Year</dt>
                  <dd className="font-medium text-white">{year}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Role</dt>
                  <dd className="font-medium text-white">{role}</dd>
                </div>
                {project.results && (
                  <div className="col-span-2">
                    <dt className="text-gray-400">Impact</dt>
                    <dd className="text-gray-200">{project.results}</dd>
                  </div>
                )}
              </dl>

              {/* Tech chips */}
              <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-gray-400">Stack</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-2.5 py-1 text-[11px] capitalize text-white ${getTechColor(t)}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
                  >
                    🌐 View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-purple-500/60 bg-white/5 px-4 py-2 text-sm font-medium text-purple-200 transition hover:border-purple-400 hover:bg-purple-600/10"
                  >
                    💻 View Code
                  </a>
                )}
              </div>
            </div>
          </aside>
        </section>

        {/* Body sections (optional) */}
        {project.features?.length ? (
          <section className="mb-12 rounded-xl border border-white/10 bg-gray-900/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-purple-300">Key Features</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              {project.features.map((f: string) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.challenges?.length ? (
          <section className="mb-12 rounded-xl border border-white/10 bg-gray-900/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-purple-300">Challenges & Solutions</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              {project.challenges.map((c: string) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Related projects */}
        {related.length > 0 && (
          <section className="mt-12">
            <h3 className="mb-4 text-xl font-semibold text-purple-300">Related Projects</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/projects/${rp.slug}`} className="group block">
                  <article className="overflow-hidden rounded-xl border border-white/10 bg-gray-900/60 shadow transition hover:border-purple-400/60 hover:bg-gray-900/80">
                    <div className="relative h-36 w-full">
                      <Image
                        src={rp.imgUrl}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="line-clamp-1 text-sm font-semibold text-white">{rp.title}</h4>
                      <p className="mt-1 line-clamp-2 text-xs text-gray-400">{rp.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {rp.technologies.slice(0, 3).map((t) => (
                          <span
                            key={`${rp.slug}-${t}`}
                            className={`rounded-full px-2 py-0.5 text-[10px] capitalize text-white ${getTechColor(t)}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/#projects"
            className="text-sm text-purple-300 underline-offset-2 hover:text-purple-200 hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
