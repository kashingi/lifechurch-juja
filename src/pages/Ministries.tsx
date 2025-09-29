import { Card, CardContent } from "@/components/ui/card";
import { Music, Heart, Users, Baby, Video, Megaphone, UserCircle, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Ministries = () => {
  const ministries = [
    {
      icon: Music,
      title: "Praise and Worship",
      description:
        "Leading the congregation into God's presence through powerful, Spirit-led worship that glorifies God and prepares hearts to receive His word.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Marriage Ministry",
      description:
        "Strengthening marriages through biblical teaching, counseling, and fellowship that help couples build lasting, Christ-centered relationships.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Users,
      title: "Men Ministry",
      description:
        "Equipping men to grow in faith, lead with integrity, and impact their families, church, and communities through fellowship, mentorship, and spiritual development.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Ladies Ministry",
      description:
        "Empowering women to thrive in their God-given roles through prayer, teaching, support, and life-enriching gatherings that nurture spiritual and personal growth.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: UserCircle,
      title: "Youth Ministry",
      description:
        "Raising a generation of bold, God-fearing youth through mentorship, discipleship, worship, and engaging activities that build character and purpose.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Baby,
      title: "Children Ministry",
      description:
        "Teaching children the love of Jesus in a fun, safe, and nurturing environment where they grow in faith, values, and biblical understanding.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Video,
      title: "Media Ministry",
      description:
        "Serving the church through creative and technical excellence in audio, video, photography, and digital communication to enhance worship, spread the gospel, and keep the church connected both online and offline.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Mercy Ministry",
      description:
        "Demonstrating the love and compassion of Christ by caring for the needy, visiting the sick, supporting the vulnerable, and responding to practical needs within the church and the community.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: Megaphone,
      title: "Outreach and Evangelism",
      description:
        "Reaching out with the love of Christ through evangelism, community service, missions, and compassionate acts that transform lives and meet real needs.",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-white mb-6">Our Ministries</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Serving God and building His Kingdom through diverse ministries that touch lives
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.map((ministry, index) => (
                <Card
                  key={index}
                  className="gradient-card border-border hover:shadow-elegant transition-smooth hover:-translate-y-1 group"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="p-4 gradient-primary rounded-2xl w-fit group-hover:scale-110 transition-smooth shadow-glow">
                      <ministry.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl">{ministry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{ministry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display">Get Involved</h2>
              <p className="text-lg text-muted-foreground">
                Every member has a unique place in God's Kingdom. We encourage you to find your ministry 
                and serve with your God-given gifts and talents. Whether you're passionate about worship, 
                teaching, outreach, or supporting others, there's a place for you in our church family.
              </p>
              <p className="text-muted-foreground">
                For more information about joining any of our ministries, please contact us or speak 
                with one of our ministry leaders after service.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ministries;
