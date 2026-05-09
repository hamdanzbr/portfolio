// "use client";

import SectionWrapper from "@/components/shared/SectionWrapper";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 max-w-2xl leading-relaxed">
            I am a frontend developer with over 1 year of experience building
            scalable and performant web applications. I specialize in React.js
            and am currently expanding my skills in Next.js and TypeScript.  
            I enjoy crafting clean UI, improving performance, and creating
            seamless user experiences.
          </p>
        </SectionWrapper>

      </div>
    </section>
  );
}