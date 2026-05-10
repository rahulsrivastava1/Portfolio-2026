"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pen, BookOpen, Star, Award, ExternalLink, X, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/data/portfolio";

const iconMap = {
  pen: Pen,
  book: BookOpen,
  star: Star,
  award: Award,
};

const extractText = (html) => {
  if (typeof window === "undefined") return html.replace(/<[^>]+>/g, "");
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

/**
 * Achievements section — horizontal-scroll cards on mobile, grid on desktop.
 */
export default function Achievements() {
  const [mediumBlogs, setMediumBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMediumBlogs = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@srivastavar433"
        );
        const data = await res.json();
        
        if (data.status === "ok") {
          const blogs = data.items.map((item, index) => {
            let plainText = extractText(item.description).replace(/\s+/g, ' ').trim();
            let excerpt = plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;
            
            return {
              id: `medium-${index}`,
              title: item.title,
              description: `"${item.title}" — ${excerpt}`,
              platform: "Medium",
              icon: "book",
              link: item.link,
              color: "#6366f1",
            };
          });
          setMediumBlogs(blogs);
        }
      } catch (error) {
        console.error("Error fetching Medium blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediumBlogs();
  }, []);

  const gfgArticle = achievements.find((a) => a.platform === "GeeksforGeeks");
  const allAchievements = gfgArticle ? [gfgArticle, ...mediumBlogs] : mediumBlogs;
  const homescreenAchievements = gfgArticle ? [gfgArticle, ...mediumBlogs.slice(0, 3)] : mediumBlogs.slice(0, 3);

  const AchievementCard = ({ a, i }) => {
    const Icon = iconMap[a.icon] || Award;
    const color = a.color || "#6366f1";
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
        <div
          className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${color}18`,
            border: `1px solid ${color}33`,
          }}
        >
          <Icon size={20} style={{ color }} />
        </div>

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
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
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
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {isLoading ? (
            achievements.slice(0, 4).map((a, i) => <AchievementCard key={a.id} a={a} i={i} />)
          ) : (
            homescreenAchievements.map((a, i) => <AchievementCard key={a.id} a={a} i={i} />)
          )}
        </div>

        {!isLoading && mediumBlogs.length > 3 && (
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-primary)] font-semibold hover:border-[rgba(99,102,241,0.5)] transition-all duration-300"
            >
              View All Articles
              <ChevronRight size={18} />
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0f111a] border border-[var(--border-color)] rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)] bg-[#0f111a] z-10">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">All Publications</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    A complete list of my articles, blogs, and features.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-[var(--surface-color)] text-[var(--text-secondary)] hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(99,102,241,0.3) transparent" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {allAchievements.map((a, i) => (
                    <AchievementCard key={a.id} a={a} i={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
