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
    <div className="min-h-screen bg-gradient-to-b from-background via-muted-foreground/5 to-background py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          {/* Decorative top-right abstract SVG */}
          <svg className="absolute right-0 -top-8 w-48 h-48 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path fill="url(#g1)" d="M40,-20C50,-5,60,5,70,10C80,15,90,15,100,10C110,5,120,-5,130,-10C140,-15,150,-10,155,0C160,10,160,25,155,35C150,45,140,50,130,55C120,60,110,65,100,70C90,75,80,80,65,80C50,80,30,75,15,65C0,55,-10,40,-15,25C-20,10,-20,-5,-10,-15C0,-25,20,-35,40,-20Z" transform="translate(20 60)"/>
          </svg>

          <h1 className="text-4xl md:text-5xl font-extrabold">How LAW-TIE Works</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">A simple flow connecting users, contributors, and businesses to solve legal problems, gain experience, and discover talent.</p>
        </div>

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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-white/60 to-muted-foreground/10 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Transparent workflow</h3>
            <p className="text-muted-foreground">Submissions flow to expert teams who evaluate and assign resources. Progress and outcomes are tracked transparently so users and businesses see impact.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-white/60 to-muted-foreground/10 rounded-lg shadow relative overflow-hidden">
            {/* Small decorative circles */}
            <svg className="absolute -left-6 -bottom-6 w-48 h-48 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#60a5fa" />
              <circle cx="60" cy="60" r="28" fill="#f472b6" />
            </svg>
            <h3 className="text-xl font-semibold mb-3">Earn and redeem points</h3>
            <p className="text-muted-foreground">Contributors earn points for completed work; businesses can reward top performers. Points translate to visibility and opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksLanding;
