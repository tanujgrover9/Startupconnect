import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const investors = Array.from({ length: 40 }, (_, i) => ({
  name: `Investor ${i + 1}`,
  bio: "Experienced in early-stage startups, seed funding, and venture growth.",
  field: "Fintech, SaaS, AI",
}));

const FindInvestors = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">
        Meet Potential Investors
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {investors.map((inv, index) => (
          <Card key={index} className="bg-white border shadow-md rounded-xl p-6">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800">{inv.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{inv.bio}</p>
              <p className="text-xs mt-1 text-gray-500 italic">{inv.field}</p>
              <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                Connect
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FindInvestors;
