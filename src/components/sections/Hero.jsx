"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, GitBranch, ExternalLink, Mail, Eye } from "lucide-react";
import { personal } from "@/data/portfolio";

const roles = [
  "Backend Developer",
  "Backend-focused Full Stack Developer",
  "Full Stack Developer",
];

/**
 * Hero section — animated typewriter tagline, floating orbs, CTA buttons.
 */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mesh / orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large glow orb top-left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        {/* Large glow orb bottom-right */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px]" />
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-600/6 blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[rgba(99,102,241,0.08)] text-xs font-medium text-[var(--accent-secondary)] tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4"
        >
          <span className="text-[var(--text-primary)]">Hi, I&apos;m </span>
          <span className="gradient-text">Rahul</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-12 sm:h-14 flex items-center justify-center mb-6"
        >
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--text-secondary)]">
            {displayed}
            <span className="cursor-blink text-[var(--accent-primary)] ml-0.5">|</span>
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Software Engineer with{" "}
          <span className="text-[var(--text-primary)] font-medium">3+ years</span> of experience
          building scalable full-stack web applications with React, Next.js, Django &amp; Node.js.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Eye height={24} width={24}/>
              <span className="relative z-10">View My Work</span>
            </div>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-xl font-semibold border border-[var(--border-glow)] text-[var(--text-primary)] hover:bg-[rgba(99,102,241,0.1)] hover:border-[var(--accent-primary)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Mail height={24} width={24}/>
              <span className="relative z-10">Get In Touch</span>
            </div>
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {[
            { icon: GitBranch, href: personal.github, label: "GitHub" },
            { icon: ExternalLink, href: personal.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-primary)] hover:bg-[rgba(99,102,241,0.1)] transition-all duration-200 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll prompt */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-2 mx-auto text-[var(--text-muted)] hover:text-[var(--accent-secondary)] transition-colors group cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
