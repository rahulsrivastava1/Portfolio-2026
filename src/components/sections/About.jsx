"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personal } from "@/data/portfolio";

const stats = [
  { icon: Code2, value: "3+", label: "Years Experience" },
  { icon: Globe, value: "10+", label: "Projects Shipped" },
  { icon: Cpu, value: "15+", label: "Technologies" },
  { icon: Users, value: "2", label: "Companies" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/**
 * About Me section — bio, quick stats, and a decorative code card.
 */
export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="A passionate software engineer who loves turning ideas into elegant digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="space-y-6">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeIn}
              className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed"
            >
              I&apos;m{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                Rahul Srivastava
              </span>
              , a{" "}
              <span className="gradient-text font-semibold">
                Full Stack Software Engineer
              </span>{" "}
              with 3+ years of professional experience crafting scalable, high-performance web
              applications.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
              className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed"
            >
              My expertise spans the entire stack — from building responsive, accessible UIs
              with{" "}
              <span className="text-[var(--accent-secondary)] font-medium">
                React &amp; Next.js
              </span>{" "}
              to architecting robust backend services using{" "}
              <span className="text-[var(--accent-secondary)] font-medium">
                Django &amp; Node.js
              </span>
              , backed by{" "}
              <span className="text-[var(--accent-secondary)] font-medium">
                PostgreSQL &amp; MongoDB
              </span>
              .
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
              className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed"
            >
              Known for adaptability, meticulous attention to detail, and a drive to craft
              innovative, user-focused solutions. I thrive in collaborative environments and
              enjoy solving complex engineering challenges with clean, maintainable code.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeIn}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                "Clean Code",
                "Scalable Architecture",
                "Performance Optimization",
                "Team Collaboration",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border-subtle)] bg-[rgba(99,102,241,0.08)] text-[var(--accent-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — decorative code block + stats */}
          <div className="space-y-6">
            {/* Code snippet card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-2xl overflow-hidden glow-border"
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs text-[var(--text-muted)] font-mono">
                  rahul.config.js
                </span>
              </div>
              <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-[#818cf8]">const</span>{" "}
                  <span className="text-[#22d3ee]">rahul</span>{" "}
                  <span className="text-[#f0f0ff]">= {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#a855f7]">name</span>
                  <span className="text-[#f0f0ff]">: </span>
                  <span className="text-emerald-400">&quot;Rahul Srivastava&quot;</span>
                  <span className="text-[#f0f0ff]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#a855f7]">role</span>
                  <span className="text-[#f0f0ff]">: </span>
                  <span className="text-emerald-400">&quot;Software Engineer&quot;</span>
                  <span className="text-[#f0f0ff]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#a855f7]">experience</span>
                  <span className="text-[#f0f0ff]">: </span>
                  <span className="text-amber-400">&quot;3+ years&quot;</span>
                  <span className="text-[#f0f0ff]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#a855f7]">stack</span>
                  <span className="text-[#f0f0ff]">: [</span>
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-400">&quot;Django&quot;</span>
                  <span className="text-[#f0f0ff]">, </span>
                  <span className="text-emerald-400">&quot;Node.js&quot;</span>
                  <span className="text-[#f0f0ff]">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-400">&quot;PostgreSQL&quot;</span>
                  <span className="text-[#f0f0ff]">, </span>
                  <span className="text-emerald-400">&quot;MongoDB&quot;</span>
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-400">&quot;React&quot;</span>
                  <span className="text-[#f0f0ff]">, </span>
                  <span className="text-emerald-400">&quot;Next.js&quot;</span>
                  <span className="text-[#f0f0ff]">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#f0f0ff]">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#a855f7]">available</span>
                  <span className="text-[#f0f0ff]">: </span>
                  <span className="text-[#818cf8]">true</span>
                  {"\n"}
                  <span className="text-[#f0f0ff]">{"}"}</span>
                </code>
              </pre>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 hover:border-[rgba(99,102,241,0.3)] transition-all"
                >
                  <div className="p-2 rounded-lg bg-[rgba(99,102,241,0.1)]">
                    <Icon size={16} className="text-[var(--accent-secondary)]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold font-display gradient-text">{value}</p>
                    <p className="text-xs text-[var(--text-muted)]">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
