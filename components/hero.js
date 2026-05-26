import Image from "next/image";
import { PillLink } from "@/components/pill-link";
import { EmailPill } from "@/components/email-pill";
import { site, socialLinks } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col items-center pb-[clamp(24px,4vw,48px)] pt-[clamp(64px,10vw,120px)] text-center"
    >
      <div className="aspect-square w-[clamp(220px,55vw,500px)] overflow-hidden rounded-full bg-[#f5f5f5]">
        <Image
          src="/avatar.jpg"
          alt={site.fullName}
          width={500}
          height={500}
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
        <p className="mt-1 text-[clamp(18px,3.6vw,30px)] font-normal leading-[1.15] tracking-[-0.02em] text-black">
          {site.tagline.role}
        </p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-1">
        {socialLinks.map((link) =>
          link.href.startsWith("mailto:") ? (
            <EmailPill
              key={link.label}
              label={link.label}
              email={link.href.replace("mailto:", "")}
            />
          ) : (
            <PillLink
              key={link.label}
              label={link.label}
              href={link.href}
              external={link.external}
            />
          )
        )}
      </div>
    </section>
  );
}
