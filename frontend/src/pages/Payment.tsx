import React from "react";
import { CreditCard, Banknote, Wallet2, ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-yellow-200">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-2">
            Go Premium 🚀
          </h1>
          <p className="text-gray-600 text-sm">
            Unlock exclusive features and grow your startup faster.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Credit/Debit Card */}
          <button
            onClick={() => navigate("/payment/card")}
            className="group border border-yellow-300 p-6 rounded-xl shadow hover:shadow-yellow-400/50 transition duration-300 hover:scale-105 bg-white text-left flex items-center gap-4"
          >
            <CreditCard className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Pay with Card</h4>
              <p className="text-sm text-gray-500">Visa, MasterCard, RuPay, more</p>
            </div>
          </button>

          {/* UPI/QR Code */}
          <button
            onClick={() => navigate("/payment/upi")}
            className="group border border-yellow-300 p-6 rounded-xl shadow hover:shadow-yellow-400/50 transition duration-300 hover:scale-105 bg-white text-left flex items-center gap-4"
          >
            <ScanLine className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold text-lg text-gray-800">UPI / QR</h4>
              <p className="text-sm text-gray-500">Google Pay, PhonePe, Paytm</p>
            </div>
          </button>

          {/* Wallets */}
          <button
            onClick={() => navigate("/payment/wallet")}
            className="group border border-yellow-300 p-6 rounded-xl shadow hover:shadow-yellow-400/50 transition duration-300 hover:scale-105 bg-white text-left flex items-center gap-4"
          >
            <Wallet2 className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Wallets</h4>
              <p className="text-sm text-gray-500">Amazon Pay, Freecharge, Mobikwik</p>
            </div>
          </button>

          {/* Net Banking */}
          <button
            onClick={() => navigate("/payment/netbanking")}
            className="group border border-yellow-300 p-6 rounded-xl shadow hover:shadow-yellow-400/50 transition duration-300 hover:scale-105 bg-white text-left flex items-center gap-4"
          >
            <Banknote className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Net Banking</h4>
              <p className="text-sm text-gray-500">All major banks supported</p>
            </div>
          </button>
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            By proceeding, you agree to our
            <span className="text-yellow-600 font-medium cursor-pointer hover:underline ml-1">
              Terms of Service
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
