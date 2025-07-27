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
      "Architected real-time AI applications using Google Teachable Machine, ChatGPT, and Gemini API. Specialized in prompt engineering and optimized LLM output quality by 25%. Deployed ML pipelines for live use cases."
  },
  {
    title: "AI/ML Intern",
    company: "Edunet Foundation",
    period: "Jun 2025 – Jul 2025",
    description:
      "Built image classifiers for e-waste detection using TensorFlow, CNN, and transfer learning. Achieved 92% accuracy on 10K+ dataset and deployed end-to-end pipelines from preprocessing to evaluation."
  },
  {
    title: "Frontend Developer Intern",
    company: "AICTE (Remote)",
    period: "Jan 2025 – Mar 2025",
    description:
      "Developed a responsive food delivery app UI using React.js, Tailwind CSS, and Axios. Implemented dynamic routing, React Hooks, and state management for seamless UX."
  },
  {
    title: "Software Engineering Job Simulation",
    company: "Accenture (via Forage)",
    period: "Jan 2025",
    description:
      "Completed agile software development simulation. Practiced Git version control, client-first design, and rapid prototyping for business use cases."
  },
  {
    title: "Generative AI Virtual Internship",
    company: "Google Cloud Skills Boost",
    period: "Oct 2024 – Dec 2024",
    description:
      "Completed 120-hour training on LLMs, Vertex AI, and GenAI workflows. Focused on image generation, model tuning, and cloud-based deployment techniques."
  },
  {
    title: "Android Developer Internship",
    company: "Google Cloud Skills Boost",
    period: "Jul 2024 – Sep 2024",
    description:
      "Built native Android apps using Kotlin and Android Studio. Learned layout design, component lifecycles, and mobile dev best practices."
  }
];

// 🧠 Tech Stack + AI Tools
const techStack = [
  // 🧠 Core AI/ML
  "Python", "TensorFlow", "Keras", "Scikit-learn", "OpenCV",
  "CNN", "Transfer Learning", "Supervised Learning",

  // 💻 Full Stack Dev
  "React.js", "Node.js", "Express.js", "MongoDB", "Axios",

  // 🧠 LLM & GenAI Tools
  "Gemini API", "ChatGPT", "Prompt Engineering", "LLMs",
  "Google Teachable Machine", "n8n", "DALL·E", "Midjourney",

  // 🧰 Dev Tools
  "Git", "Postman", "Jupyter", "Android Studio"
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
