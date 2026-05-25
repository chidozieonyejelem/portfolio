export function WorkRow({ num, title, description, year, href, external = false, meta }) {
  const content = (
    <div className="grid grid-cols-[32px_1fr_80px] items-baseline gap-5 border-t-[0.5px] border-[#e5e5e5] py-[18px] [transition:padding-left_0.25s_ease] group-hover:pl-2">
      <span className="font-mono text-[11px] text-[#737373]">{num}</span>
      <div>
        <h3 className="text-[17px] font-medium tracking-[-0.02em] text-black">{title}</h3>
        <p className="mt-1 text-[13px] text-[#737373]">{description}</p>
        {meta ? (
          <p className="mt-1 font-mono text-[11px] text-[#737373]">{meta}</p>
        ) : null}
      </div>
      <span className="text-right font-mono text-[11px] text-[#737373]">{year}</span>
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
