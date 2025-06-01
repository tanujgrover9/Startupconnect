import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs as UITabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Video, MessageCircle, Users } from "lucide-react";

const TabsSection = () => {
  return (
    <section className="relative z-10 bg-gradient-to-b from-[#f0fdf4] to-[#e0f2fe] py-24 px-6 overflow-hidden">
      {/* Soft glowing backgrounds */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-green-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-green-200 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Discover Our Premium Tools
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Tools to help you chat, connect, and collaborate with ease and style.
        </p>

        {/* Tabs */}
        <UITabs defaultValue="chat">
          {/* Tabs Header */}
          <TabsList className="flex justify-center gap-2 bg-white/60 backdrop-blur-md p-2 rounded-full border border-green-100 shadow-md max-w-lg mx-auto mb-10">
            <TabsTrigger
              value="chat"
              className="px-5 py-2 flex items-center gap-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
            >
              <MessageCircle className="w-4 h-4" /> Chat
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="px-5 py-2 flex items-center gap-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
            >
              <Video className="w-4 h-4" /> Video Call
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="px-5 py-2 flex items-center gap-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
            >
              <Users className="w-4 h-4" /> Community
            </TabsTrigger>
          </TabsList>

          {/* CHAT */}
          <TabsContent value="chat">
            <Card className="bg-white/80 border border-green-200 shadow-xl rounded-2xl backdrop-blur-md transition hover:shadow-green-300">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  Secure Chat Messaging
                </h3>
                <p className="text-gray-600 mb-4">
                  Send private messages to your team, mentors, or clients instantly in a protected space.
                </p>
                <Input
                  placeholder="Search for users..."
                  className="rounded-full border border-green-300 shadow-inner focus:ring-green-400"
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* VIDEO */}
          <TabsContent value="video">
            <Card className="bg-white/80 border border-green-200 shadow-xl rounded-2xl backdrop-blur-md transition hover:shadow-green-300">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  Live Video Calling
                </h3>
                <p className="text-gray-600 mb-6">
                  Host high-definition calls with clarity, reliability, and zero hassle.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105">
                  Start Video Call
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* COMMUNITY */}
          <TabsContent value="community">
            <Card className="bg-white/80 border border-green-200 shadow-xl rounded-2xl backdrop-blur-md transition hover:shadow-green-300">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  Community Hub
                </h3>
                <p className="text-gray-600 mb-6">
                  Join spaces where ideas are shared, relationships are built, and collaboration thrives.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105">
                  Join the Community
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </UITabs>
      </div>
    </section>
  );
};

export default TabsSection;
