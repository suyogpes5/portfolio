import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaCode,
  FaBrain,
  FaServer,
} from "react-icons/fa";

const learningItems = [
  {
    title: "Spring Boot",
    description: "Building scalable backend applications using Java and Spring Boot.",
    icon: <FaServer />,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Improving problem-solving and coding interview skills.",
    icon: <FaCode />,
  },
  {
    title: "Full Stack Development",
    description: "Combining frontend and backend technologies to build complete applications.",
    icon: <FaBookOpen />,
  },
  {
    title: "AI Integration",
    description: "Exploring AI-powered solutions and intelligent web applications.",
    icon: <FaBrain />,
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Currently Learning
          </h2>

          <p className="text-gray-400 mt-4">
            Continuously improving my skills and exploring new technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
                shadow-lg
                hover:border-cyan-400
                transition-all
              "
            >
              <div className="text-cyan-400 text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}