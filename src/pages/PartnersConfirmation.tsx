// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PartnersConfirmation: React.FC = () => {
  const query = new URLSearchParams(window.location.search);
  const pkg = query.get('package') || 'Starter Trial';
  const price = query.get('price') || '0';

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">You're almost done</h1>
          <p className="mb-6 text-muted-foreground">We've recommended a package based on your answers:</p>
          <div className="mb-4">
            <div className="text-xl font-semibold">{pkg}</div>
            <div className="text-muted-foreground">{price === '0' ? 'Free' : `$${price}`}</div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link to="/partners" className="inline-block"><Button variant="outline">Back to Partners</Button></Link>
            <Button onClick={() => alert('In a real app this would start checkout or contact sales.')}>Contact Sales</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PartnersConfirmation;
