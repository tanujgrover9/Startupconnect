import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const FounderMistakesPage = () => {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-red-700 mb-6">
          10 Mistakes First-Time Founders Make
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Learning from others' mistakes can save you time, money, and failure. Here are ten common pitfalls new founders fall into — and how to avoid them.
        </p>

        <ol className="list-decimal pl-6 space-y-3 text-gray-600">
          <li>Skipping proper market research</li>
          <li>Focusing on the solution instead of the problem</li>
          <li>Building without validation</li>
          <li>Not defining your customer segment clearly</li>
          <li>Overbuilding your MVP</li>
          <li>Underestimating marketing and distribution</li>
          <li>Trying to do everything alone</li>
          <li>Ignoring user feedback</li>
          <li>Burning out early</li>
          <li>Failing to adapt based on data</li>
        </ol>

        <h2 className="mt-10 text-2xl font-semibold text-red-700">Recommended Reads</h2>
        <ul className="mt-4 space-y-2 text-blue-600 underline">
          <li><a href="#">Validating Your Startup Idea</a></li>
          <li><a href="#">How to Build a Lean MVP</a></li>
          <li><a href="#">Top Tools for Early-Stage Founders</a></li>
        </ul>
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default FounderMistakesPage;
