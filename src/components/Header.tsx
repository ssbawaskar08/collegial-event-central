
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">EventSync</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/events" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Events</Link>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Benefits</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Sign In
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/events" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Events</Link>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Benefits</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left">
                  Sign In
                </Link>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
