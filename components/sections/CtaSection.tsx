import { Meteors } from "@/components/ui/Meteors";

export const CtaSection = () => (
  <section className="px-4 sm:px-8 py-32 max-w-7xl mx-auto">
    <div
      className="relative overflow-hidden rounded-2xl border px-8 py-20 text-center"
      style={{ background: "var(--c-bg-cta)", borderColor: "var(--c-border)" }}
    >
      <Meteors number={18} />
      <div className="relative z-10">
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em] mb-5" style={{ color: "var(--c-fg)" }}>
          Open to new
          <br />
          opportunities.
        </h2>
        <p className="text-base leading-[1.7] max-w-[480px] mx-auto mb-12" style={{ color: "var(--c-fg-secondary)" }}>
          Available for backend, full-stack, and AI engineering roles. Let&apos;s
          build something impactful — reach out via email or connect on LinkedIn.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:alimonna777@gmail.com"
            className="btn-primary py-3.5 px-8 rounded-[6px] text-[0.9375rem] no-underline"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/alimon-na"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-6 rounded-[6px] border no-underline text-sm transition-colors"
            style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alimon777"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-6 rounded-[6px] border no-underline text-sm transition-colors"
            style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);
