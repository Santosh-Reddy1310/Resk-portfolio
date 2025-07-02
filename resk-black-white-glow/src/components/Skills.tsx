import React from 'react';
import { Code, Database, Terminal, Globe, FileCode, BookOpen, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "C"]
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"]
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Libraries & Frameworks",
    skills: ["React Hooks", "shadcn/ui", "Chart.js", "Spring Boot (learning)", "Django (learning)"]
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Databases",
    skills: ["MongoDB", "SQL", "Supabase"]
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Tools & Platforms",
    skills: ["GitHub", "Postman", "VS Code", "Render", "Vercel", "Google Cloud"]
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Data & Analysis",
    skills: ["Power BI", "Excel", "Scikit-learn", "TensorFlow", "Streamlit"]
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI Tools",
    skills: ["Gemini API", "n8n", "Midjourney", "DALL·E", "ChatGPT", "Google Teachable Machine"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            I've developed a diverse set of technical skills through education, internships, and self-built real-world projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Card
              key={i}
              className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate__fadeIn"
            >
              <CardHeader>
                <div className="p-2 w-fit rounded-md bg-secondary/50 mb-3">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="bg-secondary/50 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
