export const skills = [
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "PostgreSql", level: "Intermediate" },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "HUZLIN",
    duration: "2024 - Present",
    description:
      "Built real-time chat features with message virtualization, optimized UI performance, and collaborated with backend developers to integrate APIs efficiently.",
  },
  {
    role: "MERN Stack Intern",
    company: "Luminar Technolab",
    duration: "Aug 2023 - Apr 2024",
    description:
      "Completed hands-on training in MERN stack development, building full-stack applications using React, Node.js, Express, and MongoDB. Gained experience in REST APIs, authentication, and responsive UI development.",
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  frontendRepo?: string;
  backendRepo?: string;
  featured?: boolean;
}

export const projects:Project[] = [
  {
    title: "Restaurant QR Ordering System",
    description:
      "Built a full-stack restaurant ordering platform where customers scan table QR codes to browse menus, place orders, and track status in real time. Developed an admin dashboard for managing dishes, categories, tables, analytics, and live orders with drag-and-drop workflow updates. Implemented Socket.IO for real-time synchronization, Cloudinary image uploads, QR code generation, JWT authentication, and PostgreSQL with Prisma ORM.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Zustand",
      "React Query",
      "Cloudinary",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    live: "https://restaurant-qr-nu.vercel.app",
    frontendRepo: "https://github.com/hamdanzbr/restaurant-qr",
    backendRepo:"https://github.com/hamdanzbr/restaurant-qr-backend",
    featured: true,
  },

  {
    title: "Aurix E-Commerce",
    description:
      "Built a full-stack e-commerce platform using Next.js, TypeScript, Node.js, Express, and MongoDB. Implemented authentication, product filtering, wishlist, cart management, order tracking, and responsive UI with modern state management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Zustand",
      "React Query",
      "Tailwind",
    ],
    live: "https://aurix-fitness-ring-commerce.vercel.app",
    frontendRepo: "https://github.com/hamdanzbr/aurix-fitness-ring-commerce",
    backendRepo:"https://github.com/hamdanzbr/aurix-backend"
  },

  {
    title: "Freelance Platform (Startup)",
    description:
      "Worked as a frontend developer building scalable UI components and real-time chat features. Collaborated with backend APIs, optimized performance, and developed production-ready features used by real users.",
    tech: ["React", "Next.js", "Tailwind", "WebSocket"],
    live: "https://app.huzl.in",
    frontendRepo: "",
  },

  {
    title: "Real-time Chat App",
    description:
      "Built a real-time chat application using Socket.io with instant messaging, user authentication, efficient state management, and optimized rendering performance.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "",
    frontendRepo: "https://github.com/hamdanzbr/Mern-Chat-App",
  },
];
