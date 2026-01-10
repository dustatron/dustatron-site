import { motion } from "framer-motion";
import { ThemeToggle } from "./ui/theme-toggle";

export default function GlassHeader() {
  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Community", href: "#community" },
    { label: "Education", href: "#education" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <nav className="max-w-5xl mx-auto backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-full border border-white/20 dark:border-white/10 px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
        >
          DM
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
