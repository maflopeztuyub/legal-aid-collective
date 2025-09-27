// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const OptionCard: React.FC<{ to: string; title: string; subtitles: string[] }> = ({ to, title, subtitles }) => (
  <Link to={to} className="block">
    <Card className="p-8 hover:shadow-elegant transition-shadow h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <ul className="text-muted-foreground space-y-2">
          {subtitles.map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent mr-2">•</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button className="w-full">Explore</Button>
      </div>
    </Card>
  </Link>
);

const HowItWorksLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8">How LAW-TIE Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OptionCard
            to="/how/user"
            title="Need Legal Help?"
            subtitles={["Want to win a case?", "Want to sue someone?", "In a financial emergency?", "Need legal guidance now?"]}
          />

          <OptionCard
            to="/how/contributor"
            title="Share Your Skills"
            subtitles={["Showcase your expertise", "Gain experience in the market", "Help others and build a portfolio", "Earn points and visibility"]}
          />

          <OptionCard
            to="/how/business"
            title="Hire Experienced Talent"
            subtitles={["Find candidates with real experience", "See real work instead of theory", "Invite candidates to interview", "Build your recruitment pipeline"]}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksLanding;
