import { Iceberg } from "./iceberg";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex justify-center items-center overflow-hidden"
    >
      {/* Iceberg */}
      <div className="absolute left-1/2 lg:left-1/5 transform -translate-x-1/3 mb-610 z-0">
        <Iceberg />
      </div>

      {/* Projects Content */}
      <div className="container mx-12 px-12 flex justify-center items-center flex-col z-10 relative mt-28">
        <h1 className="text-6xl text-center my-12 text-gray-200 rounded-lg px-6 py-6">
          Projects
        </h1>

        {/* Project Cards Row */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Pulsesensor Project */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Pulsesensor
            </h2>
            <p className="text-lg text-neutral-300 mb-4">
              Pulsesensor is a project designed to measure and monitor heart
              rate data using a sensor. It's a great tool for anyone looking to
              track their fitness or health.
            </p>
            <p>
              The pulse sensor's data is transmitted to an OLED display, Blynk,
              and a database, from which it is retrieved and displayed on a
              website.
            </p>

            <a
              href="https://github.com/Lorzweq/PulseSensor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-lg font-semibold"
            >
              View on GitHub
            </a>
          </div>

          {/* React-based Website for Tooling Company */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">
              React-based Website for Tooling Company
            </h2>
            <p className="text-lg">
              This project involves the development of a website for a small
              company specializing in selling tools designed to solve various
              work-related problems. I was responsible for the UX/UI design and
              front-end development, using React for a dynamic and responsive
              user experience. The website offers an intuitive navigation
              structure and user-friendly interface for customers to easily find
              the tools they need.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold">Technologies used:</h3>
              <ul className="list-disc ml-5">
                <li>React</li>
                <li>CSS (Tailwind)</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>

          {/* WordPress Website Using Divi */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">
              WordPress Website Using Divi
            </h2>
            <p className="text-lg">
              For this project, I built a WordPress website for a client using
              the Divi theme builder. Divi made it easy to create visually
              appealing layouts with drag-and-drop functionality, allowing the
              client to update and manage their site independently. I customized
              various elements, ensuring a professional, modern design tailored
              to the client's needs.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold">Technologies used:</h3>
              <ul className="list-disc ml-5">
                <li>WordPress</li>
                <li>Divi Builder</li>
                <li>CSS (Custom Styling)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
