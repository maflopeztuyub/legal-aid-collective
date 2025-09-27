// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HowItWorksContributor: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">Share Your Knowledge — Contribute</h1>
        <p className="text-muted-foreground mb-6">Use your skills to help real people, showcase your portfolio, and earn points for successful projects.</p>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Why contribute?</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Showcase practical work instead of just listing job details.</li>
            <li>Gain real-world experience and build a public portfolio.</li>
            <li>Earn points for successful projects and mentoring sessions; higher-ranked contributors get more visibility.</li>
            <li>Collaborate with professionals and get recruited by businesses on LAW-TIE.</li>
          </ul>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">How to start</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Create your contributor profile and link to sample work.</li>
            <li>Claim tasks or apply to mentor student teams.</li>
            <li>Complete projects, collect feedback, and improve your ranking.</li>
          </ul>
        </Card>

        <div className="flex gap-4">
          <Link to="/professionals" className="inline-block">
            <Button className="px-6 py-3">Browse Opportunities</Button>
          </Link>
          <Link to="/partners/signup" className="inline-block">
            <Button variant="outline" className="px-6 py-3">Become a Member</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksContributor;
