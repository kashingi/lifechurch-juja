import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Heart, BookOpen, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-worship.jpg";
import pastorImage from "@/assets/pastor-lci.jpg";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Weekly Services",
      description: "Join us every Sunday for inspiring worship and biblical teaching.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Be part of a loving family that grows together in faith.",
    },
    {
      icon: Heart,
      title: "Outreach",
      description: "Making a difference in Juja and surrounding communities.",
    },
    {
      icon: BookOpen,
      title: "Discipleship",
      description: "Growing deeper in your relationship with Christ.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <div className="max-w-3xl text-white space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 text-center">
              <h1 className="font-display font-bold leading-tight">
                Welcome to Life Church International Juja
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                We are honored by your presence. At LCI-Juja, we are committed to proclaiming the Gospel 
                of Jesus Christ, fostering spiritual growth, and building a Christ-centered community 
                rooted in love, truth, and service.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link to="/contact">Visit Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display mb-4">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience meaningful worship, authentic community, and opportunities to grow in your faith
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="gradient-card border-border hover:shadow-elegant transition-smooth hover:-translate-y-1"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 gradient-primary rounded-xl w-fit">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-display">Our Vision</h2>
              <p className="text-xl text-muted-foreground italic">
                "Becoming an effective apostolic people impacting communities for Christ in all the nations of the world."
              </p>
              <Button asChild size="lg" className="gradient-primary shadow-glow">
                <Link to="/about">
                  Discover Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display">Join Our Community</h2>
                <p className="text-lg text-muted-foreground">
                  We warmly invite you to join us for our weekly worship services, participate in our 
                  ministries, and become part of the life of this church. It is our prayer that you will 
                  encounter the presence of God, find meaningful fellowship, and be encouraged in your 
                  walk with Christ.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sunday Services</h4>
                      <p className="text-muted-foreground">Join us every Sunday for worship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Small Groups</h4>
                      <p className="text-muted-foreground">Connect in smaller, intimate settings</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="gradient-primary shadow-glow">
                  <Link to="/ministries">Explore Ministries</Link>
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={pastorImage}
                  alt="Church pastors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
