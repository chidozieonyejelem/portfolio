"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const navLinks = [
  { label: "about", href: "#about", section: "about" },
  { label: "experience", href: "#experience", section: "experience" },
  { label: "projects", href: "#projects", section: "projects" },
  { label: "stack", href: "#stack", section: "stack" },
  { label: "certs", href: "#certificates", section: "certificates" },
  { label: "contact", href: "#contact", section: "contact" },
];

// In top-to-bottom page order (contact = the hero's links block, near the top).
const sectionOrder = ["contact", "about", "experience", "projects", "stack", "certificates"];

export function SiteHeader() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4; // ~40% down the viewport
      let current = "";
      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // at the very bottom, the last section wins (it may be too short to reach the line)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sectionOrder[sectionOrder.length - 1];
      }
      setActive(current);
    };
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
