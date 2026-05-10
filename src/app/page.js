import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

/**
 * Main portfolio page — assembles all sections in order.
 * Each section is a self-contained component that handles its own
 * animations, layout, and data consumption.
 */
export default function Home() {
  return (
    <>
      {/* Scroll progress indicator */}
      <ScrollProgressBar />

      {/* Sticky navigation */}
      <Navbar />

      <main>
        {/* 1. Hero — first impression */}
        <Hero />

        {/* 2. About — personal intro */}
        <About />

        {/* 3. Skills — tech stack */}
        <Skills />

        {/* 4. Experience — career timeline */}
        <Experience />

        {/* 5. Projects — work showcase */}
        <Projects />

        {/* 6. Achievements — publications & recognition */}
        <Achievements />

        {/* 7. Contact — reach me */}
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}
