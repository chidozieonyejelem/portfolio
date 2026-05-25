import { SectionHeader } from "@/components/section-header";
import { WorkRow } from "@/components/work-row";
import { selectedWork } from "@/lib/content";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="flex flex-col items-center py-[clamp(48px,8vw,96px)] text-center"
    >
      <SectionHeader label="My Work" />
      <div className="w-full border-b-[0.5px] border-[#e5e5e5]">
        {selectedWork.map((work) => (
          <WorkRow
            key={work.num}
            num={work.num}
            title={work.title}
            description={work.description}
            year={work.year}
            href={work.href}
            external={work.external}
          />
        ))}
      </div>
    </section>
  );
}
