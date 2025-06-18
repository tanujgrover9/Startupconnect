import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import investorBanner from "../assets/investor-banner.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const investors = Array.from({ length: 12 }, (_, i) => ({
  name: `Investor ${i + 1}`,
  bio: "Experienced in early-stage startups, seed funding, and venture growth.",
  field: "Fintech, SaaS, AI",
  avatar: `https://i.pravatar.cc/150?img=${i + 20}`, // simulated avatars
}));

const FindInvestors = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-b-3xl shadow-lg">
        <img
          src={investorBanner}
          alt="Investors Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
            Connect with Top Investors
            <br />
            Who Believe in Your Vision
          </h1>
        </div>
      </div>

      {/* Investors Grid */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800 dark:text-white">
          Meet Potential Investors
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {investors.map((inv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={inv.avatar}
                      alt={inv.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {inv.name}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400">
                        {inv.field.split(",")[0]}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {inv.bio}
                  </p>
                  <p className="text-xs text-gray-500 italic dark:text-gray-400">
                    {inv.field}
                  </p>
                  <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default FindInvestors;
