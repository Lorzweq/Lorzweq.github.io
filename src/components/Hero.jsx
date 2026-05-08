import { motion, useReducedMotion } from "framer-motion";

const stack = ["React", "JavaScript", "Tailwind", "UI/UX"];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const riseUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="introduction" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(59,130,246,0.2),transparent_34%),linear-gradient(180deg,#0f172a_0%,#0b1224_55%,#020617_100%)]" />

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0.6 }}
        animate={shouldReduceMotion ? false : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { x: 40, opacity: 0.5 }}
        animate={shouldReduceMotion ? false : { x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -right-20 top-12 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl"
      />

      <div className="relative z-10 min-h-screen max-w-6xl mx-auto px-6 md:px-10 flex items-center">
        <div className="w-full md:max-w-4xl pt-24 pb-20">
          <motion.p
            variants={riseUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1 text-xs md:text-sm font-semibold tracking-wide rounded-full border border-cyan-300/40 bg-cyan-500/10 text-cyan-200"
          >
            Portfolio 2026
          </motion.p>

          <motion.h1
            variants={riseUp}
            initial="hidden"
            animate="show"
            transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-100 leading-tight"
          >
            Software Developer Creating Fast, Clean, Usable Web Experiences
          </motion.h1>

          <motion.p
            variants={riseUp}
            initial="hidden"
            animate="show"
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
            className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-300"
          >
            I design and build modern websites and applications with a focus on
            clarity, performance, and polished user experience.
          </motion.p>

          <motion.div
            variants={riseUp}
            initial="hidden"
            animate="show"
            transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg text-sm font-semibold bg-gradient-to-b from-blue-700 to-blue-900 text-blue-50 hover:from-blue-600 hover:to-blue-800 ring-1 ring-blue-500/40 shadow-[inset_0_1px_0_rgba(191,219,254,0.25)] transition text-center"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.ul
            variants={riseUp}
            initial="hidden"
            animate="show"
            transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {stack.map((item) => (
              <li
                key={item}
                className="px-3 py-1 text-xs md:text-sm rounded-full border border-slate-600 bg-slate-900/50 text-slate-200"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
