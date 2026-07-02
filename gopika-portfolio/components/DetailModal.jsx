"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  sections,
  objective,
  personalDetails,
  education,
  projects,
  skillGroups,
  internship,
  certifications,
  profile,
} from "@/data/portfolioData";

const ACCENT_HEX = {
  cyan: "#22d3ee",
  purple: "#a855f7",
  green: "#34d399",
  pink: "#f472b6",
  teal: "#2dd4bf",
  amber: "#fbbf24",
  blue: "#60a5fa",
};

export default function DetailModal({ openId, onClose }) {
  const section = sections.find((s) => s.id === openId);
  const accent = section ? ACCENT_HEX[section.accent] : "#22d3ee";

  return (
    <AnimatePresence>
      {section && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-end justify-center bg-[rgba(2,4,10,0.72)] p-0 backdrop-blur-md sm:items-center sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 26, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 40px 90px -30px rgba(0,0,0,0.8), 0 0 70px -16px ${accent}` }}
            className="relative max-h-[86vh] w-full overflow-y-auto rounded-t-[22px] border border-white/10
              bg-gradient-to-br from-[rgba(18,23,38,0.97)] to-[rgba(7,9,17,0.99)] p-8
              sm:max-h-[84vh] sm:w-[min(640px,100%)] sm:rounded-[22px]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              style={{ "--accent": accent }}
              className="absolute right-5 top-5 flex h-[34px] w-[34px] items-center justify-center rounded-full
                border border-border bg-white/[0.04] text-secondary transition-all
                hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_14px_var(--accent)]"
            >
              <X size={18} />
            </button>

            <div
              className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.12em]"
              style={{ color: accent }}
            >
              {section.label}
            </div>

            <ModalBody id={openId} accent={accent} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-[7px] border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-[11.5px]">
      {children}
    </span>
  );
}
function TagRow({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}
function SectionHeading({ children }) {
  return (
    <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-wide text-tertiary">{children}</h4>
  );
}

function ModalBody({ id, accent }) {
  switch (id) {
    case "projects":
      return (
        <>
          <h3 className="mb-4 pr-8 font-display text-2xl font-bold">Projects</h3>
          {projects.map((p) => (
            <div key={p.title} className="mb-3 rounded-xl border border-border bg-white/[0.015] p-4">
              <h5 className="mb-1.5 text-[14.5px] font-semibold">{p.title}</h5>
              <p className="mb-2.5 text-[13.5px] leading-relaxed text-secondary">{p.desc}</p>
              <TagRow tags={p.tech} />
            </div>
          ))}
        </>
      );

    case "contact":
      return (
        <>
          <h3 className="mb-4 pr-8 font-display text-2xl font-bold">Get in touch</h3>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <ContactItem k="Email" v={profile.email} accent={accent} />
            <ContactItem k="Phone" v={profile.phone} accent={accent} />
            <ContactItem k="Location" v={profile.location} accent={accent} />
            <ContactItem k="LinkedIn" v={profile.linkedin.replace("https://", "")} accent={accent} />
            <ContactItem k="GitHub" v={profile.github.replace("https://", "")} accent={accent} />
          </div>
        </>
      );

    case "skills":
      return (
        <>
          <h3 className="mb-4 pr-8 font-display text-2xl font-bold">Skills</h3>
          {skillGroups.map((g) => (
            <div key={g.label} className="mb-5">
              <SectionHeading>{g.label}</SectionHeading>
              <TagRow tags={g.tags} />
            </div>
          ))}
        </>
      );

    case "profile":
      return (
        <>
          <h3 className="mb-4 pr-8 font-display text-2xl font-bold">About</h3>
          <p className="mb-5 text-[14.5px] leading-relaxed text-secondary">{objective}</p>
          <SectionHeading>Personal details</SectionHeading>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {personalDetails.map((d) => (
              <ContactItem key={d.k} k={d.k} v={d.v} accent={accent} />
            ))}
          </div>
        </>
      );

    case "education":
      return (
        <>
          <h3 className="mb-4 pr-8 font-display text-2xl font-bold">Education</h3>
          {education.map((r, i) => (
            <div
              key={r.degree}
              className={`flex flex-col gap-1.5 py-3 sm:flex-row sm:items-start sm:justify-between ${
                i !== education.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div>
                <strong className="block text-sm">{r.degree}</strong>
                <span className="text-[12.5px] text-secondary">{r.school}</span>
              </div>
              <div className="font-mono text-[12.5px] text-secondary sm:text-right">
                <b className="block text-[13.5px] text-primary">{r.score}</b>
                {r.year}
              </div>
            </div>
          ))}
        </>
      );

    case "internship":
      return (
        <>
          <h3 className="mb-4 pr-8 font-display text-2xl font-bold">{internship.company}</h3>
          <p className="mb-3 text-[14.5px] leading-relaxed text-secondary">{internship.desc}</p>
          <TagRow tags={internship.tech} />
          <div className="mt-6">
            <SectionHeading>Key project</SectionHeading>
            <div className="rounded-xl border border-border bg-white/[0.015] p-4">
              <h5 className="mb-1.5 text-[14.5px] font-semibold">{internship.keyProject.title}</h5>
              <p className="mb-2.5 text-[13.5px] leading-relaxed text-secondary">
                {internship.keyProject.desc}
              </p>
              <TagRow tags={internship.keyProject.tech} />
            </div>
          </div>
        </>
      );

    case "certifications":
      return (
        <>
          <h3 className="mb-4 pr-8 font-display text-2xl font-bold">Certifications</h3>
          {certifications.map((g) => (
            <div key={g.issuer} className="mb-4">
              <h5
                className="mb-2 font-mono text-xs uppercase tracking-wide"
                style={{ color: accent }}
              >
                {g.issuer}
              </h5>
              <ul>
                {g.items.map((item, i) => (
                  <li
                    key={item}
                    className={`relative py-1.5 pl-[18px] text-[13.8px] text-secondary ${
                      i !== g.items.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span
                      className="absolute left-0 top-[14px] h-1.5 w-1.5 rounded-full"
                      style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );

    default:
      return null;
  }
}

function ContactItem({ k, v, accent }) {
  return (
    <div className="rounded-xl border border-border bg-white/[0.015] p-3.5">
      <span className="mb-1 block font-mono text-[10.5px] uppercase tracking-wide" style={{ color: accent }}>
        {k}
      </span>
      <span className="break-words text-[13.5px]">{v}</span>
    </div>
  );
}
