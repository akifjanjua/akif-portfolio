import { projects, experiences, skills, contactLinks } from "@/data/portfolioData";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-lg font-semibold tracking-wide">
          Akif Janjua
        </h1>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          Mechanical Engineer
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Building engineering solutions through design, manufacturing, and technology.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I am a Mechanical Engineering graduate from NUST with interests in
          CAD design, manufacturing, robotics, automation, and AI-driven
          engineering applications.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-700 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-white"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-gray-800 pt-8 sm:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">NUST</h3>
            <p className="mt-2 text-sm text-gray-400">
              Mechanical Engineering
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">CAD</h3>
            <p className="mt-2 text-sm text-gray-400">
              SolidWorks & Design
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">AI + CNC</h3>
            <p className="mt-2 text-sm text-gray-400">
              Final Year Project
            </p>
          </div>
        </div>
      </section>
            {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Mechanical engineer with a strong interest in modern engineering tools.
            </h2>
          </div>

          <div className="space-y-6 text-gray-400">
            <p className="text-lg leading-8">
              I am a Mechanical Engineering graduate from the National University
              of Sciences and Technology (NUST), with a focus on design,
              manufacturing, automation, robotics, and AI-based engineering
              applications.
            </p>

            <p className="text-lg leading-8">
              My work includes projects related to CNC optimization, CAD design,
              embedded systems, and mechanical problem-solving. I enjoy building
              practical solutions that combine engineering fundamentals with
              modern technology.
            </p>

            <p className="text-lg leading-8">
              I am currently developing my skills in web development alongside
              engineering, using this portfolio as a real project to learn,
              build, and showcase my work professionally.
            </p>
          </div>
        </div>
      </section>
            {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Selected engineering projects.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            A collection of projects covering manufacturing, robotics, design,
            automation, and applied engineering problem-solving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-gray-800 bg-white/5 p-6 transition hover:border-gray-500 hover:bg-white/10"
            >
              <p className="mb-4 text-sm text-gray-400">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
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
          ))}
        </div>
      </section>
            {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Academic and professional journey.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            A summary of my engineering education, internship exposure, and
            practical learning experiences.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="rounded-3xl border border-gray-800 bg-white/5 p-6 transition hover:border-gray-500 hover:bg-white/10"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {experience.company}
                  </p>
                </div>

                <p className="text-sm text-gray-400">
                  {experience.duration}
                </p>
              </div>

              <p className="mt-6 leading-7 text-gray-400">
                {experience.description}
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
            {/* Skills Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technical skills and tools.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            A combination of mechanical engineering fundamentals, design tools,
            manufacturing knowledge, programming, and automation skills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-3xl border border-gray-800 bg-white/5 p-6 transition hover:border-gray-500 hover:bg-white/10"
            >
              <h3 className="text-2xl font-bold">
                {skillGroup.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
            {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-gray-800 bg-white/5 p-8 md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Interested in working together or discussing an opportunity?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I am open to mechanical engineering roles, trainee engineer
            opportunities, internships, technical projects, and collaborations
            related to design, manufacturing, automation, and engineering
            technology.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? "_self" : "_blank"}
                className="rounded-2xl border border-gray-800 p-5 transition hover:border-gray-500 hover:bg-white/10"
              >
                <p className="text-sm text-gray-400">{link.label}</p>
                <p className="mt-2 break-words font-semibold text-white">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Akif Janjua. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}