import React, { useEffect, useState } from "react";
import HarithikImage from "../assets/Harithik.jpg";
import {
  ArrowUpRight,
  Award,
  Calendar,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const RESUME_HREF = `${import.meta.env.BASE_URL}Harithik_Choudhary_Resume.pdf`;
const RESUME_FILENAME = "Harithik_Choudhary_Resume.pdf";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "SQL", "Java"],
  },
  {
    label: "Agentic AI & LLMs",
    items: [
      "LangGraph",
      "MCP",
      "RAG",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "A2A",
      "VectorDB",
    ],
  },
  {
    label: "Cloud & LLMOps",
    items: [
      "Azure OpenAI",
      "AWS Bedrock",
      "Google Vertex AI",
      "Langfuse",
      "LangSmith",
    ],
  },
  {
    label: "Backend",
    items: ["FastAPI", "React", "REST APIs", "PostgreSQL", "OpenSearch", "Git"],
  },
];

const experience = [
  {
    company: "Deloitte",
    role: "Analyst | AgenticAI Developer",
    period: "October 2025 – Present",
    current: true,
    points: [
      "Built enterprise multi-agent AI platforms using LangGraph, enabling natural language analytics through agent orchestration, planning, tool calling, routing, and memory across enterprise data.",
      "Integrated Azure OpenAI, Google Gemini, AWS Bedrock (Claude), and developed reusable AI capabilities using MCP.",
      "Developed enterprise AI solutions for Data Governance, Metadata Intelligence, Data Lineage, and Data Quality using Agentic AI workflows.",
      "Leveraged AWS OpenSearch, Amazon S3, and Bedrock to build scalable cloud-native AI applications.",
    ],
  },
  {
    company: "UST Global",
    role: "Developer-I Software Engineering",
    period: "July 2024 – October 2025",
    current: false,
    points: [
      "Developed enterprise backend applications using Java, Spring Boot, REST APIs, and microservices.",
      "Built AI-powered legacy code modernization solutions using Azure OpenAI and LangChain, automating AngularJS to Angular 18/React migrations and reducing modernization effort by 40%.",
      "Developed AI-assisted COBOL to Java/C# migration pipelines to preserve business logic and accelerate enterprise application modernization.",
    ],
  },
];

const projects = [
  {
    title: "AgentOps Observability Platform",
    period: "July 2026 – August 2026",
    tools: [
      "Langfuse (Self-Hosted)",
      "OpenTelemetry",
      "FastAPI",
      "React",
      "ReCharts",
      "Plotly",
    ],
    points: [
      "Built an enterprise AgentOps platform by extending self-hosted Langfuse with a custom observability dashboard.",
      "Developed trace visualization for multi-agent workflows with monitoring for prompts, tool calls, latency, token usage, and costs.",
      "Integrated AI-powered recommendations for prompt optimization, model selection, and cost reduction.",
    ],
  },
  {
    title: "AI Data Governance, Lineage & Quality Platform",
    period: "February 2026 – July 2026",
    tools: [
      "FastAPI",
      "React",
      "LangChain",
      "Azure OpenAI",
      "PostgreSQL",
      "OpenSearch",
    ],
    points: [
      "Built an AI-powered Data Governance platform for metadata management, stewardship, and governance monitoring.",
      "Developed LLM-based metadata generation, Data Lineage visualization, and enterprise data cataloging.",
      "Built an AI-powered Data Quality engine for automatic rule generation, validation, and reporting.",
      "Implemented PII discovery and governance workflows for secure enterprise data management.",
    ],
  },
  {
    title: "Talk 2 Data",
    period: "Agentic analytics",
    tools: ["LangGraph", "FastAPI", "React", "SQL", "Plotly"],
    agents: [
      "Orchestrator Agent",
      "SQL Agent",
      "Visualization Agent",
      "Charts Agent",
      "Insight Agent",
    ],
    points: [
      "Built a multi-agent natural language analytics system so users can query enterprise data in plain English.",
      "Designed 5 specialized agents: an orchestrator for planning and routing, a SQL agent for query generation and execution, visualization and charts agents for plots, and an insight agent for summaries.",
      "Used agent orchestration, tool calling, and shared memory so SQL results flow into charts and narrative insights without manual handoff.",
    ],
  },
  {
    title: "AI Travel Planner",
    period: "Agentic product",
    tools: ["LangGraph", "Python", "FastAPI", "React", "LLMs"],
    agents: [
      "Planner Agent",
      "Destination Agent",
      "Itinerary Agent",
      "Budget Agent",
      "Recommendations Agent",
    ],
    points: [
      "Built an agentic travel planner that turns a destination, dates, and preferences into a complete trip plan.",
      "Coordinated specialized agents for destination research, day-by-day itinerary design, budget allocation, and local recommendations.",
      "Used LangGraph for planning, tool calling, and routing so agents collaborate on flights, stays, activities, and a final itinerary.",
    ],
  },
];

const certifications = [
  "Microsoft Certified: Azure AI Engineer Associate – Microsoft",
  "Claude Certified Developer – Anthropic",
  "Model Context Protocol (MCP) Certification – Anthropic",
];

const ResumeLink = ({ className, children }) => (
  <a
    href={RESUME_HREF}
    download={RESUME_FILENAME}
    className={className}
  >
    {children}
  </a>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-ink text-mist relative overflow-x-hidden">
      <div className="noise" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(61,184,232,0.08),transparent_45%)]" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
          scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("about")}
            className="font-display text-lg tracking-tight"
          >
            HC
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs uppercase tracking-[0.18em] text-steel hover:text-mist transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ResumeLink className="inline-flex items-center gap-2 border border-mist/20 hover:border-petrol hover:text-petrol px-4 py-2 text-xs uppercase tracking-[0.18em] no-underline text-mist transition-colors">
              <Download className="w-3.5 h-3.5" />
              Resume
            </ResumeLink>
          </div>

          <button
            className="md:hidden text-mist"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-line bg-ink/95 px-5 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm uppercase tracking-[0.16em] text-steel py-2"
              >
                {item.label}
              </button>
            ))}
            <ResumeLink className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-petrol no-underline py-2">
              <Download className="w-4 h-4" />
              Download resume
            </ResumeLink>
          </div>
        )}
      </nav>

      <section id="about" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="relative mx-auto lg:mx-0 w-56 h-56 sm:w-72 sm:h-72">
            <div className="absolute -inset-3 border border-mist/15" />
            <div className="absolute inset-0 overflow-hidden bg-panel">
              <img
                src={HarithikImage}
                alt="Harithik Choudhary"
                className="w-full h-full object-cover object-top grayscale-[20%]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-ink border border-line px-4 py-2 text-[11px] tracking-[0.2em] uppercase text-petrol">
              2+ yrs · GenAI
            </div>
          </div>

          <div>
            <p className="text-petrol text-xs tracking-[0.32em] uppercase mb-5">
              Generative AI Engineer
            </p>
            <h1 className="hero-name mb-6">Harithik Choudhary</h1>
            <p className="text-steel text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Generative AI Engineer with 2+ years of experience building
              enterprise AI applications using LLMs, Agentic AI, RAG,
              multi-agent systems, and LLMOps. Experienced in developing
              production-ready AI platforms using LangChain, LangGraph, Azure
              OpenAI, AWS Bedrock, Google Gemini, MCP, and Langfuse.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-mist text-ink hover:bg-white px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold"
              >
                View work
              </button>
              <ResumeLink className="inline-flex items-center gap-2 border border-mist/25 hover:border-mist px-6 py-3 text-xs uppercase tracking-[0.18em] no-underline text-mist">
                <Download className="w-4 h-4" />
                Download resume
              </ResumeLink>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="h-px hairline" />
      </div>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { k: "Deloitte", v: "AgenticAI Developer" },
            { k: "40%", v: "Faster modernization" },
            { k: "3", v: "AI certifications" },
            { k: "9.13", v: "BE CGPA" },
          ].map((stat) => (
            <div key={stat.k} className="border-l border-line pl-4">
              <div className="font-display text-2xl sm:text-3xl text-mist">{stat.k}</div>
              <div className="text-xs uppercase tracking-[0.16em] text-steel mt-1">
                {stat.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-xs tracking-[0.32em] uppercase text-petrol mb-3">Career</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-12">Experience</h2>

          <div className="space-y-10">
            {experience.map((job) => (
              <article
                key={job.company}
                className="grid lg:grid-cols-[220px_1fr] gap-6 border border-line bg-panel/60 p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-2 text-steel text-xs uppercase tracking-[0.16em] mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </div>
                  <h3 className="font-display text-2xl">{job.company}</h3>
                  <p className="text-petrol text-sm mt-2">{job.role}</p>
                  {job.current && (
                    <span className="inline-block mt-4 text-[10px] tracking-[0.2em] uppercase border border-petrol/40 text-petrol px-2 py-1">
                      Current
                    </span>
                  )}
                </div>
                <ul className="space-y-3 text-steel leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point} className="pl-4 border-l border-line">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-24 bg-panel/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-xs tracking-[0.32em] uppercase text-petrol mb-3">Selected work</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-12">Projects</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="border border-line bg-ink/70 p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="font-display text-4xl text-mist/15">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-steel">
                    {project.period}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-4">{project.title}</h3>
                {project.agents && (
                  <div className="mb-5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-petrol mb-2">
                      Agents
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.agents.map((agent) => (
                        <span
                          key={agent}
                          className="text-[11px] border border-petrol/35 bg-petrol/10 text-mist px-2.5 py-1"
                        >
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] uppercase tracking-[0.12em] border border-line px-2.5 py-1 text-steel"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <ul className="space-y-3 text-steel text-sm leading-relaxed mt-auto">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-petrol shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-xs tracking-[0.32em] uppercase text-petrol mb-3">Stack</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-12">Skills</h2>

          <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
            {skillGroups.map((group) => (
              <div key={group.label} className="bg-ink p-6 sm:p-8">
                <h3 className="text-xs uppercase tracking-[0.22em] text-petrol mb-5">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-panel text-sm text-mist border border-line"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-6">
          <div className="border border-line p-6 sm:p-8">
            <p className="text-xs tracking-[0.32em] uppercase text-petrol mb-3">Academics</p>
            <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-petrol" />
              Education
            </h2>
            <h3 className="text-xl font-semibold">
              Bachelor of Engineering (B.E.)
            </h3>
            <p className="text-mist/90 mt-1">Information Science and Engineering</p>
            <p className="text-steel mt-3">MVJ College of Engineering, Bengaluru</p>
            <div className="flex gap-6 mt-6 text-sm uppercase tracking-[0.14em] text-steel">
              <span>2020 – 2024</span>
              <span className="text-petrol">CGPA 9.13</span>
            </div>
          </div>

          <div className="border border-line p-6 sm:p-8">
            <p className="text-xs tracking-[0.32em] uppercase text-petrol mb-3">Credentials</p>
            <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-petrol" />
              Certifications
            </h2>
            <ul className="space-y-4">
              {certifications.map((item) => (
                <li key={item} className="border-b border-line pb-4 last:border-0 last:pb-0 text-steel">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 border border-line bg-panel/50 p-8 sm:p-12">
          <p className="text-xs tracking-[0.32em] uppercase text-petrol mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            Let’s build with agents.
          </h2>
          <p className="text-steel max-w-2xl mb-10">
            Open to conversations on enterprise GenAI, multi-agent systems, and
            LLMOps. Reach out directly or grab the latest resume.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:harithikchoudhary6@gmail.com"
              className="flex items-center gap-4 border border-line hover:border-petrol p-4 no-underline text-mist"
            >
              <Mail className="w-5 h-5 text-petrol" />
              <span className="break-all">harithikchoudhary6@gmail.com</span>
            </a>
            <a
              href="tel:+917006061822"
              className="flex items-center gap-4 border border-line hover:border-petrol p-4 no-underline text-mist"
            >
              <Phone className="w-5 h-5 text-petrol" />
              <span>7006061822</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/harithikchoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-mist text-ink px-5 py-3 text-xs uppercase tracking-[0.16em] font-semibold no-underline"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/harithik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-mist/20 px-5 py-3 text-xs uppercase tracking-[0.16em] no-underline text-mist"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <ResumeLink className="inline-flex items-center gap-2 border border-mist/20 px-5 py-3 text-xs uppercase tracking-[0.16em] no-underline text-mist">
              <Download className="w-4 h-4" />
              Harithik_Choudhary_Resume
            </ResumeLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between gap-3 text-xs uppercase tracking-[0.16em] text-steel">
          <span>© {new Date().getFullYear()} Harithik Choudhary</span>
          <span>Generative AI Engineer</span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
