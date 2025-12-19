import { personalInfo } from "@/lib/data";
import { Github, Linkedin, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-2xl md:text-3xl text-foreground/80 mb-6"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-8 text-foreground/60"
        >
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {personalInfo.location}
          </span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            Portfolio
          </a>
        </motion.div>

        <MotionWrapper delay={0.4}>
          <div className="backdrop-blur-md bg-primary/10 dark:bg-primary/5 rounded-xl border-l-4 border-primary p-6 text-left">
            <p className="text-foreground/80 leading-relaxed">
              {personalInfo.heroDescription}
            </p>
          </div>
        </MotionWrapper>
      </motion.div>
    </section>
  );
}
