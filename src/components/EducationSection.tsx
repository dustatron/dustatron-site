import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {entry.school}
                    </h3>
                    <p className="text-foreground/70">{entry.program}</p>
                  </div>
                  <span className="text-sm text-foreground/60 mt-2 md:mt-0">
                    {entry.years}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
