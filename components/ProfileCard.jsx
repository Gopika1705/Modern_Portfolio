"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolioData";

export default function ProfileCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-none w-full lg:w-[320px] lg:sticky lg:top-8 self-start
        rounded-lg border border-border bg-gradient-to-br from-white/[0.05] to-black/30
        backdrop-blur-xl p-7
        shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_60px_-30px_rgba(0,0,0,0.7),0_0_50px_-18px_rgba(34,211,238,0.25)]"
    >
      {/* Avatar */}
      <div className="relative flex justify-center mb-6">
        <div className="absolute h-[128px] w-[128px] rounded-full border border-dashed border-accent-cyan/30 animate-spin" />
        <div className="relative z-10 h-[104px] w-[104px] overflow-hidden rounded-full border-2 border-accent-cyan animate-ringPulse">
  <Image
    src="/profile.jpeg"
    alt="Gopika J"
    fill
    className="object-cover object-[center_20%]"
  />
</div>
      </div>

      <h2 className="text-center font-display text-xl font-semibold">{profile.name}</h2>
      <p className="mt-1.5 text-center font-mono text-[12.5px] uppercase tracking-wide text-secondary">
        {profile.role}
      </p>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <InfoRow label="Email" value={profile.email} />
      <InfoRow label="Phone" value={profile.phone} />
      <InfoRow label="Location" value={profile.location} />

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="flex flex-wrap gap-2.5">
        <a
          href={profile.resumeUrl}
           download
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-white/[0.02] px-3.5 py-2.5 text-[12.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        >
          <FileText size={13} /> Resume
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-white/[0.02] px-3.5 py-2.5 text-[12.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        >
          <Github size={13} /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-white/[0.02] px-3.5 py-2.5 text-[12.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        >
          <Linkedin size={13} /> LinkedIn
        </a>
      </div>
    </motion.aside>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="mb-4">
      <span className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.06em] text-accent-cyan">
        {label}
      </span>
      <span className="text-sm text-primary break-words">{value}</span>
    </div>
  );
}
