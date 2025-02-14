import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once when it enters the viewport
    threshold: 0.1, // Trigger animation when 50% of the element is in view
  });

  return (
    <section
      id="about"
      className="relative py-20 bg-[url('/12.png')] bg-fixed bg-cover text-gray-200 min-h-screen flex items-center justify-center"
    >
      {/* Dark Mask */}
      <div className="absolute inset-0 bg-gray-950 opacity-90"></div>
      <div className="container mx-auto text-center px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          ref={ref}
          className="text-4xl font-semibold mb-12"
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
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 0.2 }}
        >
          I'm 24 years old and almost graduated in Software Development. I have
          a strong passion for programming, and in my free time, I enjoy going
          to the gym, swimming, and gaming. If I'm on my computer, you can bet
          I'm either coding or playing.
        </motion.p>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="skill-card p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:drop-shadow-[0_0_3px_#65d5f9]">
            <h3 className="text-2xl font-semibold mb-2">React</h3>
            <p>Building dynamic UIs and scalable web apps.</p>
          </div>
          <div className="skill-card p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:drop-shadow-[0_0_3px_#65d5f9]">
            <h3 className="text-2xl font-semibold mb-2">Node.js</h3>
            <p>Building fast, scalable server-side applications.</p>
          </div>
          <div className="skill-card p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:drop-shadow-[0_0_3px_#65d5f9]">
            <h3 className="text-2xl font-semibold mb-2">MySQL</h3>
            <p>SQL database for modern, scalable applications.</p>
          </div>
          <div className="skill-card p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:drop-shadow-[0_0_3px_#65d5f9]">
            <h3 className="text-2xl font-semibold mb-2">PHP</h3>
            <p>Server-side scripting for dynamic web pages and applications.</p>
          </div>
          <div className="skill-card p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:drop-shadow-[0_0_3px_#65d5f9]">
            <h3 className="text-2xl font-semibold mb-2">C++</h3>
            <p>High-performance applications and systems programming.</p>
          </div>
          <div className="skill-card p-8 bg-gray-900 rounded-lg shadow-lg text-center hover:drop-shadow-[0_0_3px_#65d5f9]">
            <h3 className="text-2xl font-semibold mb-2">C#</h3>
            <p>Building robust applications with the .NET framework.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
