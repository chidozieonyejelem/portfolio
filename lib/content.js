// Single source of truth for all site content.
// Edit this file to update text, links, projects, and tech stack.

export const site = {
  fullName: "Chidozie Onyejelem",
  monogram: "CO",
  location: "Dublin, Ireland",
  url: "https://chidozieportfolio.vercel.app",
  description:
    "Computer Science student in TU Dublin building full stack web applications.",
  tagline: {
    // hero headline: name, field of study, role
    name: "Chidozie Onyejelem",
    field: "Computer Science",
    role: "Student",
  },
  bio:
    "Computing (IT) student at TU Dublin, focused on building full stack web applications. I want to build software that's clean, well-tested, and useful.",
  longBio:
    "I'm a Computing (IT) student at Technological University Dublin, on track to graduate in 2027. I build full stack web applications. I'm comfortable across the stack and enjoy picking up whatever language or tool a project calls for, with a focus on writing code that's clean, well-tested, and genuinely useful. Outside of coding I'm usually at the gym, watching football, travelling or listening to music.",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chidozieonyejelem", external: true },
  { label: "GitHub", href: "https://github.com/chidozieonyejelem", external: true },
  { label: "Email", href: "mailto:chidozieonyejelem1@gmail.com", external: false },
  { label: "CV", href: "/cv.pdf", external: false },
];

export const selectedWork = [
  {
    num: "001",
    title: "Campus Quest",
    description:
      "Mobile first TUD Blanchardstown campus navigation app.",
    year: "2025",
    href: "https://campusquest-flax.vercel.app/",
    external: true,
  },
  {
    num: "002",
    title: "RF Motors",
    description: "Full stack car rental web app.",
    year: "2025",
    href: "https://github.com/chidozieonyejelem/RFMCarRental",
    external: true,
  },
  {
    num: "003",
    title: "Calculator App",
    description: "Java desktop calculator.",
    year: "2024",
    href: "https://github.com/chidozieonyejelem/Java-Calculator-App",
    external: true,
  },
];

export const techStack = [
  { label: "Languages", items: ["Java", "JavaScript", "Python", "HTML", "PHP", "SQL", "CSS"] },
  { label: "Frameworks & Libraries", items: ["Next.js", "React", "Node.js", "Tailwind CSS"] },
  { label: "Databases & Backend", items: ["Supabase", "AWS S3", "MongoDB", "MySQL"] },
  { label: "Tools & Platforms", items: ["GitHub", "Git", "Vercel", "Netlify"] },
];
