import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import StatusDot from "./StatusDot";

const channels = [
  {
    icon: Mail,
    label: "email",
    value: "raveljonathan.zhang@gmail.com",
    href: "mailto:raveljonathan.zhang@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "0896-1818-6161",
    href: "tel:089618186161",
  },
  {
    icon: LinkedinIcon,
    label: "linkedin",
    value: "/in/ravel-jonathan",
    href: "https://www.linkedin.com/in/ravel-jonathan-39819932b/",
  },
  {
    icon: GithubIcon,
    label: "github",
    value: "/XIsleX",
    href: "https://github.com/XIsleX",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-console-bg bg-grid">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-accent-info mb-3"
        >
          // 05 · connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-bold text-3xl sm:text-4xl text-text-primary"
        >
          Open a ticket.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-text-muted max-w-lg mx-auto"
        >
          Looking for someone reliable on your support desk? I usually
          respond within a day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12 grid sm:grid-cols-2 gap-4 text-left"
        >
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-console-line bg-console-surface px-5 py-4 hover:border-accent-info/40 hover:bg-console-surface-2 transition-colors duration-200"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-info/10 text-accent-info shrink-0">
                <c.icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wide text-text-dim">
                  {c.label}
                </span>
                <span className="block text-text-primary text-sm truncate">{c.value}</span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 border-t border-console-line pt-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-text-dim">
          <span className="flex items-center gap-2">
            <StatusDot size="sm" pulse={false} />
            all systems operational
          </span>
          <span>© {new Date().getFullYear()} Ravel Jonathan — built with React, Tailwind &amp; Framer Motion</span>
        </div>
      </div>
    </section>
  );
}
