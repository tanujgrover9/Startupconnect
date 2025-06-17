import { motion } from "framer-motion";

// Import logos
import logo1 from "../assets/logo/channels4_profile.jpg";
import logo2 from "../assets/logo/images (1).jpeg";
import logo3 from "../assets/logo/images (4).png";
import logo4 from "../assets/logo/images (6).png";
import logo5 from "../assets/logo/images.jpeg";

const logos = [logo1, logo2, logo3, logo4, logo5];

const TrustedBySlider = () => {
  const repeatedLogos = [...logos, ...logos]; // Repeat exactly once to create a seamless loop

  return (
    <section className="bg-white py-10 px-4 overflow-hidden rounded-xl mt-4">
      <div className="max-w-7xl mx-auto text-center mb-8">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">

          Trusted by Leading Companies
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Our platform is trusted by some of the world's most respected brands.
        </p>
      </div>

      {/* Continuous Scrolling Logo Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} 
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {repeatedLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-48 flex items-center justify-center px-4">
              <img
                src={logo}
                alt={`Logo ${i}`}
                className="h-16 w-full object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySlider;
