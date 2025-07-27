import React from 'react';
import { ExternalLink, Github, FolderOpen, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Roastume – AI Resume Critic",
    description:
      "An AI-powered resume reviewer with brutal/funny/coach tones, ATS score analysis, and LLM-based resume improvement.",
    tech: ["React.js", "FastAPI", "Python", "Gemini API", "Tailwind CSS"],
    links: {
      github: "https://github.com/Santosh-Reddy1310/Roastume",
      demo: "https://roastume.vercel.app/",
    },
  },
  {
    title: "MediScan.AI – PDF Health Analyzer",
    description:
      "A medical report analyzer that reads PDFs and predicts diseases using TensorFlow models and NLP techniques.",
    tech: ["Streamlit", "TensorFlow", "Python", "Regex", "LLM"],
    links: {
      github: "https://github.com/Santosh-Reddy1310/mediscan.ai",
      demo: "https://med-scan-ai.streamlit.app/",
    },
  },
  {
    title: "TeslaPulse.AI – Stock Analytics Dashboard",
    description:
      "Real-time dashboard with stock trends, AI-driven sentiment analysis, price forecasting & Gemini chatbot.",
    tech: ["Next.js", "FastAPI", "WebSockets", "Chart.js", "Gemini API"],
    links: {
      github: "https://github.com/Santosh-Reddy1310/Tesla-Pulse",
      demo: "https://tesla-pulse.vercel.app/",
    },
  },
  {
    title: "AgriScope – Crop Recommender",
    description:
      "A region-specific ML app recommending crops based on weather and statistical features, powered by Gemini API.",
    tech: ["Streamlit", "Python", "Gemini API", "Pandas", "Statistical Analysis"],
    links: {
      github: "https://github.com/Santosh-Reddy1310/AgriScope",
      demo: "https://agriscope.streamlit.app/",
    },
  },
  {
    title: "E-Waste Classifier",
    description:
      "A deep learning model using CNN and OpenCV to detect and classify electronic waste images from 10,000+ dataset.",
    tech: ["TensorFlow", "Python", "OpenCV", "CNN", "Model Deployment"],
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
    links: {
      github: "https://github.com/Santosh-Reddy1310/breast-cancer-predictor",
      demo: "https://predictbc.streamlit.app/",
    },
  },
  {
    title: "Gen AI Search Engine",
    description:
      "A semantic LLM-powered search experience that uses Gemini 1.5 Flash for contextual query resolution.",
    tech: ["Next.js", "Gemini API", "FastAPI"],
    links: {
      github: "https://github.com/Santosh-Reddy1310/GenAI-Agent",
      demo: "https://resk-genai-app.streamlit.app/",
    },
  },
  {
    title: "RESK Chatbot Assistant",
    description:
      "Real-time chatbot app with Supabase backend, Google Auth integration, and a minimal UX design.",
    tech: ["Next.js", "Supabase", "Google Auth", "Tailwind CSS"],
    links: {
      github: "https://github.com/Santosh-Reddy1310/RESK",
      demo: "https://resk-chatbot.vercel.app/",
    },
  },
  {
    title: "Dashboard UI System",
    description:
      "A modern responsive dashboard with clean UI components — suitable for admin panels or SaaS interfaces.",
    tech: ["React", "Tailwind CSS", "UI/UX"],
    links: {
      github: "https://github.com/Santosh-Reddy1310/Dashboard-UI",
      demo: "https://dash-ui-ruby.vercel.app/",
    },
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            Here are some of the major projects I've built — full stack apps, ML integrations, dashboards, and AI-powered tools.
          </p>

          {/* ⚠️ Note about backend/streamlit */}
          <p className="text-sm text-orange-500 mt-4 italic">
            ⚠️ Note: Some projects require backend servers to be active (e.g. FastAPI) and a few Streamlit apps might take a moment to load — thanks for your patience! 🚀
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate__fadeIn"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FolderOpen className="h-5 w-5 text-primary" />
                  <CardTitle>{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="bg-secondary/50 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="ghost" size="sm" asChild className="hover:scale-105 transition-transform duration-300">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="hover:scale-105 transition-transform duration-300">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="gap-2 hover:scale-105 transition-transform duration-300" asChild>
            <a href="https://github.com/Santosh-Reddy1310" target="_blank" rel="noopener noreferrer">
              <Code className="h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
