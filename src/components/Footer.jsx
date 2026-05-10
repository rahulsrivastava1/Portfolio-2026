"use client";

import { GitBranch, ExternalLink, Mail, Heart } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(99,102,241,0.1)] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <span className="font-display font-bold text-lg gradient-text">Rahul Srivastava</span>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">Software Engineer · Full Stack Developer</p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--text-muted)] order-last sm:order-none text-center">
          © {year} Rahul Srivastava · Made with{" "}
          <Heart size={11} className="text-red-400 fill-red-400 inline-block -mt-0.5 mx-0.5" />{" "}
          using Next.js &amp; Tailwind
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
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
              className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent-secondary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
