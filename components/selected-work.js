import { SectionHeader } from "@/components/section-header";
import { WorkRow } from "@/components/work-row";
import { selectedWork } from "@/lib/content";

export function SelectedWork() {
  const total = String(selectedWork.length).padStart(2, "0");
  return (
    <section id="work" className="py-[clamp(48px,8vw,96px)]">
      <SectionHeader label="My Work" right={`${total} / ${total}`} />
      <div className="border-b-[0.5px] border-[#e5e5e5]">
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
