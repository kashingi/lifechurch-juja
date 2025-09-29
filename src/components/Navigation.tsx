import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Church } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Events", path: "/events" },
    { name: "Media", path: "/media" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 gradient-primary rounded-lg shadow-glow transition-smooth group-hover:scale-110">
              <Church className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-primary">LCI-Juja</span>
              <span className="text-xs text-muted-foreground">Life Church International</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary relative ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-6 left-0 right-0 h-0.5 gradient-primary" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(item.path)
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
