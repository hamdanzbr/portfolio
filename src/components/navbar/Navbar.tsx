"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50  bg-black/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="font-semibold text-lg">dev.io</h1>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition ${
                active === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}