import { ArrowUpRight } from "lucide-react";

export function WorkRow({ num, title, description, year, href, external = false }) {
  const content = (
    <div className="border-t-[0.5px] border-[#e5e5e5] py-5 [transition:opacity_0.2s_ease] group-hover:opacity-60">
      <h3 className="flex items-center justify-center gap-1 text-[17px] font-medium tracking-[-0.02em] text-black">
        {title}
        {href && external ? (
          <ArrowUpRight className="h-3.5 w-3.5 text-[#737373]" aria-hidden="true" />
        ) : null}
      </h3>
      <p className="mt-1 text-[13px] text-[#737373]">{description}</p>
      <p className="mt-1.5 font-mono text-[11px] text-[#737373]">
        {num} · {year}
      </p>
    </div>
  );

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={href} {...externalProps} className="group block text-inherit no-underline">
        {content}
      </a>
    );
  }
  return <div className="group">{content}</div>;
}
