import { Iceberg } from "./iceberg";
import Carousel from "./Carousel";
import { useState } from "react";

export function Projects() {
  const [showCarousel, setShowCarousel] = useState(true); // Carousel visibility state

  const items = [
    // Pulsesensor Project
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
      <h2 className="text-md font-bold text-blue-500 mb-4">Pulsesensor</h2>
      <p className="text-sm text-neutral-300 mb-4">
        Pulsesensor is a project designed to measure and monitor heart rate data using a sensor. It's a great tool for anyone looking to track their fitness or health.
      </p>
      <p>
        The pulse sensor's data is transmitted to an OLED display, Blynk, and a database, from which it is retrieved and displayed on a website.
      </p>
      <a
        href="https://github.com/Lorzweq/PulseSensor"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 text-lg font-semibold mt-4 inline-block"
      >
        View on GitHub
      </a>
    </div>,

    // React-based Website for Tooling Company
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
      <h2 className="text-md font-semibold mb-4 text-blue-500">
        React-based Website for Tooling Company
      </h2>
      <p className="text-sm">
        This project involves the development of a website for a small company specializing in selling tools designed to solve various work-related problems. I was responsible for the UX/UI design and front-end development, using React for a dynamic and responsive user experience. The website offers an intuitive navigation structure and user-friendly interface for customers to easily find the tools they need.
      </p>
      <div className="mt-4">
        <h3 className="font-semibold">Technologies used:</h3>
        <ul className="text-sm">
          <li>React</li>
          <li>CSS (Tailwind)</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>,

    // WordPress Website Using Divi
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
      <h2 className="text-md font-semibold mb-4 text-blue-500">
        WordPress Website Using Divi
      </h2>
      <p className="text-sm">
        For this project, I built a WordPress website for a client using the Divi theme builder. Divi made it easy to create visually appealing layouts with drag-and-drop functionality, allowing the client to update and manage their site independently. I customized various elements, ensuring a professional, modern design tailored to the client's needs.
      </p>
      <div className="mt-4">
        <h3 className="font-semibold">Technologies used:</h3>
        <ul className="text-sm">
          <li>WordPress</li>
          <li>Divi Builder</li>
          <li>CSS (Custom Styling)</li>
        </ul>
      </div>
    </div>,

    // ClothShop - E-commerce Platform
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
      <h2 className="text-md font-semibold mb-4 text-blue-500">
        ClothShop - E-commerce Platform
      </h2>
      <p className="text-sm">
        ClothShop is a modern e-commerce platform built with React and Vite. It allows users to browse products, add them to their cart, make purchases, and view their shopping history. The platform also includes admin and marketing dashboards for managing users and creating marketing posts.
      </p>
      <div className="mt-4">
        <h3 className="font-semibold ">Technologies used:</h3>
        <ul className="text-sm">
          <li>React, Vite, Tailwind CSS</li>
          <li>Supabase (database and authentication)</li>
          <li>Routing: React Router</li>
        </ul>
        <a
          href="https://github.com/Lorzweq/ClothShop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-lg font-semibold mt-4 inline-block"
        >
          View on GitHub
        </a>
      </div>
    </div>,

    // React Carousel Component
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
      <h2 className="text-md font-semibold mb-4 text-blue-500">
      React Carousel Component
      </h2>
      <p className="text-sm">
      A stylish and customizable 3D carousel component built with React. Supports any JSX elements (images, text) and includes smooth rotation and depth effects.
      </p>
      <div className="mt-4">
        <h3 className=" text-sm">Technologies used:</h3>
        <ul className="text-sm">
          <li>React, Vite, CSS</li>
          <li>JavaScript</li>
        </ul>
        <a
          href="https://github.com/Lorzweq/CarouselComponent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-lg font-semibold mt-4 inline-block"
        >
          View on GitHub
        </a>
      </div>
    </div>,
     <div className="relative bg-gradient-to-b from-yellow-700 to-yellow-900 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
     {/* Background X shape */}
     <div className="absolute inset-0 bg-black bg-opacity-50 z-100" style={{
       background: `linear-gradient(52deg, transparent 48%, black 48%, black 52%, transparent 52%), 
                   linear-gradient(-52deg, transparent 48%, black 48%, black 52%, transparent 52%)`,
       backgroundSize: '240px 310px', 
       backgroundPosition: '0 0, 0 0',
     }}></div>
   
     {/* Under development Text */}
     <div className="absolute inset-0 flex items-center justify-center z-101">
       <span className="text-2xl font-bold text-white bg-gradient-to-b from-yellow-600 to-yellow-950 bg-opacity-70 px-2 py-2 rounded-md">
         Under development
 
       </span>
       
     </div>
   
     {/* Card Content */}
     <h2 className="text-lg font-semibold mb-4 text-gray-200 z-10 relative">
       iOS/Android App
     </h2>
     <p className="text-lg text-gray-300 mb-6 z-10 relative">
       Currently working on a mobile app for iOS and Android using React Native.
     </p>
     <div className="mt-4 z-10 relative">
       <h3 className="font-semibold text-gray-200 mb-2">Technologies Used:</h3>
       <ul className="text-gray-300">
         <li>React Native</li>
         <li>TailwindCSS</li>
       </ul>
     </div>
   </div>,
     // Modern component for displaying data and filter
     <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center mb-6">
     <h2 className="text-md font-semibold mb-4 text-blue-500">
     Modern component for displaying data and filter data
     </h2>
     <p className="text-sm">
      
        A modern component for displaying data and filtering it using React. The component is designed to be reusable and customizable, allowing developers to easily integrate it into their projects.
     </p>
     <div className="mt-4">
       <h3 className="font-semibold">Technologies used:</h3>
       <ul className="text-sm">
         <li>React, Vite, TailwindCSS</li>
       </ul>
     </div>
   </div>,
   




  ];


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
      <div className="container  flex justify-center items-center flex-col z-10 relative mt-28">
        <h1 className="text-6xl text-center my-12 text-gray-200 rounded-lg ">
          Projects
        </h1>
          {/* Toggle Button */}
          <button
          onClick={() => setShowCarousel(!showCarousel)}
          className="mb-6 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg"
        >
          {showCarousel ? "Hide Carousel" : "Show Carousel"}
        </button>
        {/* Carousel */}
        {showCarousel && <Carousel items={items} />}
        
      
      

       

    
      </div>
    </section>
  );
}
