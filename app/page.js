import { Hero } from "@/components/hero";
import { ProjectSection } from "@/components/project-section";
import { TechStack } from "@/components/tech-stack";
import { AboutSection } from "@/components/about-section";
import { personalProjects, experience } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[880px] flex-1 px-[clamp(20px,5vw,48px)]">
      <Hero />
      <ProjectSection id="experience" label="Experience" items={experience} />
      <ProjectSection id="projects" label="Personal Projects" items={personalProjects} />
      <TechStack />
      <AboutSection />
    </main>
  );
}
