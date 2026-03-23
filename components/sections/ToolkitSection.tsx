import { TOOLKIT } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const ToolkitSection = () => (
  <section id="toolkit" className="px-4 sm:px-8 py-32" style={{ background: "var(--c-bg-alt)" }}>
    <div className="max-w-7xl mx-auto">
      <SectionLabel index="04" name="Infrastructure" />
      <h2 className="text-[2.5rem] font-bold tracking-[-0.02em] mb-14" style={{ color: "var(--c-fg)" }}>
        The Forge Toolkit
      </h2>
      <div className="flex flex-wrap gap-4">
        {TOOLKIT.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2.5 py-3 px-[1.375rem] rounded-lg"
            style={{ background: "var(--c-bg-card)" }}
          >
            <span className="material-symbols-outlined text-[18px]" style={{ color: "var(--c-accent)" }}>{t.icon}</span>
            <span className="text-[0.9375rem] font-medium" style={{ color: "var(--c-fg-secondary)" }}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
