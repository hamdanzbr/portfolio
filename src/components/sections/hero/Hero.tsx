"use client";

import TypingText from "@/components/shared/TypingText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Glow background */}
        <div className="absolute inset-0 -z-10 blur-2xl opacity-20 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-gray-400 mb-4"
        >
          Available for new opportunities
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl text-[#CCCCCC] font-bold mb-4"
        >
          Hi, I’m Hamdan 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
        >
          <TypingText text="Software engineer crafting clean digital experiences." />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-300 max-w-xl mb-8"
        >
          I build scalable and performant web applications using React, Next.js,
          and modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="/Hamdan cv25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:scale-105 hover:shadow-lg hover:shadow-white/10 transition inline-block"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-700 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition inline-block hover:bg-purple-500/10"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
