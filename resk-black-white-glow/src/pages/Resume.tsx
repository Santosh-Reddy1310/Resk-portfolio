import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Sparkles, BookOpenCheck, Home, Briefcase } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { projects, experiences } from '@/data/portfolio';

const timeline = experiences.map((entry) => ({
  year: entry.period,
  role: entry.title,
  company: entry.company,
  description: entry.description,
}));

const skills = [
  {
    title: 'Core Stack',
    items: ['TypeScript', 'React 18+', 'Vite + Tailwind', 'Node.js', 'Supabase/LN']
  },
  {
    title: 'AI + Data',
    items: ['OpenAI + LangChain', 'Realtime dashboards', 'Prompt engineering', 'Data storytelling']
  },
  {
    title: 'Craft & Delivery',
    items: ['Framer Motion', 'GSAP accents', 'Design systems', 'Mentorship + reviews']
  }
];

const highlights = [
  { label: 'Projects shipped', value: `${projects.length}+` },
  { label: 'Medical AI tooling', value: '12 systems' },
  { label: 'Avg. cycle time', value: '1.7 weeks' }
];

const resumeNavItems = [
  { name: 'Resume', url: '/resume', icon: BookOpenCheck },
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/#about', icon: Sparkles },
  { name: 'Projects', url: '/#projects', icon: Briefcase },
  { name: 'Contact', url: '/#contact', icon: Download }
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground font-outfit">
      <NavBar items={resumeNavItems} initialActive="Resume" />

      <section className="py-20 md:py-28 flex items-center justify-center">
        <div className="relative max-w-4xl w-full px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-[36px] border border-border bg-white/80 dark:bg-slate-950/70 shadow-[0_25px_100px_rgba(15,23,42,0.18)] min-h-[520px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-white dark:from-slate-900/30 dark:to-slate-900/90 opacity-80" />
            <div className="relative p-10 space-y-10">
              <div className="flex flex-col items-center gap-4 text-center">
                <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground">
                  Reddy Santosh Kumar
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Creative Resume Snapshot
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  AI-centric full stack engineer blending human-first interfaces with medical-grade dashboards and high-performance tooling.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="gap-2"
                >
                  <a
                    href="https://drive.google.com/file/d/1Rv4wERLV1SA1Log7Xyc7nqVWnBQBrGQv/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {highlights.map((highlight) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-border bg-background/60 dark:bg-slate-900/80 p-4 text-center shadow-sm"
                  >
                    <p className="text-3xl font-bold">{highlight.value}</p>
                    <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                      {highlight.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ translateY: -4 }}
                    className="rounded-3xl border border-border bg-white/60 dark:bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">{skill.title}</h3>
                    </div>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-foreground/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-5">
                {timeline.map((entry) => (
                  <motion.article
                    key={entry.year}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl border border-border bg-white/80 dark:bg-slate-950/70 p-6 shadow-md"
                  >
                    <div className="flex items-center justify-between text-sm uppercase tracking-[0.4em] text-muted-foreground">
                      <span>{entry.year}</span>
                      <span>{entry.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">{entry.role}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {entry.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
