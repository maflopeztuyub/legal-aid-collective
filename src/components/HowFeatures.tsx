import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award, FileText, MessageSquare, Shield, FileCheck } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
};

export const HowFeatures: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <Card key={f.title} className="shadow-professional hover:shadow-elegant transition-all duration-300 h-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                {f.image ? (
                  <img src={f.image} alt={f.title} className="h-12 w-12 rounded-md object-cover" loading="lazy" />
                ) : (
                  <div className="p-2 rounded-md bg-muted-foreground/5">
                    {f.icon}
                  </div>
                )}
                <CardTitle className="text-lg text-primary">{f.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{f.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Example icons that can be referenced when building the features array
export const Icons = {
  Clock: <Clock className="h-8 w-8 text-accent" />,
  Users: <Users className="h-8 w-8 text-success" />,
  Award: <Award className="h-8 w-8 text-success" />,
  FileText: <FileText className="h-8 w-8 text-primary" />,
  Message: <MessageSquare className="h-8 w-8 text-accent" />,
  Shield: <Shield className="h-8 w-8 text-primary" />,
  FileCheck: <FileCheck className="h-8 w-8 text-accent" />,
};
