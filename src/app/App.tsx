import React, { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePhoto from "@/imports/WhatsApp_Image_2026-07-05_at_1.16.28_PM.jpeg";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Download,
  ExternalLink,
  ChevronRight,
  Code2,
  Server,
  Database,
  GitBranch,
  Layers,
  Award,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

const SKILLS = [
  {
    category: "Frontend",
    icon: <Code2 size={20} />,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "React.js", level: 78 },
    ],
  },
  {
    category: "Backend",
    icon: <Server size={20} />,
    color: "from-slate-600 to-slate-700",
    bg: "bg-slate-50",
    items: [
      { name: "Java", level: 75 },
      { name: "Python", level: 72 },
      { name: "C", level: 80 },
      { name: "C++", level: 77 },
    ],
  },
  {
    category: "Database",
    icon: <Database size={20} />,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    items: [
      { name: "SQL", level: 80 },
      { name: "Database Management", level: 74 },
    ],
  },
  {
    category: "DevOps",
    icon: <GitBranch size={20} />,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    items: [
      { name: "Docker", level: 65 },
      { name: "Hosting", level: 78 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    category: "Other",
    icon: <Layers size={20} />,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    items: [
      { name: "Responsive Design", level: 88 },
      { name: "REST API", level: 76 },
      { name: "Problem Solving", level: 82 },
      { name: "Deployment", level: 74 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Nexiora Website",
    desc: "Modern responsive business website developed using React with clean UI and responsive layouts.",
    tech: ["React", "CSS3", "Responsive"],
    link: "https://portfolio-website-yxys.vercel.app/",
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-600",
  },
  {
    title: "Career GPS Website",
    desc: "Career guidance platform helping students explore career paths and opportunities.",
    tech: ["React", "JavaScript", "UI/UX"],
    link: null,
    color: "bg-slate-50 border-slate-100",
    accent: "text-slate-600",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing projects, skills and professional profile.",
    tech: ["React", "Tailwind", "Vite"],
    link: null,
    color: "bg-indigo-50 border-indigo-100",
    accent: "text-indigo-600",
  },
  {
    title: "Responsive Landing Page",
    desc: "Modern landing page built with HTML, CSS and JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: null,
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-600",
  },
  {
    title: "Full Stack Practice Project",
    desc: "CRUD application with frontend, backend and database integration.",
    tech: ["React", "Java", "SQL"],
    link: null,
    color: "bg-orange-50 border-orange-100",
    accent: "text-orange-600",
  },
];

const CONTACT_ITEMS = [
  { icon: <Phone size={20} />, label: "Phone", value: "8300150181", href: "tel:8300150181" },
  { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "8300150181", href: "https://wa.me/918300150181" },
  { icon: <Mail size={20} />, label: "Email", value: "kalaikannan0181@gmail.com", href: "mailto:kalaikannan0181@gmail.com" },
  { icon: <Github size={20} />, label: "GitHub", value: "kalaikannan8300-cell", href: "https://github.com/kalaikannan8300-cell" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", value: "kalai-kannan", href: "https://www.linkedin.com/in/kalai-kannan-0693a0342/" },
  { icon: <MapPin size={20} />, label: "Location", value: "Idappadi, Salem - 637101", href: null },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-[#111827]">{name}</span>
        <span className="text-sm text-[#475569]">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#2563EB] to-blue-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

function TypedText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = deleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
      } else {
        setText((t) => (deleting ? t.slice(0, -1) : word.slice(0, t.length + 1)));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, idx, words]);

  return (
    <span className="text-[#2563EB]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((n) => document.getElementById(n));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 100) {
          setActiveSection(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-[Poppins,Inter,sans-serif] text-[#111827]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        } border-b border-[#E5E7EB]`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm select-none">
              JK
            </div>
            <span className="font-semibold text-[#111827] hidden sm:block">J. Kalaikannan</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link
                    ? "text-[#2563EB] bg-blue-50"
                    : "text-[#475569] hover:text-[#2563EB] hover:bg-blue-50"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-[#475569] hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E5E7EB] px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link
                    ? "text-[#2563EB] bg-blue-50"
                    : "text-[#475569] hover:text-[#2563EB] hover:bg-blue-50"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="Home" className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Hello, I&apos;m</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-3">
                J. Kalaikannan
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="text-xl sm:text-2xl font-semibold mb-4 h-8">
                <TypedText words={["Frontend Developer", "Full Stack Developer", "CS Engineering Student"]} />
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-[#475569] leading-relaxed mb-8 max-w-lg">
                Building modern, responsive and user-friendly web applications with clean code and innovative ideas.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                >
                  <Download size={18} /> Download Resume
                </a>
                <button
                  onClick={() => scrollTo("Projects")}
                  className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#111827] px-6 py-3 rounded-xl font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                >
                  View Projects <ArrowRight size={18} />
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="flex items-center gap-4 mt-8">
                <a href="https://github.com/kalaikannan8300-cell" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-[#475569] hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kalai-kannan-0693a0342/" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-[#475569] hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:kalaikannan0181@gmail.com" className="p-2 rounded-lg text-[#475569] hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 transform rotate-3 scale-105" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <ImageWithFallback
                  src={profilePhoto}
                  alt="J. Kalaikannan - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#E5E7EB] rounded-2xl px-4 py-2 shadow-lg">
                <p className="text-xs text-[#475569] font-medium">Experience</p>
                <p className="text-lg font-bold text-[#2563EB]">1+ Year</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-white border border-[#E5E7EB] rounded-2xl px-4 py-2 shadow-lg">
                <p className="text-xs text-[#475569] font-medium">Projects</p>
                <p className="text-lg font-bold text-[#2563EB]">5+</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="About" className="py-20 px-4 sm:px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">Who I Am</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827]">About Me</h2>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={100}>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  I am <strong className="text-[#111827]">J. Kalaikannan</strong>, a passionate Computer Science Engineering student at{" "}
                  <strong className="text-[#111827]">Nandha Engineering College (Autonomous), Erode</strong> (2024–2028).
                </p>
                <p>
                  Although I am currently a student, I have practical experience through multiple real-world projects and continuous self-learning in modern web technologies.
                </p>
                <p>
                  I enjoy building responsive websites, full-stack applications, and solving real-world problems using technology. My goal is to become a professional Full Stack Developer and contribute to impactful software products.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Projects Completed", value: "5+" },
                  { label: "Technologies", value: "10+" },
                  { label: "Years Learning", value: "1+" },
                  { label: "Passion Level", value: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-[#2563EB]">{stat.value}</p>
                    <p className="text-sm text-[#475569] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-3">
                {[
                  { label: "Name", value: "J. Kalaikannan" },
                  { label: "Role", value: "Frontend & Full Stack Developer" },
                  { label: "Email", value: "kalaikannan0181@gmail.com" },
                  { label: "Phone", value: "8300150181" },
                  { label: "Location", value: "Idappadi, Salem - 637101" },
                  { label: "Status", value: "Open to Opportunities" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 shadow-sm">
                    <span className="text-[#2563EB] font-semibold min-w-[90px] text-sm">{item.label}:</span>
                    <span className="text-[#475569] text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="Skills" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">What I Know</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827]">Technical Skills</h2>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((group, gi) => (
              <FadeIn key={group.category} delay={gi * 80}>
                <div className={`${group.bg} border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white`}>
                      {group.icon}
                    </div>
                    <h3 className="font-bold text-[#111827]">{group.category}</h3>
                  </div>
                  {group.items.map((skill, si) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 80 + si * 60} />
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="Projects" className="py-20 px-4 sm:px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">My Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827]">Featured Projects</h2>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.title} delay={i * 80}>
                <div className={`${project.color} border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">
                    <Code2 size={18} className={project.accent} />
                  </div>
                  <h3 className="font-bold text-[#111827] text-lg">{project.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-white border border-[#E5E7EB] text-[#475569] px-2.5 py-1 rounded-lg font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1 text-sm font-semibold ${project.accent} mt-1 hover:underline`}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="Experience" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">My Journey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827]">Experience</h2>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative pl-8 border-l-2 border-[#E5E7EB]">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-white shadow" />
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-[#111827] text-lg">Self-Learning & Projects</h3>
                    <p className="text-[#2563EB] font-semibold text-sm">Frontend & Full Stack Development</p>
                  </div>
                  <span className="bg-blue-50 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                    1 Year Experience
                  </span>
                </div>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Worked on multiple frontend and full-stack projects focusing on responsive design, deployment, APIs, databases, and modern development workflows.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React.js", "JavaScript", "Java", "SQL", "Docker", "Git"].map((t) => (
                    <span key={t} className="text-xs bg-[#F8FAFC] border border-[#E5E7EB] text-[#475569] px-2.5 py-1 rounded-lg font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Achievements */}
          <FadeIn delay={200}>
            <div className="mt-12">
              <h3 className="font-bold text-[#111827] text-xl mb-6 flex items-center gap-2">
                <Award size={22} className="text-[#2563EB]" /> Achievements
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Completed 5+ Real-World Projects",
                  "Continuously Learning Full Stack Development",
                  "Strong Problem Solving Skills",
                  "Passionate About Modern Web Development",
                ].map((ach) => (
                  <div key={ach} className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                    <ChevronRight size={16} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#111827] font-medium">{ach}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education */}
      <section id="Education" className="py-20 px-4 sm:px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">Academic Background</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827]">Education</h2>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
            </div>
          </FadeIn>

          <div className="relative pl-8 border-l-2 border-[#E5E7EB] space-y-8">
            {[
              {
                degree: "Bachelor of Engineering",
                field: "B.Tech Information Technology",
                institution: "Nandha Engineering College (Autonomous), Erode",
                year: "2024 – 2028",
                grade: "CGPA: 7.7",
                icon: <GraduationCap size={18} />,
                color: "bg-[#2563EB]",
              },
              {
                degree: "Higher Secondary Education",
                field: "Maths Biology",
                institution: "Government Boys Higher Secondary School",
                year: "2023 – 2024",
                grade: "Percentage: 73.3%",
                icon: <Briefcase size={18} />,
                color: "bg-[#475569]",
              },
            ].map((edu, i) => (
              <FadeIn key={edu.degree} delay={i * 120}>
                <div className="relative">
                  <div className={`absolute -left-[29px] w-8 h-8 rounded-full ${edu.color} flex items-center justify-center text-white shadow`}>
                    {edu.icon}
                  </div>
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-bold text-[#111827] text-lg">{edu.degree}</h3>
                        <p className="text-[#2563EB] font-semibold text-sm">{edu.field}</p>
                      </div>
                      <span className="bg-[#F8FAFC] text-[#475569] text-xs font-semibold px-3 py-1 rounded-full border border-[#E5E7EB]">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-[#475569] text-sm">{edu.institution}</p>
                    <p className="text-sm font-semibold text-[#111827] mt-2">{edu.grade}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="Contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827]">Contact Me</h2>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTACT_ITEMS.map((item, i) => (
              <FadeIn key={item.label} delay={i * 60}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#475569] uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium text-[#111827] mt-0.5 truncate">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#475569] uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium text-[#111827] mt-0.5">{item.value}</p>
                    </div>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] bg-white py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-[#111827]">J. Kalaikannan</p>
            <p className="text-sm text-[#475569]">Frontend Developer</p>
          </div>
          <p className="text-sm text-[#475569]">Made with ❤️ using React</p>
          <div className="flex items-center gap-2">
            <a href="https://github.com/kalaikannan8300-cell" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-[#475569] hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/kalai-kannan-0693a0342/" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-[#475569] hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:kalaikannan0181@gmail.com" className="p-2 rounded-lg text-[#475569] hover:text-[#2563EB] hover:bg-blue-50 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
