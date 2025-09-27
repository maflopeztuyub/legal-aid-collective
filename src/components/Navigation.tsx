import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">LAW-TIE</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How it Works
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
              <Link to="/finances-sponsors" className="text-foreground hover:text-primary transition-colors">
                Finances & Sponsors
              </Link>
          </div>


          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/partners/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
