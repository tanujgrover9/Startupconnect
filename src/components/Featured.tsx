import React from "react";
import { BookOpen, AlertCircle, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "How to Start a Business from Scratch",
    icon: <BookOpen className="text-green-600 w-7 h-7" />,
    path: "/learn/start-business"
  },
  {
    title: "10 Mistakes First-Time Founders Make",
    icon: <AlertCircle className="text-red-500 w-7 h-7" />,
    path: "/learn/founder-mistakes"
  },
  {
    title: "Crafting Your Pitch to Investors",
    icon: <MessageSquare className="text-indigo-600 w-7 h-7" />,
    path: "/learn/pitch-investors"
  },
];

const LearnSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#ecfdf5] to-white py-20 px-6 rounded-xl mt-4" id="learn">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Learn How to Start Strong
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12 text-lg">
          Explore top guides, avoid common mistakes, and get investor-ready with our expert content.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-green-200 transition duration-300 border border-gray-100 text-left"
            >
              <div className="mb-4">{article.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {article.title}
              </h3>
              <Link
                to={article.path}
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
