import { community, priorCareer } from "@/lib/data";
import { Heart, Film } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Heart className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Community</h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {community.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-5">
                <h3 className="text-lg font-bold text-primary mb-2">
                  {entry.org}
                </h3>
                <p className="text-foreground/70">{entry.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Prior Career */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Film className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Prior Career</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground">
                {priorCareer.title}
              </h3>
              <span className="text-sm text-foreground/60">
                {priorCareer.period}
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              {priorCareer.description}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
