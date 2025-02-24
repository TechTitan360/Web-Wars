import ICCSAIHero from "@/components/ICCSAIHero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ConferenceDetails from "@/components/ConferenceDetails";
import Registration from "@/components/Registration";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { CarouselDemo } from "@/components/Carousel";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <HomePage />
      {/* <ICCSAIHero />
      <About /> */}
      <CarouselDemo />
      <ConferenceDetails />
      <Registration />
      <FAQ />
      <Contact />
      <footer className="bg-black text-white text-center py-4">
        <p>Powered by ShadowDEV🥷🏻</p>
        <p>Join us at ICCSAI 2025 and be part of the future of AI, Security, and Communication. 🚀</p>
      </footer>
    </main>
  );
}