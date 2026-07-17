import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Terminal, Users } from "lucide-react";

const modules = [
  {
    icon: Cpu,
    name: "IT Support & Troubleshooting",
    tags: [
      "Technical Support",
      "Hardware Troubleshooting",
      "Software Troubleshooting",
      "End-User Support",
      "Root Cause Analysis",
      "Equipment Maintenance",
      "Technical Documentation",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Systems & Security",
    tags: ["Network & System Security Fundamentals", "Account Access Management"],
  },
  {
    icon: Terminal,
    name: "Programming & Web",
    tags: ["Java", "Python", "JavaScript", "HTML5", "CSS3", "React.js", "Google Apps Script"],
  },
  {
    icon: Users,
    name: "Collaboration & Delivery",
    tags: ["Customer Service", "Technical Communication", "Team Leadership", "Time Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-console-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-accent-info mb-3"
        >
          // 03 · skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-12"
        >
          Capability modules
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {modules.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3, borderColor: "rgba(56,189,248,0.4)" }}
              className="rounded-2xl border border-console-line bg-console-surface p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-info/10 text-accent-info">
                  <m.icon size={18} />
                </span>
                <h3 className="font-display font-semibold text-text-primary">{m.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-text-muted border border-console-line rounded-md px-2.5 py-1 hover:border-accent-info/40 hover:text-accent-info transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
