import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function WorkRow({
  num,
  title,
  description,
  year,
  href,
  external = false,
  image,
  preview,
}) {
  const content = (
    <div className="relative grid grid-cols-[32px_1fr_80px] items-baseline gap-5 border-t-[0.5px] border-[#e5e5e5] py-[18px] [transition:padding-left_0.25s_ease] group-hover:pl-2">
      <span className="font-mono text-[11px] text-[#737373]">{num}</span>
      <div className="flex items-center gap-3">
        {image && preview === "inline" ? (
          <Image
            src={image}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-md border-[0.5px] border-[#e5e5e5] object-cover"
          />
        ) : null}
        <div>
          <h3 className="flex items-center gap-1 text-[17px] font-medium tracking-[-0.02em] text-black">
            {title}
            {href && external ? (
              <ArrowUpRight className="h-3.5 w-3.5 text-[#737373]" aria-hidden="true" />
            ) : null}
          </h3>
          {description ? <p className="mt-1 text-[13px] text-[#737373]">{description}</p> : null}
        </div>
      </div>
      <span className="text-right font-mono text-[11px] text-[#737373]">{year}</span>
      {image && preview === "hover" ? (
        <div className="pointer-events-none absolute bottom-full left-8 z-10 mb-2 w-[200px] overflow-hidden rounded-lg border-[0.5px] border-[#e5e5e5] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          <Image src={image} alt="" width={200} height={125} className="h-auto w-full object-cover" />
        </div>
      ) : null}
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
