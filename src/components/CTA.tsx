
import { ArrowRight, Smartphone, Monitor } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Never Miss Another Event?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of students who stay connected and informed with EventSync. 
          Start your free trial today and experience the future of college event management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center">
            Start Free Trial
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
            Schedule Demo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
          <div className="flex items-center">
            <Smartphone className="mr-2" size={20} />
            <span>Available on Mobile</span>
          </div>
          <div className="flex items-center">
            <Monitor className="mr-2" size={20} />
            <span>Web Platform</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span>Free 30-Day Trial</span>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-4">Get Started in 3 Simple Steps</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-3">1</div>
              <h4 className="font-semibold text-white mb-2">Sign Up</h4>
              <p className="text-blue-100 text-sm">Create your account with your college email</p>
            </div>
            <div>
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-3">2</div>
              <h4 className="font-semibold text-white mb-2">Connect</h4>
              <p className="text-blue-100 text-sm">Link your college and join event channels</p>
            </div>
            <div>
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-3">3</div>
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-blue-100 text-sm">Receive real-time notifications and updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
