import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Building, CheckCircle, Trophy, Handshake } from "lucide-react";

export const UserTypes = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Three Sides, One Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LAW-TIE connects three distinct communities to create a powerful ecosystem 
            of legal support, learning, and recruitment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Users Card */}
          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300 border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-10 w-10 text-accent" />
                <CardTitle className="text-2xl text-primary">For Users</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Get expert legal help from dedicated teams of professionals at affordable rates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Comprehensive case assessment and team assignment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Multi-disciplinary expert teams (lawyers, analysts, consultants)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Financial support options and flexible payment plans</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Real-time case updates and transparent communication</span>
                </li>
              </ul>
              <Link to="/get-legal-help" className="inline-block w-full">
                <Button className="w-full">Submit Your Case</Button>
              </Link>
              {/* Button to demo user profile page */}
              {/* Demo User Profile button removed per request */}
            </CardContent>
          </Card>

          {/* Employees Card */}
          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl text-primary">For Employees</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Build your career with real cases, mentorship, and direct business connections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <Trophy className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Work on real cases with impact and visibility</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Trophy className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Ranking system based on case success and complexity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Trophy className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Direct recruitment opportunities with partner businesses</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Trophy className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Mentoring sessions and skill development programs</span>
                </li>
              </ul>
            <Link to="/professionals" className="inline-block w-full mt-4">
              <Button
                size="lg"
                className="w-full text-lg px-8 py-4 bg-accent hover:bg-accent-hover text-primary-foreground"
              >
                Join as Professional
              </Button>
            </Link>
            {/* External Employer Portal button (placeholder URL) - visible and matching other card demo buttons */}
            <Link to="/demo-employer" className="inline-block w-full mt-4">
              <Button
                size="lg"
                variant="ghost"
                className="w-full text-lg px-8 py-4 bg-accent text-primary-foreground hover:opacity-95"
              >
                Demo Employer Profile
              </Button>
            </Link>
            </CardContent>
          </Card>

          {/* Businesses Card */}
          <Card className="shadow-professional hover:shadow-elegant transition-all duration-300 border-l-4 border-l-success">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-10 w-10 text-success" />
                <CardTitle className="text-2xl text-primary">For Businesses</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Sponsor legal aid, discover top talent, and build your recruitment pipeline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <Handshake className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Access to pre-vetted, high-performing student professionals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Handshake className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Detailed performance reports on potential recruits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Handshake className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>CSR impact through legal aid sponsorship</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Handshake className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Recruitment scoring system and semester-based reports</span>
                </li>
              </ul>
            <Link to="/partners" className="inline-block w-full mt-4">
              <Button
                size="lg"
                className="w-full text-lg px-8 py-4 bg-white border border-black text-black hover:bg-gray-100"
              >
                Partner With Us
              </Button>
            </Link>
            {/* New button: Demo Business Profile - opens the demo business dashboard page */}
            <Link to="/demo-business" className="inline-block w-full mt-3">
              <Button
                size="lg"
                variant="ghost"
                className="w-full text-lg px-8 py-4 bg-accent text-primary-foreground hover:opacity-95"
              >
                Demo Business Profile
              </Button>
            </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
