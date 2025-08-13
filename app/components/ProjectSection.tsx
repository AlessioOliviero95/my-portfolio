// app/components/ProjectsSection.tsx
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

// Type for project items
interface Project {
  title: string;
  description: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal site built with Next.js, Tailwind CSS, and shadcn/ui.",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using OpenWeather API and React.",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "E-commerce Frontend",
    description:
      "Frontend store UI with Angular and NgRx state management.",
    github: "https://github.com/yourusername/ecommerce-frontend",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="mx-auto flex items-center flex-col justify-center space-y-6 md:h-dvh"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col justify-between w-full h-full"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                asChild
                className="w-full justify-center"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
