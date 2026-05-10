"use client";

import { motion } from "framer-motion";
import { Pen, BookOpen, Star, Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/data/portfolio";

const iconMap = {
  pen: Pen,
  book: BookOpen,
  star: Star,
  award: Award,
};

/**
 * Achievements section — horizontal-scroll cards on mobile, grid on desktop.
 */
export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      {/* Glow */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Recognition"
          title="Achievements"
          subtitle="Milestones, and publications that reflect my professional journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Award;
            const color = a.color;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-card rounded-2xl p-6 flex gap-5 hover:border-[rgba(99,102,241,0.3)] transition-all duration-300 group"
              >
                {/* Icon bubble */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}33`,
                  }}
                >
                  <Icon size={20} style={{ color }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${color}18`, color, border: `1px solid ${color}33` }}
                    >
                      {a.platform}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {a.description}
                  </p>
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold transition-colors duration-200"
                      style={{ color }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                      Read Article
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
