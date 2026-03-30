"use client";
import dynamic from "next/dynamic";
import { EXPERTISE_CARDS } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ExpertiseCardItem } from "@/types/portfolio";

const GlowingEffect = dynamic(
  () => import("@/components/ui/GlowingEffect").then((m) => m.GlowingEffect),
  { ssr: false }
);

interface ExpertiseCardProps extends ExpertiseCardItem {}

const ExpertiseCard = ({ icon, title, desc }: ExpertiseCardProps) => (
  <div
    className="relative rounded-xl border"
    style={{ background: "var(--c-bg-card)", borderColor: "var(--c-border)" }}
  >
    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
    <div
      className="relative p-8 rounded-xl transition-colors duration-200"
      style={{ background: "var(--c-bg-card)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--c-bg-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--c-bg-card)")}
    >
      <div className="flex gap-4 mb-5">
        <div className="rounded-lg p-2.5 flex items-center justify-center" style={{ background: "var(--c-bg-alt)" }}>
          <span className="material-symbols-outlined text-[20px]" style={{ color: "var(--c-accent)" }}>{icon}</span>
        </div>
        <h3 className="text-lg flex items-center font-semibold m-0" style={{ color: "var(--c-fg)" }}>{title}</h3>
      </div>
      <p className="text-sm leading-[1.65]" style={{ color: "var(--c-fg-secondary)" }}>{desc}</p>
    </div>
  </div>
);

export const ExpertiseSection = () => (
  <section id="expertise" className="px-4 sm:px-8 py-32 max-w-7xl mx-auto">
    <SectionLabel index="01" name="Architecture" />
    <h2 className="text-[2.5rem] font-bold tracking-[-0.02em] mb-3" style={{ color: "var(--c-fg)" }}>
      Core Expertise
    </h2>
    <p className="text-base mb-14 max-w-[480px]" style={{ color: "var(--c-fg-secondary)" }}>
      Bridging backend engineering with AI — from REST APIs and microservices
      to agentic RAG pipelines and cloud-native deployments.
    </p>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      {EXPERTISE_CARDS.map((card) => (
        <ExpertiseCard key={card.title} {...card} />
      ))}
    </div>
  </section>
);
