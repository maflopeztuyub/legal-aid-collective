// @ts-nocheck
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const profiles = [
  {
    name: 'Marika Pescolido',
    title: 'Lead Coordinator',
    bio: 'Marika coordinates volunteer efforts and ensures high-quality legal support reaches those who need it most.',
    img: '/marika.jpg',
  },
  {
    name: 'Saleena Tiwari',
    title: 'Community Engagement',
    bio: 'Saleena builds partnerships with local organizations and manages outreach programs.',
    img: '/saleena.jpg',
  },
  {
    name: 'Maria Lopez',
    title: 'Program Manager',
    bio: 'Maria oversees project delivery and connects clients with the right legal teams.',
    img: '/maria.jpg',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-6">About Us</h1>
        <p className="text-muted-foreground mb-8">LAW-TIE is a community-powered legal aid platform. Meet the team who helps bring volunteers, professionals and businesses together.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <Card key={p.name} className="p-6 text-center">
              <img src={p.img} alt={p.name} className="mx-auto h-32 w-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="text-sm text-muted-foreground mb-3">{p.title}</div>
              <p className="text-sm text-muted-foreground">{p.bio}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <a href="/get-legal-help">Get Legal Help</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
