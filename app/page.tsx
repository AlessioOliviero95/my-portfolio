import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactMeSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
