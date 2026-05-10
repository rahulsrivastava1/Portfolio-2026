"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";

/**
 * Experience section — vertical timeline with animated connectors,
 * company card, and bullet-point descriptions.
 */
export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Career"
          title="Work Experience"
          subtitle="Professional roles where I delivered engineering impact at scale."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent-primary)] via-[rgba(99,102,241,0.3)] to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline node (mobile: left edge, desktop: center) */}
                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: i * 0.15 + 0.2 }}
                      className="w-10 h-10 rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg-primary)] flex items-center justify-center shadow-lg shadow-indigo-500/20"
                    >
                      <Briefcase size={14} className="text-[var(--accent-primary)]" />
                    </motion.div>
                  </div>

                  {/* Card — alternates left/right on desktop */}
                  <div
                    className={`flex-1 ml-8 md:ml-0 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                    } md:w-[calc(50%-2.5rem)]`}
                  >
                    <div className="glass-card rounded-2xl p-6 hover:border-[rgba(99,102,241,0.3)] hover:glow-border transition-all duration-300 group">
                      {/* Header */}
                      <div
                        className={`flex flex-col gap-1 mb-4 ${
                          isEven ? "md:items-end" : "md:items-start"
                        }`}
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(99,102,241,0.15)] text-[var(--accent-secondary)] ${
                              isEven ? "md:order-last" : ""
                            }`}
                          >
                            <Calendar size={10} />
                            {exp.duration}
                          </span>
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] text-[var(--text-muted)]">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold font-display text-[var(--text-primary)] mt-1">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold gradient-text">{exp.company}</p>
                        <p className="text-xs text-[var(--text-muted)]">{exp.tech}</p>
                      </div>

                      {/* Bullets */}
                      <ul className={`space-y-2 ${isEven ? "md:text-right" : ""}`}>
                        {exp.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className={`flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed ${
                              isEven ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <ChevronRight
                              size={12}
                              className="mt-1 flex-shrink-0 text-[var(--accent-primary)]"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
