export default function ConferenceDetails() {
  const topics = [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Data Privacy",
    "Advanced Networking & Communication Systems",
    "Ethical AI & Policy Regulations",
    "Quantum Computing & Future Technologies",
  ]

  return (
    <section id="details" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">Conference Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xl text-gray-300">
              <strong>Date:</strong> [Insert Date]
            </p>
            <p className="text-xl text-gray-300">
              <strong>Location:</strong> [Insert Location]
            </p>
            <p className="text-xl text-gray-300">
              <strong>Format:</strong> Hybrid (In-person + Virtual Sessions)
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Topics Covered:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {topics.map((topic, index) => (
                <li key={index} className="mb-2">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

