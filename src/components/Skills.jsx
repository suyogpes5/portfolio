import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    level: 90,
    icon: <FaReact className="text-cyan-400 text-4xl" />,
  },
  {
    name: "JavaScript",
    level: 85,
    icon: <FaJs className="text-yellow-400 text-4xl" />,
  },
  {
    name: "HTML",
    level: 95,
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
  },
  {
    name: "CSS",
    level: 90,
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
  },
  {
    name: "Git",
    level: 80,
    icon: <FaGitAlt className="text-orange-600 text-4xl" />,
  },
  {
    name: "GitHub",
    level: 85,
    icon: <FaGithub className="text-white text-4xl" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="
                bg-slate-800
                p-6
                rounded-2xl
                shadow-lg
                border
                border-slate-700
                hover:border-cyan-400
                transition-all
              "
            >
              <div className="flex justify-between items-center mb-4">

                <div className="flex items-center gap-4">
                  {skill.icon}

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-cyan-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="bg-cyan-400 h-3 rounded-full"
                />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}