import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { FaRegLightbulb, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  "Identify a problem worth solving",
  "Validate your idea with real users",
  "Create a lean business plan",
  "Register your business and handle legal setup",
  "Build your MVP and collect feedback",
  "Launch and market your solution",
];

const resources = [
  { title: "Business Plan Template", link: "#", icon: <FaFileAlt /> },
  { title: "MVP Checklist", link: "#", icon: <FaCheckCircle /> },
  { title: "Startup Legal Basics", link: "#", icon: <FaRegLightbulb /> },
];

const StartBusinessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-green-50 to-white min-h-screen px-6 md:px-20 py-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-green-800 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kickstart Your Business Journey 🚀
          </motion.h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Discover essential steps and tools to turn your vision into a thriving startup. It’s time to take the leap!
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-green-100 p-6 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 bg-green-600 text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2 ml-6">Step {index + 1}</h3>
              <p className="text-gray-600 ml-6">{step}</p>
            </motion.div>
          ))}
        </div>

        {/* Resources */}
        <div className="max-w-6xl mx-auto mt-24 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Helpful Resources 📚</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Use these hand-picked tools to speed up your startup process and avoid beginner mistakes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((res, i) => (
              <motion.a
                key={i}
                href={res.link}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:bg-green-50 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4 shadow-inner">
                  {res.icon}
                </div>
                <h4 className="text-lg font-semibold text-green-800">{res.title}</h4>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StartBusinessPage;
