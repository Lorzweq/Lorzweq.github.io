import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    title: "Core Stack",
    description: "Main technologies I build with daily.",
    skills: ["React", "JavaScript / TypeScript", "Node.js", "SQL"],
  },
  {
    title: "Working Knowledge",
    description: "Technologies I can contribute with confidently.",
    skills: ["C#", "PHP", "C++"],
  },
  {
    title: "Tools",
    description: "Workflow and tooling I use in modern projects.",
    skills: ["Git", "Vite", "Tailwind CSS", "REST APIs", "Supabase"],
  },
];

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once when it enters the viewport
    threshold: 0.1, // Trigger animation when 50% of the element is in view
  });

  return (
    <section
      id="about"
      className="relative py-20 bg-[url('/12.png')] bg-fixed bg-cover text-slate-100 min-h-screen flex items-center justify-center"
    >
      {/* Dark Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/100 via-blue-950/65 to-slate-950/80"></div>
      <div className="absolute -top-16 left-8 w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-8 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl"></div>
      <div className="container mx-auto text-center px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          ref={ref}
          className="text-4xl font-semibold mb-12 mt-28 text-cyan-100"
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 0.2 }}
        >
          About Me
        </motion.h2>
        {/* Description */}
        <motion.p
          ref={ref}
          className="text-xl mb-8 max-w-2xl mx-auto text-slate-200"
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 0.2 }}
        >
          I am a software developer with a degree in Software Development,
          focused on building modern web applications with clean UX and solid
          performance. I work with React, Node.js, and SQL-based systems, and I
          enjoy turning ideas into reliable, user-friendly products. I am
          currently looking for opportunities where I can contribute, grow, and
          deliver high-quality software with a strong team.
        </motion.p>
        <motion.div
          ref={ref}
          className="mt-10 rounded-2xl border border-blue-800/50 bg-slate-950/35 p-5 md:p-7 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-100 border border-cyan-300/40">
              Job Seeking Profile
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/15 text-blue-100 border border-blue-300/30">
              Available for New Opportunities
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-left">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="skill-card p-6 bg-blue-950/60 border border-blue-800/70 rounded-xl shadow-lg hover:drop-shadow-[0_0_8px_#22d3ee] transition"
              >
                <h3 className="text-xl font-semibold text-cyan-100">
                  {group.title}
                </h3>
                <p className="text-sm text-blue-100/80 mt-2 mb-4">
                  {group.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full bg-slate-900/85 border border-blue-800 text-slate-100"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
