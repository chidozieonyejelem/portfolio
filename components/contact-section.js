import { PillLink } from "@/components/pill-link";
import { socialLinks } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="contact" className="py-[clamp(48px,8vw,96px)]">
      <h2 className="text-[clamp(32px,5vw,48px)] font-medium leading-[1.05] tracking-[-0.03em] text-black">
        Get in touch
      </h2>
      <p className="mt-4 max-w-[460px] text-[15px] leading-[1.6] text-[#525252]">
        Have a role, a project, or just want to say hello? I&apos;m always open to a good
        conversation.
      </p>
      <div className="mt-8 flex flex-wrap gap-1">
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
