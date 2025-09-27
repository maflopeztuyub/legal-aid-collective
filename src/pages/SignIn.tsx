// @ts-nocheck
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Placeholder: in a real app, call your auth API here
    localStorage.setItem('lawtie_user', JSON.stringify({ email }));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center py-16">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="p-8">
          <h1 className="text-2xl font-bold mb-4">Sign in</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border px-3 py-2" />
            </div>
            {error && <div className="text-sm text-destructive">{error}</div>}
            <div className="flex items-center justify-between">
              <Button type="submit">Sign in</Button>
              <Link to="/signup" className="text-sm text-muted-foreground hover:text-primary">Create an account</Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
