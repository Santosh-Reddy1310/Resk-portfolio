import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Home, Briefcase, User, ChevronDown, Maximize2, Mail, Linkedin, Github, Globe, Award, Code, Brain, Cloud } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { ResumeSkeleton } from '@/components/Skeletons';

const resumeNavItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/#about', icon: User },
  { name: 'Projects', url: '/#projects', icon: Briefcase },
  { name: 'Resume', url: '#', icon: FileText }
];

const RESUME_PDF = '/Reddy_Santosh_Kumar_AI_Engineer_Resume.pdf';

const resumeData = {
  contact: {
    email: 'reddysantosh1310@gmail.com',
    linkedin: 'https://www.linkedin.com/in/reddy-santosh-kumar',
    github: 'https://github.com/Santosh-Reddy1310',
    portfolio: 'https://resk-portfolio.vercel.app'
  },
  summary: 'AI/ML Engineer and Full-Stack Developer with 1+ year of experience building production-grade ML systems, LLM-powered applications, and scalable full-stack platforms. Delivered 8+ end-to-end AI/ML projects spanning decision intelligence, real-time analytics, quantum-classical hybrid models, and computer vision — achieving 94–98% accuracy and 40% gains in operational efficiency.',
  
  experience: [
    {
      title: 'Data Science Virtual Intern',
      company: 'Altair & EduSkills, AICTE',
      period: 'July 2025 – September 2025',
      location: 'Remote',
      highlights: [
        'Led 3 end-to-end data science projects using Altair toolstack, delivering predictive models with 92% accuracy',
        'Developed automated data visualization dashboards processing 50,000+ data points',
        'Enabled stakeholders to identify business trends 3× faster with reproducible reporting workflows'
      ]
    },
    {
      title: 'AI/ML Intern',
      company: 'Edunet Foundation',
      period: 'June 2025 – August 2025',
      location: 'Remote',
      highlights: [
        'Built deep learning image classification system using transfer learning (ResNet50, VGG16)',
        'Achieved 92% accuracy on 10,000+ e-waste images across 6 categories',
        'Engineered custom CNN with data augmentation, improving F1-score from 0.76 to 0.89'
      ]
    },
    {
      title: 'AI Intern',
      company: 'Mirai School of Technology',
      period: 'June 2025 – July 2025',
      location: 'Remote',
      highlights: [
        'Developed 3 production-ready AI applications integrating GPT-4 and Gemini APIs',
        'Served 200+ daily users with 95% accuracy',
        'Applied advanced prompt engineering to reduce API costs by 30%'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'AICTE',
      period: 'January 2025 – March 2025',
      location: 'Remote',
      highlights: [
        'Built responsive food delivery web application using React.js with 98% mobile compatibility',
        'Reduced page load time by 45% (3.2s → 1.76s) via lazy loading and optimization',
        'Implemented RESTful API integration for real-time order tracking'
      ]
    },
    {
      title: 'Cloud Computing Intern',
      company: 'Google Cloud Skills Boost',
      period: 'July 2024 – December 2024',
      location: 'Remote',
      highlights: [
        'Fine-tuned LLMs using Vertex AI, improving model performance by 20%',
        'Implemented ML pipelines on GCP reducing time-to-production by 50%',
        'Completed 15+ hands-on labs covering BigQuery, Cloud Functions, and Vertex AI'
      ]
    }
  ],

  projects: [
    {
      title: 'KLAROS – AI-Powered Decision Intelligence Platform',
      period: 'Jan 2025 – Present',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel AI SDK', 'Supabase', 'Groq', 'OpenRouter'],
      highlights: [
        'Architected full-stack Decision Intelligence platform combining MCDA with LLM semantic scoring',
        'Engineered 5-layer production architecture with multi-LLM failover and Supabase Row-Level Security',
        'Shipped 12 production-grade features: weighted criteria engine, live what-if re-ranking, PDF export'
      ]
    },
    {
      title: 'Nexus Observatory – Real-Time GitHub OSS Analytics Dashboard',
      period: 'Feb 2025 – Present',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion', 'd3-geo', 'GitHub API'],
      highlights: [
        'Built live analytics platform visualizing 50,000+ GitHub repositories',
        'Engineered real-time data pipelines with sub-second refresh and 95+ Lighthouse score',
        'Implemented interactive d3-geo world contribution heatmap and sentiment analysis'
      ]
    },
    {
      title: 'QuantumShield – Hybrid Quantum-Classical Fraud Detection',
      period: 'Jan 2025',
      tech: ['Python', 'Qiskit', 'XGBoost', 'Streamlit', 'FastAPI'],
      highlights: [
        'Architected fraud detection platform combining classical ML (80%) with quantum algorithms (20%)',
        'Achieved 94–98% accuracy processing 1M+ transactions at 1,000–5,000 TPS throughput',
        'Reduced false positives by 10–20% with improved multi-dimensional fraud detection'
      ]
    },
    {
      title: 'TeslaPulse – Real-Time Stock Analytics Dashboard',
      period: 'Mar 2025',
      tech: ['React.js', 'FastAPI', 'WebSockets', 'Gemini API', 'Python'],
      highlights: [
        'Developed AI-powered stock analytics platform achieving 99.9% uptime',
        'Reduced latency by 70% via WebSocket streaming over HTTP polling',
        'Integrated Gemini-powered chatbot serving 300+ daily user interactions'
      ]
    }
  ],

  skills: {
    'Machine Learning & AI': ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'XGBoost', 'Deep Learning', 'CNN', 'YOLO', 'ResNet', 'NLP', 'Transfer Learning'],
    'LLM & AI Engineering': ['LLM Orchestration', 'Vercel AI SDK', 'Groq', 'OpenRouter', 'Gemini API', 'LangChain', 'CrewAI', 'Prompt Engineering', 'RAG Pipelines'],
    'Quantum Computing': ['Qiskit', 'QML', 'QAOA', 'Variational Quantum Circuits', 'Quantum Neural Networks', 'Hybrid Quantum-Classical Algorithms'],
    'Software Development': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'FastAPI', 'Streamlit', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Supabase'],
    'Cloud & DevOps': ['GCP', 'Vertex AI', 'BigQuery', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Vercel', 'Git']
  },

  education: {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    school: 'SRK Institute of Technology, Vijayawada, India',
    expected: 'August 2027',
    gpa: '8.6/10 (3.44/4.0)',
    coursework: ['Machine Learning', 'Deep Learning', 'Data Structures & Algorithms', 'DBMS', 'Software Engineering', 'Statistics', 'Computer Vision', 'Cloud Computing']
  },

  certifications: [
    { category: 'AI & Data Analytics', items: ['GitHub Professional Certificate', 'Career Essentials in Data Analytics – Microsoft', 'Career Essentials in Generative AI – Microsoft', 'Oracle Certified AI Foundations Associate'] },
    { category: 'Data Science & Engineering', items: ['IBM Data Science Professional Certificate – Coursera', 'Data Engineering Professional Certificate – Altair (AICTE)'] },
    { category: 'Development & APIs', items: ['Responsive Web Design – freeCodeCamp', 'Postman API Fundamentals Student Expert'] },
    { category: 'Project Management', items: ['Google Project Management Professional Certificate – Coursera'] }
  ]
};

export default function Resume() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF;
    link.download = 'Reddy_Santosh_Kumar_AI_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-outfit">
      <NavBar items={resumeNavItems} initialActive="Resume" />

      <Suspense fallback={<ResumeSkeleton />}>
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Reddy Santosh Kumar</h1>
            <p className="text-xl text-primary font-semibold mb-4">AI/ML Engineer & Full-Stack Developer</p>
            
            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{resumeData.contact.email}</span>
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a href={resumeData.contact.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Portfolio</span>
              </a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="gap-2 shadow-lg hover:shadow-xl"
                  onClick={handleDownload}
                >
                  <Download className="h-5 w-5" />
                  Download PDF
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  <Maximize2 className="h-5 w-5" />
                  {isFullscreen ? 'Exit Fullscreen' : 'View PDF'}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* PDF Viewer */}
          {isFullscreen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="fixed inset-0 z-50 rounded-none bg-background"
            >
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-10 bg-background/90 hover:bg-background p-2 rounded-lg border border-border transition-all"
              >
                <ChevronDown className="h-6 w-6 rotate-180" />
              </button>

              <div className="h-screen w-full">
                <iframe
                  src={`${RESUME_PDF}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-full"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          )}

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {resumeData.summary}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Professional Experience
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {resumeData.experience.map((exp, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Featured Projects
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {resumeData.projects.map((project, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="secondary">{project.period}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Cloud className="h-6 w-6 text-primary" />
              Technical Skills
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(resumeData.skills).map(([category, skills], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Education
            </h2>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{resumeData.education.degree}</CardTitle>
                <CardDescription className="text-base">{resumeData.education.school}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Expected Graduation</p>
                    <p className="font-semibold">{resumeData.education.expected}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GPA</p>
                    <p className="font-semibold">{resumeData.education.gpa}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.education.coursework.map((course, i) => (
                      <Badge key={i} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {resumeData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {cert.items.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            <span className="text-primary font-bold">✓</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground mb-4">Want the full resume with all details?</p>
            <Button size="lg" className="gap-2" onClick={handleDownload}>
              <Download className="h-5 w-5" />
              Download Complete Resume (PDF)
            </Button>
          </motion.div>
        </div>
      </section>
      </Suspense>
    </div>
  );
}
