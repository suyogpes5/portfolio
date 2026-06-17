import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >

            <p className="text-cyan-400 font-medium mb-4">
              👋 Welcome to my portfolio
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Suyog Samarth
              </span>
            </h1>

            <div className="text-2xl md:text-3xl mt-5 font-semibold text-gray-300 h-12">
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "JavaScript Developer",
                  2000,
                  "CSE Student",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* PLAN EXECUTE GROWTH */}
           <div className="flex gap-3 flex-wrap mt-5">

  <span className="px-4 py-2 rounded-full border border-cyan-500 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
    PLAN
  </span>

  <span className="px-4 py-2 rounded-full border border-cyan-500 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
    EXECUTE
  </span>

  <span className="px-4 py-2 rounded-full border border-cyan-500 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
    GROW
  </span>

</div>

            {/* Internship Badge */}
            <div className="mt-4">
              <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                ● Available for Internships
              </span>
            </div>

            <p className="mt-6 text-gray-400 text-lg leading-8">
              Computer Science Engineering student at
              <span className="text-white font-medium">
                {" "}K.D.K College of Engineering, Nagpur
              </span>.
              Passionate about building modern web applications,
              solving real-world problems and continuously
              learning new technologies.
            </p>

            <div className="mt-3 text-gray-500">
              Batch of 2028
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8">

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  2+
                </h3>
                <p className="text-gray-400 text-sm">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  6+
                </h3>
                <p className="text-gray-400 text-sm">
                  Skills
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  Open
                </h3>
                <p className="text-gray-400 text-sm">
                  Internships
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-medium transition-all"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl transition-all"
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="https://github.com/suyogpes5"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl transition-all"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/suyog-esamarth"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl transition-all"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute -inset-4 bg-cyan-500 blur-3xl opacity-20 rounded-3xl"></div>

              <div className="relative bg-slate-900 p-4 rounded-3xl border border-cyan-500 shadow-2xl">

                <div className="w-60 h-72 overflow-hidden rounded-2xl">

                  <img
                    src={profile}
                    alt="Suyog Samarth"
                    className="w-full h-full object-cover object-top"
                  />

                </div>

                <div className="mt-4 text-center">

                  <h3 className="font-bold text-xl">
                    Suyog Samarth
                  </h3>

                  <p className="text-cyan-400 text-sm">
                    React Developer
                  </p>
                  

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="py-24 bg-slate-900 scroll-mb-24"> </div>
    </section>
  );
}