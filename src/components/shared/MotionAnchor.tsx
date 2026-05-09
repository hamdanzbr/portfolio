"use client";

import { motion } from "framer-motion";

export default function MotionAnchor({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium mb-8"
    >
      {children}
    </motion.a>
  );
}