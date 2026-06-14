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
  FaMapMarkerAlt,
} from "react-icons/fa";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [navbarFade, setNavbarFade] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const sectionIds = [
      "home",
      ...navLinks.map((link) => link.href.replace("#", "")),
    ];

    let ticking = false;

    const updateNavbar = () => {
      const y = window.scrollY;

      setScrollProgress(1 - Math.exp(-y / 520));
      setNavbarFade(1 - Math.exp(-y / 720));
    };

    const updateActiveSection = () => {
      let mostVisibleSection = "";
      let maxVisibleHeight = 0;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, window.innerHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisibleSection = id;
        }
      });

      if (mostVisibleSection === "home") {
        setActiveSection("");
        return;
      }

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavbar();
          updateActiveSection();
          ticking = false;
        });

        ticking = true;
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      updateNavbar();
      updateActiveSection();
    };

    updateNavbar();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    document.querySelectorAll("main section").forEach((section) => {
      if (section.id === "home") {
        section.classList.add("is-visible");
        return;
      }

      section.classList.add("fade-section");
      revealObserver.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      revealObserver.disconnect();
    };
  }, []);

  const desktopHeaderHeight = 82 + 88 * (1 - scrollProgress);
  const mobileHeaderHeight = 92 + 28 * (1 - scrollProgress);

  const headerHeight = isMobile ? mobileHeaderHeight : desktopHeaderHeight;

  const desktopNameSize = 22 + 8 * (1 - scrollProgress);
  const mobileNameSize = 18 + 4 * (1 - scrollProgress);

  const nameSize = isMobile ? mobileNameSize : desktopNameSize;

  const navLift = isMobile ? 4 * (1 - scrollProgress) : 8 * (1 - scrollProgress);

  const navbarBlue = 10 + navbarFade * 13;
  const navbarGlow = 0.04 + 0.18 * navbarFade;
  const navbarAmber = 0.02 + 0.1 * navbarFade;
  const navbarBorder = 0.14 + 0.11 * navbarFade;

  const handleNavClick = (event, href) => {
    event.preventDefault();

    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) return;

    section.classList.add("skip-reveal", "is-visible");
    setActiveSection(id);

    const navbarOffset = isMobile ? 112 : 96;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const targetY = Math.max(sectionTop - navbarOffset, 0);

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);

    window.setTimeout(() => {
      section.classList.remove("skip-reveal");
    }, 700);
  };

  const icons = {
    email: <MdEmail />,
    whatsapp: <FaWhatsapp />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
  };

  return (
    <main className="site-bg relative min-h-screen overflow-hidden text-white">
  <div className="pointer-events-none fixed inset-0 z-0">
    <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]" />
    <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
    <div className="absolute bottom-[-160px] left-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
  </div>

  <div className="relative z-10">
      {/* Navbar */}
     {/* Navbar */}
<header
  className="fixed left-0 top-0 z-50 w-full overflow-hidden border-b backdrop-blur-xl"
  style={{
    height: `${headerHeight}px`,
    background: `
      radial-gradient(circle at 18% 0%, rgba(56, 189, 248, ${navbarGlow}), transparent 32%),
      radial-gradient(circle at 82% 0%, rgba(245, 158, 11, ${navbarAmber}), transparent 28%),
      linear-gradient(
        90deg,
        rgba(2, 6, 23, 0.97),
        rgba(7, ${navbarBlue}, 43, 0.965),
        rgba(2, 6, 23, 0.97)
      )
    `,
    borderColor: `rgba(56, 189, 248, ${navbarBorder})`,
    boxShadow: `0 12px 45px rgba(14, 165, 233, ${
      0.04 + 0.12 * navbarFade
    })`,
  }}
>
  <div
    className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
    style={{
      background: `linear-gradient(
        90deg,
        transparent,
        rgba(56, 189, 248, ${0.22 + 0.38 * navbarFade}),
        transparent
      )`,
    }}
  />

  <div
  className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-3 px-5 md:flex-row md:items-center md:justify-center md:gap-12 md:px-8"
  style={{
    transform: isMobile ? "none" : `translateY(${12 * (1 - scrollProgress)}px)`,
  }}
>
    <a
  href="#home"
  className="whitespace-nowrap font-bold tracking-tight text-white drop-shadow-[0_0_18px_rgba(56,189,248,0.12)]"
  style={{ fontSize: `${nameSize}px` }}
>
      Muhammad Akif Janjua
    </a>

    <nav className="flex w-full gap-4 overflow-x-auto whitespace-nowrap pb-1 text-xs text-gray-300 md:w-auto md:translate-y-[3px] md:gap-4 md:overflow-visible md:pb-0 md:text-sm">
      {navLinks.map((link) => (
  <a
    key={link.href}
    href={link.href}
    onClick={(event) => handleNavClick(event, link.href)}
    className={`shrink-0 rounded-full px-2.5 py-1 transition ${
      activeSection === link.href.replace("#", "")
        ? "bg-sky-400/15 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.18)]"
        : "text-gray-300 hover:bg-sky-400/10 hover:text-sky-300"
    }`}
  >
    {link.label}
  </a>
))}
    </nav>
  </div>
</header>
      {/* Hero Section */}
<section id="home" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-[170px] md:grid-cols-[1.15fr_0.85fr] md:pt-28">
  <div>
    <h1 className="max-w-3xl text-[28px] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
  Mechanical Engineer focused on{" "}
  <span className="accent-gradient">AI Optimization</span>, CAD/CAM & Robotics.
</h1>

    <p className="copy-text mt-7 max-w-[620px] text-base leading-[1.8] text-gray-400 md:text-lg">
      A NUST Mechanical Engineering graduate with experience in CNC Optimization,
      CREO CAM validation, robotics, project documentation, and industrial
      engineering workflows through internships at DEL (DESCON Engineering Limited)
      and NESCOM.
    </p>

    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <a
        href="/Muhammad-Akif-Janjua-CV.pdf"
        download
        className="rounded-full border border-sky-500/30 bg-slate-950/70 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:scale-[1.03] hover:border-sky-300 hover:bg-sky-300 hover:text-slate-950"
      >
        Download CV
      </a>

      <a
        href="#projects"
        className="rounded-full border border-sky-500/30 bg-slate-950/70 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:scale-[1.03] hover:border-sky-300 hover:bg-sky-300 hover:text-slate-950"
      >
        View Projects
      </a>
    </div>
  </div>

  <div className="mx-auto w-full max-w-sm md:max-w-md">
  <div className="profile-photo-card theme-card rounded-[2rem] p-3">
    <Image
      src="/profile/akif-hero-photo.JPG"
      alt="Muhammad Akif Janjua"
      width={700}
      height={900}
      className="profile-photo h-[430px] w-full rounded-[1.5rem] object-cover object-[50%_22%]"
    />
  </div>
</div>
</section>
            {/* About Section */}
<section id="about" className="scroll-mt-24 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="section-kicker mb-4 text-sm uppercase tracking-[0.35em]">
      About Me
    </p>

    <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
      <div className="profile-photo-card theme-card rounded-[2rem] p-3">
        <Image
          src="/profile/akif-about.JPG"
          alt="Muhammad Akif Janjua"
          width={700}
          height={950}
          className="profile-photo h-[520px] w-full rounded-[1.5rem] object-cover object-[50%_18%]"
        />
      </div>

      <div>
        <h2 className="max-w-2xl text-2xl font-bold leading-tight text-white md:text-3xl">
          Building practical solutions through mechanical design, manufacturing,
          and automation.
        </h2>

        <p className="copy-text mt-6 leading-8 text-gray-400">
          I am a Mechanical Engineering graduate with hands-on experience in
          CAD/CAM, CNC optimization, robotics, simulation, and industrial
          engineering workflows. I enjoy working at the point where design,
          analysis, and practical implementation come together.
        </p>

        <p className="copy-text mt-5 leading-8 text-gray-400">
          My work has included AI-driven CNC milling optimization, CREO CAM
          validation, mechanical design projects, robotics-based systems, and
          project documentation. Through internships at DEL (DESCON Engineering
          Limited) and NESCOM, I gained exposure to engineering drawings,
          planning workflows, technical documentation, and real industrial
          project environments.
        </p>

        <p className="copy-text mt-5 leading-8 text-gray-400">
          I am especially interested in manufacturing, automation, machine
          design, robotics, and AI-supported engineering tools that help solve
          practical engineering problems.
        </p>
      </div>
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
      Academic Background
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
        className="theme-card rounded-3xl p-6"
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
{/* Experience Section */}
<section id="experience" className="scroll-mt-24 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12">
      <p className="section-kicker mb-4 text-sm uppercase tracking-[0.35em]">
        Experience
      </p>

      <h2 className="section-heading text-4xl font-bold">
        Professional Experience
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-gray-400">
        Internship experience involving industrial project workflows, planning,
        engineering documentation, CAD/CAM validation, and AI-driven manufacturing
        research.
      </p>
    </div>

    <div className="experience-grid flex flex-col gap-7">
      {experiences.map((item) => (
        <details
          key={item.company}
          className="theme-card experience-card group rounded-3xl p-6 md:p-7"
        >
          <summary className="flex list-none items-start justify-between gap-6">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gray-500">
                {item.duration}
              </p>

              <h3 className="text-xl font-bold text-white">
                {item.company}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {item.role} · {item.type}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {item.location}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-sky-300 transition group-open:text-white">
              View Details
              <span className="transition duration-300 group-open:rotate-180">
                ⌄
              </span>
            </div>
          </summary>

          <div className="mt-7 border-t border-sky-500/10 pt-7">
            <p className="copy-text leading-8 text-gray-400">
              {item.summary}
            </p>

            {item.details && (
              <ul className="mt-6 space-y-4 text-gray-400">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.tools && (
              <div className="mt-7 flex flex-wrap gap-3">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="theme-pill rounded-full px-3 py-1 text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        </details>
      ))}
    </div>
  </div>
</section>
            {/* Projects Section */}
<section id="projects" className="scroll-mt-24 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12">
      <p className="section-kicker mb-4 text-sm uppercase tracking-[0.35em]">
        Projects
      </p>

      <h2 className="section-heading text-4xl font-bold">
        Featured Engineering Projects
      </h2>
    </div>

    <div className="projects-grid grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={`/projects/${project.slug}`}
          className="theme-card project-card group flex h-full flex-col overflow-hidden rounded-3xl"
        >
          {project.thumbnail ? (
            <div className="relative aspect-video overflow-hidden border-b border-sky-500/10 bg-slate-950">
              <Image
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                width={900}
                height={500}
                className="project-card-image h-full w-full object-cover"
              />

              <div className="project-card-overlay pointer-events-none absolute inset-0" />
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center border-b border-sky-500/10 bg-slate-950/80 text-sm text-slate-500">
              Project thumbnail coming soon
            </div>
          )}

          <div className="flex flex-1 flex-col p-7">
            <div className="mb-4 flex flex-col gap-1">
              <p className="text-sm text-sky-300">{project.category}</p>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                {project.duration}
              </p>
            </div>

            <h3 className="text-xl font-bold leading-snug text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {project.description}
            </p>

            {project.tools && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.slice(0, 4).map((tool) => (
                  <span
                    key={tool}
                    className="theme-pill rounded-full px-3 py-1 text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            <p className="mt-auto pt-7 text-sm font-semibold text-sky-300 transition group-hover:text-white">
              View Project <span className="project-card-arrow">→</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
{/* Certificates Section */}
<section id="certificates" className="scroll-mt-24 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12">
      <p className="section-kicker mb-4 text-sm uppercase tracking-[0.35em]">
        Certifications
      </p>

      <h2 className="section-heading text-4xl font-bold">
        Certificates and Documents
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-gray-400">
        Supporting documents, internship certificates, and technical learning
        credentials related to my engineering and professional development.
      </p>
    </div>

    <div className="certifications-grid grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {certificates.map((certificate) => (
        <button
          key={certificate.title}
          type="button"
          onClick={() => setSelectedCertificate(certificate)}
          className="theme-card certification-card group flex h-full cursor-pointer flex-col rounded-3xl p-5 text-left"
        >
          <div className="overflow-hidden rounded-2xl border border-sky-500/10 bg-slate-950">
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={900}
              height={500}
              className="certification-image aspect-video w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col pt-5">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              {certificate.date}
            </p>

            <h3 className="text-lg font-bold leading-snug text-white transition group-hover:text-sky-100">
              {certificate.title}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {certificate.issuer}
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              {certificate.description}
            </p>

            <p className="mt-auto pt-5 text-sm font-semibold text-sky-300 transition group-hover:text-white">
              Click to view →
            </p>
          </div>
        </button>
      ))}
    </div>
  </div>
</section>

{selectedCertificate && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/82 px-4 py-4 backdrop-blur-xl"
    onClick={() => setSelectedCertificate(null)}
  >
    <div
      className="relative flex max-h-[94vh] max-w-[96vw] items-center justify-center rounded-[1.6rem] border border-sky-400/25 bg-slate-950/80 p-3 shadow-[0_0_60px_rgba(56,189,248,0.18)]"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setSelectedCertificate(null)}
        className="absolute -right-3 -top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950 text-xl text-white shadow-lg transition hover:border-sky-300 hover:bg-sky-300 hover:text-slate-950"
        aria-label="Close certificate preview"
      >
        ×
      </button>

      <Image
        src={selectedCertificate.image}
        alt={selectedCertificate.title}
        width={1800}
        height={1200}
        className="h-auto max-h-[88vh] w-auto max-w-[92vw] rounded-[1.2rem] object-contain"
      />
    </div>
  </div>
)}
            {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technical Skills and Tools
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
              className="theme-card rounded-3xl p-6"
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
<section id="contact" className="scroll-mt-24 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="theme-card rounded-[2rem] p-8 text-center md:p-12">
      <p className="section-kicker mb-4 text-sm uppercase tracking-[0.35em]">
        Contact
      </p>

      <h2 className="section-heading mx-auto max-w-3xl text-4xl font-bold leading-tight">
        Interested in working together?
      </h2>

      <p className="copy-text mx-auto mt-6 max-w-3xl text-center leading-8 text-gray-400">
        I am open to mechanical engineering roles, trainee engineering
        opportunities, internships, technical projects, and collaborations
        related to design, manufacturing, automation, CAD/CAM, and robotics.
      </p>

      <div className="contact-logo-grid mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6 sm:grid-cols-5">
        <a
          href="mailto:akif.janjua.123@gmail.com?subject=Engineering Opportunity"
          aria-label="Email"
          title="Email"
          className="contact-logo-link contact-email"
        >
          <MdEmail />
        </a>

        <a
          href="https://wa.me/923000466970"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="contact-logo-link contact-whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.linkedin.com/in/akif-janjua"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="contact-logo-link contact-linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/akifjanjua"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="contact-logo-link contact-github"
        >
          <FaGithub />
        </a>

        <a
  href="https://www.google.com/maps/search/?api=1&query=Lahore%2C%20Pakistan"
  target="_blank"
  rel="noreferrer"
  aria-label="Location"
  title="Lahore, Pakistan"
  className="contact-logo-link contact-location contact-location-link"
>
  <FaMapMarkerAlt />

  <span>Lahore, PK</span>
</a>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Muhammad Akif Janjua. Built with Next.js and Tailwind CSS.
      </footer>
      </div>
    </main>
  );
}