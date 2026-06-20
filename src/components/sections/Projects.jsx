"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, X, Layers, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { getLiveDemoUrl } from "@/lib/utils";

const liveDemoUnavailableTitle = "Live demo not available";

function LiveDemoLink({ links, color, variant = "card", onClick }) {
  const liveUrl = getLiveDemoUrl(links);

  if (variant === "modal") {
    if (!liveUrl) {
      return (
        <span
          aria-disabled="true"
          title={liveDemoUnavailableTitle}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text-muted)] border border-[var(--border-subtle)] opacity-50 cursor-not-allowed select-none"
        >
          <ExternalLink size={16} /> Live Demo
        </span>
      );
    }

    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
        style={{
          background: `linear-gradient(135deg, ${color}cc, ${color}88)`,
          boxShadow: `0 4px 20px ${color}33`,
        }}
      >
        <ExternalLink size={16} /> Live Demo
      </a>
    );
  }

  if (!liveUrl) {
    return (
      <span
        aria-disabled="true"
        title={liveDemoUnavailableTitle}
        className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] opacity-50 cursor-not-allowed select-none"
      >
        <ExternalLink size={13} /> Live Demo
      </span>
    );
  }

  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] transition-colors"
    >
      <ExternalLink size={13} /> Live Demo
    </a>
  );
}

/**
 * Project card with hover reveal and click-to-expand modal.
 */
function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(project)}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-[rgba(99,102,241,0.35)] transition-all duration-300 flex flex-col"
    >
      {/* Color accent top bar */}
      <div
        className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${project.color}cc, ${project.color}44)` }}
      />

      {/* Card header */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category badge */}
        <span
          className="self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
          style={{
            background: `${project.color}18`,
            color: project.color,
            border: `1px solid ${project.color}33`,
          }}
        >
          {project.category}
        </span>

        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:gradient-text transition-all">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2 py-1 rounded-md border border-[rgba(255,255,255,0.07)] text-[var(--text-muted)] bg-[rgba(255,255,255,0.03)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            <GitBranch size={13} /> Code
          </a>
          <LiveDemoLink
            links={project.links}
            variant="card"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="ml-auto text-xs text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
            View details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/** Full-screen modal for project details */
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card rounded-2xl w-full max-w-2xl overflow-hidden border border-[rgba(99,102,241,0.25)]"
        >
          {/* Top bar */}
          <div
            className="h-1.5 w-full"
            style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }}
          />

          <div className="p-6 sm:p-8">
            {/* Header row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
                  style={{
                    background: `${project.color}18`,
                    color: project.color,
                    border: `1px solid ${project.color}33`,
                  }}
                >
                  {project.category}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(99,102,241,0.1)] transition-all flex-shrink-0 ml-4"
              >
                <X size={20} />
              </button>
            </div>

            {/* Description */}
            <div className="flex items-start gap-2 mb-6">
              <Zap size={16} className="text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
              <p className="text-[var(--text-secondary)] leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Layers size={14} className="text-[var(--text-muted)]" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Tech Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-primary)] hover:bg-[rgba(99,102,241,0.1)] transition-all"
              >
                <GitBranch size={16} /> View Code
              </a>
              <LiveDemoLink links={project.links} color={project.color} variant="modal" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Projects section — interactive grid of project cards with detail modal.
 */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-padding relative">
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[200px] bg-indigo-600/8 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Work"
          title="Projects Showcase"
          subtitle="A selection of projects I've built — ranging from full-stack platforms to data-rich dashboards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
