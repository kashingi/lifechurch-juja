import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import churchLogo from "@/assets/church-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-glow">
                <img src={churchLogo} alt="Life Church International" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-primary">LCI-Juja</h3>
                <p className="text-xs text-muted-foreground">Life Church International</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Proclaiming the Gospel of Jesus Christ and building a Christ-centered community since 2007.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Ministries", "Events", "Media"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Juja (Highpoint), Along Highpoint-Gachororo Road, Behind Neema School</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+254734587859" className="hover:text-primary transition-smooth">
                    +254 734 587 859
                  </a>
                  <a href="tel:+254727315043" className="hover:text-primary transition-smooth">
                    +254 727 315 043
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/pstben.ouma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Life Church International Juja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
