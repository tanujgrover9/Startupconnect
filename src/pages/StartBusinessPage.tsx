import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaRegLightbulb, FaCheckCircle, FaFileAlt } from "react-icons/fa";

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
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-4 leading-tight">
            Kickstart Your Business Journey
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
            Learn how to turn your idea into a successful business with practical steps, tips, and resources.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 rounded-2xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">Step {index + 1}</h3>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Helpful Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <a
                key={i}
                href={res.link}
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:bg-green-50 transition"
              >
                <div className="text-green-600 text-3xl mb-3">{res.icon}</div>
                <h4 className="text-lg font-semibold text-center text-green-800">{res.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StartBusinessPage;
