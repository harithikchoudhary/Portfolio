import React, { useState, useEffect } from "react";
import HarithikImage from "../assets/Harithik.jpg"; // Import the image
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Calendar,
  Award,
  Code,
  Database,
  PenTool,
  Cpu,
  Globe,
  Menu,
  X,
  Trophy,
  ExternalLink,
  ChevronRight,
  Star,
  Zap,
  Target,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    "Core Technologies": [
      "Java",
      "JavaScript",
      "React",
      "Spring Boot",
      "Angular",
    ],
    "AI & Machine Learning": [
      "LangChain",
      "RAG",
      "GenAI",
      "Prompt Engineering",
      "LLM Evaluation",
    ],
    "Cloud & DevOps": [
      "AWS EC2",
      "Microservices",
      "REST APIs",
      "Git",
      "Postman",
    ],
    "Databases & Tools": [
      "MongoDB",
      "SQL",
      "VectorDB",
      "Flask",
      "Semantic Search",
    ],
  };

  const projects = [
    {
      title: "AI-Powered Legacy Code Modernization",
      category: "Enterprise AI Solution",
      techStack: ["Azure AI", "LangChain", "React", "Flask", "GPT Models"],
      description:
        "Revolutionary AI-assisted system that transforms legacy codebases into modern, scalable architectures. Features automated migration tools for AngularJS to Angular 18/React and COBOL to Java/C#, with intelligent component mapping and business logic preservation.",
      highlights: [
        "90% reduction in migration time",
        "Automated testing integration",
        "Seamless integration with existing systems",
      ],
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Intelligent Database Assistant",
      category: "AI-Powered Analytics",
      techStack: ["LangChain", "RAG", "OpenAI API", "React", "Vector DB"],
      description:
        "Next-generation database assistant leveraging advanced RAG architecture for natural language querying. Features semantic search capabilities, intelligent data visualization, and optimized LLM performance through sophisticated prompt engineering.",
      highlights: [
        "Natural language queries",
        "Real-time insights",
        "Scalable architecture",
        "Multi-database support",
      ],
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Pro Innovate - Innovation Hub",
      category: "EdTech Platform",
      techStack: ["ReactJS", "Spring Boot", "Java", "MongoDB", "REST APIs"],
      description:
        "Comprehensive collaboration platform empowering engineering students to innovate across disciplines. Facilitates seamless integration of hardware and software projects with advanced project management and peer collaboration features.",
      highlights: [
        "Cross-department collaboration",
        "Knowledge sharing",
        "Innovation tracking",
      ],
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Medium Blog Generator",
      category: "Content Generation Tool",
      techStack: ["Python", "LangChain", "Streamlit", "OpenAI API"],
      description:
        "An AI-powered tool that automates the creation of engaging Medium blog posts. Users input topics or keywords, and the system generates well-structured, SEO-optimized articles with markdown support and customizable styles.",
      highlights: [
        "One-click blog generation",
        "SEO optimization",
        "Customizable content styles",
        "Markdown export support",
      ],
      icon: <PenTool className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const achievements = [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      description:
        "Certified proficiency in implementing AI solutions and Generative AI workflows with Azure Cognitive Services to create and operationalize intelligent applications.",
      metric: "Certified",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      title: "Smart India Hackathon 2024 Finalist",
      description:
        "Selected among top 1% nationwide for innovative AI solution addressing real-world challenges.",
      metric: "Top 1%",
      icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      title: "Academic Excellence Award",
      description:
        "Graduated with distinction, maintaining consistent top performance throughout academic career.",
      metric: "9.13 CGPA",
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 40%)
            `,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Harithik Choudhary
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {[
                "about",
                "work",
                "projects",
                "skills",
                "achievements",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 capitalize text-sm lg:text-base"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-800 pt-4">
              {[
                "about",
                "work",
                "projects",
                "skills",
                "achievements",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-gray-300 hover:text-white transition-colors capitalize w-full text-left py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={HarithikImage}
                  alt="Harithik Choudhary"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Harithik Choudhary
              </h1>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light px-4">
                Generative AI Developer & Full-Stack Engineer
              </p>
            </div>

            {/* Hero Description */}
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-white leading-relaxed px-4">
              <p>
                Building next-generation applications with{" "}
                <span className="font-semibold">
                  advanced Generative AI integration
                </span>{" "}
                and
                <span className="font-semibold">
                  {" "}
                  robust Java enterprise solutions
                </span>
                .
              </p>
              <p>
                Expertise in{" "}
                <span className="font-semibold">
                  Generative AI , RAG , microservices architecture
                </span>
                , and
                <span className="font-semibold">
                  {" "}
                  scalable backend development
                </span>{" "}
                for modern enterprises.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                View My Work
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-gray-600 hover:border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Developer-I Software Engineering
                      </h3>
                      <p className="text-base sm:text-lg text-blue-400 font-semibold">
                        UST Global
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-green-400">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium text-sm sm:text-base">
                      January 2024 - Present
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Lead GenAI initiatives for enterprise-scale LLM
                        applications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Architect LangChain & LangGraph solutions for code
                        migration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Develop RAG pipelines for intelligent document
                        processing
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    Impact & Results
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-400">
                        85%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Faster Code Migration
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-xl sm:text-2xl font-bold text-blue-400">
                        50+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Legacy Systems Modernized
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
              Innovative solutions that push the boundaries of AI and software
              engineering
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.icon}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-800/70 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600/50 hover:border-gray-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-white">
                        Key Highlights:
                      </h4>
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="relative py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group bg-gray-800/50 hover:bg-gray-700/50 px-4 py-3 rounded-lg text-center transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50"
                    >
                      <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Recognition & Achievements
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                    {achievement.metric}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Let's Create Something Amazing
            </h2>
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-6 sm:mt-8 max-w-4xl mx-auto leading-relaxed px-4">
              Ready to transform your ideas into innovative solutions? Let's
              connect and explore the possibilities.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-700/50 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-gray-800/70 to-gray-700/70 rounded-2xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:harithikchoudhary6@gmail.com"
                        className="text-white hover:text-blue-400 transition-colors font-medium text-base sm:text-lg break-all"
                      >
                        harithikchoudhary6@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-gray-800/70 to-gray-700/70 rounded-2xl border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">
                        Phone
                      </div>
                      <a
                        href="tel:+91-7006061822"
                        className="text-white hover:text-green-400 transition-colors font-medium text-base sm:text-lg"
                      >
                        +91-7006061822
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6">
                  <a
                    href="https://www.linkedin.com/in/harithik-choudhary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 sm:gap-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/40 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Linkedin className="w-5 h-5 sm:w-7 sm:h-7 text-white group-hover:scale-125 transition-transform duration-300 relative z-10" />
                    <span className="font-bold text-white text-base sm:text-xl relative z-10">
                      Connect on LinkedIn
                    </span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
                  </a>

                  <a
                    href="https://github.com/harithikchoudhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 sm:gap-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-gray-500/40 border border-gray-600 hover:border-gray-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Github className="w-5 h-5 sm:w-7 sm:h-7 text-white group-hover:scale-125 transition-transform duration-300 relative z-10" />
                    <span className="font-bold text-white text-base sm:text-xl relative z-10">
                      View GitHub
                    </span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 to-black border-t border-gray-800 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Harithik Choudhary. Crafted with passion for innovation and
            excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
