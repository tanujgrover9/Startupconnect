import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 px-6 rounded-3xl shadow-2xl max-w-5xl mx-auto mt-16 text-white relative overflow-hidden"
    >
      {/* Decorative glow background */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300 opacity-20 rounded-full blur-2xl z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <MailOpen className="w-10 h-10 text-white drop-shadow" />
          <div>
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-sm text-white/80">Stay updated with the latest startup news & tips!</p>
          </div>
        </div>

        <form className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 w-full sm:w-72 bg-white"
          />
          <Button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition-all shadow-md hover:scale-105">
            Subscribe
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default Newsletter;
