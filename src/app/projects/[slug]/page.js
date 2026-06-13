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
      <section className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="text-sm font-medium text-gray-400 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] text-gray-500">
          {project.category}
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 text-gray-400">{project.duration}</p>

        <p className="copy-text mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          {project.description}
        </p>

        <div className="mt-8 rounded-3xl border border-gray-800 bg-[#111111] p-6">
          <h2 className="text-2xl font-bold">Impact</h2>

          <p className="copy-text mt-4 leading-7 text-gray-400">
            {project.impact}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Tools & Technologies</h2>

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
      </section>
    </main>
  );
}