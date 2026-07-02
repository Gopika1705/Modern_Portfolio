"use client";

export default function BackgroundGrid() {
  return (
    <>
      <div className="bg-grid animate-gridDrift" />
      <div className="orb -left-40 -top-32 h-[520px] w-[520px] bg-accent-cyan" />
      <div className="orb right-[-140px] top-[280px] h-[480px] w-[480px] bg-accent-purple" />
      <div className="orb bottom-[-200px] left-[30%] h-[420px] w-[420px] bg-accent-pink opacity-20" />
    </>
  );
}
