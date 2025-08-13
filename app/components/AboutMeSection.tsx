// components/AboutMeSection.tsx

export default function AboutMeSection() {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="flex flex-col  items-center justify-center mx-auto space-y-6 md:space-y-0 md:space-x-10 md:h-dvh max-w-4xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 flex justify-center flex-1 items-center w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-full w-40 h-40 object-cover border-4 border-background shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-3"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start md:items-center text-left">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I'm a passionate Web Developer with over{" "}
            <strong>5 years of experience</strong> crafting modern, responsive,
            and accessible web applications. I specialize in building clean and
            performant user interfaces using <strong>React</strong>,{" "}
            <strong>Next.js</strong>, and <strong>Angular</strong>, with a deep
            understanding of <strong>JavaScript</strong>, <strong>HTML</strong>,
            and <strong>CSS</strong>.
          </p>
          <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">
            I'm skilled in managing complex state with tools like{" "}
            <strong>Redux</strong> and <strong>NgRx</strong>, and I rely on{" "}
            <strong>Git</strong> daily for collaboration and version control. I
            enjoy tackling algorithmic challenges on platforms like{" "}
            <strong>LeetCode</strong> to keep my problem-solving sharp and
            continuously improve as a developer.
          </p>
          <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">
            Whether it's refining a UI, optimizing performance, or collaborating
            on large-scale frontend architectures, I bring a strong attention to
            detail and a mindset focused on scalability and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
