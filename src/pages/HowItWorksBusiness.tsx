// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HowFeatures, Icons } from '@/components/HowFeatures';

const HowItWorksBusiness: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">How Businesses Hire on LAW-TIE</h1>
        <p className="text-muted-foreground mb-6">Find vetted contributors, post short-term projects, and support community legal aid while discovering new talent.</p>

        <HowFeatures
          features={[
            { title: 'Prescreened talent', description: 'Access a curated pool of legal professionals, students and specialists ready for short-term projects or full-time roles.', icon: Icons.Users, image: '/feature-placeholder-1.svg' },
            { title: 'Flexible hiring', description: 'Post projects, run interviews, and manage candidate pipelines with built-in tools.', icon: Icons.Shield, image: '/feature-placeholder-2.svg' },
            { title: 'Custom packages', description: 'Starter, Growth, and Pro plans tailored to your hiring needs; our signup flow recommends the best fit.', icon: Icons.Award, image: '/feature-placeholder-1.svg' },
          ]}
        />

        <div className="flex gap-4 mt-6">
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
