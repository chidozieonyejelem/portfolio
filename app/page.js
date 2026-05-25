import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { TechStack } from "@/components/tech-stack";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[880px] flex-1 px-[clamp(20px,5vw,48px)]">
      <Hero />
      <SelectedWork />
      <TechStack />
      <AboutSection />
    </main>
  );
}
