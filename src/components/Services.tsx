import { Lightbulb, Users, DollarSign } from "lucide-react";

const offers = [
  {
    title: "Expert Mentorship",
    icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
    desc: "Get guided by experienced mentors who provide personalized insights and actionable strategies tailored to your business goals.",
  },
  {
    title: "Entrepreneurial Network",
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    desc: "Connect with fellow entrepreneurs, exchange ideas, share experiences, and build together through our vibrant community.",
  },
  {
    title: "Investor Access",
    icon: <DollarSign className="w-8 h-8 text-indigo-600" />,
    desc: "Pitch your business to trusted investors ready to fund innovative ideas and help you take the next big leap.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-16 px-6 mt-6 rounded-xl  mb-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
      What We Offer</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
          Build your dream with the support of mentors, entrepreneurs, and investors — all in one powerful ecosystem.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offers.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 group text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="bg-indigo-100 p-4 rounded-full group-hover:scale-110 transition">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
