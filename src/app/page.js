import { projects, experiences, skills, contactLinks } from "@/data/portfolioData";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaDraftingCompass,
  FaMicrochip,
} from "react-icons/fa";
export default function Home() {
  const icons = {
    email: <MdEmail />,
    whatsapp: <FaWhatsapp />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
            {/* Premium Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>
      {/* Navbar */}
      {/* Navbar */}
<header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <a href="#" className="text-base font-semibold tracking-wide md:text-lg">
      Muhammad Akif Janjua
    </a>

    <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
      <a href="#about" className="transition hover:text-white">
        About
      </a>

      <a href="#education" className="transition hover:text-white">
        Education
      </a>

      <a href="#experience" className="transition hover:text-white">
        Experience
      </a>

      <a href="#projects" className="transition hover:text-white">
        Projects
      </a>

      <a href="#skills" className="transition hover:text-white">
        Skills
      </a>

      <a href="#contact" className="transition hover:text-white">
        Contact
      </a>
    </div>
  </nav>
</header>
      {/* Hero Section */}
<section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28">
  <p className="mb-5 text-sm uppercase tracking-[0.35em] text-gray-400">
    Muhammad Akif Janjua
  </p>

  <h1 className="max-w-5xl text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-5xl">
    Mechanical Engineering Graduate focused on manufacturing, robotics, CAD/CAM,
    and AI-driven solutions.
  </h1>

  <p className="mt-7 max-w-[620px] text-base leading-[1.8] text-gray-400 md:text-lg">
    A NUST Mechanical Engineering graduate with experience in CNC optimization,
    CREO CAM validation, robotics, project documentation, and industrial
    engineering workflows through internships at DEL/Descon Engineering Limited
    and NESCOM.
  </p>

  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <a
    href="/Muhammad-Akif-Janjua-CV.pdf"
    download
    className="rounded-full border border-gray-700 bg-black px-8 py-3.5 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:border-white hover:bg-white hover:text-black"
  >
    Download CV
  </a>

  <a
    href="#projects"
    className="rounded-full border border-gray-700 bg-black px-8 py-3.5 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:border-white hover:bg-white hover:text-black"
  >
    View Projects
  </a>
</div>

  <div className="mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
    <div className="rounded-3xl border border-gray-800 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-gray-600 hover:bg-[#151515]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-white/5 text-xl text-white">
        <FaGraduationCap />
      </div>

      <h3 className="text-xl font-bold">NUST</h3>
      <p className="mt-2 text-sm leading-6 text-gray-400">
        BE Mechanical Engineering
      </p>
    </div>

    <div className="rounded-3xl border border-gray-800 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-gray-600 hover:bg-[#151515]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-white/5 text-xl text-white">
        <FaDraftingCompass />
      </div>

      <h3 className="text-xl font-bold">CAD/CAM</h3>
      <p className="mt-2 text-sm leading-6 text-gray-400">
        SolidWorks, CREO, ANSYS, CNC
      </p>
    </div>

    <div className="rounded-3xl border border-gray-800 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-gray-600 hover:bg-[#151515]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-white/5 text-xl text-white">
        <FaMicrochip />
      </div>

      <h3 className="text-xl font-bold">AI + CNC</h3>
      <p className="mt-2 text-sm leading-6 text-gray-400">
        XGBoost, NSGA-II, CREO CAM
      </p>
    </div>
  </div>
</section>
            {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
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
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
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
      <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
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
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
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
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="rounded-3xl border border-gray-800 bg-white/5 p-8 md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
  Interested in hiring me or discussing an engineering opportunity?
</h2>             
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I am open to mechanical engineering roles, trainee engineer
            opportunities, internships, technical projects, and collaborations
            related to design, manufacturing, automation, and engineering
            technology.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {contactLinks.map((link) => (
              <a
  key={link.label}
  href={link.href}
  target={link.label === "Email" ? "_self" : "_blank"}
  rel="noopener noreferrer"
  className="contact-card group rounded-2xl border border-gray-800 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
  style={{
  "--contact-color": link.color,
}}
>
  <div
    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition duration-300 group-hover:scale-110"
    style={{
      color: link.color,
      borderColor: `${link.color}99`,
      backgroundColor: `${link.color}18`,
      boxShadow: `0 0 22px ${link.color}40`,
    }}
  >
    {icons[link.icon]}
  </div>

  <p
    className="text-sm font-medium"
    style={{ color: link.color }}
  >
    {link.label}
  </p>

  <p className="mt-2 text-sm font-semibold text-white sm:text-base">
    {link.value}
  </p>
</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Muhammad Akif Janjua. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}