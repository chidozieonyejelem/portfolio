import { site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex max-w-[880px] items-center justify-between gap-4 px-[clamp(20px,5vw,48px)] py-[18px]">
        <a
          href="#top"
          className="font-mono text-[13px] font-medium tracking-tight text-white"
        >
          {site.monogram}
        </a>
        <span className="hidden font-mono text-[11px] text-[#a1a1a1] sm:inline">
          {site.location}
        </span>
      </div>
    </header>
  );
}
