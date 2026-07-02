"use client";

import { useState } from "react";
import BackgroundGrid from "@/components/BackgroundGrid";
import ProfileCard from "@/components/ProfileCard";
import NodeGrid from "@/components/NodeGrid";
import DetailModal from "@/components/DetailModal";
import { profile } from "@/data/portfolioData";

export default function Home() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <BackgroundGrid />

      <div className="relative z-[1] mx-auto max-w-[1240px] px-5 pb-24 pt-10 sm:px-7">
        <header className="mb-10 flex items-center gap-4">
          <div className="h-[46px] w-1 rounded-[3px] bg-gradient-to-b from-accent-cyan to-accent-purple shadow-[0_0_16px_rgba(34,211,238,0.6)]" />
          <div>
            <h1 className="font-display text-2xl font-bold tracking-wide sm:text-[28px]">
              {profile.name.toUpperCase()}
            </h1>
            <p className="mt-1 font-mono text-sm text-secondary">
              Computer Science Engineering Student <span className="mx-2 text-tertiary">|</span> Software
              Developer
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start gap-7 lg:flex-row">
          <ProfileCard />
          <main className="min-w-0 flex-1">
            <NodeGrid onOpen={setOpenId} />
          </main>
        </div>
      </div>

      <DetailModal openId={openId} onClose={() => setOpenId(null)} />
    </>
  );
}
