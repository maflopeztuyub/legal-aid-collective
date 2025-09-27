import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building, GraduationCap } from "lucide-react";
import heroImage from "@/assets/image frontpage website.png";

// Prefer a public override so users can drop a file into public/hero-landing.jpg
const PUBLIC_HERO = '/hero-landing.jpg';

export const Hero = () => {
  const bgUrl = PUBLIC_HERO; // if the file exists in public/, the browser will load it; otherwise it 404s and fallback is still provided by CSS with imported image
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bgUrl}), url(${heroImage})` }}
      />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Connecting Legal 
            <span className="text-accent"> Expertise</span> with 
            <span className="text-success"> Real Impact</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl leading-relaxed">
            Hola LAW-TIE bridges the gap between those seeking legal help, ambitious student lawyers, 
            and forward-thinking businesses. Experience collaborative legal solutions powered by 
            dedicated teams of young professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent-hover" asChild>
              <Link to="/get-legal-help">
                Get Legal Help <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Link to="/professionals" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/20 hover:text-primary transition-colors"
              >
                Join as Professional
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <Users className="h-8 w-8 text-success" />
              <span className="text-lg font-semibold">For Users</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <GraduationCap className="h-8 w-8 text-success" />
              <span className="text-lg font-semibold">For Employers</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <Building className="h-8 w-8 text-success" />
              <span className="text-lg font-semibold">For Businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};