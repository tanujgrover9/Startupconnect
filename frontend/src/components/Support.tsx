import React from "react";
import { Video, Headphones, Compass } from "lucide-react";
import { Link } from "react-router-dom";


const premiumFeatures = [
  {
    title: "1:1 Video Call Meetings",
    icon: <Video className="w-8 h-8 text-pink-600" />,
    desc: "Connect face-to-face with mentors and experts in real-time to accelerate your business journey.",
  },
  {
    title: "24/7 Dedicated Support",
    icon: <Headphones className="w-8 h-8 text-pink-600" />,
    desc: "Get round-the-clock assistance for all your startup needs — anytime, anywhere.",
  },
  {
    title: "End-to-End Guidance",
    icon: <Compass className="w-8 h-8 text-pink-600" />,
    desc: "From ideation to scaling, receive structured guidance tailored to your business stage.",
  },
];

const PremiumFeatures = () => {
  return (
    <section className="bg-gradient-to-tr from-pink-50 to-white py-16 px-6rounded-xl mt-4 rounded-xl">
      <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
      Premium Features</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Upgrade to our premium services to access unmatched support, expert insights, and priority access to tools that empower your growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {premiumFeatures.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-pink-100 rounded-3xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="bg-pink-100 p-4 rounded-full group-hover:scale-110 transition">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="mt-12 text-center">
  <Link to="/premium">
    <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-700 transition">
      Upgrade to Premium
    </button>
  </Link>
</div>

    </section>
  );
};

export default PremiumFeatures;
