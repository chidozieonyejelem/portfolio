import Image from "next/image";
import { PillLink } from "@/components/pill-link";
import { site, socialLinks } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="pb-[clamp(48px,8vw,96px)] pt-[clamp(64px,10vw,120px)]">
      <div className="aspect-square w-[clamp(220px,55vw,600px)] overflow-hidden rounded-full bg-[#f5f5f5]">
        <Image
          src="/avatar.jpg"
          alt={site.fullName}
          width={600}
          height={600}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-10">
        <h1 className="text-[clamp(40px,8vw,72px)] font-medium leading-[0.95] tracking-[-0.04em] text-black">
          {site.tagline.name}
        </h1>
        <p className="mt-2 text-[clamp(26px,5vw,46px)] font-medium leading-[1.05] tracking-[-0.03em] text-black">
          {site.tagline.field}
        </p>
        <p className="mt-1 text-[clamp(18px,3.6vw,30px)] font-normal leading-[1.15] tracking-[-0.02em] text-[#525252]">
          {site.tagline.role}
        </p>
      </div>
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
