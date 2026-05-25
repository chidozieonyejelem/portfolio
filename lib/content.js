// Single source of truth for all site content.
// Edit this file to update text, links, and projects — placeholders are marked.

export const site = {
  name: "Chidozie", // PLACEHOLDER — display name
  fullName: "Chidozie Onyejelem", // PLACEHOLDER
  monogram: "CO", // first letters of the name, shown in the header
  location: "Dublin, Ireland", // shown in the header + OG image
  url: "https://chidozieportfolio.vercel.app", // update after deploy
  // PLACEHOLDER — site meta description
  description:
    "Software engineer based in Dublin. Building useful things on the web.",
  tagline: {
    // 3-line hero headline
    line1: "Chidozie Onyejelem", // PLACEHOLDER
    italicLine: "builds with intent,", // PLACEHOLDER — italic muted
    line3: "ships with care.", // PLACEHOLDER
  },
  status: "Open to opportunities",
  // PLACEHOLDER bio — 2-3 sentences
  bio:
    "Software engineer focused on building clean, useful products on the web. Currently exploring opportunities where craft and impact meet. Based in Dublin.",
  // PLACEHOLDER longer About bio
  longBio:
    "I build full-stack applications with a focus on developer experience and product polish. My core stack centers on JavaScript and Java, with cloud and database work increasingly in Supabase and Vercel. I care about software that is fast, accessible, and quietly well-built. Currently open to engineering roles where I can keep growing.",
  stack: ["JavaScript", "Java", "Vercel", "CSS", "Supabase"],
};

export const socialLinks = [
  // PLACEHOLDERS — replace URLs
  { label: "GitHub", href: "https://github.com/chidozieonyejelem", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/PLACEHOLDER", external: true },
  { label: "Email", href: "mailto:PLACEHOLDER@example.com", external: false },
  { label: "CV", href: "/cv.pdf", external: false },
];

export const selectedWork = [
  // PLACEHOLDERS — 3 example projects
  {
    num: "001",
    title: "Project One",
    description: "Short one-line description of the project.",
    year: "2025",
    href: "#",
  },
  {
    num: "002",
    title: "Project Two",
    description: "Short one-line description of the project.",
    year: "2025",
    href: "#",
  },
  {
    num: "003",
    title: "Project Three",
    description: "Short one-line description of the project.",
    year: "2024",
    href: "#",
  },
];

export const github = {
  usernames: ["chidozieonyejelem"],
  excludeForks: true,
  excludeArchived: true,
  minStars: 0,
  pinned: [], // e.g., "chidozieonyejelem/repo-name"
  hidden: [],
  sortBy: "updated", // "updated" | "stars" | "created"
  maxResults: 12,
};
