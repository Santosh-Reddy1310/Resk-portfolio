"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface NavBarProps {
  items: NavItem[];
  className?: string;
  initialActive?: string;
}

export function NavBar({ items, className, initialActive }: NavBarProps) {
  const defaultActive = initialActive ?? items[0]?.name ?? "";
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [isMobile, setIsMobile] = useState(false);
  const getInitialTheme = () => {
    if (typeof window === "undefined") {
      return "light";
    }
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveTab(defaultActive);
  }, [defaultActive]);

  if (!items.length) {
    return null;
  }

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const navThemeClasses = theme === "dark"
    ? "bg-slate-950/70 border-slate-700 text-slate-50"
    : "bg-white/90 border-slate-200 text-slate-900";

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className
      )}
    >
      <div className={cn("flex items-center gap-3 border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto", navThemeClasses)}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-background/80 text-foreground/70 transition hover:text-primary"
        >
          {theme === "dark" ? <Sun size={16} strokeWidth={2.2} /> : <Moon size={16} strokeWidth={2.2} />}
        </button>
      </div>
    </div>
  );
}
