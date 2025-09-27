import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Profile {
  name: string;
  title: string;
  bio: string;
}

const profiles: Profile[] = [
  {
    name: 'Marika Pescosolido',
    title: 'CEO',
    bio: 'From Italy, Marika is an aspiring physicist with a deep curiosity about the universe and a commitment to using science to address challenges. Personally impacted by the complexities of the legal system, she envisions a platform that makes law more accessible, reflecting her drive to create solutions that help humanity as a whole.',
  },
  {
    name: 'Saleena Tiwari',
    title: 'CTO',
    bio: 'From Nepal, Saleena is a computer science enthusiast and climate activist committed to creating an inclusive society. Passionate about youth empowerment and sustainability, she envisions using technology to tackle food insecurity, malnutrition, and environmental challenges while educating and amplifying the voices of immigrant children.',
  },
  {
    name: 'Maria Lopez',
    title: 'COO',
    bio: 'From Mexico, Maria is passionate about sharing knowledge and creating opportunities for others. With a strong background in mathematics and science Olympiads, as well as a deep commitment to social justice and cultural preservation, she envisions education as a tool to empower communities and build a more inclusive future.',
  },
];

const About: React.FC = () => {
  return (
    import React from 'react';
    import { Card } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';

    interface Profile {
      name: string;
      title: string;
      bio: string;
    }

    const profiles: Profile[] = [
      {
        name: 'Marika Pescosolido',
        title: 'CEO',
        bio: 'From Italy, Marika is an aspiring physicist with a deep curiosity about the universe and a commitment to using science to address challenges. Personally impacted by the complexities of the legal system, she envisions a platform that makes law more accessible, reflecting her drive to create solutions that help humanity as a whole.',
      },
      {
        name: 'Saleena Tiwari',
        title: 'CTO',
        bio: 'From Nepal, Saleena is a computer science enthusiast and climate activist committed to creating an inclusive society. Passionate about youth empowerment and sustainability, she envisions using technology to tackle food insecurity, malnutrition, and environmental challenges while educating and amplifying the voices of immigrant children.',
      },
      {
        name: 'Maria Lopez',
        title: 'COO',
        bio: 'From Mexico, Maria is passionate about sharing knowledge and creating opportunities for others. With a strong background in mathematics and science Olympiads, as well as a deep commitment to social justice and cultural preservation, she envisions education as a tool to empower communities and build a more inclusive future.',
      },
    ];

    // Initials avatar component (simple gradient circle with initials)
    const InitialsAvatar = ({ name }: { name: string }) => {
      const initials = name
        .split(' ')
        .map((s) => s[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

      const gradient = 'linear-gradient(90deg,#6366f1,#06b6d4)';

      return (
        <div
          className="mx-auto mb-4 h-20 w-20 rounded-full flex items-center justify-center text-white font-bold"
          style={{ background: gradient }}
          aria-hidden
        >
          {initials}
        </div>
      );
    };

    const About: React.FC = () => {
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
                  <InitialsAvatar name={p.name} />
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

