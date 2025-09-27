// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HowFeatures, Icons } from '@/components/HowFeatures';

const HowItWorksUser: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">Free & Paid Legal Help</h1>
        <p className="text-muted-foreground mb-6">LAW-TIE connects people in need with teams of professionals, students and experts who can assist with legal issues. You can submit your case and choose an option that fits your resources.</p>

        <HowFeatures
          features={[
            { title: 'Submit your case', description: 'Provide facts, documents, and your desired outcome to start the intake process.', icon: Icons.FileText, image: '/feature-placeholder-1.svg' },
            { title: 'Choose support level', description: 'Select paid priority service or request pro-bono/subsidized help based on your needs and eligibility.', icon: Icons.Shield, image: '/feature-placeholder-2.svg' },
            { title: 'Track progress', description: 'Teams provide transparent updates and final recommendations; you can review and rate the help you receive.', icon: Icons.Message, image: '/feature-placeholder-1.svg' },
          ]}
        />

        <div className="flex gap-4 mt-6">
          <Link to="/get-legal-help" className="inline-block">
            <Button className="px-6 py-3 bg-accent text-primary-foreground">Submit Your Case</Button>
          </Link>
          <Link to="/" className="inline-block">
            <Button variant="outline" className="px-6 py-3">Learn more</Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HowItWorksUser;
