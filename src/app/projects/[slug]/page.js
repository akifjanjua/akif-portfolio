import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolioData";
import ProjectGallery from "@/components/ProjectGallery";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item?.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="site-bg min-h-screen text-white">
        <ScrollToTop />
      <section className="mx-auto max-w-6xl px-6 py-28">
        <Link
          href="/#projects"
          className="inline-flex items-center rounded-full border border-sky-500/30 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-300 hover:text-slate-950"
        >
          ← Back to Projects
        </Link>

        <div className="mt-12">
          <p className="section-kicker mb-4 text-sm uppercase tracking-[0.35em]">
            {project.category}
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-gray-500">
            {project.duration}
          </p>

          <p className="copy-text mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>
        </div>

        {project.thumbnail && (
          <div className="theme-card mt-12 overflow-hidden rounded-3xl p-3">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={1400}
              height={800}
              className="max-h-[520px] w-full rounded-2xl object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-16 flex flex-col gap-10">
          <div className="theme-card rounded-3xl p-7 md:p-8">
            <h2 className="text-2xl font-bold text-white">Project Overview</h2>

            <p className="copy-text mt-5 leading-8 text-gray-400">
              {project.overview || project.description}
            </p>
          </div>

          {project.impact && (
            <div className="theme-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white">Impact</h2>

              <p className="copy-text mt-5 leading-8 text-gray-400">
                {project.impact}
              </p>
            </div>
          )}

          {project.problem && (
            <div className="theme-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white">
                Problem Statement
              </h2>

              <p className="copy-text mt-5 leading-8 text-gray-400">
                {project.problem}
              </p>
            </div>
          )}

          {project.objective && (
            <div className="theme-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white">Objective</h2>

              <p className="copy-text mt-5 leading-8 text-gray-400">
                {project.objective}
              </p>
            </div>
          )}

          {project.methodology && project.methodology.length > 0 && (
            <div className="theme-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white">Methodology</h2>

              <ul className="mt-6 space-y-4 text-gray-400">
                {project.methodology.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.results && project.results.length > 0 && (
            <div className="theme-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white">
                Results & Outcomes
              </h2>

              <ul className="mt-6 space-y-4 text-gray-400">
                {project.results.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tools && project.tools.length > 0 && (
            <div className="theme-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white">
                Skills & Tools Used
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="theme-pill rounded-full px-4 py-2 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <ProjectGallery gallery={project.gallery} />
      </section>
    </main>
  );
}