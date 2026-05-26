"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const navLinks = [
  { label: "about", href: "#about", section: "about" },
  { label: "experience", href: "#experience", section: "experience" },
  { label: "projects", href: "#projects", section: "projects" },
  { label: "stack", href: "#stack", section: "stack" },
  { label: "certs", href: "#certificates", section: "certificates" },
  { label: "contact", href: "#top", section: null },
];

export function SiteHeader() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => link.section && document.getElementById(link.section))
      .filter(Boolean);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // a thin band across the middle of the viewport: whichever section
      // crosses it is the "current" one.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
              aria-current={active === link.section ? "true" : undefined}
              className={`text-[13px] transition-colors ${
                active === link.section ? "text-white" : "text-[#a1a1a1] hover:text-white"
              }`}
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
