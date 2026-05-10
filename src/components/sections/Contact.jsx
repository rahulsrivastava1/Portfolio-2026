"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitBranch, ExternalLink, Send, MapPin, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personal } from "@/data/portfolio";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: GitBranch, label: "GitHub", href: personal.github, handle: "@rahulsrivastava1" },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    href: personal.linkedin,
    handle: "in/rahulsriv/",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${personal.email}`,
    handle: personal.email,
  },
];

/**
 * Contact section with functional-looking form (UI only) and social links.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!form.name) {
      errors.name = "Name is required!";
    }
    if (!form.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(form.email))
      errors.email = "Email is not in correct format!";
    if (!form.message) {
      errors.message = "Message is required!";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        setLoading(true);
        emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Rahul Srivastava | Portfolio",
            from_email: form.email,
            to_email: "srivastavar433@gmail.com",
            message: form.message,
          },
          "TRF2pPZweW-NdS7Va"
        )
        .then(
          () => {
            setLoading(false);
            setSendError(false);
            setForm({ name: "", email: "", message: "" });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
          },
          (error) => {
            setLoading(false);
            setSendError(true);
            console.error(error);
          }
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
      setSendError(true);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[300px] bg-indigo-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hello? I'm always open to exciting opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} className="text-[var(--accent-primary)]" />
                <span className="text-sm text-[var(--text-secondary)]">India · Remote Friendly</span>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Whether you&apos;re looking to hire a Software Engineer, collaborate on an open-source
                project, or just want to connect — I&apos;d love to hear from you!
              </p>

              {/* Social links */}
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, label, href, handle }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] group-hover:bg-[rgba(99,102,241,0.1)] transition-all">
                      <Icon size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-secondary)] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)] transition-colors">
                        {handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-72"
              >
                <CheckCircle size={48} className="text-emerald-400 mb-4" />
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border ${formErrors.name ? 'border-red-400' : 'border-[var(--border-subtle)]'} text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[rgba(99,102,241,0.05)] transition-all text-sm`}
                    />
                    {formErrors.name && <p className="text-xs text-red-400 mt-1">{formErrors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border ${formErrors.email ? 'border-red-400' : 'border-[var(--border-subtle)]'} text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[rgba(99,102,241,0.05)] transition-all text-sm`}
                    />
                    {formErrors.email && <p className="text-xs text-red-400 mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border ${formErrors.message ? 'border-red-400' : 'border-[var(--border-subtle)]'} text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[rgba(99,102,241,0.05)] transition-all text-sm resize-none`}
                  />
                  {formErrors.message && <p className="text-xs text-red-400 mt-1">{formErrors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSendError(false)}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {sendError && (
                  <p className="text-center text-sm text-red-400">
                    Something went wrong, please try again later.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
