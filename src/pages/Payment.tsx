import React, { useState } from "react";
import {
  CreditCard,
  Banknote,
  Wallet2,
  ScanLine,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import companyLogo from "../assets/WhatsApp_Image_2025-05-30_at_18.21.33_26b5dc10-removebg-preview.png";
import illustrationImg from "../assets/pay/26b3095aa7212f57910daca80d2894a2-removebg-preview.png";

type PaymentOption = {
  key: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  fields: string[];
};

const paymentOptions: PaymentOption[] = [
  {
    key: "card",
    label: "Pay with Card",
    desc: "Visa, MasterCard, RuPay",
    icon: <CreditCard className="w-6 h-6 text-blue-500" />,
    fields: ["Card Number", "Expiry Date", "CVV", "Cardholder Name"],
  },
  {
    key: "upi",
    label: "UPI / QR",
    desc: "Google Pay, PhonePe, Paytm",
    icon: <ScanLine className="w-6 h-6 text-blue-500" />,
    fields: ["UPI ID"],
  },
  {
    key: "wallet",
    label: "Wallets",
    desc: "Amazon Pay, Freecharge, Mobikwik",
    icon: <Wallet2 className="w-6 h-6 text-blue-500" />,
    fields: ["Wallet ID"],
  },
  {
    key: "netbanking",
    label: "Net Banking",
    desc: "All major banks supported",
    icon: <Banknote className="w-6 h-6 text-blue-500" />,
    fields: ["Bank Name", "Account Number", "IFSC Code"],
  },
];

const PaymentPage: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleSlide = () => {
    setTimeout(() => setCompleted(true), 800);
  };

  const selectedOption = paymentOptions.find((opt) => opt.key === selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <div className="md:w-1/3 bg-white p-6 border-b md:border-b-0 md:border-r border-blue-200 flex flex-col items-center">
        <img src={companyLogo} alt="Logo" className="h-14 mb-6" />
        <img
          src={illustrationImg}
          alt="illustration"
          className="h-60 w-auto object-contain mb-6"
        />
        <p className="text-sm text-blue-600 font-medium text-center">
          Secure & Encrypted Payment
        </p>
      </div>

      {/* Main Content */}
      <div className="md:w-2/3 p-6 md:p-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-600 mb-8"
        >
          Choose Payment Method
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {paymentOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => {
                setSelected(option.key);
                setCompleted(false);
              }}
              className={`flex items-center gap-4 p-4 border rounded-xl shadow transition hover:scale-105 duration-300 ${
                selected === option.key
                  ? "border-blue-500 bg-blue-50"
                  : "border-blue-200"
              }`}
            >
              {option.icon}
              <div className="text-left">
                <h4 className="font-semibold text-lg text-gray-800">
                  {option.label}
                </h4>
                <p className="text-sm text-gray-500">{option.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedOption && !completed && (
            <motion.div
              key={selectedOption.key + "-fields"}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 border border-blue-200 shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedOption.fields.map((field) => (
                  <div key={field} className="mb-2">
                    <label className="block text-sm font-medium text-blue-700 mb-1">
                      {field}
                    </label>
                    <input
                      type="text"
                      placeholder={field}
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                  </div>
                ))}
              </div>

              {/* Slide to Pay Button */}
              <div className="mt-6 relative h-12 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-blue-400 font-semibold pointer-events-none">
                  Slide to Pay
                </div>
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 240 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.x > 200) handleSlide();
                  }}
                  className="h-full w-36 bg-blue-500 rounded-full shadow-lg text-white font-medium flex items-center justify-center gap-2 cursor-pointer z-10 relative"
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          )}

          {completed && (
            <motion.div
              key="success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center justify-center h-full text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Payment Successful!
              </h2>
              <p className="text-gray-500">Thank you for your payment.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PaymentPage;
