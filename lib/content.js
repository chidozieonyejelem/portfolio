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
  longBio:
    "I'm a Computing student at TU Dublin, on track to graduate in 2027. I build full stack web applications that are clean, useful and reliable. Outside of coding I'm usually at the gym, watching football, travelling or listening to music.",
  education: {
    degree: "Bachelor of Science, Computing (IT)",
    school: "Technological University Dublin",
    period: "2023 to 2027",
    grade: "Second Class Honours",
    coursework: "Full Stack Development, Software Testing, DevOps",
  },
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chidozieonyejelem", external: true },
  { label: "GitHub", href: "https://github.com/chidozieonyejelem", external: true },
  { label: "Email", href: "mailto:chidozieonyejelem1@gmail.com", external: false },
  { label: "CV", href: "/cv.pdf", external: false },
];

export const personalProjects = [
  {
    num: "001",
    title: "World Cup Simulator 2026",
    description: "Interactive 2026 World Cup tournament simulator.",
    year: "2026",
    href: "https://predictwc26.netlify.app/",
    external: true,
    image: "/projects/world-cup-sim.png",
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "Netlify"],
  },
  {
    num: "002",
    title: "Campus Quest",
    description:
      "Mobile first TUD Blanchardstown campus navigation app.",
    year: "2025",
    href: "https://campusquest-flax.vercel.app/",
    external: true,
    image: "/projects/campus-quest.png",
    tech: ["Next.js", "React", "Mapbox GL JS", "AWS S3", "Vercel"],
  },
  {
    num: "003",
    title: "RF Motors",
    description: "Full stack car rental web app.",
    year: "2025",
    href: "https://github.com/chidozieonyejelem/RFMCarRental",
    external: true,
    image: "/projects/rf-motors.png",
    tech: ["PHP", "MySQL", "CSS"],
  },
  {
    num: "004",
    title: "Calculator App",
    description: "Java desktop calculator.",
    year: "2025",
    href: "https://github.com/chidozieonyejelem/Java-Calculator-App",
    external: true,
    image: "/projects/calculator.png",
    tech: ["Java", "Swing"],
  },
];

export const experience = [
  {
    num: "001",
    title: "TuttiFrutti (In development)",
    description: "Ecommerce site for tuttifrutti.ie (old site).",
    year: "2026",
    href: "https://tuttifrutti.ie/",
    external: true,
    image: "/projects/tuttifrutti.png",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "Netlify"],
  },
];

export const techStack = [
  { label: "Languages", items: ["Java", "JavaScript", "Python", "HTML", "PHP", "SQL", "CSS"] },
  { label: "Frameworks & Libraries", items: ["Next.js", "React", "Node.js", "Tailwind CSS", "Vite"] },
  { label: "Databases & Backend", items: ["Supabase", "AWS S3", "MongoDB", "MySQL"] },
  { label: "Tools & Platforms", items: ["GitHub", "Git", "Vercel", "Netlify"] },
];

export const certificates = [
  {
    num: "001",
    title: "Dell STEM Aspire Mentee 2025/2026",
    href: "https://www.linkedin.com/posts/chidozieonyejelem_stemaspire-delltechnologies-activity-7453523682355736576-NXZN",
    external: true,
  },
  {
    num: "002",
    title: "Learning Java 11",
    href: "https://www.linkedin.com/learning/certificates/482ce2d8827efdd28e1161665ee068782d60961ad953bfc4534c6237a71ceaad",
    external: true,
  },
  {
    num: "003",
    title: "GitHub Foundations",
    href: "https://www.credly.com/badges/c0eca101-91d7-4fbf-8c44-7916f9ba038c/public_url",
    external: true,
  },
  {
    num: "004",
    title: "Introduction to Artificial Intelligence",
    href: "https://www.linkedin.com/learning/certificates/3215898a5ef1c7623764d3657d2725376646547d67d58a608550083b340ae501",
    external: true,
  },
  {
    num: "005",
    title: "Introduction to Prompt Engineering for Generative AI",
    href: "https://www.linkedin.com/learning/certificates/c448a2af11861dd095d3f51935756072200912deafeb4a78c40fb67241a0a956",
    external: true,
  },
  {
    num: "006",
    title: "SymfonyCasts PHP Course",
    href: "https://symfonycasts.com/certificates/42E4E98B5C49",
    external: true,
  },
];
