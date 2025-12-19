import { workExperience } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {job.position}
                    </h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-foreground/60 mt-2 md:mt-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-2 text-foreground/70"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
