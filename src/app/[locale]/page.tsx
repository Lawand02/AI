import { Hero } from "@/components/sections/Hero";
import { TechShowcase } from "@/components/unique/TechShowcase";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { CareerTimeline } from "@/components/unique/CareerTimeline";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Terminal } from "@/components/sections/Terminal";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
export default function HomePage() {
  return (
    <>
      <Hero />
      <TechShowcase />
      <About />
      <Skills />
      <Projects />
      <GitHubActivity />
      <CareerTimeline />
      <Experience />
      <Achievements />
      <Terminal />
      <Testimonials />
      <Contact />
    </>
  );
}
