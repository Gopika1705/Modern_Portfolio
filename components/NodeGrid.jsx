"use client";

import SectionNode from "./SectionNode";
import ConnectorRow from "./ConnectorRow";
import { sections } from "@/data/portfolioData";

const byId = (id) => sections.find((s) => s.id === id);

export default function NodeGrid({ onOpen }) {
  return (
    <div className="flex flex-col">
      {/* Projects — offset right, mirrors the reference's circuit-board asymmetry */}
      <div className="w-full lg:w-[68%] lg:ml-[32%]">
        <SectionNode section={byId("projects")} onOpen={onOpen} delay={0.02} />
      </div>

      <ConnectorRow leftAccent="cyan" rightAccent="purple" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SectionNode section={byId("contact")} onOpen={onOpen} delay={0.08} />
        <SectionNode section={byId("skills")} onOpen={onOpen} delay={0.14} />
      </div>

      <ConnectorRow leftAccent="blue" rightAccent="blue" />

      <div>
        <SectionNode section={byId("profile")} onOpen={onOpen} thin delay={0.2} />
      </div>

      <ConnectorRow leftAccent="pink" rightAccent="teal" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SectionNode section={byId("education")} onOpen={onOpen} delay={0.26} />
        <SectionNode section={byId("internship")} onOpen={onOpen} delay={0.32} />
      </div>

      <ConnectorRow leftAccent="amber" rightAccent="amber" />

      {/* Certifications — offset left, mirroring the Projects node above */}
      <div className="w-full lg:w-[68%] lg:mr-[32%]">
        <SectionNode section={byId("certifications")} onOpen={onOpen} delay={0.38} />
      </div>
    </div>
  );
}
