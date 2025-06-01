import React from 'react';
import { CreditCard, User, Mail, CalendarClock, ShieldCheck } from 'lucide-react';

const CardPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 border border-blue-200 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Pay with Card 💳
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Card Number */}
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              placeholder="Card Number"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Expiry and CVV */}
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <input
                type="text"
                placeholder="MM/YY"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative w-1/2">
              <ShieldCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <input
                type="text"
                placeholder="CVV"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Payment Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-xl"
          >
            Make Payment
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Secure payment powered by Stripe. 🔒
        </p>
      </div>
    </div>
  );
};

export default CardPage;
