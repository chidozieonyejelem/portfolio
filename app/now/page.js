export const metadata = {
  title: "Now · Chidozie Onyejelem",
  description: "What I am focused on right now.",
};

export default function NowPage() {
  return (
    <main className="mx-auto w-full max-w-[880px] flex-1 px-[clamp(20px,5vw,48px)] py-[clamp(48px,8vw,96px)]">
      <h1 className="text-[clamp(32px,5vw,48px)] font-medium leading-[1.05] tracking-[-0.03em] text-black">
        Now
      </h1>
      <p className="mt-6 max-w-[460px] text-[15px] leading-[1.6] text-[#525252]">
        Currently focused on building useful products and exploring engineering opportunities in
        Dublin. Placeholder content, check back soon.
      </p>
      <p className="mt-6 font-mono text-[11px] text-[#737373]">Last updated: 2026-05-25</p>
    </main>
  );
}
