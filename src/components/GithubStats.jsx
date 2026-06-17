import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function GithubStats() {
  return (
    <section
      id="github"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            GitHub Activity
          </h2>

          <p className="text-gray-400 mt-4">
            My coding journey, contributions, and development activity.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-slate-800
              p-6
              rounded-3xl
              border
              border-slate-700
              shadow-lg
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGithub className="text-cyan-400 text-2xl" />
              <h3 className="text-xl font-semibold">
                GitHub Statistics
              </h3>
            </div>

            <img
              className="w-full rounded-xl"
              src="https://github-readme-stats.vercel.app/api?username=suyogpes5&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub Stats"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-slate-800
              p-6
              rounded-3xl
              border
              border-slate-700
              shadow-lg
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGithub className="text-cyan-400 text-2xl" />
              <h3 className="text-xl font-semibold">
                Contribution Streak
              </h3>
            </div>

            <img
              className="w-full rounded-xl"
              src="https://github-readme-streak-stats.herokuapp.com?user=suyogpes5&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
            />
          </motion.div>

        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-10
            bg-slate-800
            p-6
            rounded-3xl
            border
            border-slate-700
          "
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            Contribution Graph
          </h3>

          <img
            className="w-full rounded-xl"
            src="https://github-readme-activity-graph.vercel.app/graph?username=suyogpes5&theme=tokyo-night&hide_border=true"
            alt="GitHub Activity Graph"
          />
        </motion.div>

      </div>
    </section>
  );
}