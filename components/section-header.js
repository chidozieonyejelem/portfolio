export function SectionHeader({ label, right }) {
  return (
    <div className="mb-8 flex items-center justify-between gap-4">
      <h2 className="font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#737373]">
        {label}
      </h2>
      {right ? (
        <div className="font-mono text-[11px] text-[#737373]">{right}</div>
      ) : null}
    </div>
  );
}
