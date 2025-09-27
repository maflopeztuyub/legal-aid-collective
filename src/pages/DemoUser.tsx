import React from "react";
import { Link } from "react-router-dom";

const DemoUser: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Demo User Profile</h1>
      <p className="mb-6">This is a placeholder page for the demo user profile. We'll build the full profile later.</p>
      <Link to="/" className="text-primary hover:underline">Back to home</Link>
    </div>
  );
};

export default DemoUser;
