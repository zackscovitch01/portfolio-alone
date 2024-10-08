import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import SocialLinks from "@/components/SocialLinks";
import Projects from "@/components/Projects";
import ProjectsArchive from "@/components/ProjectsArchive";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Moubarack's Portfolio",
  description: "Moubarack Bagoudou's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="lg:absolute bg-[#0F172A] lg:grid lg:grid-cols-2 max-w-screen-xl lg:justify-center lg:ml-[2rem] lg:gap-4 px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="max-w-xl p-6 lg:flex lg:flex-col lg:justify-between lg:max-h-[680px] lg:mt-10 lg:sticky lg:top-10">
          <Header />
          <SocialLinks />
        </div>
        <div>
          <About />
          <Experience />
          <Resume />
          <Projects />
          {/* <ProjectsArchive /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
