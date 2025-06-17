import { BookOpen, Users, MessageCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Learn",
    description: "Read guides and business fundamentals to build a strong foundation.",
    icon: <BookOpen className="w-8 h-8 text-green-700" />,
    color: "bg-green-100 border-green-300",
  },
  {
    title: "Connect",
    description: "Meet investors, mentors, and founders ready to support your journey.",
    icon: <Users className="w-8 h-8 text-blue-700" />,
    color: "bg-blue-100 border-blue-300",
  },
  {
    title: "Engage",
    description: "Join discussions, ask questions, or book calls with experts.",
    icon: <MessageCircle className="w-8 h-8 text-yellow-700" />,
    color: "bg-yellow-100 border-yellow-300",
  },
  {
    title: "Launch",
    description: "Use premium tools and insights to bring your idea to life.",
    icon: <Rocket className="w-8 h-8 text-purple-700" />,
    color: "bg-purple-100 border-purple-300",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#e0f7ec] to-[#f0fdf4] px-6 overflow-hidden rounded-xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-sm">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
          Our simple 4-step approach helps turn your business idea into a thriving reality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl border shadow-md p-6 text-left ${step.color} backdrop-blur-md`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-white shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
