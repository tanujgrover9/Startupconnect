import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import investorBanner from "../assets/maranda-vandergriff-7aakZdIl4vg-unsplash.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { User2 } from "lucide-react";

const investors = Array.from({ length: 12 }, (_, i) => ({
  name: `Investor ${i + 1}`,
  bio: "Experienced in early-stage startups, seed funding, and venture growth.",
  field: "Fintech, SaaS, AI",
  avatar: `https://i.pravatar.cc/150?img=${i + 20}`,
}));

const FindInvestors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-b-3xl shadow-xl">
          <img
            src={investorBanner}
            alt="Investors Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Connect with Top Investors
              <br />
              Who Believe in Your Vision
            </h1>
          </div>
        </div>

        {/* Investor Cards */}
        <div className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 dark:text-white">
            Meet Potential Investors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {investors.map((inv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition duration-300 group">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={inv.avatar}
                          alt={inv.name}
                          className="w-14 h-14 rounded-full border border-blue-400 shadow-sm object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {inv.name}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {inv.field.split(",")[0]}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {inv.bio}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {inv.field.split(",").map((tag, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
                      <Button className="w-full sm:w-1/2 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 text-sm font-medium rounded-full">
                        Connect
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:w-1/2 text-sm font-medium text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <User2 className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FindInvestors;
