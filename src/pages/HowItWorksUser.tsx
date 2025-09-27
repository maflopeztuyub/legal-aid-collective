// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HowItWorksUser: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">Free & Paid Legal Help</h1>
        <p className="text-muted-foreground mb-6">LAW-TIE connects people in need with teams of professionals, students and experts who can assist with legal issues. You can submit your case and choose an option that fits your resources.</p>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">How it works</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Submit your case with details — facts, documents, and desired outcome.</li>
            <li>Choose between a paid service (fast priority response) or request pro-bono / subsidized help.</li>
            <li>If you cannot pay, you may be eligible for free help in exchange for providing feedback and participating in short follow-ups with the team that assisted you.</li>
            <li>Teams provide transparent updates and final recommendations. You can review their work and rate the help.</li>
          </ul>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Payment & Support</h2>
          <p className="text-muted-foreground">Paid cases get priority matching and dedicated teams. Free cases may have limited timelines but are matched according to need and eligibility.</p>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Submit your case</h2>
          <p className="text-muted-foreground mb-4">Start by providing a clear summary and necessary documentation. Our intake process guides you through which details matter most.</p>
          <div className="flex gap-4">
            <Link to="/get-legal-help" className="inline-block">
              <Button className="px-6 py-3 bg-accent text-primary-foreground">Submit Your Case</Button>
            </Link>
            <Link to="/" className="inline-block">
              <Button variant="outline" className="px-6 py-3">Learn more</Button>
            </Link>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default HowItWorksUser;
