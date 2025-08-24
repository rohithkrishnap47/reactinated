import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
        Rohith Krishna P
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-delay">
        Front-End Developer | React Enthusiast
      </p>
      <div className="space-x-4">
        <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition">
          Contact Me
        </a>
      </div>
      {/* Sections like <Projects /> and <Contact /> would follow */}
    </div>
  );
}


export default App
