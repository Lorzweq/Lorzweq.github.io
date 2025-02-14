import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Iceberg } from "./iceberg";

const words = ["Software", "developer"];

export function Hero() {
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    // Generate random initial positions for the particles
    const positions = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * (window.innerWidth / 1000),
      y: Math.random() * window.innerHeight,
      opacity: Math.random(),
    }));
    setParticlePositions(positions);
  }, []);

  return (
    <section id="introduction">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-950 animate-gradient" />

        {/* SVG with Floating Boxes */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-40"
        >
          <rect
            x="10"
            y="10"
            width="40"
            height="40"
            fill="#4d669d"
            fillOpacity="0.1"
          />
          <rect
            x="60"
            y="20"
            width="40"
            height="40"
            fill="#6a7ea7"
            fillOpacity="0.2"
          />
          <rect
            x="110"
            y="30"
            width="40"
            height="40"
            fill="#3c4e6b"
            fillOpacity="0.2"
          />
          <rect
            x="40"
            y="60"
            width="40"
            height="40"
            fill="#5b749d"
            fillOpacity="0.2"
          />
          <rect
            x="85"
            y="70"
            width="40"
            height="40"
            fill="#4d669d"
            fillOpacity="0.2"
          />
          <rect
            x="130"
            y="80"
            width="40"
            height="40"
            fill="#6a7ea7"
            fillOpacity="0.1"
          />
          <rect
            x="20"
            y="120"
            width="40"
            height="40"
            fill="#3c4e6b"
            fillOpacity="0.1"
          />
          <rect
            x="70"
            y="130"
            width="40"
            height="40"
            fill="#5b749d"
            fillOpacity="0.1"
          />
          <rect
            x="160"
            y="140"
            width="40"
            height="40"
            fill="#4d669d"
            fillOpacity="0.1"
          />
          <rect
            x="60"
            y="160"
            width="40"
            height="40"
            fill="#6a7ea7"
            fillOpacity="0.1"
          />
          <rect
            x="0"
            y="170"
            width="40"
            height="40"
            fill="#3c4e6b"
            fillOpacity="0.2"
          />
          <rect
            x="200"
            y="190"
            width="40"
            height="40"
            fill="#5b749d"
            fillOpacity="0.2"
          />
        </svg>

        {/* Floating Particles */}
        {particlePositions.map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: position.x,
              y: position.y,
              opacity: position.opacity,
            }}
            animate={{
              x: Math.random() * window.innerWidth, // New random position on each cycle
              y: Math.random() * window.innerHeight, // New random position on each cycle
              opacity: [0, 1, 0], // Fade in and out effect
            }}
            transition={{
              duration: Math.random() * 5 + 3, // Random duration between 3 and 8 seconds
              repeat: Infinity, // Infinite looping of animation
              ease: "easeInOut", // Smooth easing for the movement
            }}
          />
        ))}

        {/* Hero Text Content */}
        <div className="relative z-10 ml-6 flex items-center justify-center flex-col lg:flex-row text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.4, duration: 0.8 }}
              className="mr-3 text-gray-2 drop-shadow-[0_0_3px_#65d5f9]"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div className="absolute  left-1/500 lg:left-1/5  top-70 lg:top-120 transform -translate-x-1/3 mb-550 z-10 overflow-hidden">
          <Iceberg />
        </div>
      </div>
    </section>
  );
}
