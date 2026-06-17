import { motion } from "framer-motion";

export default function Mindset() {
  return (
    <section
      id="mindset"
      className="
        mt-12
        py-8
        bg-slate-900
        border-y
        border-slate-800
        overflow-hidden
        scroll-mt-24
      "
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="
          flex
          whitespace-nowrap
          text-3xl
          md:text-5xl
          font-bold
          text-cyan-400
        "
      >
        <span className="mx-12">PLAN 🚀</span>
        <span className="mx-12">EXECUTE ⚡</span>
        <span className="mx-12">GROW 📈</span>

        <span className="mx-20">•</span>

        <span className="mx-12">PLAN 🚀</span>
        <span className="mx-12">EXECUTE ⚡</span>
        <span className="mx-12">GROW 📈</span>

        <span className="mx-20">•</span>

        <span className="mx-12">PLAN 🚀</span>
        <span className="mx-12">EXECUTE ⚡</span>
        <span className="mx-12">GROW 📈</span>
      </motion.div>
    </section>
  );
}