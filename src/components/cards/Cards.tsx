import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Handshake, MessagesSquare } from "lucide-react";

const features = [
  {
    title: "Find Investors",
    description: "Connect with potential investors for your startup idea.",
    icon: <Users size={28} className="text-blue-600" />,
    button: "Search Investors",
    gradient: "from-blue-100 via-white to-blue-50",
  },
  {
    title: "Join as Member",
    description: "Collaborate with other startup enthusiasts.",
    icon: <UserPlus size={28} className="text-green-600" />,
    button: "Join Network",
    gradient: "from-green-100 via-white to-green-50",
  },
  {
    title: "Talk to Experts",
    description: "Get mentorship and expert guidance on your journey.",
    icon: <Handshake size={28} className="text-purple-600" />,
    button: "Connect Now",
    gradient: "from-purple-100 via-white to-purple-50",
  },
  {
    title: "Group Discussions",
    description: "Join or create discussion groups with like-minded people.",
    icon: <MessagesSquare size={28} className="text-pink-600" />,
    button: "Explore Groups",
    gradient: "from-pink-100 via-white to-pink-50",
  },
];

const Features = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 px-4 py-16 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Card
          key={index}
          className={`rounded-3xl bg-gradient-to-br ${feature.gradient} shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100`}
        >
          <CardContent className="p-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full shadow-md">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">{feature.title}</h2>
            </div>
            <p className="text-gray-600">{feature.description}</p>
            <Button className="mt-2 w-max bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white">
              {feature.button}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Features;
