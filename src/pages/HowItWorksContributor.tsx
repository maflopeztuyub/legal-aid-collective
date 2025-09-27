// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HowFeatures, Icons } from '@/components/HowFeatures';

const HowItWorksContributor: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">Share Your Knowledge — Contribute</h1>
        <p className="text-muted-foreground mb-6">Use your skills to help real people, showcase your portfolio, and earn points for successful projects.</p>

        <HowFeatures
          features={[
            { title: 'Showcase practical work', description: 'Publish real assignments and outcomes to build a meaningful portfolio.', icon: Icons.Users, image: '/feature-placeholder-2.svg' },
            { title: 'Earn points & visibility', description: 'Collect points for completed projects and mentoring sessions — higher ranks mean more visibility.', icon: Icons.Award, image: '/feature-placeholder-1.svg' },
            { title: 'Collaborate with professionals', description: 'Work alongside mentors and professionals to gain experience and open recruitment paths.', icon: Icons.Message, image: '/feature-placeholder-2.svg' },
          ]}
        />

        <div className="flex gap-4 mt-6">
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
