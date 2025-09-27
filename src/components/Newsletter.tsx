// @ts-nocheck
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const key = 'lawtie_newsletter_subscribers';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem(key, JSON.stringify(existing));
      }
      setStatus('success');
      setMessage('Thanks — you are subscribed!');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Subscription failed. Please try again later.');
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold mb-3">Stay informed</h2>
          <p className="text-muted-foreground mb-6">Subscribe to our newsletter for updates about new features, opportunities, and community highlights.</p>

          <form onSubmit={onSubmit} className="flex items-center justify-center gap-3">
            <input
              type="email"
              aria-label="Email address"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-xl rounded-md border border-input px-4 py-3 bg-transparent text-sm focus:outline-none"
            />
            <Button type="submit" className="px-6 py-3">Subscribe</Button>
          </form>

          {status === 'error' && (
            <div className="mt-4 text-sm text-destructive">{message}</div>
          )}
          {status === 'success' && (
            <div className="mt-4 text-sm text-success">{message}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
