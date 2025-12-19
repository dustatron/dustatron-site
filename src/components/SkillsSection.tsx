import { skills } from "@/lib/data";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";

export default function SkillsSection() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-5 h-full">
                <h3 className="text-lg font-bold text-primary mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm rounded-full bg-background/50 text-foreground/80 border border-border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
