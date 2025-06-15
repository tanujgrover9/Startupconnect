import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const JoinAsMember = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center bg-green-50 rounded-2xl shadow-md">
      <Users size={40} className="mx-auto text-green-600 mb-4" />
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Become a Member</h2>
      <p className="text-gray-600 mb-6 text-lg">
        Collaborate with other startup founders, access premium tools, and grow your network.
      </p>
      <ul className="text-left text-gray-700 list-disc list-inside mb-6">
        <li>Exclusive access to community resources</li>
        <li>Invite-only webinars and networking events</li>
        <li>Direct access to investor pools</li>
        <li>Mentorship opportunities</li>
      </ul>
      <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg">
        Join Now
      </Button>
    </section>
  );
};

export default JoinAsMember;
