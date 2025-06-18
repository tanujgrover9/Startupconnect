import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Video } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const experts = Array.from({ length: 20 }, (_, i) => ({
  name: `Expert ${i + 1}`,
  field: "Marketing · Product · Tech",
  bio: "Over 10 years of experience in helping startups scale efficiently.",
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const TalkToExperts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative text-white min-h-[450px] py-24 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
            Talk to Experienced Mentors
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Guidance from top professionals in Marketing, Tech, Product, and more.
          </p>
        </div>
      </section>

      {/* Expert Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 dark:text-white">
          Meet the Mentors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center h-full relative">
                  <div className="w-24 h-24 mb-4">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg ring-2 ring-indigo-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {expert.name}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300 mb-1">
                    {expert.field}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                    {expert.bio}
                  </p>
                  <div className="flex gap-3 w-full mt-auto">
                    <Button className="flex-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                      <PhoneCall className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                    <Button className="flex-1 text-sm rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-white dark:hover:bg-indigo-600">
                      <Video className="w-4 h-4 mr-1" />
                      Video Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TalkToExperts;
