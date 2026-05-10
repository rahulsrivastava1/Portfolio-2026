"use client";

import { motion } from "framer-motion";

/**
 * Reusable section heading component with animated accent line.
 */
export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14 md:mb-20"
    >
      {/* Eyebrow label */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-indigo-500" />
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-secondary)]">
          {label}
        </span>
        <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-indigo-500" />
      </div>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
