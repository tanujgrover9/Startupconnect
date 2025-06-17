import { User, Mail, ScanLine } from 'lucide-react';

const UPIPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-purple-100 px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 border border-purple-200 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-purple-600 mb-6">
          Pay via UPI ✨
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* UPI ID */}
          <div className="relative">
            <ScanLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input
              type="text"
              placeholder="Your UPI ID (e.g., name@bank)"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-yellow-500 hover:from-purple-600 hover:to-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Pay Now
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Your UPI transaction is secured and encrypted 🔐
        </p>
      </div>
    </div>
  );
};

export default UPIPage;
