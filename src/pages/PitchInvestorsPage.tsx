import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserPlus } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Dummy investors
const investors = Array.from({ length: 20 }, (_, i) => ({
  name: `Investor ${i + 1}`,
  bio: "Passionate about backing early-stage startups and driving innovation.",
  field: "AI, Fintech, SaaS",
  followers: Math.floor(Math.random() * 9000 + 1000),
  profilePic: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const FindInvestors = () => {
  return (
    <>
    <Navbar/>
    <section className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white">
      {/* Intro Article */}
      <div className="max-w-3xl mx-auto mb-14 text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-6">
          🚀 Find the Right Investor
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Finding the right investor is more than just funding — it's about
          partnering with someone who shares your vision. Our platform helps
          early-stage startups easily connect with experienced investors based
          on industry, investment stage, and shared interests.
        </p>
        <p className="mt-4 text-gray-600">
          We’ve curated a network of seasoned investors in AI, Fintech, SaaS,
          and more. You can view profiles, explore backgrounds, and directly
          connect or message them to kickstart valuable relationships.
        </p>
      </div>

      {/* Investor Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {investors.map((inv, index) => (
          <Card
  key={index}
  className="relative bg-white/70 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition rounded-2xl flex flex-col justify-between overflow-hidden"
>
  {/* Top accent line */}
  <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500" />

  <CardContent className="p-6 flex flex-col text-center h-full relative z-10">
    {/* Profile Image */}
    <div className="relative w-24 h-24 mx-auto mb-4">
      <img
        src={inv.profilePic}
        alt={inv.name}
        className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
      />
      <span className="absolute bottom-0 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white" />
    </div>

    {/* Name & Bio */}
    <h3 className="text-xl font-bold text-gray-800">{inv.name}</h3>
    <p className="text-sm text-gray-600 mt-1">{inv.bio}</p>

    {/* Tags */}
    <div className="flex justify-center gap-2 mt-2 flex-wrap">
      {inv.field.split(",").map((tag, i) => (
        <span
          key={i}
          className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
        >
          {tag.trim()}
        </span>
      ))}
    </div>

    {/* Followers */}
    <p className="mt-3 text-sm text-gray-500">
      <span className="font-medium text-blue-700">{inv.followers.toLocaleString()}</span>{" "}
      Followers
    </p>

    {/* Spacer */}
    <div className="flex-grow" />

    {/* Buttons */}
    <div className="mt-4 grid grid-cols-2 gap-3 w-full">
      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm shadow-md hover:shadow-lg mr-2">
        <UserPlus className="w-4 h-4 mr-2" /> Connect
      </Button>
      <Button
        variant="outline"
        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-sm"
      >
        <MessageCircle className="w-4 h-4 mr-2" /> Message
      </Button>
    </div>
  </CardContent>

  {/* Soft glow effect on hover */}
  <div className="absolute inset-0 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-shadow rounded-2xl z-0" />
</Card>


        ))}
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default FindInvestors;
