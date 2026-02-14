import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Founder from "./components/Founder";
import Archetypes from "./components/Archetypes";
import Outcomes from "./components/Outcomes";
import Assessment from "./components/Assessment";
import Pathways from "./components/Pathways";
import Podcast from "./components/Podcast";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Archetypes />
        <Outcomes />
        <Assessment />
        <Pathways />
        <Podcast />
        <Testimonials />
        <Founder />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
