import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for inspiring worship, powerful preaching, and fellowship.",
      recurring: true,
    },
    {
      title: "Midweek Prayer Meeting",
      date: "Every Wednesday",
      time: "6:00 PM - 8:00 PM",
      location: "Prayer Hall",
      description: "Come together for corporate prayer and intercession.",
      recurring: true,
    },
    {
      title: "Youth Fellowship",
      date: "Every Friday",
      time: "5:00 PM - 7:00 PM",
      location: "Youth Center",
      description: "Dynamic fellowship for young people with worship, teaching, and activities.",
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
