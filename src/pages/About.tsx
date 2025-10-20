import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass, Heart, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import pastorsImage from "@/assets/lci1.jpg";
import congregationImage from "@/assets/congregation.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-white mb-6">About Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Proclaiming the Gospel and impacting communities since 2007
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="font-display">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Life Church International-Juja is a growing church based in the town of Juja and was 
                    founded in 2007 by Pastor Ben and Pastor Liz. We are under the cover of Life Church 
                    International — a growing apostolic church grounded in the values of evangelism, 
                    discipleship, equipping, and commissioning.
                  </p>
                  <p>
                    Our aim is to impact Juja and its surrounding communities with the life-transforming 
                    love of Jesus Christ. Pastor Ben is under the guidance of Apostle Dr. David Juma, the 
                    apostolic leader of Life Church International.
                  </p>
                  <p>
                    He is happily married to Pastor Liz, and together with their children, they are 
                    actively involved in various ministries to bless the body of Christ.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={congregationImage}
                  alt="Church congregation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="gradient-card border-border shadow-elegant">
                <CardContent className="p-8 space-y-4">
                  <div className="p-4 gradient-primary rounded-xl w-fit">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Becoming an effective apostolic people impacting communities for Christ in all 
                    the nations of the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-elegant">
                <CardContent className="p-8 space-y-4">
                  <div className="p-4 gradient-primary rounded-xl w-fit">
                    <Compass className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To establish apostolic churches; evangelizing, discipling, and commissioning 
                    well-equipped radical saints to their ministerial functions, advancing God's Kingdom 
                    and acting in love to improve local communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display mb-4">Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Committed to raising disciples equipped to lead with courage and excellence
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="gradient-card border-border shadow-elegant overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[400px] md:h-auto">
                    <img
                      src={pastorsImage}
                      alt="Pastor Ben and Pastor Liz"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 space-y-4 flex flex-col justify-center">
                    <h3 className="font-display text-2xl">Pastor Ben & Pastor Liz</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pastor Ben is the visionary Founder and Senior Pastor of Life Church International 
                      Juja. With a passionate heart for ministry, he established LCI-Juja to bring 
                      transformative hope, faith, and service into the local community.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Pastor Ben is known for his dynamic preaching, prayer, deep love for people, and 
                      commitment to raising disciples who are equipped to lead in their spheres of 
                      influence. Together with his wife Pastor Liz, Life Church International Juja has 
                      grown not only in numbers but in spiritual maturity.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Pastor Ben and Liz believe strongly in empowering others, fostering spiritual 
                      growth, and seeing every church member live out God's purpose with courage and excellence.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display mb-4">What We Do</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: "Worship Gatherings",
                  description: "Weekly services where we gather for praise, teaching, and prayer",
                },
                {
                  icon: Users,
                  title: "Evangelism & Outreach",
                  description: "Going into neighborhoods, schools and public places to share the Good News",
                },
                {
                  icon: Target,
                  title: "Discipleship Programs",
                  description: "Classes, small groups, mentorships to help believers grow in faith",
                },
                {
                  icon: Compass,
                  title: "Training & Commissioning",
                  description: "Equipping people to use their spiritual gifts, serve, and lead",
                },
                {
                  icon: Heart,
                  title: "Community Initiatives",
                  description: "Caring for the needs in our neighbourhood and helping the vulnerable",
                },
                {
                  icon: Users,
                  title: "Ministry Teams",
                  description: "Various departments serving both spiritual growth and community impact",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="gradient-card border-border hover:shadow-elegant transition-smooth"
                >
                  <CardContent className="p-6 space-y-3">
                    <div className="p-3 gradient-primary rounded-xl w-fit">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
