import { site } from "@/lib/content";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "certs", href: "#certificates" },
  { label: "contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto grid max-w-[880px] grid-cols-[auto_1fr_auto] items-center gap-3 px-[clamp(20px,5vw,48px)] py-[18px]">
        <a
          href="#top"
          className="font-mono text-[13px] font-medium tracking-tight text-white"
        >
          {site.monogram}
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#a1a1a1] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="hidden justify-self-end font-mono text-[11px] text-[#a1a1a1] sm:inline">
          {site.location}
        </span>
      </div>
    </header>
  );
}
