import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "AI Career Analyzer",
    description:
      "AI-powered platform that analyzes skills, interests and career goals to recommend suitable career paths and learning roadmaps.",
    tech: ["React", "JavaScript", "AI"],
    github: "https://github.com/suyogpes5/AI-Career-Analyzer-",
  },

  {
    number: "02",
    title: "Stock Market Dashboard",
    description:
      "Interactive dashboard for stock tracking, market insights, analytics and real-time financial data visualization.",
    tech: ["React", "JavaScript", "API"],
    github: "https://github.com/suyogpes5/smd-p1",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-400">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in
            React, JavaScript and modern web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.number}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                overflow-hidden
                group
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-cyan-500/5
                  to-blue-500/5
                "
              />

              {/* Project Number */}
              <div className="text-6xl font-bold text-slate-800 mb-4">
                {project.number}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-400
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  transition
                "
              >
                <FaGithub />
                View Code
                <FaArrowRight size={12} />
              </a>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}