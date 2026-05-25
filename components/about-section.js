import { SectionHeader } from "@/components/section-header";
import { site } from "@/lib/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-[clamp(48px,8vw,96px)] text-center"
    >
      <SectionHeader label="About" />
      <p className="max-w-[560px] text-[15px] leading-[1.6] text-[#525252]">{site.longBio}</p>
    </section>
  );
}
