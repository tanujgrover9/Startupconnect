import React, { useState } from 'react';
import img from '../assets/microsoft-edge-Px0X7g1mc8k-unsplash.jpg';
import logo from "../assets/WhatsApp_Image_2025-05-30_at_18.21.33_26b5dc10-removebg-preview.png";



const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      console.log('Sign Up:', formData);
      // Handle sign-up
    } else {
      console.log('Login:', formData);
      // Handle login
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 hidden lg:block">
        <img
  src={img}
            alt="Login Visual"
          className="w-full h-187 object-cover"
        />
      </div>

      {/* Right Side - Form */}
    
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4 py-8">
  {/* Logo */}
  <div className="mb-6">
    <img src={logo} alt="StartupConnect Logo" className="h-20 w-auto" />
  </div>

  {/* Form Card */}
  <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl px-10 py-12 w-full max-w-md transition-all duration-300">
    <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
      {isSignup ? 'Create Account' : 'Welcome Back'}
    </h2>
    <p className="text-center text-sm text-gray-500 mb-8">
      {isSignup ? 'Sign up to connect with the startup world' : 'Login to continue your journey'}
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">
      {isSignup && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
          required
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        required
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300"
      >
        {isSignup ? 'Sign Up' : 'Login'}
      </button>
    </form>

    {/* Toggle Signup/Login */}
    <div className="mt-6 text-center text-sm text-gray-600">
      {isSignup ? (
        <span>
          Already have an account?{' '}
          <button
            onClick={() => setIsSignup(false)}
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </button>
        </span>
      ) : (
        <span>
          New here?{' '}
          <button
            onClick={() => setIsSignup(true)}
            className="text-purple-600 hover:underline font-medium"
          >
            Create an account
          </button>
        </span>
      )}
    </div>
  </div>
</div>

    </div>
  );
};

export default AuthPage;
