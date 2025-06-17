import { User, Mail, Phone, Banknote } from 'lucide-react';

const NetBankingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-emerald-100 px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 border border-green-200 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-green-600 mb-6">
          Pay via Net Banking 🏦
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Bank Selection */}
          <div className="relative">
            <Banknote className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
            <select
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select Your Bank</option>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>Axis Bank</option>
              <option>Kotak</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-xl"
          >
            Proceed to Bank
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Secure net banking through your selected provider 🔐
        </p>
      </div>
    </div>
  );
};

export default NetBankingPage;
