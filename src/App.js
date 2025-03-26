import React from "react";
import { motion } from "framer-motion";
import './App.css'

export default function ComingSoonPage() {
  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900 to-black z-0"></div>
      {/* <div className="background"></div> */}
      {/* Navigation */}
      <nav className="absolute top-6 right-10 z-10 flex gap-6 text-sm tracking-widest uppercase">
        <a href="#" className="hover:text-pink-400">
          Home    
        </a>
        <a href="#" className="hover:text-pink-400">
          About
        </a>
        <a href="#" className="hover:text-pink-400">
          News
        </a>
        <a href="#" className="hover:text-pink-400">
          Contacts
        </a>
      </nav>

      {/* Social Links */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 rotate-180 z-10 text-xs tracking-widest space-y-2">
        {/* <p className="rotate-90">FACEBOOK / INSTAGRAM / TWITTER</p> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm mb-2 tracking-widest text-gray-400"
        >
          SITE UNDER RECONSTRUCTION
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-semibold tracking-widest mb-6"
        >
          COMING SOON
        </motion.h1>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "62%" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative w-64 h-2 bg-gray-600 rounded-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-pink-500 rounded-full"></div>
        </motion.div>
        <p className="mt-2 text-xs text-gray-400">62%</p>
      </div>

      {/* Side numbering */}
      {/* <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-3 text-xs text-gray-400 z-10">
        <p>01</p>
        <p>02</p>
        <p>03</p>
        <p>04</p>
      </div> */}
    </div>
  );
}
