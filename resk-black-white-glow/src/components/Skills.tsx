import React from "react";
import {
  Code,
  BrainCircuit,
  Database,
  Terminal,
  Cloud,
  Globe,
  FileCode,
  BookOpen,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skillCategories = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "C++", "Java"],
  },
  {
    icon: <BrainCircuit className="h-8 w-8" />,
    title: "AI / ML & Data Science",
    skills: [
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "OpenCV",
      "Computer Vision",
      "Deep Learning",
      "CNN",
      "Transfer Learning",
      "LLM Prompt Engineering",
    ],
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "FastAPI",
      "Streamlit",
      "Node.js",
      "Express.js",
    ],
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Frameworks & Libraries",
    skills: [
      "React Hooks",
      "shadcn/ui",
      "Chart.js",
      "Axios",
      "Spring Boot (learning)",
      "Django (learning)",
    ],
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Jupyter Notebooks",
      "Android Studio",
    ],
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud & MLOps",
    skills: [
      "Google Cloud Platform",
      "Vertex AI",
      "Model Deployment",
      "ETL Pipelines",
      "Data Preprocessing",
      "Cross-validation",
      "Hyperparameter Tuning",
      "Model Monitoring",
    ],
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Data & Visualization",
    skills: [
      "Statistical Analysis",
      "Feature Engineering",
      "Data Engineering",
      "Power BI",
      "Excel",
    ],
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI Tools",
    skills: [
      "Gemini API",
      "ChatGPT",
      "n8n",
      "Google Teachable Machine",
      "Midjourney",
      "DALL·E",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            From crafting ML pipelines to deploying apps and hacking on cloud AI
            — here's my stack that powers the projects I build.
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
                    <span
                      key={j}
                      className="bg-secondary/50 px-2 py-1 rounded text-sm"
                    >
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
