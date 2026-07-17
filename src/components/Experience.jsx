import { motion } from "framer-motion";
import StatusDot from "./StatusDot";

const tickets = [
  {
    id: "TCK-002",
    title: "Robotic Instructor",
    org: "Cyberspace Edu Tech",
    period: "Feb 2026 — Present",
    status: "in_progress",
    points: [
      "Provide hands-on technical support setting up, configuring, and troubleshooting robotics kits, sensors, and controllers during lessons.",
      "Diagnose and resolve hardware malfunctions and software/programming errors in real time to minimize class disruption.",
      "Translate hardware + programming issues into clear, step-by-step explanations for non-technical users.",
      "Maintain and inventory equipment to keep devices configured, updated, and class-ready.",
    ],
  },
  {
    id: "TCK-001",
    title: "Coding Instructor & Interim Lead Teacher",
    org: "KodeKiddo",
    period: "Jul 2025 — Feb 2026",
    status: "resolved",
    points: [
      "Provided direct technical support and troubleshooting to students facing issues with devices, apps, and learning platforms.",
      "Designed and maintained an internal web-based system (Google Apps Script) for account booking, resolving recurring access conflicts among staff.",
      "Performed root cause analysis on recurring technical issues and documented solutions for the team to reuse.",
      "Promoted to Interim Lead Teacher — led instructor operations, scheduling, and service quality standards.",
    ],
  },
];

const statusStyles = {
  in_progress: {
    label: "IN PROGRESS",
    color: "pending",
    text: "text-accent-pending",
    border: "border-accent-pending/30",
    bg: "bg-accent-pending/5",
  },
  resolved: {
    label: "RESOLVED",
    color: "online",
    text: "text-accent-online",
    border: "border-accent-online/30",
    bg: "bg-accent-online/5",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-console-bg-2">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-accent-info mb-3"
        >
          // 02 · experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-4"
        >
          Ticket log
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted max-w-xl mb-12"
        >
          Every role, logged like the tickets I actually work — what came in,
          what I did about it, and where it stands now.
        </motion.p>

        <div className="space-y-6">
          {tickets.map((t, i) => {
            const s = statusStyles[t.status];
            return (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`rounded-2xl border ${s.border} bg-console-surface hover:bg-console-surface-2 transition-colors duration-300 overflow-hidden`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-console-line">
                  <div className="flex items-center gap-3 font-mono text-xs text-text-dim">
                    <span className="text-text-primary">{t.id}</span>
                    <span>·</span>
                    <span>{t.period}</span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] tracking-wide ${s.bg} ${s.text}`}
                  >
                    <StatusDot color={s.color} size="sm" pulse={t.status === "in_progress"} />
                    {s.label}
                  </span>
                </div>
                <div className="px-6 py-6">
                  <h3 className="font-display font-semibold text-xl text-text-primary">
                    {t.title}
                  </h3>
                  <p className="font-mono text-sm text-accent-info mt-1 mb-4">{t.org}</p>
                  <ul className="space-y-2.5">
                    {t.points.map((p, idx) => (
                      <li key={idx} className="flex gap-3 text-text-muted text-sm leading-relaxed">
                        <span className="text-accent-info mt-1.5 shrink-0">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
