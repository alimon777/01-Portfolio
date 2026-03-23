interface SectionLabelProps {
  index: string;
  name: string;
}

export const SectionLabel = ({ index, name }: SectionLabelProps) => (
  <div className="flex items-center gap-2.5 mb-4">
    <span className="font-mono text-xs tracking-[0.1em]" style={{ color: "var(--c-accent)" }}>
      {index} //
    </span>
    <span className="font-mono text-xs tracking-[0.1em] uppercase" style={{ color: "var(--c-fg-muted)" }}>
      {name}
    </span>
  </div>
);
