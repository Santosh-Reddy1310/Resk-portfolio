import React from 'react';
import { ExternalLink, Github, Monitor, Code, FolderOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Gemini Clone",
    description: "A clone of Google's Gemini AI interface built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2005%20Chatbot%20Clone", demo: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2005%20Chatbot%20Clone" }
  },
  {
    title: "Netflix Clone",
    description: "A responsive Netflix UI clone built with React featuring dynamic content.",
    tech: ["React", "CSS"],
    links: { github: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2014%20Netflix%20Clone", demo: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2014%20Netflix%20Clone" }
  },
  {
    title: "Real-Time Chat App",
    description: "A real-time chat application with Google authentication using React and Supabase.",
    tech: ["React", "Supabase", "Google Auth"],
    links: { github: "https://github.com/Santosh-Reddy1310/RESK", demo: "https://resk-one.vercel.app/" }
  },
  {
    title: "3D Portfolio",
    description: "A 3D portfolio website showcasing my projects and skills using Three.js.",
    tech: ["Spline", "React", "CSS"],
    links: { github: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2017%203D%20web", demo: "https://resk-food-delivery.netlify.app" }
  },
  {
    title: "Credit Card UI Design",
    description: "A credit card UI design with hover effects and animations using React.",
    tech: ["React", "CSS"],
    links: { github: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2008%20Credit%20Card%20UI%20Design", demo: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2008%20Credit%20Card%20UI%20Design" }
  },
  {
    title: "3D Card Animation",
    description: "Interactive 3D card animation with hover effects created using HTML and CSS.",
    tech: ["HTML", "CSS"],
    links: { github: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2004%203d%20card", demo: "https://github.com/Santosh-Reddy1310/Projects/tree/main/Project%20-%2004%203d%20card" }
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
            Here are some of the projects I've worked on, showcasing my skills and interests.
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
