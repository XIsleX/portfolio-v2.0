import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import StatusDot from "./StatusDot";
import ravelPhoto from "../assets/ravel-photo.jpg";
import { useUptime } from "../hooks/useUptime";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  const uptime = useUptime("2025-07-01");

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-console-bg bg-grid overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-20 w-[32rem] h-[32rem] rounded-full bg-accent-info/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] rounded-full bg-accent-online/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center"
      >
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-online border border-accent-online/30 bg-accent-online/5 rounded-full px-3 py-1 mb-6"
          >
            <StatusDot color="online" size="sm" />
            system status: available for hire
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-text-primary"
          >
            Ravel Jonathan
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-accent-info text-base sm:text-lg"
          >
            &gt; IT Support &amp; Technical Support Specialist
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-text-muted text-base sm:text-lg max-w-xl leading-relaxed"
          >
            I keep people's systems running — diagnosing hardware and software
            issues, resolving access conflicts, and explaining fixes in plain
            language. Computer Science graduate with real-world troubleshooting
            hours across web systems and robotics equipment.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-info text-console-bg font-mono text-sm font-medium px-5 py-3 hover:bg-accent-info/85 transition-colors"
            >
              <Mail size={16} />
              contact_me
            </a>
            <a
              href="/Ravel_Jonathan_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-console-line text-text-primary font-mono text-sm px-5 py-3 hover:border-accent-info hover:text-accent-info transition-colors"
            >
              <Download size={16} />
              download_cv
            </a>
            <a
              href="https://github.com/XIsleX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-console-line text-text-muted font-mono text-sm px-5 py-3 hover:border-accent-info hover:text-accent-info transition-colors"
            >
              <GithubIcon size={16} />
              github
            </a>
            <a
              href="https://www.linkedin.com/in/ravel-jonathan-39819932b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-console-line text-text-muted font-mono text-sm px-5 py-3 hover:border-accent-info hover:text-accent-info transition-colors"
            >
              <LinkedinIcon size={16} />
              linkedin
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 font-mono text-xs text-text-dim flex items-center gap-2"
          >
            <span className="text-accent-online">●</span>
            uptime: {uptime} in technical support &amp; instruction roles
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto md:mx-0">
          <div className="relative w-56 sm:w-64 md:w-full max-w-xs aspect-[3/4] rounded-2xl border border-console-line bg-console-surface overflow-hidden">
            <img
              src={ravelPhoto}
              alt="Portrait of Ravel Jonathan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-console-bg/85 backdrop-blur border-t border-console-line px-4 py-3 font-mono text-[11px] text-text-muted">
              <div className="flex items-center justify-between">
                <span className="text-text-primary">ravel_jonathan.jpg</span>
                <span className="flex items-center gap-1.5 text-accent-online">
                  <StatusDot color="online" size="sm" pulse={false} />
                  verified
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-console-line/60" />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-dim font-mono text-[11px]"
      >
        scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
