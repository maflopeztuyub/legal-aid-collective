import React from "react";
import LawTieDescription from "@/components/LawTieDescription";

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12 relative overflow-hidden">
      {/* Background Vector Graphics */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
          {/* Flowing background shapes */}
          <path d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z" fill="url(#bgGradient)" opacity="0.3" />
          <circle cx="200" cy="150" r="80" fill="hsl(var(--primary))" opacity="0.1" />
          <circle cx="1000" cy="250" r="120" fill="hsl(var(--accent))" opacity="0.1" />
          <circle cx="600" cy="600" r="60" fill="hsl(var(--primary))" opacity="0.15" />
          
          {/* Connecting lines */}
          <path d="M100,100 Q400,300 700,200 T1100,400" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.2" />
          <path d="M0,600 Q600,400 1200,600" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" opacity="0.2" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          {/* Header with decorative elements */}
          <div className="relative inline-block">
            <svg className="absolute -top-8 -right-8 w-16 h-16 opacity-30" viewBox="0 0 100 100">
              <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z" fill="hsl(var(--accent))" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How LAW-TIE Works</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Discover how our platform connects legal help seekers with dedicated student professionals</p>
        </div>
        <LawTieDescription />
      </div>
    </div>
  );
};

export default HowItWorks;
