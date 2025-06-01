
import { Calendar, Users, MapPin, Smartphone, Clock, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Centralized Event Hub",
      description: "All college events in one place. No more hunting through multiple platforms or missing important announcements.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant notifications for schedule changes, venue updates, and last-minute announcements.",
      color: "purple"
    },
    {
      icon: MapPin,
      title: "Smart Location Tracking",
      description: "Interactive campus maps with precise event locations and navigation assistance.",
      color: "green"
    },
    {
      icon: Users,
      title: "Community Integration",
      description: "Connect with classmates, form groups, and coordinate attendance for events together.",
      color: "orange"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with offline capabilities to access event info anytime.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Reliable Notifications",
      description: "Never miss deadlines with smart reminders and escalating notification system.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Connected</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EventSync brings together all the tools you need to never miss another college event or deadline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
