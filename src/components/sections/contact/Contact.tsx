// "use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import MotionAnchor from "@/components/shared/MotionAnchor";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 text-center">

        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-300 mb-10">
            I’m currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>

          {/* Email Button */}
          <MotionAnchor
            href="mailto:your-email@example.com"
          >
            <CiMail size={18} />

            Send Email
          </MotionAnchor>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-gray-400">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </SectionWrapper>

      </div>
    </section>
  );
}