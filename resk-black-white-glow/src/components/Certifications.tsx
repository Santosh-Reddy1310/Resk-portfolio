import React from 'react';
import { Award, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// 🚀 Internship Experience (excluding EA simulation)
const experiences = [
  {
    title: "AI/ML Intern",
    company: "Mirai School of Technology",
    period: "Jul 2025 – Present",
    description:
      "Built and deployed AI projects using Google Teachable Machine, ChatGPT, and Gemini. Practiced prompt engineering and worked on real-time ML pipelines."
  },
  {
    title: "AI/ML Intern",
    company: "Edunet Foundation",
    period: "Jun 2025 – Jul 2025",
    description:
      "Worked on e-waste image classification using supervised learning and transfer learning. Explored model evaluation metrics and real-world sustainability use cases."
  },
  {
    title: "Frontend Developer Intern – MERN Stack",
    company: "AICTE",
    period: "Jan 2025 – Mar 2025",
    description:
      "Developed the frontend for a food delivery app using React.js, Axios, and component-based architecture. Implemented state management with hooks and React Router."
  },
  {
    title: "Software Engineering Job Simulation",
    company: "Accenture via Forage",
    period: "Jan 2025",
    description:
      "Built a sample web app using agile methodologies, version control, and client-oriented design practices as part of a software development simulation."
  },
  {
    title: "Google Generative AI Virtual Internship",
    company: "Google Cloud Skills Boost",
    period: "Oct 2024 – Dec 2024",
    description:
      "Completed a 120-hour internship on LLMs, Vertex AI, and image generation. Gained hands-on experience with model optimization and prompt engineering."
  },
  {
    title: "Google Android Developer",
    company: "Google Cloud Skills Boost",
    period: "Jul 2024 – Sep 2024",
    description:
      "Explored Android Studio and app building fundamentals. Learned UI layouts, app lifecycle, and built basic mobile apps using Java-based Android tools."
  }
];

// 🧠 Tech Stack + AI Tools
const techStack = [
  "React.js", "Node.js", "Express.js", "Python", "Scikit-learn",
  "TensorFlow", "Keras", "MongoDB", "Git", "Axios",
  "LLMs", "Prompt Engineering", "Google Teachable Machine", "ChatGPT", "Gemini",
  "n8n", "Midjourney", "DALL·E"
];

// ✨ Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Certifications = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Experience & Internships
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            Here's a look into the internships and simulations that shaped my journey through AI, full-stack web development, and real-world systems.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              <Card className="bg-background hover:bg-secondary/5 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <CardTitle className="text-base">{exp.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-semibold">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-2 italic">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6 flex justify-center items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" /> Tech Stack & AI Tools Used
          </h3>
          <div className="max-w-[800px] mx-auto flex flex-wrap justify-center gap-3 bg-background p-6 rounded-lg border border-border">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-secondary/50 px-3 py-1 rounded-full text-sm text-foreground shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
