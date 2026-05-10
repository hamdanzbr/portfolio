import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
export const metadata = {
  title: {
    default: "Hamdan | Frontend Developer",
    template: "%s | Hamdan",
  },
  description:
    "Frontend developer with 1+ year experience specializing in React, Next.js, and modern web technologies. Explore my portfolio and projects.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Hamdan" }],
  creator: "Hamdan",

  openGraph: {
    title: "Hamdan | Frontend Developer",
    description:
      "Explore my portfolio showcasing real-world projects and experience in React, Next.js, and modern web development.",
    url: "https://your-domain.com",
    siteName: "Hamdan's Portfolio",
    images: [
      {
        url: "/bannerimage.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hamdan's Portfolio",
    description: "Frontend Developer Portfolio",
    images: ["/bannerimage.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}