import { site } from "@/lib/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-[clamp(48px,8vw,96px)] text-center"
    >
      <h2 className="mb-8 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[#737373]">
        About
      </h2>
      <p className="max-w-[560px] text-[15px] leading-[1.6] text-[#525252]">{site.longBio}</p>
    </section>
  );
}
