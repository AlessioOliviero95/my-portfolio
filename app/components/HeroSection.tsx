// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="md:h-dvh flex flex-col md:flex-row mt-14 md:mt-0 items-center justify-center max-w-4xl mx-auto space-y-6 md:space-y-0 md:space-x-8 text-left md:text-center"
    >
      {/* Text Section */}
      <div className="flex-1 space-y-3">
        <div>
          <h1 className="text-start text-xl sm:text-2xl md:text-4xl font-bold">
            Hi, I'm Alessio Oliviero 👋
          </h1>
          <p className="text-start text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            I'm a Frontend Developer with 5 years of experience in building
            responsive, accessible, and scalable web applications. I’m passionate
            about clean code, thoughtful design, and staying up-to-date with the
            latest technologies. I love the craft of programming — shaping
            software into elegant, intuitive experiences that shine in every pixel.
          </p>
        </div>
        <div className="flex justify-start">
            <Button
            size="lg"
            className="transition-colors duration-300 hover:bg-primary/80"
            // onClick={() => {
            //   const contactSection = document.getElementById("contact");
            //   if (contactSection) {
            //   contactSection.scrollIntoView({ behavior: "smooth" });
            //   }
            // }}
            >
            Contact Me
            <ArrowBigRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Alessio Oliviero - Frontend Developer"
          width={300}
          height={300}
          className="rounded-full border-4 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
          priority
  
        />
      </div>
    </section>
  );
}
