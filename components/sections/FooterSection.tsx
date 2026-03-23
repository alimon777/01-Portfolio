export const FooterSection = () => (
  <footer className="border-t px-4 sm:px-8 py-8" style={{ background: "var(--c-bg-footer)", borderColor: "var(--c-border)" }}>
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      {/* Brand */}
      <div className="flex items-center gap-2.5">
        <span className="material-symbols-outlined text-[18px]" style={{ color: "var(--c-accent)" }}>deployed_code</span>
        <span className="font-semibold text-sm" style={{ color: "var(--c-fg)" }}>Alimon&nbsp;N&nbsp;A</span>
      </div>

      {/* Copyright — centred on mobile */}
      <span className="text-[0.8125rem] text-center" style={{ color: "var(--c-fg-muted)" }}>
        © 2026 Alimon N A. All rights reserved.
      </span>

      {/* Links */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-[0.8125rem] no-underline transition-colors" style={{ color: "var(--c-fg-muted)" }}>Privacy</a>
        <a href="#" className="text-[0.8125rem] no-underline transition-colors" style={{ color: "var(--c-fg-muted)" }}>Terms</a>
      </div>
    </div>
  </footer>
);
