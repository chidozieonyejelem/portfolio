import { site } from "@/lib/content";

export function StatusPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-[0.5px] border-[#e5e5e5] px-3 py-1 text-[12px] text-[#525252]">
      <span className="h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
      {site.status}
    </span>
  );
}
