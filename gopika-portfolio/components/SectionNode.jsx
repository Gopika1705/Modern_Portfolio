"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Folder, Mail, Layers, User, GraduationCap, Briefcase, Award } from "lucide-react";

const ICONS = {
  projects: Folder,
  contact: Mail,
  skills: Layers,
  profile: User,
  education: GraduationCap,
  internship: Briefcase,
  certifications: Award,
};

const ACCENT_CLASS = {
  cyan: { text: "text-accent-cyan", varColor: "#22d3ee" },
  purple: { text: "text-accent-purple", varColor: "#a855f7" },
  green: { text: "text-accent-green", varColor: "#34d399" },
  pink: { text: "text-accent-pink", varColor: "#f472b6" },
  teal: { text: "text-accent-teal", varColor: "#2dd4bf" },
  amber: { text: "text-accent-amber", varColor: "#fbbf24" },
  blue: { text: "text-accent-blue", varColor: "#60a5fa" },
};

export default function SectionNode({ section, onOpen, thin = false, delay = 0 }) {
  const Icon = ICONS[section.id] || Folder;
  const accent = ACCENT_CLASS[section.accent] || ACCENT_CLASS.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.012 }}
      onClick={() => onOpen(section.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(section.id)}
      style={{ "--accent": accent.varColor }}
      className={`node-card-border group relative isolate cursor-pointer overflow-hidden rounded-md bg-bg-card
        ${thin ? "px-6 py-3.5 text-center" : "px-6 py-5"}
        transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)]`}
    >
      <div className="relative z-10">
        {!thin && (
          <div
            className={`mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border bg-white/[0.03] ${accent.text}`}
          >
            <Icon size={17} strokeWidth={1.8} />
          </div>
        )}
        <div className={`font-display text-[15.5px] font-semibold uppercase tracking-wide ${thin ? "mb-0" : "mb-1.5"}`}>
          {section.label}
        </div>
        <div className="text-[13px] leading-relaxed text-secondary">{section.teaser}</div>
      </div>
      <ArrowUpRight
        size={15}
        className={`absolute right-4 top-4 z-10 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${accent.text}`}
      />
    </motion.div>
  );
}
