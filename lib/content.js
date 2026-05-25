// Single source of truth for all site content.
// Edit this file to update text, links, projects, and tech stack.

export const site = {
  name: "Chidozie",
  fullName: "Chidozie Onyejelem",
  monogram: "CO",
  location: "Dublin, Ireland",
  url: "https://chidozieportfolio.vercel.app", // update after deploy
  description:
    "Computer Science student in Dublin building full-stack web and desktop applications.",
  tagline: {
    // hero headline: name, field of study, role
    name: "Chidozie Onyejelem",
    field: "Computer Science",
    role: "Student",
  },
  bio:
    "Computer Science (IT) student at TU Dublin, building full-stack web and desktop apps. I like working across the whole stack and shipping software that's clean, well-tested, and useful.",
  longBio:
    "I'm a Computer Science (IT) student at Technological University Dublin, on track to graduate in 2027. I build full-stack web and desktop applications, including a Next.js campus navigation app with an interactive 3D map, a PHP and MySQL car rental platform, and a Java desktop calculator. I'm comfortable across the stack and enjoy picking up whatever language or tool a project calls for, with a focus on writing code that's clean, well-tested, and genuinely useful. Outside of coding I'm usually at the gym, watching football, or travelling.",
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
      "Mobile-friendly TUD Blanchardstown campus navigation app with an interactive 3D map.",
    year: "2025",
    href: "https://campusquest-flax.vercel.app/",
    external: true,
  },
  {
    num: "002",
    title: "RF Motors",
    description: "Full-stack car rental web app with user sessions and authentication.",
    year: "2025",
    href: "https://github.com/chidozieonyejelem/RFMCarRental",
    external: true,
  },
  {
    num: "003",
    title: "Calculator App",
    description: "Java Swing desktop calculator with arithmetic, percentages, and roots.",
    year: "2024",
    href: "https://github.com/chidozieonyejelem/Java-Calculator-App",
    external: true,
  },
];

export const techStack = [
  { label: "Languages", items: ["Java", "JavaScript", "Python", "PHP", "SQL", "HTML", "CSS"] },
  { label: "Frameworks & Libraries", items: ["Next.js", "React", "Node.js", "Tailwind CSS"] },
  { label: "Databases & Backend", items: ["Supabase", "AWS S3", "MongoDB", "MySQL"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "Vercel", "Netlify"] },
];
