import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Speakers />
      <footer className="bg-black text-white text-center py-4">
        <p>Powered by ShadowDEV🥷🏻</p>
      </footer>
    </main>
  );
}