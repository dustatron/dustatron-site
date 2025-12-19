import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
