"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { STATS } from "@/lib/portfolio-data";

const CYCLING_WORDS = [
  "Powered by AI.",
  "Always Shipping.",
  "Driven by Code.",
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2600);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <section className="flex flex-col px-4 sm:px-8 pt-35 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-7">
        <span className="size-2 rounded-full inline-block" style={{ background: "var(--c-green)" }} />
        <span className="font-mono text-xs tracking-[0.12em] uppercase" style={{ color: "var(--c-fg-muted)" }}>
          Software Engineer II · Kochi, India
        </span>
      </div>

      {/* Line 1: static */}
      <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold tracking-[-0.02em] leading-[1.08] max-w-[820px]">
        Building Scalable Systems
      </h1>

      {/* Line 2: animated cycling words — block-level so full width avoids clipping */}
      <div
        className="relative overflow-hidden mb-6"
        style={{ height: "1.15em", fontSize: "clamp(2.5rem,5.5vw,5rem)", lineHeight: 1.08 }}
      >
        {CYCLING_WORDS.map((word, i) => (
          <motion.span
            key={word}
            className="absolute left-0 top-0 font-bold whitespace-nowrap"
            style={{ color: "var(--c-accent)" }}
            initial={{ opacity: 0, y: "110%" }}
            animate={
              index === i
                ? { y: "0%", opacity: 1 }
                : { y: index > i ? "-110%" : "110%", opacity: 0 }
            }
            transition={{ type: "spring", stiffness: 55, damping: 14 }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <p className="text-lg leading-[1.7] max-w-[540px] mb-10" style={{ color: "var(--c-fg-secondary)" }}>
        Software Engineer with 2+ years delivering enterprise applications,
        agentic AI pipelines, and cloud-native backends using Java, Python, and
        Spring Boot.
      </p>

      <div className="flex items-center gap-4 mb-25 flex-wrap">
        <a
          href="#projects"
          className="btn-primary py-2.5 px-6 rounded-[6px] no-underline flex items-center gap-1.5 text-[0.9375rem]"
        >
          Explore Projects
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
        <a
          href="https://github.com/alimon777"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline py-3 px-3 sm:px-6 rounded-[6px] border no-underline text-sm flex items-center gap-2"
          style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/alimon-na"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline py-3 px-3 sm:px-6 rounded-[6px] border no-underline text-sm flex items-center gap-2"
          style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-y py-8" style={{ borderColor: "var(--c-border)" }}>
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-[2rem] font-bold font-mono tracking-[-0.02em]" style={{ color: "var(--c-accent)" }}>
              {s.value}
            </div>
            <div className="text-sm mt-1" style={{ color: "var(--c-fg-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

