import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Star, Moon, Sun, Menu, X } from "lucide-react";
import logo from "../assets/WhatsApp_Image_2025-05-30_at_18.21.33_26b5dc10-removebg-preview.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="StartupConnect Logo"
            className="h-10 w-auto object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/feed"
            className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-300"
          >
            Feed
          </Link>

          <Link
            to="/posts"
            className="bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-purple-500 hover:text-white transform hover:scale-105 transition duration-300"
          >
            Blogs+
          </Link>

          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
          >
            <LogIn className="w-4 h-4" /> Login
          </button>

          <button
            onClick={() => navigate("/premium")}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-yellow-400 bg-black shadow-md hover:shadow-yellow-500/50 hover:scale-105 transition duration-300 group"
          >
            <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
            Premium
            <span className="absolute inset-0 rounded-lg bg-yellow-400 opacity-0 group-hover:opacity-10 transition duration-500 blur-sm pointer-events-none" />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <Link
            to="/feed"
            onClick={() => setMenuOpen(false)}
            className="block text-blue-700 dark:text-blue-300 font-semibold"
          >
            Feed
          </Link>
          <Link
            to="/posts"
            onClick={() => setMenuOpen(false)}
            className="block text-purple-700 dark:text-purple-300 font-semibold"
          >
            Blogs+
          </Link>
          <button
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
            className="block text-gray-700 dark:text-gray-200"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/premium");
              setMenuOpen(false);
            }}
            className="block text-yellow-500 font-bold"
          >
            Premium
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-100"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
