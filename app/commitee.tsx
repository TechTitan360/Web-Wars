import Navbar from "@/components/Navbar";
import Committee from "@/components/Commitee";

export default function CommitteePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Committee />
      <footer className="bg-black text-white text-center py-4">
        <p>Powered by ShadowDEV🥷🏻</p>
      </footer>
    </main>
  );
}