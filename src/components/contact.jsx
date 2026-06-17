import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "suyogesamarth@gmail.com",
      link: "mailto:suyogesamarth@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "@suyogpes5",
      link: "https://github.com/suyogpes5",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Suyog Samarth",
      link: "https://www.linkedin.com/in/suyog-esamarth",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-green-500/20
              text-green-400
              px-4
              py-2
              rounded-full
              text-sm
              mb-5
            "
          >
            <FaBriefcase />
            Available for Internships
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interested in collaborating, internships,
            hackathons, or discussing technology?
            Feel free to reach out.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={
                item.title === "Email"
                  ? "_self"
                  : "_blank"
              }
              rel="noreferrer"
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-3xl
                p-8
                text-center
                hover:border-cyan-400
                transition-all
              "
            >
              <div className="text-cyan-400 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 break-words">
                {item.value}
              </p>
            </motion.a>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <h3 className="text-2xl font-semibold mb-4">
            Let's build something amazing together 🚀
          </h3>

          <a
            href="mailto:suyogesamarth@gmail.com"
            className="
              inline-block
              bg-cyan-500
              hover:bg-cyan-600
              px-8
              py-4
              rounded-xl
              font-medium
              transition-all
            "
          >
            Send Message
          </a>

        </div>

      </div>
    </section>
  );
}