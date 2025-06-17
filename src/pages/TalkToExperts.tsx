import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Video } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Dummy expert data with avatar
const experts = Array.from({ length: 40 }, (_, i) => ({
  name: `Expert ${i + 1}`,
  field: "Marketing · Product · Tech",
  bio: "Over 10 years of experience in helping startups scale efficiently.",
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`, // uses random profile image
}));

const TalkToExperts = () => {
  return (
    <>
    <Navbar/>
     <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-800">
        Connect with Experts
      </h2>
      
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {experts.map((expert, index) => (
          <Card
            key={index}
            className="rounded-2xl border border-purple-100 shadow-lg hover:shadow-purple-200 transition duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {expert.name}
                  </h3>
                  <p className="text-xs text-gray-500 italic">{expert.field}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-5">{expert.bio}</p>
              <div className="flex gap-3">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm">
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
    <Footer/>
    </>
   
  );
};

export default TalkToExperts;
