"use client";
import { useRef } from "react";
import { PROJECTS } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps extends ProjectItem {}

const ProjectCard = ({ title, badge, badgeIcon, desc, tags, link }: ProjectCardProps) => (
  <div
    className="rounded-xl p-8 flex flex-col h-full transition-colors duration-200 cursor-pointer"
    style={{ background: "var(--c-bg-card)" }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--c-bg-card-hover)")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--c-bg-card)")}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[20px]" style={{ color: "var(--c-accent)" }}>{badgeIcon}</span>
        {badge && (
          <span className="font-mono text-[0.6875rem] py-1 px-2.5 rounded tracking-[0.06em] uppercase" style={{ background: "var(--c-badge-bg)", color: "var(--c-badge-fg)" }}>
            {badge}
          </span>
        )}
      </div>
      {link && (
        <span className="material-symbols-outlined text-[18px]" style={{ color: "var(--c-fg-muted)" }}>open_in_new</span>
      )}
    </div>
    <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--c-fg)" }}>{title}</h3>
    <p className="text-sm leading-[1.65] mb-6 flex-1" style={{ color: "var(--c-fg-secondary)" }}>{desc}</p>
    <div className="flex items-center gap-2 flex-wrap">
      {tags.map((tag) => (
        <span key={tag} className="font-mono text-[0.6875rem] tracking-[0.05em]" style={{ color: "var(--c-accent)" }}>#{tag}</span>
      ))}
      {link && (
        <span className="ml-auto flex items-center gap-1.5 text-[0.8125rem]" style={{ color: "var(--c-fg-secondary)" }}>
          <span className="material-symbols-outlined text-[14px]">code_blocks</span>
        </span>
      )}
    </div>
  </div>
);

export const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.firstElementChild as HTMLElement | null;
    const step = (child?.offsetWidth ?? 340) + 24; // card width + gap-6
    scrollRef.current.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="px-4 sm:px-8 py-32" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="02" name="Selected Works" />
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-14">
          <h2 className="text-[2.5rem] font-bold tracking-[-0.02em]" style={{ color: "var(--c-fg)" }}>{'Project\u00A0Nexus'}</h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous projects"
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--c-border-hover)]"
              style={{ borderColor: "var(--c-border-strong)", color: "var(--c-fg-muted)" }}
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next projects"
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--c-border-hover)]"
              style={{ borderColor: "var(--c-border-strong)", color: "var(--c-fg-muted)" }}
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Carousel — shows max 3 cards on desktop, 1 on mobile, scrolls smoothly */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-2"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="flex-shrink-0 flex flex-col"
              style={{ width: "min(340px, 80vw)", scrollSnapAlign: "start" }}
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
