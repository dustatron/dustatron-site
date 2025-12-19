import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-6"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Globe className="w-6 h-6" />
          </a>
        </motion.div>
        <p className="text-foreground/50 text-sm">
          Built with Astro + React + Tailwind
        </p>
      </div>
    </footer>
  );
}
