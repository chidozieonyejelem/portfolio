import { ArrowUpRight } from "lucide-react";

export function PillLink({ label, href, external = false }) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...externalProps}
      className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[13px] text-white transition-opacity duration-150 hover:opacity-90"
    >
      {label}
      {external ? <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
    </a>
  );
}
