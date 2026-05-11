import SectionWrapper from "@/components/shared/SectionWrapper";
import { projects } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">

        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Projects
          </h2>

          {/* Featured Project */}
          {featured && (
            <div className="mb-12 opacity-0 animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">
                {featured.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {featured.github && (
                  <a href={featured.github} target="_blank">
                    <FaGithub size={16} /> 
                  </a>
                )}
                {featured.live && (
                  <a href={featured.live} target="_blank">
                    <GoLinkExternal size={16} /> 
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((project, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank">
                      <FaGithub size={14} /> 
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank">
                      <GoLinkExternal size={14} /> 
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </SectionWrapper>

      </div>
    </section>
  );
}