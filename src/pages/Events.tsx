import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Mock data for events - in a real app, this would come from your backend
const mockEvents = [
  {
    id: 1,
    title: "Tech Symposium 2024",
    description: "Annual technology symposium featuring latest innovations in AI, blockchain, and cybersecurity. Join industry experts for keynote speeches, workshops, and networking opportunities.",
    date: "2024-06-15",
    time: "09:00 AM",
    location: "Main Auditorium, Block A",
    category: "Technology"
  },
  {
    id: 2,
    title: "Cultural Fest - Harmony",
    description: "Celebrate diversity with performances from various cultural groups. Dance, music, drama, and art exhibitions showcasing talents from across the campus.",
    date: "2024-06-20",
    time: "06:00 PM",
    location: "Open Air Theatre",
    category: "Cultural"
  },
  {
    id: 3,
    title: "Career Fair 2024",
    description: "Meet with top recruiters from leading companies. Bring your resumes and be prepared for on-spot interviews and internship opportunities.",
    date: "2024-06-25",
    time: "10:00 AM",
    location: "Sports Complex",
    category: "Career"
  },
  {
    id: 4,
    title: "Science Exhibition",
    description: "Student projects and research showcase. Innovative solutions and scientific discoveries by our brilliant minds. Open to all departments.",
    date: "2024-06-30",
    time: "02:00 PM",
    location: "Science Block, Ground Floor",
    category: "Academic"
  },
  {
    id: 5,
    title: "Sports Tournament",
    description: "Inter-department sports competition including cricket, football, basketball, and volleyball. Register your teams now!",
    date: "2024-07-05",
    time: "08:00 AM",
    location: "Sports Ground",
    category: "Sports"
  },
  {
    id: 6,
    title: "Alumni Meet 2024",
    description: "Reconnect with alumni and learn from their experiences. Networking session followed by dinner. A great opportunity to build professional connections.",
    date: "2024-07-10",
    time: "05:00 PM",
    location: "Convention Hall",
    category: "Networking"
  }
];

const Events = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800",
      Cultural: "bg-purple-100 text-purple-800", 
      Career: "bg-green-100 text-green-800",
      Academic: "bg-yellow-100 text-yellow-800",
      Sports: "bg-red-100 text-red-800",
      Networking: "bg-indigo-100 text-indigo-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">College Events</h1>
            <p className="text-lg text-gray-600">Stay updated with all the exciting events happening on campus</p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-200 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {event.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-600" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-red-600" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link to={`/events/${event.id}`}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-sm font-medium">
                      View Details
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
