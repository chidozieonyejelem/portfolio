import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { AboutSection } from "@/components/about-section";
import { ProjectSection } from "@/components/project-section";
import { TechStack } from "@/components/tech-stack";
import { personalProjects, experience, achievements, certificates } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[880px] flex-1 px-[clamp(20px,5vw,48px)]">
      <Hero />
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <ProjectSection id="experience" label="Experience" items={experience} />
      </Reveal>
      <Reveal>
        <ProjectSection id="projects" label="Personal Projects" items={personalProjects} />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <ProjectSection id="achievements" label="Achievements" items={achievements} />
      </Reveal>
      <Reveal>
        <ProjectSection id="certificates" label="Certificates" items={certificates} />
      </Reveal>
    </main>
  );
}
