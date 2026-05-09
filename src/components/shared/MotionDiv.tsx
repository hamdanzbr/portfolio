"use client";

import { motion } from "framer-motion";

export default function MotionDiv({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}