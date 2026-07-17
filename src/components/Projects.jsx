import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import StatusDot from "./StatusDot";

const cases = [
  {
    status: "resolved",
    title: "Internal Account Booking System",
    context: "KodeKiddo",
    description:
      "Instructors kept double-booking shared accounts, causing scheduling conflicts. Built a lightweight web tool with Google Apps Script to manage bookings and reservations, removing the conflict entirely.",
    tags: ["Google Apps Script", "Web App", "Process Automation"],
  },
  {
    status: "resolved",
    title: "Robotics Equipment Troubleshooting Workflow",
    context: "Cyberspace Edu Tech",
    description:
      "Classes were losing time to unresolved hardware issues mid-lesson. Standardized a quick diagnostic routine for kits, sensors, and controllers to isolate hardware vs. software faults fast.",
    tags: ["Hardware Diagnostics", "Documentation", "Training"],
  },
  {
    status: "in_progress",
    title: "Helpdesk Automation Script",
    context: "Personal project",
    description:
      "A Python script that automates routine support tasks — checking machine status across a device list and generating a plain-language report technicians can act on.",
    tags: ["Python", "Automation"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-console-bg-2">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent-info mb-3"
            >
              // 04 · case studies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display font-bold text-3xl sm:text-4xl text-text-primary"
            >
              Resolved &amp; in progress
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-text-muted border border-console-line rounded-lg px-4 py-2 hover:border-accent-info hover:text-accent-info transition-colors"
          >
            <GithubIcon size={16} />
            view full repo history
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-console-line bg-console-surface p-6 hover:border-accent-info/30 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide uppercase ${
                    c.status === "resolved" ? "text-accent-online" : "text-accent-pending"
                  }`}
                >
                  <StatusDot
                    color={c.status === "resolved" ? "online" : "pending"}
                    size="sm"
                    pulse={c.status === "in_progress"}
                  />
                  {c.status === "resolved" ? "resolved" : "in progress"}
                </span>
                <ArrowUpRight size={16} className="text-text-dim" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary leading-snug">
                {c.title}
              </h3>
              <p className="font-mono text-xs text-accent-info mt-1 mb-3">{c.context}</p>
              <p className="text-text-muted text-sm leading-relaxed flex-1">{c.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-text-dim border border-console-line rounded-md px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
