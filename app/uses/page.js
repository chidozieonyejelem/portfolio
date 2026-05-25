export const metadata = {
  title: "Uses · Chidozie Onyejelem",
  description: "The tools, hardware, and software I use day to day.",
};

const sections = [
  { label: "Editor", items: ["VS Code with a minimal theme (placeholder)"] },
  { label: "Hardware", items: ["MacBook (placeholder)"] },
  { label: "Software", items: ["Placeholder app"] },
  { label: "Fonts", items: ["Inter · JetBrains Mono"] },
];

export default function UsesPage() {
  return (
    <main className="mx-auto w-full max-w-[880px] flex-1 px-[clamp(20px,5vw,48px)] py-[clamp(48px,8vw,96px)]">
      <h1 className="text-[clamp(32px,5vw,48px)] font-medium leading-[1.05] tracking-[-0.03em] text-black">
        Uses
      </h1>
      <p className="mt-4 max-w-[460px] text-[15px] leading-[1.6] text-[#525252]">
        A running list of the hardware, software, and tools I rely on. Placeholder content for now.
      </p>
      <p className="mt-3 font-mono text-[11px] text-[#737373]">Last updated: 2026-05-25</p>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <div key={section.label}>
            <h2 className="font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#737373]">
              {section.label}
            </h2>
            <ul className="mt-2 space-y-1">
              {section.items.map((item) => (
                <li key={item} className="text-[15px] text-[#525252]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
