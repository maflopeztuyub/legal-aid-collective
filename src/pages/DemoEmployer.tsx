import React from "react";
import { Link } from "react-router-dom";

const DemoEmployer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Employer Demo Profile</h1>
      <p className="mb-6">Placeholder page for the employer demo profile. Full details will be added later.</p>
      <Link to="/" className="text-primary hover:underline">Back to home</Link>
    </div>
  );
};

export default DemoEmployer;
