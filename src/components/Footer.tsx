
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">EventSync</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing college event management with real-time updates and centralized communication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Status</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-3" size={16} />
                <span className="text-sm">hello@eventsync.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-3" size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-400 mr-3" size={16} />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-700 flex-1 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 EventSync. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
