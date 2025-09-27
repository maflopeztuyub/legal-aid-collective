import React from "react";
import LawTieDescription from "@/components/LawTieDescription";
import { CheckCircle, Clock, Users, Star } from "lucide-react";

const HowWebsiteWorks: React.FC = () => (
  <div className="min-h-screen bg-background p-8">
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6">How the Website Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="flex items-start gap-3 p-4 border rounded-lg">
          <CheckCircle className="w-6 h-6 text-accent mt-1" />
          <div>
            <h4 className="font-semibold">Verified Students</h4>
            <p className="text-sm text-muted-foreground">Selective admission ensures quality.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 border rounded-lg">
          <Clock className="w-6 h-6 text-primary mt-1" />
          <div>
            <h4 className="font-semibold">Fast Responses</h4>
            <p className="text-sm text-muted-foreground">48 business hour reply guarantee.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 border rounded-lg">
          <Users className="w-6 h-6 text-primary mt-1" />
          <div>
            <h4 className="font-semibold">Team Approach</h4>
            <p className="text-sm text-muted-foreground">Multi-disciplinary teams on cases.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 border rounded-lg">
          <Star className="w-6 h-6 text-success mt-1" />
          <div>
            <h4 className="font-semibold">Star Score</h4>
            <p className="text-sm text-muted-foreground">Objective performance ranking.</p>
          </div>
        </div>
      </div>

      <LawTieDescription />
    </div>
  </div>
);

export default HowWebsiteWorks;
