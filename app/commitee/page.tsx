"use client";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import Navbar to reduce initial bundle size
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

// Define static data outside the component
const sectionTitles = [
  "Patrons",
  "Conference General Chair",
  "Conference Chairs",
  "Conference Organizing Chairs",
  "Conference Secretaries",
  "Sponsorship & Industry Chairs",
  "Publicity Chairs",
  "Publication Co-Chairs",
  "International Advisory Chairs",
  "Other Committee Members",
];

const committeeMembers2D = [
  // Patrons (with images)
  [
    { name: "Shri Suneel Galgotia", position: "Hon'ble Chancellor", affiliation: "Galgotias University, India", imageUrl: "/sunilSir.jpeg" },
    { name: "Prof. (Dr.) S.N. Singh", position: "Director", affiliation: "IIITM Gwalior, India", imageUrl: "/snsingh.jpeg" },
    { name: "Dr. Dhruv Galgotia", position: "CEO", affiliation: "Galgotias University, India", imageUrl: "/dhruvSir.jpeg" },
    { name: "Prof. (Dr.) M.K. Babu Kayala", position: "Vice Chancellor", affiliation: "Galgotias University, India", imageUrl: "/vcsir.jpg" },
    { name: "Ms. Aradhana Galgotia", position: "Director Operations", affiliation: "Galgotias University, India", imageUrl: "/aradhanaMaam.jpg" },
  ],
  // Conference General Chair (with images)
  [
    { name: "Prof. (Dr.) Avadhesh Kumar", position: "Pro Vice Chancellor", affiliation: "Galgotias University, India", imageUrl: "/pvcsir.jpg" },
  ],
  // Conference Chairs (no images)
  [
    { name: "Prof. Prashant Johri", position: "Conference Chair", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Kuldeep S. Kaswan", position: "Conference Chair", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Aanjey M. Tripathi", position: "Conference Chair", affiliation: "Galgotias University, Greater Noida, India" },
  ],
  // Conference Organizing Chairs (no images)
  [
    { name: "Dr. Vimal Kumar", position: "Conference Organizing Chair", affiliation: "Galgotias University, Greater Noida, India" },
  ],
  // Conference Secretaries (no images)
  [
    { name: "Dr. Gaurav Agarwal", position: "Conference Secretary", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Abdul Aleem", position: "Conference Secretary", affiliation: "Galgotias University, Greater Noida, India" },
  ],
  // Sponsorship & Industry Chairs (no images)
  [
    { name: "Prof. Jay Singh", position: "Sponsorship & Industry Chair", affiliation: "GLBITM, Chair-Publication and Section History, IEEE UP Section, India" },
    { name: "Dr. Anurag Singh", position: "Sponsorship & Industry Chair", affiliation: "NIT Delhi, India" },
  ],
  // Publicity Chairs (no images)
  [
    { name: "Prof. Ravi Sharma", position: "Publicity Chair", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Prof. Tarun Kumar", position: "Publicity Chair", affiliation: "Galgotias University, Greater Noida, India" },
  ],
  // Publication Co-Chairs (no images)
  [
    { name: "Prof. Jay Singh", position: "Publication Co-Chair", affiliation: "GLBITM, Chair-Publication and Section History, IEEE UP Section, India" },
    { name: "Dr. Manish Kumar", position: "Publication Co-Chair", affiliation: "Galgotias University, Greater Noida, India" },
  ],
  // International Advisory Chairs (no images)
  [
    { name: "Prof. Brijesh Kumar", position: "International Advisory Chair", affiliation: "School Of Information & Communication Technology, GGS Indraprastha University, Delhi, India" },
    { name: "Prof. Chitra Desai", position: "International Advisory Chair", affiliation: "NDA, Khadakwasla, Pune, India" },
    { name: "Prof. Durgesh K Mishra", position: "International Advisory Chair", affiliation: "Sri Aurobindo Institute of Technology, Indore, MP, India" },
    { name: "Prof. P. Mohamed Fathimal", position: "International Advisory Chair", affiliation: "CSE, Vadapalani Campus, SRM Institute of Science and Technology, Chennai, India" },
  ],
  // Other Committee Members (no images)
  [
    { name: "Prof. D. N. Goswami", position: "Professor", affiliation: "Jiwaji University, India" },
    { name: "Prof. Dilip Kumar Sharma", position: "Professor", affiliation: "GLA Mathura, Mathura, India" },
    { name: "Prof. K Muralidharan", position: "Professor", affiliation: "MS University of Baroda, Vadodara, India" },
    { name: "Prof. K. Jaggi", position: "Professor", affiliation: "University Of Delhi, Delhi, India" },
    { name: "Prof. M. N. Hoda", position: "Professor", affiliation: "Bharati Vidyapeeth’s Institute of Computer Applications & Management (BVICAM), New Delhi, India" },
    { name: "Prof. Mandeep Mittal", position: "Professor", affiliation: "Amity University Uttar Pradesh, India" },
    { name: "Prof. Naveen Rajpal", position: "Professor", affiliation: "GGSIP University, New Delhi, India" },
    { name: "Prof. Ompal", position: "Professor", affiliation: "University Of Delhi, Delhi, India" },
    { name: "Prof. P. S. Grover", position: "Professor", affiliation: "Member NBA Core Team, former Director, Dean & HOD, CS, Delhi University, Delhi, India" },
    { name: "Dr. Suneeta Yadav", position: "Dean, SCSE", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. V. Khemchandani", position: "Dean, SCAT", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Arvind Panwar", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Sudeept Yadav", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Prof. Shrddha Sagar", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Prof. Ashok K. Yadav", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Prof. Deepak Soni", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Prof. Sunil Bharti", position: "Professor", affiliation: "GCET, Greater Noida, India" },
    { name: "Prof. Lalit Kumar", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Prof. Meenakshi Awasthi", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Prof. T. Poongodi", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Aradhana Dutt Jauhari", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Sonu Jha", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
    { name: "Dr. Sunil Kumar", position: "Professor", affiliation: "Galgotias University, Greater Noida, India" },
  ],
];

// Memoized CommitteeCard component to prevent unnecessary re-renders
interface CommitteeCardProps {
  member: {
    name: string;
    position: string;
    affiliation: string;
    imageUrl?: string;
  };
  sectionIndex: number;
}

const CommitteeCard = memo(({ member, sectionIndex }: CommitteeCardProps) => (
  <motion.div
    key={member.name}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl hover:bg-gray-800/70 transition-all duration-300"
  >
    {sectionIndex < 2 && member.imageUrl && (
      <img
        src={member.imageUrl}
        alt={member.name}
        loading="lazy"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500/50"
      />
    )}
    <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
    <p className="text-blue-300 mb-1 text-center">{member.position}</p>
    <p className="text-gray-400 text-center text-sm">{member.affiliation}</p>
  </motion.div>
));
CommitteeCard.displayName = "CommitteeCard";

export default function CommitteePage() {
  // Memoize the data (though already outside, this ensures no redefinition)
  const memoizedSections = useMemo(() => committeeMembers2D, []);

  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
              Conference Committee
            </span>
          </h1>

          {/* Render each section */}
          {memoizedSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="mb-16 bg-gray-800/20 border border-gray-700/50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                {sectionTitles[sectionIndex]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.map((member, memberIndex) => (
                  <CommitteeCard
                    key={member.name}
                    member={member}
                    sectionIndex={sectionIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}