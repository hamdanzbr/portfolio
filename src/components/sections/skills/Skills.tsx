"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const iconMap: Record<string, any> = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: FaJs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  MongoDB: SiMongodb,
  Git: FaGitAlt,
};
export default function Skills() {
  return (
        <section id="skills" className="py-20 md:py-8">
          <div className="max-w-6xl mx-auto px-4">
            <SectionWrapper>
              <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                Skills
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                  const Icon = iconMap[skill.name];

                  return (
                    <div
                      key={skill.name}
                      className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 ease-out"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {Icon && (
                        <Icon className="text-2xl text-purple-400 mb-3" />
                      )}

                      <h3 className="font-medium text-lg">{skill.name}</h3>

                      <p className="text-sm text-gray-400 mt-2">
                        {skill.level}
                      </p>
                    </div>
                  );
                })}
              </div>
            </SectionWrapper>
          </div>
        </section>
  );
}
