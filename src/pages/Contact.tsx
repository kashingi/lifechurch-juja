import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us anytime
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you're looking for more information about our church, want to join a ministry, 
                    or need prayer support, we're here for you. Feel free to visit us, call, or send us a message.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="gradient-card border-border hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 gradient-primary rounded-xl">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">Our Location</h3>
                          <p className="text-sm text-muted-foreground">
                            Juja (Highpoint)<br />
                            Along Highpoint-Gachororo Road<br />
                            Behind Neema School<br />
                            Juja, Kenya
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="gradient-card border-border hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 gradient-primary rounded-xl">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">Phone Number</h3>
                          <a
                            href="tel:+254724072449"
                            className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                          >
                            0724 072 449
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="gradient-card border-border hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 gradient-primary rounded-xl">
                          <Clock className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">Service Times</h3>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div>
                              <p className="font-semibold mb-1">Sunday Services:</p>
                              <p>1st Service: 7:00 AM - 9:00 AM</p>
                              <p>2nd Service: 9:00 AM - 12:00 PM</p>
                            </div>
                            <div className="pt-2">
                              <p className="font-semibold mb-1">Weekday Services:</p>
                              <p>Mon-Fri Lunch Hour Services</p>
                              <p>Every Tuesday: 6:00 PM - 7:30 PM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="gradient-card border-border shadow-elegant h-full">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl mb-6">Plan Your Visit</h3>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">
                        We would be honored to have you visit us! Here's what to expect when you come:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Welcoming Atmosphere</h4>
                            <p className="text-sm text-muted-foreground">
                              Our greeters will welcome you at the entrance and help you find your way
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Casual Dress</h4>
                            <p className="text-sm text-muted-foreground">
                              Come as you are! We focus on the heart, not appearance
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Children Welcome</h4>
                            <p className="text-sm text-muted-foreground">
                              We have a dedicated children's ministry during services
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Stay for Fellowship</h4>
                            <p className="text-sm text-muted-foreground">
                              Join us after service for refreshments and meet the church family
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <h4 className="font-semibold mb-3">Need Prayer?</h4>
                        <p className="text-sm text-muted-foreground">
                          Our pastoral team is available to pray with you. Feel free to reach out via 
                          phone or speak with one of our leaders after service.
                        </p>
                      </div>

                      <div className="pt-4">
                        <h4 className="font-semibold mb-3">Directions</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Located in Juja town at Highpoint area, along Highpoint-Gachororo Road. 
                          Look for the building behind Neema School. If you need directions, 
                          please call us and we'll be happy to guide you.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display mb-6">We Look Forward to Meeting You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're seeking a church home, need prayer, or just want to learn more about what 
              we do, we're here for you. Don't hesitate to reach out!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
