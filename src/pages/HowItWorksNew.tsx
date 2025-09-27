import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorksNew from "./HowItWorksNew"; // adjust path if file is in src/pages
import React from "react";

const HowItWorksNew: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">How It Works (New)</h1>
      <p>This is the new How It Works page. Add your content here.</p>
    </div>
  );
};

export default HowItWorksNew;
export default App;
