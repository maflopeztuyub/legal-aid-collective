// @ts-nocheck
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import images from assets
import MarikaImg from '@/assets/marika.jpg';
import SaleenaImg from '@/assets/saleena.jpg';
import MariaImg from '@/assets/maria.jpg';

const profiles = [
  {
    name: 'Marika Pescolido',
    title: 'CEO',
    bio: 'From Italy, Marika is an aspiring physicist with a deep curiosity about the universe and a commitment to using science to address challenges. Personally impacted by the complexities of the legal system, she envisions a platform that makes law more accessible, reflecting her drive to create solutions that help humanity as a whole.',
    img: MarikaImg,
  },
  {
    name: 'Saleena Tiwari',
    title: 'CTO',
    bio: 'From Nepal, Saleena is a computer science enthusiast and climate activist committed to creating an inclusive society. Passionate about youth empowerment and sustainability, she envisions using technology to tackle food insecurity, malnutrition, and environmental challenges while educating and amplifying the voices of immigrant children.',
    img: SaleenaImg,
  },
  {
    name: 'Maria Lopez',
    title: 'COO',
    bio: 'From Mexico, Maria is passionate about sharing knowledge and creating opportunities for others. With a strong background in mathematics and science Olympiads, as well as a deep commitment to social justice and cultural preservation, she envisions education as a tool to empower communities and build a more inclusive future.',
    img: MariaImg,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-6">About Us</h1>
        <p className="text-muted-foreground mb-8">
          LAW-TIE is a community-powered legal aid platform. Meet the team who helps bring volunteers, professionals and businesses together.
        </p>

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
