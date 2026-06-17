import about from "../assets/about.jpg";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-400 mt-4">
            Get to know more about me and my journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute -inset-2 bg-cyan-500 blur-2xl opacity-20 rounded-3xl"></div>

              <img
                src={about}
                alt="About Suyog"
                className="
                  relative
                  w-80
                  rounded-3xl
                  border
                  border-cyan-400
                  shadow-xl
                "
              />

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm
              <span className="text-cyan-400">
                {" "}Suyog Samarth
              </span>
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              I am a Computer Science Engineering student at
              K.D.K College of Engineering, Nagpur.
              Passionate about web development, modern UI design,
              and solving real-world problems through technology.

              I enjoy building responsive applications using
              React, JavaScript, HTML, CSS, Git, and GitHub.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">

              <div className="bg-slate-800 p-4 rounded-2xl text-center">
                <FaGraduationCap className="mx-auto text-cyan-400 text-3xl mb-3" />
                <h4 className="font-semibold">
                  CSE Student
                </h4>
              </div>

              <div className="bg-slate-800 p-4 rounded-2xl text-center">
                <FaLaptopCode className="mx-auto text-cyan-400 text-3xl mb-3" />
                <h4 className="font-semibold">
                  React Developer
                </h4>
              </div>

              <div className="bg-slate-800 p-4 rounded-2xl text-center">
                <FaRocket className="mx-auto text-cyan-400 text-3xl mb-3" />
                <h4 className="font-semibold">
                  AI Enthusiast
                </h4>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}