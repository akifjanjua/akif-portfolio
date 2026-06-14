"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  projects,
  experiences,
  skills,
  contactLinks,
  education,
  certificates,
} from "@/data/portfolioData";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaDraftingCompass,
  FaMicrochip,
  FaChevronDown,
  FaCertificate,
} from "react-icons/fa";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
export default function Home() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrollProgress(Math.min(window.scrollY / 160, 1));
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleScroll();
  handleResize();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
  };
}, []);

const desktopHeaderHeight = 68 + 82 * (1 - scrollProgress);
const mobileHeaderHeight = 92 + 28 * (1 - scrollProgress);
const headerHeight = isMobile ? mobileHeaderHeight : desktopHeaderHeight;
const desktopNameSize = 18 + 8 * (1 - scrollProgress);
const mobileNameSize = 18 + 4 * (1 - scrollProgress);
const nameSize = isMobile ? mobileNameSize : desktopNameSize;
const navLift = isMobile ? 4 * (1 - scrollProgress) : 10 * (1 - scrollProgress);
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
<header
  className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-100"
  style={{ height: `${headerHeight}px` }}
>
  <div
    className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-3 px-5 md:flex-row md:items-end md:justify-between md:px-8 md:pb-4"
    style={{
      transform: isMobile ? "none" : `translateY(-${navLift}px)`,
    }}
  >
    <a
      href="#home"
      className="whitespace-nowrap font-bold tracking-tight text-white"
      style={{ fontSize: `${nameSize}px` }}
    >
      Muhammad Akif Janjua
    </a>

    <nav className="flex w-full gap-4 overflow-x-auto whitespace-nowrap pb-1 text-xs text-gray-300 md:w-auto md:gap-5 md:overflow-visible md:pb-0 md:text-sm">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="shrink-0 transition hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </nav>
  </div>
</header>
      {/* Hero Section */}
<section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-[170px] md:grid-cols-[1.15fr_0.85fr] md:pt-28">
  <div>
    <h1 className="max-w-4xl text-[28px] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
      <span className="block md:hidden">
        Mechanical Engineering Graduate focused on CAD/CAM, Robotics, and AI.
      </span>

      <span className="hidden md:block">
  Mechanical Engineering Graduate focused on CAD/CAM, Robotics, and AI.

      </span>
    </h1>

    <p className="copy-text mt-7 max-w-[620px] text-base leading-[1.8] text-gray-400 md:text-lg">
      A NUST Mechanical Engineering graduate with experience in CNC optimization,
      CREO CAM validation, robotics, project documentation, and industrial
      engineering workflows through internships at DEL (DESCON Engineering Limited)
      and NESCOM.
    </p>

    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <a
        href="/Muhammad-Akif-Janjua-CV.pdf"
        download
        className="rounded-full border border-gray-700 bg-black px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:scale-[1.03] hover:border-white hover:bg-white hover:text-black"
      >
        Download CV
      </a>

      <a
        href="#projects"
        className="rounded-full border border-gray-700 bg-black px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:scale-[1.03] hover:border-white hover:bg-white hover:text-black"
      >
        View Projects
      </a>
    </div>
  </div>

  <div className="mx-auto w-full max-w-sm md:max-w-md">
    <div className="overflow-hidden rounded-[2rem] border border-gray-800 bg-white/[0.04] p-3 shadow-2xl shadow-black/40">
      <Image
        src="/profile/akif-hero-photo.JPG"
        alt="Muhammad Akif Janjua"
        width={700}
        height={900}
        className="h-[430px] w-full rounded-[1.5rem] object-cover object-[50%_22%]"
      />
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
      {/* Education Section */}
<section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
  <div className="mb-12">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
      Education
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      Academic background.
    </h2>

    <p className="copy-text mt-4 max-w-2xl text-lg leading-8 text-gray-400">
      My academic foundation in mechanical engineering, design, manufacturing,
      and engineering sciences.
    </p>
  </div>

  <div className="space-y-6">
    {education.map((item) => (
      <div
        key={item.degree}
        className="rounded-3xl border border-gray-800 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-[#151515]"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              {item.duration}
            </p>

            <h3 className="text-2xl font-bold text-white">
              {item.degree}
            </h3>

            <p className="mt-2 text-gray-400">
              {item.institution}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {item.location}
            </p>
          </div>

          <span className="w-fit rounded-full border border-gray-700 px-4 py-2 text-sm font-semibold text-white">
            {item.result}
          </span>
        </div>

        <p className="copy-text mt-6 max-w-4xl leading-7 text-gray-400">
          {item.description}
        </p>
      </div>
    ))}
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
    <Link
      key={project.title}
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded-3xl border border-gray-800 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-white/10"
    >
      {project.thumbnail ? (
        <div className="overflow-hidden border-b border-gray-800 bg-black/40">
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            width={900}
            height={500}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center border-b border-gray-800 bg-[#111111] text-sm text-gray-500">
          Project thumbnail coming soon
        </div>
      )}

      <div className="p-6">
        <div className="mb-4 flex flex-col gap-1">
          <p className="text-sm text-gray-400">{project.category}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            {project.duration}
          </p>
        </div>

        <h3 className="text-2xl font-bold">{project.title}</h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-white transition group-hover:text-gray-300">
          View Project →
        </p>
      </div>
    </Link>
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
      Professional experience.
    </h2>

    <p className="copy-text mt-4 max-w-2xl text-lg leading-8 text-gray-400">
      Internship experience involving industrial project workflows, planning,
      engineering documentation, CAD/CAM validation, and AI-driven manufacturing
      research.
    </p>
  </div>

  <div className="space-y-6">
    {experiences.map((experience) => (
      <details
        key={experience.company}
        className="group rounded-3xl border border-gray-800 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-[#151515]"
      >
        <summary className="flex cursor-pointer list-none flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              {experience.duration}
            </p>

            <h3 className="text-2xl font-bold text-white">
              {experience.company}
            </h3>

            <p className="mt-2 text-gray-400">
              {experience.role} · {experience.type}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {experience.location}
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-gray-300">
            <span>View Details</span>
            <FaChevronDown className="transition duration-300 group-open:rotate-180" />
          </div>
        </summary>

        <p className="copy-text mt-6 max-w-4xl leading-7 text-gray-400">
          {experience.summary}
        </p>

        <ul className="mt-6 space-y-3 text-gray-400">
          {experience.details.map((point) => (
            <li key={point} className="flex gap-3 leading-7">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-white"></span>
              <span className="copy-text">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </details>
    ))}
  </div>
</section>
{/* Certificates Section */}
<section id="certificates" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
  <div className="mb-12">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
      Certifications
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      Certificates and documents.
    </h2>

    <p className="copy-text mt-4 max-w-2xl text-lg leading-8 text-gray-400">
      Supporting documents and internship certificates related to my professional
      training and engineering project work.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    {certificates.map((certificate) => (
      <div
        key={certificate.title}
        className="rounded-3xl border border-gray-800 bg-[#111111] p-5 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-[#151515]"
      >
        <a
          href={certificate.image}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-gray-800 bg-black/40"
        >
          <Image
            src={certificate.image}
            alt={certificate.title}
            width={900}
            height={650}
            className="h-56 w-full object-cover object-top transition duration-300 hover:scale-[1.03]"
          />
        </a>

        <div className="pt-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
            {certificate.date}
          </p>

          <h3 className="text-2xl font-bold text-white">
            {certificate.title}
          </h3>

          <p className="mt-2 text-gray-400">
            {certificate.issuer}
          </p>

          <p className="copy-text mt-4 leading-7 text-gray-400">
            {certificate.description}
          </p>

          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-gray-700 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:border-white hover:bg-white hover:text-black"
          >
            Open Certificate
          </a>
        </div>
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