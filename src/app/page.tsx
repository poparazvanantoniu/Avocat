import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ScrollShowcase from "@/components/ScrollShowcase";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ScrollShowcase />
        <PracticeAreas />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
