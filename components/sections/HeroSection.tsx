"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { STATS } from "@/lib/portfolio-data";

const CYCLING_WORDS = [
  "Powered by AI.",
  "Built for Scale.",
  "Engineered for Impact.",
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
    <section className="flex flex-col px-4 sm:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 max-w-7xl mx-auto">
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

      <div className="flex items-center gap-4 mb-20 flex-wrap">
        <a
          href="#projects"
          className="btn-primary py-3 px-6 rounded-[6px] no-underline flex items-center gap-1.5 text-[0.9375rem]"
        >
          Explore Portfolio
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
        <a
          href="https://github.com/alimon777"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 rounded-[6px] border no-underline text-sm transition-colors"
          style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--c-border-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--c-border-strong)")}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/alimon-na"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 rounded-[6px] border no-underline text-sm transition-colors"
          style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--c-border-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--c-border-strong)")}
        >
          LinkedIn
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t pt-8" style={{ borderColor: "var(--c-border)" }}>
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

