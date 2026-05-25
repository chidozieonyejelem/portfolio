import { SectionHeader } from "@/components/section-header";
import { techStack } from "@/lib/content";

export function TechStack() {
  return (
    <section
      id="stack"
      className="flex flex-col items-center py-[clamp(48px,8vw,96px)] text-center"
    >
      <SectionHeader label="Tech Stack" />
      <div className="w-full border-b-[0.5px] border-[#e5e5e5]">
        {techStack.map((group) => (
          <div key={group.label} className="border-t-[0.5px] border-[#e5e5e5] py-[18px]">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#737373]">
              {group.label}
            </h3>
            <p className="mt-1.5 text-[15px] leading-[1.6] text-black">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
