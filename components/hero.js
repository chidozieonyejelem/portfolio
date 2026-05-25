import Image from "next/image";
import { PillLink } from "@/components/pill-link";
import { StatusPill } from "@/components/status-pill";
import { site, socialLinks } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="pb-[clamp(48px,8vw,96px)] pt-[clamp(64px,10vw,120px)]">
      <div className="h-20 w-20 overflow-hidden rounded-full bg-[#f5f5f5]">
        <Image
          src="/avatar.jpg"
          alt={site.fullName}
          width={80}
          height={80}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-6">
        <StatusPill />
      </div>
      <h1 className="mt-8 text-[clamp(40px,8vw,72px)] font-medium leading-[0.95] tracking-[-0.04em] text-black">
        {site.tagline.line1}
        <br />
        <span className="font-normal italic text-[#737373]">{site.tagline.italicLine}</span>
        <br />
        {site.tagline.line3}
      </h1>
      <p className="mt-6 max-w-[460px] text-[15px] leading-[1.6] text-[#525252]">{site.bio}</p>
      <div className="mt-10 flex flex-wrap gap-1">
        {socialLinks.map((link) => (
          <PillLink
            key={link.label}
            label={link.label}
            href={link.href}
            external={link.external}
          />
        ))}
      </div>
    </section>
  );
}
