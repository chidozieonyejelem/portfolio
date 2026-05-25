import { github } from "@/lib/content";

/**
 * @typedef {Object} Repo
 * @property {number} id
 * @property {string} name
 * @property {string} fullName
 * @property {string|null} description
 * @property {string} url
 * @property {string|null} homepage
 * @property {number} stars
 * @property {string|null} language
 * @property {string} updatedAt
 * @property {string} year   derived from updatedAt
 */

/** Map a raw GitHub API repo into our trimmed-down shape. */
function toRepo(r) {
  return {
    id: r.id,
    name: r.name,
    fullName: r.full_name,
    description: r.description,
    url: r.html_url,
    homepage: r.homepage,
    stars: r.stargazers_count,
    language: r.language,
    updatedAt: r.updated_at,
    year: new Date(r.updated_at).getFullYear().toString(),
  };
}

/**
 * Fetch, merge, filter and sort public repositories for the configured users.
 * Server-side only. Never throws — returns [] on any failure so the section
 * can render an empty state and the build never breaks.
 * @returns {Promise<Repo[]>}
 */
export async function getRepos() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    const lists = await Promise.all(
      github.usernames.map(async (username) => {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
          { headers, next: { revalidate: 21600 } } // 6 hours
        );
        if (!res.ok) return [];
        return res.json();
      })
    );

    // Merge across usernames, dropping duplicate ids.
    const seen = new Set();
    const raw = lists.flat().filter((r) => {
      if (!r || seen.has(r.id)) return false;
      seen.add(r.id);
      return true;
    });

    const hidden = new Set(github.hidden);
    const filtered = raw.filter((r) => {
      if (github.excludeForks && r.fork) return false;
      if (github.excludeArchived && r.archived) return false;
      if (r.stargazers_count < github.minStars) return false;
      if (hidden.has(r.full_name) || hidden.has(r.name)) return false;
      return true;
    });

    // Pinned repos float to the top in the configured order.
    const pinnedRepos = github.pinned
      .map((fullName) => filtered.find((r) => r.full_name === fullName))
      .filter(Boolean);
    const rest = filtered.filter((r) => !github.pinned.includes(r.full_name));

    rest.sort((a, b) => {
      if (github.sortBy === "stars") return b.stargazers_count - a.stargazers_count;
      if (github.sortBy === "created")
        return new Date(b.created_at) - new Date(a.created_at);
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    return [...pinnedRepos, ...rest].slice(0, github.maxResults).map(toRepo);
  } catch {
    return [];
  }
}
