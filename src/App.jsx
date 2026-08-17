import { useEffect, useRef, useState } from 'react';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt,
  FaAngular, FaFigma, FaArrowRight, FaExternalLinkAlt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb,
  SiPostgresql, SiExpress, SiStreamlit, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

function App() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.12 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  };

  const profile = {
    name: "Tanish Kalota",
    title: "Full Stack Developer",
    summary:
      "Full Stack Developer skilled in MEAN/MERN, React/Angular, Node.js, and MongoDB. Builds scalable web apps, responsive UIs, and optimized backends. Passionate about solving complex problems with clean, efficient code.",
    phone: "+91-8700158943",
    email: "tanishkalota@gmail.com",
    location: "Faridabad, India",
    github: "https://github.com/Tanish-77",
    linkedin: "https://linkedin.com/in/tanish77",
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "JVC Solutions",
      location: "Faridabad",
      period: "2025 - 2026",
      points: [
        "Developed enterprise web apps (expense/task management) integrating REST APIs.",
        "Enhanced performance via debugging, unit testing, and code optimization.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Unified Mentor Pvt Ltd",
      location: "Remote",
      period: "2025",
      points: [
        "Built full-stack MERN apps with responsive React/Tailwind frontends.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Present",
      points: [
        "Delivered custom websites, UI/UX designs, and maintenance services.",
      ],
    },
  ];

  const projects = [
    {
      title: "JVC EMS Expense Management",
      tech: "JavaScript • HTML • CSS",
      desc: "Automated expense tracking and approval workflows with interactive dashboards. Improved reliability through testing and debugging.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "JVC EMS Task Management",
      tech: "JavaScript • HTML • CSS • Python",
      desc: "Streamlined task assignment and tracking with responsive UIs and Python backend scripts.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "E-Learning Portal",
      tech: "MERN Stack • React • Node.js • MongoDB",
      desc: "Online learning platform with course browsing, user authentication, structured learning content, responsive interfaces and backend APIs.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const skills = {
    Languages: ["JavaScript (ES6+)", "Python", "Java", "C++", "OOP"],
    Frontend: ["React.js", "Next.js", "HTML5/CSS3", "Tailwind CSS", "Angular"],
    "Backend & Database": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Streamlit",
      "Tkinter",
    ],
    "DevOps / Tools": [
      "Docker",
      "Basic AWS",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
    ],
  };

  const education = [
    {
      degree: "MCA",
      institution: "J.C. Bose University (YMCA)",
      location: "Faridabad",
      period: "2023-2025",
      grade: "CGPA: 7.2",
    },
    {
      degree: "B.Sc. (Hons) Electronics",
      institution: "Delhi University",
      location: "Delhi",
      period: "2015-2018",
      grade: "",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "DSEU",
      location: "Delhi",
      period: "2019-2021",
      grade: "CGPA: 8.8",
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "School Education",
      location: "",
      period: "",
      grade: "74%",
    },
    {
      degree: "Matric (CBSE)",
      institution: "School Education",
      location: "",
      period: "",
      grade: "76%",
    },
  ];

  const SkillIcon = ({ skill }) => {
    const name = skill.toLowerCase();

    if (name.includes("react")) return <FaReact className="text-cyan-400" />;
    if (name.includes("next")) return <SiNextdotjs className="text-white" />;
    if (name.includes("tailwind")) return <SiTailwindcss className="text-sky-400" />;
    if (name.includes("javascript")) return <SiJavascript className="text-yellow-400" />;
    if (name.includes("node")) return <FaNodeJs className="text-green-400" />;
    if (name.includes("mongodb")) return <SiMongodb className="text-green-400" />;
    if (name.includes("postgresql")) return <SiPostgresql className="text-blue-400" />;
    if (name.includes("express")) return <SiExpress className="text-white" />;
    if (name.includes("python")) return <FaPython className="text-blue-400" />;
    if (name.includes("java")) return <FaJava className="text-red-400" />;
    if (name.includes("docker")) return <FaDocker className="text-sky-400" />;
    if (name.includes("git")) return <FaGitAlt className="text-orange-400" />;
    if (name.includes("postman")) return <SiPostman className="text-orange-400" />;
    if (name.includes("figma")) return <FaFigma className="text-pink-400" />;
    if (name.includes("angular")) return <FaAngular className="text-red-500" />;
    if (name.includes("visual studio") || name.includes("vs code"))
      return <VscVscode className="text-blue-400" />;
    if (name.includes("streamlit")) return <SiStreamlit className="text-red-400" />;

    return <span className="h-2 w-2 rounded-full bg-blue-400" />;
  };

  const reveal = (id) =>
    `reveal ${visibleSections[id] ? "reveal-visible" : ""}`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-[8%] h-72 w-72 rounded-full bg-blue-600/15 blur-3xl animate-float" />
        <div className="absolute right-[5%] top-[35%] h-96 w-96 rounded-full bg-violet-600/15 blur-3xl animate-float-reverse" />
        <div className="absolute bottom-[5%] left-[35%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 px-5 py-4 backdrop-blur-xl md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#hero" className="text-2xl font-black tracking-tight text-gradient">
            TK.
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-gray-300 md:flex">
            {["about", "skills", "experience", "projects", "education", "contact"].map(
              (item) => (
                <a key={item} href={`#${item}`} className="nav-link capitalize">
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-500/20 hover:text-white md:block"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center px-6 pb-16 pt-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 shadow-lg shadow-blue-500/5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Tanish{" "}
              <span className="text-gradient animate-gradient">Kalota</span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-blue-300 md:text-2xl">
              Full Stack Developer
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 lg:mx-0 md:text-lg">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="#contact" className="btn-primary group">
                Hire Me
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-btn">
                <FaGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${profile.email}`} className="social-btn">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-violet-600/30 blur-2xl animate-pulse-slow" />
            <div className="hero-image-card relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl shadow-blue-900/30">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85"
                alt="Developer workspace"
                className="h-[430px] w-full rounded-[1.5rem] object-cover opacity-90 transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/15 bg-[#07101f]/75 p-5 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Building with</p>
                <p className="mt-1 font-bold text-white">
                  React • Node.js • MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={setRef("about")} className={`${reveal("about")} section-wrap`}>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="glass-card mx-auto max-w-5xl p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <p className="text-lg leading-8 text-gray-300">
              {profile.summary} I have a strong background in both frontend and
              backend technologies, with hands-on experience in enterprise-level
              applications, internship projects, and freelance client work. I love
              turning complex problems into elegant, user-friendly solutions.
            </p>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6 text-center">
              <div className="text-4xl font-black text-gradient">MERN</div>
              <div className="mt-2 text-sm text-gray-400">Full Stack Focus</div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 md:grid-cols-3">
            <div className="info-chip">
              <FaPhone className="text-blue-400" />
              <span>{profile.phone}</span>
            </div>
            <div className="info-chip">
              <FaEnvelope className="text-cyan-400" />
              <span>{profile.email}</span>
            </div>
            <div className="info-chip">
              <FaMapMarkerAlt className="text-violet-400" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={setRef("skills")} className={`${reveal("skills")} section-wrap`}>
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="glass-card group p-7"
              style={{ transitionDelay: `${categoryIndex * 80}ms` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{category}</h3>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                  {items.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    <SkillIcon skill={skill} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        ref={setRef("experience")}
        className={`${reveal("experience")} section-wrap`}
      >
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>

        <div className="relative mx-auto max-w-5xl">
          <div className="timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-7 md:pl-12">
                <div className="timeline-dot" />
                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="mt-1 font-medium text-blue-400">
                        {exp.company} • {exp.location}
                      </p>
                    </div>

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-gray-400">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        ref={setRef("projects")}
        className={`${reveal("projects")} section-wrap`}
      >
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="project-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-200 backdrop-blur-md">
                  Project {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold transition group-hover:text-blue-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-cyan-400">
                  {project.tech}
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.desc}
                </p>

                <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-blue-300">
                  Explore project
                  <FaExternalLinkAlt className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        ref={setRef("education")}
        className={`${reveal("education")} section-wrap`}
      >
        <h2 className="section-title">
          My <span>Education</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card hover-lift p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="mt-1 text-gray-300">{edu.institution}</p>
                  {(edu.location || edu.period) && (
                    <p className="mt-2 text-sm text-gray-500">
                      {edu.location} {edu.period}
                    </p>
                  )}
                </div>

                {edu.grade && (
                  <span className="shrink-0 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">
                    {edu.grade}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        ref={setRef("contact")}
        className={`${reveal("contact")} section-wrap pb-24`}
      >
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/15 via-violet-600/10 to-cyan-500/10 p-8 text-center shadow-2xl shadow-blue-950/30 md:p-12">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Let's connect
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              I'm open to new opportunities, collaborations, and interesting
              projects. Let's build something great together.
            </p>

            <div className="mx-auto mt-9 grid max-w-3xl gap-4 md:grid-cols-2">
              <a href={`mailto:${profile.email}`} className="contact-card">
                <FaEnvelope className="text-2xl text-blue-400" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </a>

              <a href={`tel:${profile.phone}`} className="contact-card">
                <FaPhone className="text-2xl text-cyan-400" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-btn">
                <FaGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-7 text-center text-sm text-gray-500">
        © 2026 <span className="font-semibold text-white">{profile.name}</span>.
        Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;