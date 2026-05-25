import { site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-[880px] flex-wrap items-end justify-between gap-5 px-[clamp(20px,5vw,48px)] py-8">
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#a1a1a1]">
            Stack
          </p>
          <p className="text-[13px] text-white">{site.stack.join(" · ")}</p>
        </div>
        <p className="font-mono text-[11px] text-[#a1a1a1]">
          © {year} {site.fullName}
        </p>
      </div>
    </footer>
  );
}
