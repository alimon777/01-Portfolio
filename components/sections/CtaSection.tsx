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
            className="btn-primary py-3 px-8 rounded-[6px] text-[0.9375rem] no-underline"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/alimon-na"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-3 sm:px-6 rounded-[6px] border no-underline text-sm transition-colors flex items-center gap-2"
            style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/alimon777"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-3 sm:px-6 rounded-[6px] border no-underline text-sm transition-colors flex items-center gap-2"
            style={{ color: "var(--c-fg-secondary)", borderColor: "var(--c-border-strong)" }}
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);
