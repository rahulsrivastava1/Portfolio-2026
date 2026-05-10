"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";

const categories = [
  { key: "backend", label: "Backend", color: "#22d3ee" },
  { key: "frontend", label: "Frontend", color: "#6366f1" },
  { key: "cloud", label: "Cloud & DB", color: "#a855f7" },
  { key: "tools", label: "Tools", color: "#f59e0b" },
];

/** Single skill pill with animated proficiency bar on hover */
function SkillPill({ name, level, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="group relative glass-card rounded-xl p-3.5 cursor-default hover:border-[rgba(99,102,241,0.3)] transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-xs text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

/**
 * Skills section — tab-filtered grid of skill pills with progress bars.
 */
export default function Skills() {
  const [active, setActive] = useState("backend");
  const currentSkills = skills[active] || [];
  const currentCat = categories.find((c) => c.key === active);

  return (
    <section id="skills" className="section-padding relative">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          subtitle="A curated toolkit of technologies I use to build modern, high-performance applications."
        />

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat.key
                  ? "text-white"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] glass-card"
              }`}
            >
              {active === cat.key && (
                <motion.span
                  layoutId="skillTab"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}cc, ${cat.color}88)`,
                    boxShadow: `0 0 20px ${cat.color}44`,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {currentSkills.map((skill, i) => (
            <SkillPill
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={currentCat?.color || "#6366f1"}
              index={i}
            />
          ))}
        </motion.div>

        {/* All skills cloud (decorative) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-5">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Redux", "GraphQL", "Docker", "Vercel", "Postman"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[rgba(255,255,255,0.06)] text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--border-subtle)] transition-all cursor-default"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
