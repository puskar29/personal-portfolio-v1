import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/lib/theme";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Puskar Thapa Magar | Developer" },
      {
        name: "description",
        content:
          "Puskar Thapa Magar is a developer from Kathmandu, Nepal. Skilled in React, Tailwind CSS, HTML, Java, C, Figma, and Canva. Explore projects, portfolio, and contact information.",
      },
      {
        name: "keywords",
        content:
          "Puskar Thapa Magar, Puskar Thapa Magar portfolio, developer Nepal, software developer Kathmandu, React developer Nepal, Tailwind CSS developer, frontend developer Nepal, portfolio website Nepal",
      },
      { name: "author", content: "Puskar Thapa Magar" },
      { property: "og:title", content: "Puskar Thapa Magar | Developer" },
      {
        property: "og:description",
        content: "Portfolio of Puskar Thapa Magar, Developer from Kathmandu, Nepal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://puskarthapamagar.com.np" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Puskar Thapa Magar | Developer" },
      {
        name: "twitter:description",
        content: "Portfolio of Puskar Thapa Magar, Developer from Kathmandu, Nepal.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://puskarthapamagar.com.np" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <Loader />
      <SmoothScroll />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </ThemeProvider>
  );
}
