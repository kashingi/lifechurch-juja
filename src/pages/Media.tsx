import { Card, CardContent } from "@/components/ui/card";
import { Video, Image as ImageIcon, Music, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-white mb-6">Media & Resources</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Access our sermons, worship sessions, and church gallery
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Video,
                  title: "Video Sermons",
                  description: "Watch recorded messages",
                  count: "Coming Soon",
                },
                {
                  icon: Music,
                  title: "Audio Messages",
                  description: "Listen on the go",
                  count: "Coming Soon",
                },
                {
                  icon: ImageIcon,
                  title: "Photo Gallery",
                  description: "Church events & activities",
                  count: "Coming Soon",
                },
                {
                  icon: BookOpen,
                  title: "Resources",
                  description: "Study materials & guides",
                  count: "Coming Soon",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="gradient-card border-border hover:shadow-elegant transition-smooth hover:-translate-y-1"
                >
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto">
                      <item.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="text-xs text-primary font-semibold">{item.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="gradient-card border-border shadow-elegant">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto">
                    <Video className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl">Media Library Coming Soon</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We're working on building a comprehensive media library where you can access sermons, 
                    worship sessions, Bible studies, and more. This section will feature video and audio 
                    content from our services, special events, and teaching series.
                  </p>
                  <p className="text-muted-foreground">
                    In the meantime, you can connect with us on our social media channels for updates 
                    and live streaming of our services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display">Stay Connected</h2>
              <p className="text-lg text-muted-foreground">
                Follow us on social media for the latest updates, live streams of our services, 
                inspirational content, and announcements about upcoming events.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Card className="p-4 hover:shadow-elegant transition-smooth cursor-pointer">
                  <p className="text-sm font-semibold">Facebook</p>
                </Card>
                <Card className="p-4 hover:shadow-elegant transition-smooth cursor-pointer">
                  <p className="text-sm font-semibold">Instagram</p>
                </Card>
                <Card className="p-4 hover:shadow-elegant transition-smooth cursor-pointer">
                  <p className="text-sm font-semibold">YouTube</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;
