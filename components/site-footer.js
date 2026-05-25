import { site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-[880px] justify-center px-[clamp(20px,5vw,48px)] py-8">
        <p className="font-mono text-[11px] text-[#a1a1a1]">
          © {year} {site.fullName}
        </p>
      </div>
    </footer>
  );
}
