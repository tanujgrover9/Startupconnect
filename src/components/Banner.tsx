import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "@/assets/sean-pollock-PhYq704ffdA-unsplash.jpg";
import { Link } from "react-router-dom";

const words = ["Build.", "Connect.", "Grow."];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[500px] w-full mb-12 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden mt-5 shadow-2xl"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight flex flex-wrap justify-center gap-2"
        >
          With <span className="text-green-400">StartupConnect</span>{" "}
          <span className="text-green-300 relative inline-block w-[230px] h-[1.4em] overflow-hidden text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={words[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                {words[index]}
              </motion.div>
            </AnimatePresence>
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white text-lg sm:text-xl max-w-2xl mb-8"
        >
          Your one-stop platform to connect with investors, mentors, and co-founders to turn your startup vision into reality.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#community"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          <Link to="/community">
           Join the Movement
          </Link>
         
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Banner;
