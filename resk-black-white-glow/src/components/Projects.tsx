import React, { useState } from 'react';
import { ExternalLink, Github, FolderOpen, Code, Sparkles, Zap, Brain, BarChart3, Globe, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

const localProjects = [
  // 🌟 Tier 1: Most Advanced & Impactful Projects
  {
    title: "Healthcare Sustainability AI Agent System",
    description:
      "A modular AI system composed of specialized agents (Data Collector, Analysis, Report Generator, Intervention Planner) to automate multi-facility hospital sustainability analysis. Provides data normalization, trend detection, anomaly identification, and actionable sustainability interventions through rich narrative and visual reports.",
    tech: ["Python", "CrewAI", "pandas", "Streamlit", "Matplotlib", "Multi-Agent AI", "LLM Integration"],
    tier: "advanced",
    tierLabel: "🌟 Most Advanced",
    links: {
      github: "https://github.com/Santosh-Reddy1310/Hospi-Sus-Agent",
      demo: "https://ai-hospi-dashboard.streamlit.app/",
    },
  },
  {
    title: "AI Daily Planner Crew – Multi-Agent Task Optimizer",
    description:
      "A collaborative AI system using three specialized agents (Task Analyzer, Time Planner, Motivator) to transform chaotic to-do lists into optimized, motivating daily schedules. Features smart scheduling, energy-level optimization, and motivational support with Groq-powered LLM integration.",
    tech: ["Python", "CrewAI", "Groq API", "LangChain", "YAML Configuration", "Multi-Agent AI"],
    tier: "advanced",
    tierLabel: "🌟 Most Advanced",
    links: {
      github: "https://github.com/Santosh-Reddy1310/Daily_Planner_Crew_AI",
      demo: "https://github.com/Santosh-Reddy1310/Daily_Planner_Crew_AI",
    },
  },
  {
    title: "QBot – Hybrid Quantum AI Chatbot",
    description:
      "A next-gen AI chatbot that combines classical Large Language Models with quantum computing algorithms. Enhances responses using quantum principles like superposition, entanglement, and true randomness, with interactive circuit visualizations and multi-provider LLM support.",
    tech: ["Python", "Streamlit", "Qiskit", "OpenRouter API", "Google Gemini API", "Groq API", "Quantum Algorithms"],
    tier: "advanced",
    tierLabel: "🌟 Most Advanced",
    links: {
      github: "https://github.com/Santosh-Reddy1310/HQAI-Chatbot",
      demo: "https://qbot-ai.streamlit.app/",
    },
  },
  {
    title: "InsightSphere – AI-Powered Agriculture Insights Dashboard",
    description:
      "An interactive, AI-powered storytelling dashboard built during a hackathon that transforms raw agriculture data (weather + crop markets) into actionable insights. Features include real-time charts, Gemini-generated recommendation cards, anomaly detection, and gamified UX with animations and KPIs.",
    tech: ["Next.js", "Tailwind CSS", "FastAPI", "Recharts", "Framer Motion", "Gemini API"],
    tier: "advanced",
    tierLabel: "🌟 Most Advanced",
    links: {
      github: "https://github.com/Santosh-Reddy1310/dashboard-agroml",
      demo: "https://insightsphere-azure.vercel.app/",
    },
  },

  // 🚀 Tier 2: Full-Stack AI Applications
  {
    title: "AirSafe India – AI-Powered Air Quality Intelligence Dashboard",
    description:
      "A production-ready React + TypeScript dashboard monitoring real-time PM2.5 levels across Delhi, Mumbai, Bengaluru, Kolkata, and Chennai with dual-API fallback (OpenWeather + Open-Meteo). Features a Gemini-powered AI copilot that explains charts, analyzes trends, and provides personalized NAAQS-aware health advisories. Deployed on Vercel with responsive Tailwind UI, interactive Recharts visualizations, and CSV fallback data.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Google Gemini API", "OpenWeather API", "Vercel"],
    tier: "fullstack-ai",
    tierLabel: "🚀 Full-Stack AI",
    links: {
      github: "https://github.com/Santosh-Reddy1310/AirSafe-IN",
      demo: "https://airsafe-india.vercel.app/",
    },
  },
  {
    title: "TeslaPulse.AI – Stock Analytics Dashboard",
    description:
      "Real-time dashboard with stock trends, AI-driven sentiment analysis, price forecasting & Gemini chatbot.",
    tech: ["Next.js", "FastAPI", "WebSockets", "Chart.js", "Gemini API"],
    tier: "fullstack-ai",
    tierLabel: "🚀 Full-Stack AI",
    links: {
      github: "https://github.com/Santosh-Reddy1310/Tesla-Pulse",
      demo: "https://tesla-pulse.vercel.app/",
    },
  },
  {
    title: "PaperProof – AI Research Paper Generator",
    description:
      "Generates fully structured, APA-style research papers from any topic in seconds using Gemini 1.5 Flash, with parallel section processing, automatic citations, and real-time progress tracking.",
    tech: ["Streamlit", "Python", "Gemini API", "Pandas", "Parallel Processing"],
    tier: "fullstack-ai",
    tierLabel: "🚀 Full-Stack AI",
    links: {
      github: "https://github.com/Santosh-Reddy1310/paperproof",
      demo: "https://paper-proof.onrender.com/",
    },
  },
  {
    title: "Roastume – AI Resume Critic",
    description:
      "An AI-powered resume reviewer with brutal/funny/coach tones, ATS score analysis, and LLM-based resume improvement.",
    tech: ["React.js", "FastAPI", "Python", "Gemini API", "Tailwind CSS"],
    tier: "fullstack-ai",
    tierLabel: "🚀 Full-Stack AI",
    links: {
      github: "https://github.com/Santosh-Reddy1310/Roastume",
      demo: "https://roastume.vercel.app/",
    },
  },

  // 🤖 Tier 3: AI/ML Specialized Tools
  {
    title: "MediScan.AI – PDF Health Analyzer",
    description:
      "A medical report analyzer that reads PDFs and predicts diseases using TensorFlow models and NLP techniques.",
    tech: ["Streamlit", "TensorFlow", "Python", "Regex", "LLM"],
    tier: "ai-ml",
    tierLabel: "🤖 AI/ML Tools",
    links: {
      github: "https://github.com/Santosh-Reddy1310/mediscan.ai",
      demo: "https://med-scan-ai.streamlit.app/",
    },
  },
  {
    title: "Gen AI Search Engine",
    description:
      "A semantic LLM-powered search experience that uses Gemini 1.5 Flash for contextual query resolution.",
    tech: ["Next.js", "Gemini API", "FastAPI"],
    tier: "ai-ml",
    tierLabel: "🤖 AI/ML Tools",
    links: {
      github: "https://github.com/Santosh-Reddy1310/GenAI-Agent",
      demo: "https://resk-genai-app.streamlit.app/",
    },
  },
  {
    title: "E-Waste Classifier",
    description:
      "A deep learning model using CNN and OpenCV to detect and classify electronic waste images from 10,000+ dataset.",
    tech: ["TensorFlow", "Python", "OpenCV", "CNN", "Model Deployment"],
    tier: "ai-ml",
    tierLabel: "🤖 AI/ML Tools",
    links: {
      github: "https://github.com/Santosh-Reddy1310/Ewaste-Classifier",
      demo: "#",
    },
  },
  {
    title: "Breast Cancer Prediction App",
    description:
      "A diagnostic app that predicts breast cancer based on user inputs using a trained ML model (scikit-learn).",
    tech: ["Python", "Scikit-learn", "Streamlit", "ML Model"],
    tier: "ai-ml",
    tierLabel: "🤖 AI/ML Tools",
    links: {
      github: "https://github.com/Santosh-Reddy1310/breast-cancer-predictor",
      demo: "https://predictbc.streamlit.app/",
    },
  },

  // 📊 Tier 4: Data Analysis & Domain-Specific Apps
  {
    title: "CarVerse – Daily Car Facts & Explorer",
    description:
      "An interactive Streamlit dashboard that combines used car market data with AI-powered insights, offering daily car facts, Car of the Day, instant plain-English explanations of car specs, and market trend visualizations.",
    tech: ["Streamlit", "Python", "Pandas", "Plotly", "Google Gemini API"],
    tier: "data-analytics",
    tierLabel: "📊 Data Analytics",
    links: {
      github: "https://github.com/Santosh-Reddy1310/carverse",
      demo: "https://carverse.streamlit.app/",
    },
  },
  {
    title: "AgriScope – Crop Recommender",
    description:
      "A region-specific ML app recommending crops based on weather and statistical features, powered by Gemini API.",
    tech: ["Streamlit", "Python", "Gemini API", "Pandas", "Statistical Analysis"],
    tier: "data-analytics",
    tierLabel: "📊 Data Analytics",
    links: {
      github: "https://github.com/Santosh-Reddy1310/AgriScope",
      demo: "https://agriscope.streamlit.app/",
    },
  },
  {
    title: "AutoML – Automated Data to ML Pipeline",
    description:
      "A Streamlit app that transforms datasets into ready-to-use ML models with minimal user input, using data cleaning, preprocessing, and model training automation.",
    tech: ["Streamlit", "Python", "Pandas", "Scikit-learn"],
    tier: "data-analytics",
    tierLabel: "📊 Data Analytics",
    links: {
      github: "https://github.com/Santosh-Reddy1310/AutoML-Flow",
      demo: "https://automl-flow.streamlit.app/",
    },
  },

  // 💼 Tier 5: Full-Stack Web Applications
  {
    title: "RESK Chatbot Assistant",
    description:
      "Real-time chatbot app with Supabase backend, Google Auth integration, and a minimal UX design.",
    tech: ["Next.js", "Supabase", "Google Auth", "Tailwind CSS"],
    tier: "fullstack-web",
    tierLabel: "💼 Full-Stack Web",
    links: {
      github: "https://github.com/Santosh-Reddy1310/RESK",
      demo: "https://resk-chatbot.vercel.app/",
    },
  },
  {
    title: "SRK College Website Redesign",
    description:
      "A modern redesign of SRK Institute's website with an updated, responsive UI/UX and better navigation.",
    tech: ["Next.js", "Tailwind CSS", "UI/UX"],
    tier: "fullstack-web",
    tierLabel: "💼 Full-Stack Web",
    links: {
      github: "#",
      demo: "https://srkit-innovate-hub.vercel.app/",
    },
  },

  // 🎨 Tier 6: UI/UX & Portfolio Projects
  {
    title: "Dashboard UI System",
    description:
      "A modern responsive dashboard with clean UI components — suitable for admin panels or SaaS interfaces.",
    tech: ["React", "Tailwind CSS", "UI/UX"],
    tier: "ui-ux",
    tierLabel: "🎨 UI/UX Design",
    links: {
      github: "https://github.com/Santosh-Reddy1310/Dashboard-UI",
      demo: "https://dash-ui-ruby.vercel.app/",
    },
  },
  {
    title: "SaaS Portfolio",
    description:
      "A professional SaaS-style portfolio website to showcase projects and achievements.",
    tech: ["Next.js", "Tailwind CSS", "UI/UX"],
    tier: "ui-ux",
    tierLabel: "🎨 UI/UX Design",
    links: {
      github: "#",
      demo: "https://resk-portfolio.vercel.app/",
    },
  },
  {
    title: "Simple Landing Portfolio Page",
    description:
      "A minimal personal landing page built with responsive design principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    tier: "ui-ux",
    tierLabel: "🎨 UI/UX Design",
    links: {
      github: "#",
      demo: "https://re-sk.netlify.app/",
    },
  },

];



const getTierIcon = (tier: string) => {
  switch (tier) {
    case 'advanced':
      return <Sparkles className="h-4 w-4" />;
    case 'fullstack-ai':
      return <Zap className="h-4 w-4" />;
    case 'ai-ml':
      return <Brain className="h-4 w-4" />;
    case 'data-analytics':
      return <BarChart3 className="h-4 w-4" />;
    case 'fullstack-web':
      return <Globe className="h-4 w-4" />;
    case 'ui-ux':
      return <Palette className="h-4 w-4" />;
    default:
      return <Code className="h-4 w-4" />;
  }
};

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'advanced':
      return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    case 'fullstack-ai':
      return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    case 'ai-ml':
      return 'bg-gradient-to-r from-purple-500 to-pink-500';
    case 'data-analytics':
      return 'bg-gradient-to-r from-green-500 to-emerald-500';
    case 'fullstack-web':
      return 'bg-gradient-to-r from-indigo-500 to-violet-500';
    case 'ui-ux':
      return 'bg-gradient-to-r from-rose-500 to-pink-500';
    default:
      return 'bg-gradient-to-r from-gray-500 to-slate-500';
  }
};

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tier === filter);

  const filterOptions = [
    { value: 'all', label: 'All Projects', icon: <Code className="h-4 w-4" /> },
    { value: 'advanced', label: 'Most Advanced', icon: <Sparkles className="h-4 w-4" /> },
    { value: 'fullstack-ai', label: 'Full-Stack AI', icon: <Zap className="h-4 w-4" /> },
    { value: 'ai-ml', label: 'AI/ML Tools', icon: <Brain className="h-4 w-4" /> },
    { value: 'data-analytics', label: 'Data Analytics', icon: <BarChart3 className="h-4 w-4" /> },
    { value: 'fullstack-web', label: 'Full-Stack Web', icon: <Globe className="h-4 w-4" /> },
    { value: 'ui-ux', label: 'UI/UX Design', icon: <Palette className="h-4 w-4" /> },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-secondary/5 via-secondary/10 to-secondary/5">
      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center max-w-[800px] mx-auto mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
              <Code className="h-4 w-4 mr-2 inline" />
              Featured Work
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Projects Portfolio
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            Explore my collection of <span className="font-semibold text-foreground">{projects.length}+ projects</span> spanning AI/ML, full-stack development, data analytics, and UI/UX design.
          </p>

          {/* Warning Note */}
          <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-orange-600 dark:text-orange-400 flex items-center justify-center gap-2">
              <Zap className="h-4 w-4" />
              Some projects require backend servers or may take a moment to load — thanks for your patience! 🚀
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={filter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(option.value)}
              className={`transition-all duration-300 hover:scale-105 ${
                filter === option.value 
                  ? 'shadow-lg shadow-primary/25' 
                  : 'hover:shadow-md'
              }`}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </Button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-bold text-primary">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Card
              key={i}
              className={`group flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-2 cursor-pointer overflow-hidden
                ${hoveredIndex === i ? 'scale-105 -translate-y-2' : 'scale-100'}
                animate-in fade-in slide-in-from-bottom
              `}
              style={{ animationDelay: `${i * 50}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tier Badge */}
              <div className={`absolute top-0 right-0 ${getTierColor(project.tier)} text-white px-3 py-1 text-xs font-bold rounded-bl-lg flex items-center gap-1 shadow-lg`}>
                {getTierIcon(project.tier)}
                <span className="hidden sm:inline">{project.tierLabel}</span>
              </div>

              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${getTierColor(project.tier)} pointer-events-none`}></div>

              <CardHeader className="relative pb-3">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${getTierColor(project.tier)} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <FolderOpen className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="flex-grow relative">
                <CardDescription className="text-sm mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, hoveredIndex === i ? project.tech.length : 4).map((tech, j) => (
                    <Badge
                      key={j}
                      variant="secondary"
                      className="text-xs px-2 py-1 transition-all duration-300 hover:scale-110 hover:shadow-md"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {!hoveredIndex && project.tech.length > 4 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between border-t pt-4 relative bg-secondary/5">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild 
                  className="group/btn hover:scale-110 hover:bg-primary/10 transition-all duration-300"
                >
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold">Code</span>
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild 
                  className="group/btn hover:scale-110 hover:bg-primary/10 transition-all duration-300"
                >
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    <span className="font-semibold">Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 group" 
            asChild
          >
            <a href="https://github.com/Santosh-Reddy1310" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              View More on GitHub
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
