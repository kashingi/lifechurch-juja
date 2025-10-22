import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import shiftConference from "@/assets/shift-conference-2025.png";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "1st Service: 7:00 AM - 9:00 AM | 2nd Service: 9:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for inspiring worship, powerful preaching, and fellowship.",
      recurring: true,
    },
    {
      title: "Midweek Prayer Meeting",
      date: "Every Tuesday",
      time: "6:00 PM - 7:30 PM",
      location: "Prayer Hall",
      description: "Come together for corporate prayer and intercession.",
      recurring: true,
    },
    {
      title: "Weekly lunch hours",
      date: "Every Day",
      time: " 12:45pm - 2:00pm ",
      location: "Juja Square 2nd floor",
      description: "All are welcomed.",
      recurring: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-white mb-6">Church Events</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay connected with what's happening at LCI-Juja
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="font-display text-center mb-12">Featured Event</h2>
              <Card className="max-w-4xl mx-auto gradient-card border-border shadow-glow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={shiftConference} 
                      alt="SHIFT CONFERENCE 2025 - That I may know Him" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 space-y-4 flex flex-col justify-center">
                    <div>
                      <h3 className="font-display text-2xl mb-2">SHIFT CONFERENCE 2025</h3>
                      <p className="text-primary font-semibold italic mb-4">
                        "That I may know Him" - Philippians 3:10
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-semibold">29th Sep - 5th Oct 2025</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Life Church inc main sanctuary</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Users className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Hosts: Pst Ben & Liz | Speakers: Apst. Juma, Bishop Wawire</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                      <p>• Mon-Fri Fire Pact Revival Meetings 5:00PM</p>
                      <p>• Saturday Pastors Conference 9:00AM-2:00PM</p>
                      <p>• Saturday Open Session 2:30PM</p>
                      <p>• Sunday 7:00AM-9:00AM, 9:00AM-12:30PM</p>
                      <p>• Prophetic Rally 2:30PM</p>
                    </div>

                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <a 
                          href="https://www.facebook.com/pstben.ouma" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Facebook className="h-4 w-4" />
                          More Info on Facebook
                        </a>
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Contact: 0734 587 859, 0727315043
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-center mb-4">Regular Events</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Join us for our regular church activities and special events throughout the year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="gradient-card border-border hover:shadow-elegant transition-smooth hover:-translate-y-1"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-xl pr-4">{event.title}</h3>
                      {event.recurring && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                          Recurring
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="gradient-card border-border shadow-elegant">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="font-display text-2xl mb-4">Special Events & Conferences</h3>
                    <p className="text-muted-foreground">
                      Throughout the year, we host special events, conferences, and community outreach 
                      programs. Stay connected with us through our social media channels or contact us 
                      directly to learn about upcoming special events.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        Annual Events
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-10">
                        <li>• Church Anniversary Celebrations</li>
                        <li>• Easter & Christmas Services</li>
                        <li>• Family Fun Days</li>
                        <li>• Leadership Conferences</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        Community Outreach
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-10">
                        <li>• Medical Camps</li>
                        <li>• Evangelism Crusades</li>
                        <li>• Feeding Programs</li>
                        <li>• Youth Mentorship</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display mb-6">First Time Visitor?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We would love to meet you! When you visit us for the first time, please stop by our 
              welcome desk where our team will be happy to help you feel at home.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
