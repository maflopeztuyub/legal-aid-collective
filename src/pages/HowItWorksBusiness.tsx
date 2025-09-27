import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HowItWorksBusiness: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">How Businesses Hire on LAW-TIE</h1>
        <p className="text-muted-foreground mb-6">Find vetted contributors, post short-term projects, and support community legal aid while discovering new talent.</p>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">What businesses get</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Access to prescreened legal professionals, students and specialists.</li>
            <li>Flexible hiring: short-term projects, contract work, or full-time placement.</li>
            <li>Priority support and onboarding for teams.</li>
            <li>Tools for posting roles, interviewing, and managing candidate pipelines.</li>
          </ul>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Pricing & packages</h2>
          <p className="text-muted-foreground mb-2">We offer Starter, Growth, and Pro packages; our signup flow helps recommend the best plan based on your hiring needs.</p>
        </Card>

        <div className="flex gap-4">
          <Link to="/partners" className="inline-block">
            <Button className="px-6 py-3">Partner With Us</Button>
          </Link>
          <Link to="/partners/signup" className="inline-block">
            <Button variant="outline" className="px-6 py-3">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksBusiness;
