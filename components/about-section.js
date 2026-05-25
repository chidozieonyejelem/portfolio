import { SectionHeader } from "@/components/section-header";
import { site } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="py-[clamp(48px,8vw,96px)]">
      <SectionHeader label="About" />
      <p className="max-w-[560px] text-[15px] leading-[1.6] text-[#525252]">{site.longBio}</p>
      <p className="mt-6 font-mono text-[13px] text-[#737373]">{site.stack.join(" · ")}</p>
    </section>
  );
}
