import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const NavBar = () => (
  <nav
    className="fixed inset-x-0 top-0 z-50 backdrop-blur-[20px]"
    style={{ background: "var(--c-bg-nav)" }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl" style={{ color: "var(--c-accent)" }}>Alimon</span>
        <span className="font-mono text-[0.6875rem] tracking-[0.08em]" style={{ color: "var(--c-fg-muted)" }}>
          SWE-II
        </span>
      </div>
      <div className="flex items-center gap-3 sm:gap-6">
        <a href="#expertise" className="hidden sm:block text-sm no-underline transition-colors" style={{ color: "var(--c-fg-secondary)" }}>Expertise</a>
        <a href="#projects"  className="hidden sm:block text-sm no-underline transition-colors" style={{ color: "var(--c-fg-secondary)" }}>Projects</a>
        <a href="#experience" className="hidden sm:block text-sm no-underline transition-colors" style={{ color: "var(--c-fg-secondary)" }}>Journey</a>
        <a href="#toolkit"  className="hidden sm:block text-sm no-underline transition-colors" style={{ color: "var(--c-fg-secondary)" }}>Toolkit</a>
        <ThemeToggle />
        <a
          href="mailto:alimonna777@gmail.com"
          className="btn-primary py-2 px-3 sm:px-4 rounded-[6px] text-sm no-underline"
        >
          Contact Me
        </a>
      </div>
    </div>
  </nav>
);
