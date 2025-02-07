"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
  {
    name: "Prof. (Dr.) S.N. Singh",
    position: "Director, IIITM Gwalior, India",
    imageUrl: "/path/to/sn-singh.jpg", // Replace with actual image path
  },
  {
    name: "Dr. Yogesh S. Chauhan",
    position: "Professor, IIT Kanpur, India",
    imageUrl: "/path/to/yogesh-chauhan.jpg", // Replace with actual image path
  },
  {
    name: "Prof. J. Ramkumar",
    position: "Dean (Planning), IIT Kanpur, India",
    imageUrl: "/path/to/j-ramkumar.jpg", // Replace with actual image path
  },
  {
    name: "Dr. Liudong Xing",
    position: "Professor, University of Massachusetts, Dartmouth",
    imageUrl: "/path/to/liudong-xing.jpg", // Replace with actual image path
  },
  {
    name: "Ts. Dr. Nurfadhlina Mohd Sharef",
    position: "Associate Professor, UKM, Malaysia",
    imageUrl: "/path/to/nurfadhlina-sharef.jpg", // Replace with actual image path
  },
  {
    name: "Dr. Ahmed A. Elngar",
    position: "Associate Professor, Beni-Suef University, Egypt",
    imageUrl: "/path/to/ahmed-elngar.jpg", // Replace with actual image path
  },
  {
    name: "Prof. Ts. Dr. Murali Raman",
    position: "Deputy Vice Chancellor, Asia Pacific University, Malaysia",
    imageUrl: "/path/to/murali-raman.jpg", // Replace with actual image path
  },
  {
    name: "Dr. Rajeev Srivastava",
    position: "Professor, IIT BHU, Varanasi, India",
    imageUrl: "/path/to/rajeev-srivastava.jpg", // Replace with actual image path
  },
  {
    name: "Dr. Asheesh Kumar Singh",
    position: "Professor, MNNIT Allahabad, India",
    imageUrl: "/path/to/asheesh-singh.jpg", // Replace with actual image path
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12 text-center">
          Speakers & Sessions
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          Meet our esteemed lineup of industry leaders, renowned researchers, and innovative thinkers. Engage in expert-led sessions, hands-on workshops, and panel discussions that dive deep into emerging technologies and real-world applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {speakers.map((speaker, index) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}