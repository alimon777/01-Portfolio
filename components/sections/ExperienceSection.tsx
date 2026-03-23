import { TIMELINE } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const ExperienceSection = () => (
  <section id="experience" className="px-4 sm:px-8 py-32 max-w-7xl mx-auto">
    <SectionLabel index="03" name="The Journey" />
    <h2 className="text-[2.5rem] font-bold tracking-[-0.02em] mb-14" style={{ color: "var(--c-fg)" }}>
      Professional Journey
    </h2>
    <div>
      {TIMELINE.map((job) => (
        <div
          key={job.company}
          className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-12 py-10 border-t"
          style={{ borderColor: "var(--c-border)" }}
        >
          <div>
            <div className="font-mono text-xs tracking-[0.05em] mb-1.5" style={{ color: "var(--c-fg-muted)" }}>
              {job.period}
            </div>
            <div className="text-sm font-medium" style={{ color: "var(--c-fg-secondary)" }}>
              {job.company}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--c-fg)" }}>{job.role}</h3>
            <p className="text-sm leading-[1.7]" style={{ color: "var(--c-fg-muted)" }}>{job.desc}</p>
          </div>
        </div>
      ))}
      <div className="border-b" style={{ borderColor: "var(--c-border)" }} />
    </div>
  </section>
);
