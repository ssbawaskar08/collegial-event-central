
import { Calendar, Clock, MapPin, Bell } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Never Miss Another
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> College Event</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Say goodbye to scattered updates and missed deadlines. EventSync centralizes all your college event information in real-time, keeping you connected and informed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Calendar className="text-blue-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Event Tracking</span>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Bell className="text-purple-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Real-time Alerts</span>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <MapPin className="text-green-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Location Updates</span>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Clock className="text-orange-600" size={20} />
                </div>
                <span className="text-sm text-gray-600">Deadline Reminders</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Tech Fest 2024</h3>
                    <p className="text-sm text-gray-600">Main Auditorium • 2:00 PM</p>
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    Live
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Registration Deadline</h3>
                    <p className="text-sm text-gray-600">Sports Meet • 2 days left</p>
                  </div>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                    Urgent
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Cultural Night</h3>
                    <p className="text-sm text-gray-600">Open Ground • Tomorrow 7 PM</p>
                  </div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Confirmed
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating notification cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-xs font-medium">New Event Alert!</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium">Location Updated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
