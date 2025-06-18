import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineExclamationCircle, HiBookOpen } from "react-icons/hi";

const mistakes = [
  "Skipping proper market research",
  "Focusing on the solution instead of the problem",
  "Building without validation",
  "Not defining your customer segment clearly",
  "Overbuilding your MVP",
  "Underestimating marketing and distribution",
  "Trying to do everything alone",
  "Ignoring user feedback",
  "Burning out early",
  "Failing to adapt based on data",
];

const reads = [
  { title: "Validating Your Startup Idea", link: "#", icon: <HiOutlineLightBulb /> },
  { title: "How to Build a Lean MVP", link: "#", icon: <HiOutlineExclamationCircle /> },
  { title: "Top Tools for Early-Stage Founders", link: "#", icon: <HiBookOpen /> },
];

const FounderMistakesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-white to-red-50 px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl font-extrabold text-red-700 mb-6 leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            10 Mistakes First-Time Founders Make ❌
          </motion.h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 text-center">
            Avoid the traps that lead startups to fail. Learn from others’ experiences and build smarter.
          </p>

          {/* Mistake List */}
          <div className="grid md:grid-cols-2 gap-6">
            {mistakes.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white border border-red-100 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 text-white font-bold rounded-full flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-base ml-6">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Recommended Reads */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-red-700 mb-6">📘 Recommended Reads</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Dive deeper into critical topics every founder should understand before launching.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {reads.map((res, i) => (
                <motion.a
                  key={i}
                  href={res.link}
                  className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:bg-red-50 transition flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-100 text-red-700 rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                    {res.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-red-800">{res.title}</h4>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FounderMistakesPage;
