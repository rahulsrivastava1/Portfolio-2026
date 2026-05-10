"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-card border-b border-[rgba(99,102,241,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-display font-bold text-xl gradient-text">
                RS
              </span>
              <span className="ml-2 text-sm text-[var(--text-secondary)] hidden sm:inline">
                {personal.name}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-indigo-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-300"
                layoutId="underline"
              />
            </motion.a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer
                        ${
                          isActive
                            ? "text-[var(--accent-secondary)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navActive"
                          className="absolute inset-0 rounded-lg bg-[rgba(99,102,241,0.12)]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  </li>
                );
              })}
              <li>
                <a
                  href={personal.resume}
                  className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg border border-[var(--accent-primary)] text-[var(--accent-secondary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-200"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(99,102,241,0.1)] transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 h-full w-72 z-50 glass-card border-l border-[var(--border-subtle)] md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--border-subtle)]">
                <span className="font-display font-bold text-lg gradient-text">
                  {personal.name}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col p-5 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(99,102,241,0.1)] transition-all font-medium"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="p-5 border-t border-[var(--border-subtle)]">
                <a
                  href={personal.resume}
                  className="block w-full text-center py-3 rounded-xl border border-[var(--accent-primary)] text-[var(--accent-secondary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all font-semibold text-sm"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
