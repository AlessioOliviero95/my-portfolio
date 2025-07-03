// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col h-dvh items-start md:items-center justify-center mx-auto max-w-4xl  space-y-6 text-left"
      >
        <div className="flex flex-col space-y-4 md:items-center md:text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Hi, I'm Alessio Oliviero 👋
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            I'm a Frontend Developer with 5 years of experience in building
            responsive, accessible, and scalable web applications. I've
            contributed to enterprise-grade platforms at <strong>Beta80</strong>{" "}
            and <strong>Intesa Sanpaolo</strong>, including the transition to{" "}
            <strong>IsyBank</strong>.
          </p>
        </div>
        <div className="md:mt-4">
          <Button size="lg">
            Contact Me
            <ArrowBigRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </section>
      {/* <Button
        variant="outline"
        className="fixed bottom-6 right-6 z-50 shadow-md"
      >
        <Link href="#about">About</Link>
      </Button> */}
    </>
  );
}
