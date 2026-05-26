import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function WorkRow({ num, title, description, year, href, external = false, image, tech }) {
  const content = (
    <div className="grid grid-cols-[auto_1fr_auto] items-start gap-5 border-t-[0.5px] border-[#e5e5e5] py-[18px] [transition:padding-left_0.25s_ease] group-hover:pl-2">
      {image ? (
        <Image
          src={image}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 object-contain"
        />
      ) : (
        <span className="font-mono text-[11px] text-[#737373]">{num}</span>
      )}
      <div className="min-w-0">
        <h3 className="flex items-center gap-1 text-[17px] font-medium tracking-[-0.02em] text-black">
          {title}
          {href && external ? (
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#737373]" aria-hidden="true" />
          ) : null}
        </h3>
        {description ? <p className="mt-1 text-[13px] text-[#737373]">{description}</p> : null}
        {tech && tech.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border-[0.5px] border-[#e5e5e5] px-2 py-0.5 text-[11px] text-[#525252]"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <span className="shrink-0 font-mono text-[11px] text-[#737373]">{year}</span>
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
