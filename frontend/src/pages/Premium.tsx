import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PremiumPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: '₹499',
      features: ['Access to 5 tools', 'Email Support', 'Limited Updates'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '₹999',
      features: ['All Basic Features', 'Unlimited Tools', 'Priority Support', 'Early Access'],
      popular: true,
    },
    {
      name: 'Elite',
      price: '₹1999',
      features: ['All Pro Features', 'Dedicated Support', 'One-on-One Guidance', 'Beta Features'],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-indigo-100">
      <Navbar />

      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Choose Your Premium Plan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Unlock powerful tools, priority support, and exclusive features. Select the plan that suits you best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:scale-105 ${
                plan.popular ? 'border-green-500' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">{plan.name}</h2>
              <p className="text-center text-4xl font-extrabold text-green-500 mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center text-sm">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/payment')}
                className="w-full bg-green-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition duration-300"
                aria-label={`Choose ${plan.name} Plan`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremiumPlans;
