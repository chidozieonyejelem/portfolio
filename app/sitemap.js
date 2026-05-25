import { site } from "@/lib/content";

export default function sitemap() {
  const lastModified = new Date();
  return ["", "/uses", "/now"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
