import { motion } from "framer-motion";
import StatusDot from "./StatusDot";

const info = [
  { key: "role", value: "IT Support / Technical Support" },
  { key: "location", value: "Jakarta, Indonesia" },
  { key: "education", value: "B.Sc. Computer Science — Binus University (GPA 3.27/4.00)" },
  { key: "specialization", value: "Cyber Security concentration" },
  { key: "status", value: "Open to opportunities", accent: true },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-console-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-info mb-3">
              // 01 · about
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary leading-tight">
              System info
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed">
              I graduated in Computer Science and spent the past year in
              hands-on technical roles — first fixing account-access issues
              and internal tooling as a coding instructor, now troubleshooting
              hardware and software as a robotics instructor. I like the part
              of tech work most people skip past: figuring out why something
              broke, fixing it, and writing it down so it doesn't happen
              again.
            </p>
          </div>

          <div className="rounded-2xl border border-console-line bg-console-surface overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-console-line font-mono text-xs text-text-dim">
              <span>profile.json</span>
              <span className="flex items-center gap-1.5 text-accent-online">
                <StatusDot size="sm" pulse={false} />
                synced
              </span>
            </div>
            <dl className="divide-y divide-console-line">
              {info.map((row) => (
                <div
                  key={row.key}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-4 font-mono text-sm"
                >
                  <dt className="text-text-dim w-full sm:w-36 shrink-0">{row.key}:</dt>
                  <dd
                    className={
                      row.accent
                        ? "text-accent-online flex items-center gap-2"
                        : "text-text-primary"
                    }
                  >
                    {row.accent && <StatusDot size="sm" />}
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
