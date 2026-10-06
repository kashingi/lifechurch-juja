import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, Building2, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-white mb-6">Give & Support</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Partner with us in advancing God's Kingdom through your generous giving
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="gradient-card border-border shadow-elegant">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                      <Heart className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl mb-4">Why Give?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Your generous contributions enable us to spread the Gospel, support our ministries, 
                      maintain our facilities, and reach out to our community with the love of Christ. 
                      Every gift, regardless of size, makes a significant impact in advancing God's Kingdom 
                      and touching lives for eternity.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <p className="text-center text-sm text-muted-foreground italic">
                      "Each of you should give what you have decided in your heart to give, not reluctantly 
                      or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12 text-center">
              <h2 className="font-display mb-4">Ways to Give</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="gradient-card border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto">
                    <Smartphone className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="font-display text-xl">M-Pesa</h3>
                    <p className="text-sm text-muted-foreground">
                      Give conveniently via M-Pesa mobile money transfer
                    </p>
                  </div>
                  <div className="pt-4 space-y-3">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Paybill Number</p>
                      <p className="font-mono font-semibold text-lg">157193</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Account</p>
                      <p className="font-mono font-semibold">Life Church</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">M-Pesa (Send Wave)</p>
                      <p className="font-mono font-semibold">0724072449</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto">
                    <CreditCard className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="font-display text-xl">PayPal</h3>
                    <p className="text-sm text-muted-foreground">
                      Support us internationally through PayPal
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full gradient-primary shadow-glow" disabled>
                      Give via PayPal
                      <span className="ml-2 text-xs">(Coming Soon)</span>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      International giving option for supporters worldwide
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto">
                    <Building2 className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="font-display text-xl">Bank Transfer</h3>
                    <p className="text-sm text-muted-foreground">
                      Direct deposit to our church account
                    </p>
                  </div>
                  <div className="pt-4 space-y-3">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Bank Name</p>
                      <p className="font-semibold">Sidian Bank Ltd</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Account Number</p>
                      <p className="font-mono font-semibold">01012150009478</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Swift Code</p>
                      <p className="font-mono font-semibold">SIDNKENA</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Account Name</p>
                      <p className="font-semibold text-sm">Life Church International - Juja</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display">Your Impact</h2>
              <p className="text-lg text-muted-foreground">
                Your faithful giving supports various areas of ministry including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[
                  "Sunday worship services",
                  "Youth and children's programs",
                  "Community outreach initiatives",
                  "Pastoral care and counseling",
                  "Building maintenance",
                  "Missions and evangelism",
                  "Leadership development",
                  "Support for the needy",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-lg"
                  >
                    <div className="p-1 rounded-full bg-primary/20">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For more information about giving or to set up recurring donations, please contact our 
              church office. We appreciate your partnership in ministry and your commitment to advancing 
              God's Kingdom.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
