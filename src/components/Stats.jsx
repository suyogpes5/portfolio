import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    number: "2+",
    title: "Projects Built",
    icon: <FaCode />,
  },
  {
    number: "6+",
    title: "Technologies",
    icon: <FaLaptopCode />,
  },
  {
    number: "2028",
    title: "Graduation",
    icon: <FaGraduationCap />,
  },
  {
    number: "Open",
    title: "Internships",
    icon: <FaBriefcase />,
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">
            Quick Overview
          </h2>

          <p className="text-gray-400 mt-3">
            A snapshot of my learning journey and experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
                text-center
                shadow-lg
                hover:border-cyan-400
                transition-all
              "
            >
              <div className="flex justify-center mb-4 text-cyan-400 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}