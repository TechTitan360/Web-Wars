import ICCSAIHero from "@/components/ICCSAIHero"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import ConferenceDetails from "@/components/ConferenceDetails"
import Speakers from "@/components/Speakers"
import Registration from "@/components/Registration"
import Sponsors from "@/components/Sponsors"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <ICCSAIHero />
      <About />
      <ConferenceDetails />
      <Speakers />
      <Registration />
      <Sponsors />
      <FAQ />
      <Contact />
      <footer className="bg-black text-white text-center py-4">
        <p>Powered by IEEE Computer Society</p>
        <p>Join us at ICCSAI 2025 and be part of the future of AI, Security, and Communication. 🚀</p>
      </footer>
    </main>
  )
}

