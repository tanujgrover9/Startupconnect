import React from "react";
import { Users, MessageCircleHeart, Link2 } from "lucide-react";
import { motion } from "framer-motion";


import avatar1 from '../assets/vince-veras-AJIqZDAUD7A-unsplash.jpg';
import avatar2 from '../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash (1).jpg';
import avatar3 from '../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';
import avatar4 from '../assets/nicolas-horn-MTZTGvDsHFY-unsplash.jpg';

const CommunitySection = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4];

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-24 px-6 rounded-xl" id="community">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect with entrepreneurs, investors, and mentors who are ready to support your journey.
        </p>

        {/* Icons Row */}
        <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <Users className="w-6 h-6" />
            Founders
          </div>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold">
            <MessageCircleHeart className="w-6 h-6" />
            Mentors
          </div>
          <div className="flex items-center gap-2 text-pink-600 font-semibold">
            <Link2 className="w-6 h-6" />
            Investors
          </div>
        </div>

        {/* Floating Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center gap-5 flex-wrap mb-10"
        >
          {avatars.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`user-${i}`}
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg hover:scale-105 transition"
              whileHover={{ y: -5 }}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="mt-6">
          <a
            href="https://your-slack-or-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Join Our Free Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
