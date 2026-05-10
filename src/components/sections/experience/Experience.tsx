import SectionWrapper from "@/components/shared/SectionWrapper";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">

        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Experience
          </h2>

          <div className="relative border-l border-white/10 pl-4">
            {experience.map((item, index) => (
              <div
                key={index}
                className="mb-10 pl-8 relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Dot */}
                <span className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.25)]"></span>

                <h3 className="text-lg font-medium">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-400 mb-2">
                  {item.company} • {item.duration}
                </p>

                <p className="text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </SectionWrapper>

      </div>
    </section>
  );
}