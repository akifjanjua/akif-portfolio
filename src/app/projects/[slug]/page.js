import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolioData";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="text-sm font-medium text-gray-400 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        <div className="mt-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            {project.category}
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 text-gray-400">{project.duration}</p>
        </div>

        {project.thumbnail && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-800 bg-[#111111]">
            <Image
              src={project.thumbnail}
              alt={`${project.title} cover`}
              width={1400}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-800 bg-[#111111] p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p className="copy-text mt-4 leading-8 text-gray-400">
              {project.overview || project.description}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111111] p-6">
            <h2 className="text-2xl font-bold">Impact</h2>
            <p className="copy-text mt-4 leading-7 text-gray-400">
              {project.impact}
            </p>
          </div>
        </div>

        {project.problem && (
          <div className="mt-6 rounded-3xl border border-gray-800 bg-[#111111] p-6">
            <h2 className="text-2xl font-bold">Problem Statement</h2>
            <p className="copy-text mt-4 leading-8 text-gray-400">
              {project.problem}
            </p>
          </div>
        )}

        {project.objective && (
          <div className="mt-6 rounded-3xl border border-gray-800 bg-[#111111] p-6">
            <h2 className="text-2xl font-bold">Objective</h2>
            <p className="copy-text mt-4 leading-8 text-gray-400">
              {project.objective}
            </p>
          </div>
        )}

        {project.methodology && (
          <div className="mt-6 rounded-3xl border border-gray-800 bg-[#111111] p-6">
            <h2 className="text-2xl font-bold">Methodology</h2>

            <ul className="mt-5 space-y-3 text-gray-400">
              {project.methodology.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-white"></span>
                  <span className="copy-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.results && (
          <div className="mt-6 rounded-3xl border border-gray-800 bg-[#111111] p-6">
            <h2 className="text-2xl font-bold">Results & Outcomes</h2>

            <ul className="mt-5 space-y-3 text-gray-400">
              {project.results.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-white"></span>
                  <span className="copy-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

                <div className="mt-8">
          <h2 className="text-2xl font-bold">Skills & Tools Used</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <ProjectGallery gallery={project.gallery} />
      </section>
    </main>
  );
}