import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building, GraduationCap } from "lucide-react";

// Import your asset image
import heroImage from "@/assets/website.png";
const FALLBACK = "/placeholder.svg"; // fallback can stay in public folder

export const Hero = ({ backgroundUrl = heroImage }: { backgroundUrl?: string }) => {
  const bgStack = `url('${backgroundUrl}'), url('${FALLBACK}')`;

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: bgStack }}
      />

      {/* Top-left logo */}
      <div className="absolute top-4 left-4 z-20">
        <a href="/" aria-label="LawTie home">
          <img src="/lawtie-logo.png" alt="LawTie" className="h-12 w-auto object-contain" />
        </a>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight hero-title">
            Connecting Legal
            <span className="text-accent"> Expertise</span> with
            <br />
            <span className="text-success">Real Impact</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl leading-relaxed">
            <strong>Bridge. Empower. Succeed.</strong><br />
            Seeking legal help with ambitious lawyers,
            <br />
            and forward-thinking companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent-hover" asChild>
              <Link to="/get-legal-help">
                Get Legal Help <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
                {/* Removed extra 'Submit Your Case' button - instead make the 'For Users' card link to /get-legal-help */}
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4" aria-label="Join as Professional">
              <Link to="/professionals">Join as Professional</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/get-legal-help" className="flex items-center space-x-3 text-primary-foreground/90 no-underline">
              <Users className="h-8 w-8 text-success" />
              <span className="text-lg font-semibold">For Users</span>
            </Link>
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
