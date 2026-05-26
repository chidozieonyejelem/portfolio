import { SectionHeader } from "@/components/section-header";
import { site } from "@/lib/content";

export function AboutSection() {
  const { education } = site;
  return (
    <section
      id="about"
      className="reveal flex flex-col items-center py-[clamp(48px,8vw,96px)] text-center"
    >
      <SectionHeader label="About" />
      <p className="max-w-[560px] text-[15px] leading-[1.6] text-[#525252]">{site.longBio}</p>
      <div className="mt-8 max-w-[560px]">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#737373]">
          Education
        </p>
        <p className="text-[15px] text-black">{education.degree}</p>
        <p className="mt-1 text-[13px] text-[#737373]">
          {education.school} · {education.period} · {education.grade}
        </p>
        <p className="mt-1 text-[13px] text-[#737373]">
          Relevant coursework: {education.coursework}
        </p>
      </div>
    </section>
  );
}
