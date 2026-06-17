import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Suyog.dev
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              React Developer, CSE Student and AI Enthusiast
              passionate about building modern web applications
              and solving real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#home" className="hover:text-cyan-400">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400">
                Contact
              </a>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/suyogpes5"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3
                  bg-slate-800
                  rounded-xl
                  hover:bg-cyan-500
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/suyog-esamarth"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3
                  bg-slate-800
                  rounded-xl
                  hover:bg-cyan-500
                  transition
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:suyogesamarth@gmail.com"
                className="
                  p-3
                  bg-slate-800
                  rounded-xl
                  hover:bg-cyan-500
                  transition
                "
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Suyog Samarth. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="
              mt-4 md:mt-0
              flex
              items-center
              gap-2
              text-cyan-400
              hover:text-cyan-300
            "
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}