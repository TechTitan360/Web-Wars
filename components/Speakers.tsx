"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const keynoteSpeakers = [
  {
    name: "Prof. (Dr.) S.N. Singh",
    position: "Director",
    affiliation: "IIITM Gwalior, India",
    imageUrl: "/path/to/sn-singh.jpg", // Placeholder, replace with actual path
  },
  {
    name: "Dr. Yogesh S. Chauhan",
    position: "Professor",
    affiliation: "IIT Kanpur, India",
    imageUrl: "/path/to/yogesh-chauhan.jpg", // Placeholder
  },
  {
    name: "Prof. J. Ramkumar",
    position: "Dean (Planning)",
    affiliation: "IIT Kanpur, India",
    imageUrl: "/path/to/j-ramkumar.jpg", // Placeholder
  },
  {
    name: "Dr. Liudong Xing",
    position: "Professor",
    affiliation: "University of Massachusetts, Dartmouth",
    imageUrl: "/path/to/liudong-xing.jpg", // Placeholder
  },
  {
    name: "Ts. Dr. Nurfadhlina Mohd Sharef",
    position: "Associate Professor",
    affiliation: "UKM, Malaysia",
    imageUrl: "/path/to/nurfadhlina-sharef.jpg", // Placeholder
  },
  {
    name: "Dr. Ahmed A. Elngar",
    position: "Associate Professor",
    affiliation: "Beni-Suef University, Egypt",
    imageUrl: "/path/to/ahmed-elngar.jpg", // Placeholder
  },
  {
    name: "Prof. Ts. Dr. Murali Raman",
    position: "Deputy Vice Chancellor",
    affiliation: "Asia Pacific University, Malaysia",
    imageUrl: "/path/to/murali-raman.jpg", // Placeholder
  },
  {
    name: "Dr. Rajeev Srivastava",
    position: "Professor",
    affiliation: "IIT BHU, Varanasi, India",
    imageUrl: "/path/to/rajeev-srivastava.jpg", // Placeholder
  },
  {
    name: "Dr. Asheesh Kumar Singh",
    position: "Professor",
    affiliation: "MNNIT Allahabad, India",
    imageUrl: "/path/to/asheesh-singh.jpg", // Placeholder
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12 text-center">
          Keynote Speakers
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          Join us at ICCSAI 2025 to hear from our distinguished keynote speakers – global leaders and pioneers in computer science, communication, and artificial intelligence. Their insights will inspire and shape the future of technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {keynoteSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl p-6 text-center flex flex-col items-center shadow-md"
            >
              <div className="w-32 h-32 mb-4">
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{speaker.name}</h3>
              <p className="text-gray-400">{speaker.position}</p>
              <p className="text-gray-400">{speaker.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}