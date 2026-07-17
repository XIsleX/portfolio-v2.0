import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StatusDot from "./StatusDot";

const links = [
  { id: "about", label: "status" },
  { id: "experience", label: "log" },
  { id: "skills", label: "modules" },
  { id: "projects", label: "cases" },
  { id: "contact", label: "connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-console-bg/90 backdrop-blur border-b border-console-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between font-mono text-sm">
        <a href="#top" className="flex items-center gap-2 text-text-primary">
          <StatusDot color="online" size="sm" />
          <span className="tracking-tight">ravel@jonathan:~$</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-text-muted">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="hover:text-accent-info transition-colors duration-200"
            >
              ./{l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-console-line px-4 py-1.5 text-text-primary hover:border-accent-info hover:text-accent-info transition-colors duration-200"
        >
          hire_me()
        </a>
      </div>
    </motion.header>
  );
}
