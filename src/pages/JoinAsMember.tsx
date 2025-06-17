import { Button } from "@/components/ui/button";
import { Users, CheckCircle } from "lucide-react";

const JoinAsMember = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white dark:from-gray-800 dark:to-gray-900 px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      <div className="relative z-10 bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 max-w-3xl w-full">
        <div className="flex flex-col items-center text-center">
          <Users size={50} className="text-green-600 mb-4" />
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            Become a Member
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Collaborate with other founders, get premium access to tools, and grow with a thriving community.
          </p>

          <ul className="text-left w-full text-gray-700 dark:text-gray-300 mb-8 space-y-3">
            {[
              "Exclusive access to community resources",
              "Invite-only webinars and networking events",
              "Direct access to investor pools",
              "Mentorship opportunities from top founders",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full shadow-md transition duration-300">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinAsMember;
