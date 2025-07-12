import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../../../lib/projects";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project ? `${project.title} | Portfolio` : 'Project Not Found',
    description: project?.description || '',
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-8">
          {project.title}
        </h1>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
          <div className="relative w-full h-72 md:h-[28rem] mb-8 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={project.imgUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.fullDescription}</p>

          <h3 className="text-2xl font-semibold mb-4">Technologies Used:</h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full transition duration-300 hover:bg-purple-800 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-md text-white font-medium shadow-md transition duration-300 hover:scale-105"
            >
              🌐 View Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-500 text-purple-300 hover:bg-purple-700 hover:text-white rounded-md font-medium shadow-md transition duration-300 hover:scale-105"
            >
              💻 View Code
            </a>
          </div>
        </div>

        <Link href="/#projects" className="text-purple-400 underline text-sm hover:text-purple-300 transition duration-300 block mt-6">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}