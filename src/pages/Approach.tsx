import {  ClipboardList, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-500" />,
    title: "Step 1: Plan",
    description: "Define your business idea, target audience, and goals to set a clear path forward."
  },
  {
    icon: <Settings className="w-12 h-12 text-green-500" />,
    title: "Step 2: Develop",
    description: "Create a product or service, build a brand, and establish your online presence."
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    title: "Step 3: Launch",
    description: "Deploy your solution, initiate marketing efforts, and start reaching your audience."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-yellow-500" />,
    title: "Step 4: Grow",
    description: "Analyze feedback, optimize your offerings, and scale your business for long-term success."
  }
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-16 text-center font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-md">
        How It Works
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
        Our simple 4-step approach helps turn your business idea into a thriving reality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 rounded-3xl p-8 flex flex-col items-center border-b-4 border-blue-200"
          >
            <div className="mb-5 bg-blue-50 p-4 rounded-full shadow-inner">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
