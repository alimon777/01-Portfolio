export const FooterSection = () => (
  <footer className="border-t px-4 sm:px-8 py-8" style={{ background: "var(--c-bg-footer)", borderColor: "var(--c-border)" }}>
    <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3.5">
        <span className="material-symbols-outlined text-[18px]" style={{ color: "var(--c-accent)" }}>deployed_code</span>
        <span className="font-semibold text-sm" style={{ color: "var(--c-fg)" }}>Alimon N A</span>
        <span style={{ color: "var(--c-divider)" }}>·</span>
        <span className="text-[0.8125rem]" style={{ color: "var(--c-fg-muted)" }}>© 2026 Alimon N A. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="text-[0.8125rem] no-underline transition-colors" style={{ color: "var(--c-fg-muted)" }}>Privacy</a>
        <a href="#" className="text-[0.8125rem] no-underline transition-colors" style={{ color: "var(--c-fg-muted)" }}>Terms</a>
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full inline-block" style={{ background: "var(--c-green)" }} />
          <span className="font-mono text-xs" style={{ color: "var(--c-fg-muted)" }}>Status: 200</span>
        </div>
      </div>
    </div>
  </footer>
);
