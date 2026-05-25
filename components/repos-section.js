import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { WorkRow } from "@/components/work-row";
import { getRepos } from "@/lib/github";
import { github } from "@/lib/content";

export async function ReposSection() {
  const repos = await getRepos();
  const githubUrl = `https://github.com/${github.usernames[0]}`;

  return (
    <section id="repos" className="py-[clamp(48px,8vw,96px)]">
      <SectionHeader
        label="Repositories"
        right={
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-black"
          >
            GitHub <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        }
      />
      {repos.length === 0 ? (
        <p className="text-[13px] text-[#737373]">No public repositories available.</p>
      ) : (
        <div className="border-b-[0.5px] border-[#e5e5e5]">
          {repos.map((repo, index) => (
            <WorkRow
              key={repo.id}
              num={String(index + 1).padStart(3, "0")}
              title={repo.name}
              description={repo.description ?? "—"}
              year={repo.year}
              href={repo.homepage || repo.url}
              external
              meta={`★ ${repo.stars} · ${repo.language ?? "—"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
