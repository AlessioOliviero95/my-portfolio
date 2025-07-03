// components/AboutSection.tsx

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col h-dvh items-start md:items-center justify-center mx-auto max-w-4xl  space-y-6 text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        About Me
      </h2>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        I'm a passionate Web Developer with over <strong>5 years of experience</strong> crafting
        modern, responsive, and accessible web applications. I specialize in
        building clean and performant user interfaces using <strong>React</strong>, <strong>Next.js</strong>,
        and <strong>Angular</strong>, with a deep understanding of <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.
      </p>

      <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">
        I'm skilled in managing complex state with tools like <strong>Redux</strong> and <strong>NgRx</strong>,
        and I rely on <strong>Git</strong> daily for collaboration and version control. I enjoy tackling algorithmic
        challenges on platforms like <strong>LeetCode</strong> to keep my problem-solving sharp and continuously improve as a developer.
      </p>

      <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">
        Whether it's refining a UI, optimizing performance, or collaborating on large-scale frontend architectures,
        I bring a strong attention to detail and a mindset focused on scalability and maintainability.
      </p>
    </section>
  );
}
