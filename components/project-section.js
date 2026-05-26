import { SectionHeader } from "@/components/section-header";
import { WorkRow } from "@/components/work-row";

export function ProjectSection({ id, label, items }) {
  return (
    <section id={id} className="py-[clamp(48px,8vw,96px)]">
      <SectionHeader label={label} />
      <div className="border-b-[0.5px] border-[#e5e5e5]">
        {items.map((item) => (
          <WorkRow
            key={item.num}
            num={item.num}
            title={item.title}
            description={item.description}
            year={item.year}
            href={item.href}
            external={item.external}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
