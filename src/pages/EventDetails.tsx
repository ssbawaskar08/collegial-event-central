
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ArrowLeft, User, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

// Mock data for events - in a real app, this would come from your backend
const mockEvents = [
  {
    id: 1,
    title: "Tech Symposium 2024",
    description: "Annual technology symposium featuring latest innovations in AI, blockchain, and cybersecurity. Join industry experts for keynote speeches, workshops, and networking opportunities.",
    fullDescription: "This comprehensive technology symposium brings together the brightest minds in the tech industry. Attendees will have the opportunity to learn about cutting-edge developments in artificial intelligence, blockchain technology, and cybersecurity. The event features keynote speeches from industry leaders, hands-on workshops, and extensive networking opportunities. Whether you're a student, professional, or enthusiast, this event will provide valuable insights into the future of technology.",
    date: "2024-06-15",
    time: "09:00 AM",
    location: "Main Auditorium, Block A",
    category: "Technology",
    capacity: 200,
    registered: 156,
    organizer: "Tech Society",
    requirements: "Laptop required for workshops",
    agenda: [
      "09:00 AM - Registration & Welcome Coffee",
      "10:00 AM - Keynote: Future of AI",
      "11:30 AM - Workshop: Blockchain Basics",
      "01:00 PM - Lunch Break",
      "02:00 PM - Cybersecurity Panel",
      "03:30 PM - Networking Session",
      "05:00 PM - Closing Remarks"
    ]
  },
  {
    id: 2,
    title: "Cultural Fest - Harmony",
    description: "Celebrate diversity with performances from various cultural groups. Dance, music, drama, and art exhibitions showcasing talents from across the campus.",
    fullDescription: "Harmony is our annual cultural festival that celebrates the rich diversity of our campus community. This vibrant event showcases the incredible talents of our students through various cultural performances including traditional and contemporary dance, musical performances, theatrical productions, and art exhibitions. It's a perfect opportunity to experience different cultures, make new friends, and appreciate the artistic talents within our college community.",
    date: "2024-06-20",
    time: "06:00 PM",
    location: "Open Air Theatre",
    category: "Cultural",
    capacity: 500,
    registered: 234,
    organizer: "Cultural Committee",
    requirements: "No special requirements",
    agenda: [
      "06:00 PM - Opening Ceremony",
      "06:30 PM - Classical Dance Performances",
      "07:30 PM - Musical Showcase",
      "08:30 PM - Drama Performances",
      "09:30 PM - Art Exhibition Tour",
      "10:00 PM - Cultural Fusion Show",
      "11:00 PM - Closing & Group Photo"
    ]
  },
  {
    id: 3,
    title: "Career Fair 2024",
    description: "Meet with top recruiters from leading companies. Bring your resumes and be prepared for on-spot interviews and internship opportunities.",
    fullDescription: "Our annual Career Fair connects students with top employers from various industries. This is your chance to network with recruiters, learn about job opportunities, and potentially secure internships or full-time positions. Leading companies from tech, finance, healthcare, and other sectors will be present to meet with students. Come prepared with multiple copies of your resume and dress professionally for potential on-the-spot interviews.",
    date: "2024-06-25",
    time: "10:00 AM",
    location: "Sports Complex",
    category: "Career",
    capacity: 300,
    registered: 189,
    organizer: "Placement Cell",
    requirements: "Professional attire, multiple copies of resume",
    agenda: [
      "10:00 AM - Registration & Welcome",
      "10:30 AM - Company Presentations",
      "12:00 PM - Networking Session",
      "01:00 PM - Lunch Break",
      "02:00 PM - One-on-One Interviews",
      "04:00 PM - Resume Review Sessions",
      "05:00 PM - Closing & Feedback"
    ]
  }
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: ""
  });

  const event = mockEvents.find(e => e.id === parseInt(id || "0"));

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Button onClick={() => navigate("/events")} className="bg-gradient-to-r from-blue-600 to-purple-600">
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // Add registration logic here
    alert("Registration successful! You will receive a confirmation email shortly.");
    setIsRegistering(false);
  };

  const spotsLeft = event.capacity - event.registered;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/events")}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Details */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-green-600" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-red-600" />
                    <span className="font-medium">{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3 text-purple-600" />
                    <span className="font-medium">
                      {event.registered}/{event.capacity} registered ({spotsLeft} spots left)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{event.fullDescription}</p>
                
                {event.requirements && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Requirements:</h4>
                    <p className="text-blue-800">{event.requirements}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm sticky top-8">
              <CardHeader>
                <CardTitle>Event Registration</CardTitle>
                <CardDescription>
                  Organized by {event.organizer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isRegistering ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {spotsLeft} spots left
                      </div>
                      <div className="text-sm text-gray-600">
                        {event.registered} already registered
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => setIsRegistering(true)}
                      disabled={spotsLeft === 0}
                    >
                      {spotsLeft === 0 ? "Event Full" : "Register Now"}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleRegistration} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="rollNumber">Roll Number</Label>
                      <Input
                        id="rollNumber"
                        name="rollNumber"
                        type="text"
                        required
                        value={formData.rollNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your roll number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsRegistering(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
