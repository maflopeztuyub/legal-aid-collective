import { Scale, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8" />
              <span className="text-2xl font-bold">LAW-TIE</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Connecting legal expertise with real impact. Building the future of 
              accessible legal services through collaboration between users, 
              students, and businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contact@law-tie.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">For Users</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">For Students</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">For Businesses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Data Protection</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 LAW-TIE. All rights reserved. Empowering legal access through innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};