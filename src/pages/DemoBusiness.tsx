import React from "react";
import { Link } from "react-router-dom";

const DemoBusiness: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Business Demo Profile</h1>
      <p className="mb-6">Placeholder page for the business demo profile. We'll flesh this out later.</p>
      <Link to="/" className="text-primary hover:underline">Back to home</Link>
    </div>
  );
};

export default DemoBusiness;
