<<<<<<< HEAD
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

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-muted-foreground/5 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Page not found</h1>
          <p className="text-muted-foreground mt-2">We couldn't find the page you're looking for. Here are some places to get started.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OptionCard to="/" title="Home" subtitles={["Return to the homepage", "Explore featured content"]} />
          <OptionCard to="/professionals" title="Professionals" subtitles={["View available professionals", "Join as a professional"]} />
          <OptionCard to="/partners" title="Partners" subtitles={["Partner with us", "Learn about business features"]} />
        </div>
=======
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
>>>>>>> e7f3bac1fcebd88b7d347057b8f9ea508e4e4e2f
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default NotFound;
=======
export default NotFound;
>>>>>>> e7f3bac1fcebd88b7d347057b8f9ea508e4e4e2f
