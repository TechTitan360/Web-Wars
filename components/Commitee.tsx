"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const committeeMembers = [
  {
    name: "Shri Suneel Galgotia",
    position: "Chancellor",
    affiliation: "Galgotias University, Greater Noida, India",
    imageUrl: "/path/to/suneel-galgotia.jpg", // Placeholder, replace with actual path
  },
  {
    name: "Prof. (Dr.) S.N. Singh",
    position: "Director",
    affiliation: "IIITM Gwalior, India",
    imageUrl: "/path/to/sn-singh.jpg", // Placeholder
  },
  {
    name: "Dr. Dhruv Galgotia",
    position: "CEO",
    affiliation: "Galgotias University, Greater Noida, India",
    imageUrl: "/path/to/dhruv-galgotia.jpg", // Placeholder
  },
  {
    name: "Prof. Avadhesh Kumar",
    position: "Pro Vice Chancellor",
    affiliation: "Galgotias University, Greater Noida, India",
    imageUrl: "/path/to/avadhesh-kumar.jpg", // Placeholder
  },
  {
    name: "Prof. Prashant Johri",
    position: "Conference Chair",
    affiliation: "Galgotias University, Greater Noida, India",
    imageUrl: "/path/to/prashant-johri.jpg", // Placeholder
  },
  {
    name: "Dr. Kuldeep S. Kaswan",
    position: "Conference Chair",
    affiliation: "Galgotias University, Greater Noida, India",
    imageUrl: "/path/to/kuldeep-kaswan.jpg", // Placeholder
  },
  {
    name: "Dr. Aanjey Mani Tripathi",
    position: "Conference Chair",
    affiliation: "Galgotias University, Greater Noida, India",
    imageUrl: "/path/to/aanjey-tripathi.jpg", // Placeholder
  },
  // Agar aur members add karne hain (jaise Technical Committee se), toh yahan daal sakta hai
];

export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12 text-center">
          Committee Members
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          Meet the distinguished members of the ICCSAI 2025 organizing committee, comprising esteemed leaders, academics, and professionals driving the future of computer science and artificial intelligence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl p-6 text-center flex flex-col items-center shadow-md"
            >
              <div className="w-32 h-32 mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.position}</p>
              <p className="text-gray-400">{member.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}