import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Video } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dummy expert data
const experts = Array.from({ length: 20 }, (_, i) => ({
  name: `Expert ${i + 1}`,
  field: "Marketing · Product · Tech",
  bio: "Over 10 years of experience in helping startups scale efficiently.",
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const TalkToExperts = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
     <section
  className="relative text-white min-h-[400px] py-20 px-6 text-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGludmVzdG9yfGVufDB8fDB8fHww')`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h1 className="text-5xl font-extrabold mb-4 leading-tight">
      Talk to Experienced Mentors
    </h1>
    <p className="text-lg opacity-90">
      Get guidance from top professionals in marketing, tech, product, and more.
    </p>
  </div>
</section>



      {/* Expert Cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Connect with Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl hover:shadow-xl transition duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {expert.name}
                    </h3>
                    <span className="text-sm text-indigo-600 dark:text-indigo-300">
                      {expert.field}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                  {expert.bio}
                </p>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-green-600 hover:bg-purple-700 text-white text-sm">
                    <PhoneCall className="mr-2 w-4 h-4" />
                    Call
                  </Button>
                  <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm">
                    <Video className="mr-2 w-4 h-4" />
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TalkToExperts;
