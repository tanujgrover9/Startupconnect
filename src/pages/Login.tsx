import React, { useState } from "react";
import img from "../assets/microsoft-edge-Px0X7g1mc8k-unsplash.jpg";
import logo from "../assets/WhatsApp_Image_2025-05-30_at_18.21.33_26b5dc10-removebg-preview.png";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignup ? "Sign Up:" : "Login:", formData);
  };

  return (
    <div className="w-full h-screen flex overflow-hidden">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 h-full relative">
        <img
          src={img}
          alt="Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <h2 className="text-3xl font-bold drop-shadow-md">
            Welcome to StartupConnect
          </h2>
          <p className="text-sm mt-2 text-gray-200 drop-shadow-sm">
            Empower your startup dreams with the right connections.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 px-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            {isSignup
              ? "Join the future of startups today"
              : "Login to access your dashboard"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          {/* Toggle */}
          <div className="text-center mt-6 text-sm text-gray-700">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignup(false)}
                  className="text-purple-600 hover:underline font-medium"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                New here?{" "}
                <button
                  onClick={() => setIsSignup(true)}
                  className="text-indigo-600 hover:underline font-medium"
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
