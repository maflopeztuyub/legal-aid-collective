import React from "react";
import { Link } from "react-router-dom";
import GetLegalHelp from "./GetLegalHelp";
import StarBorder from "@/components/StarBorder";

const GetLegalHelpWrapper: React.FC = () => {
  return (
    <div>
      <GetLegalHelp />

      <div style={{ padding: 16, display: "flex", justifyContent: "center", gap: 12 }}>
        <StarBorder as={Link as any} to="/get-legal-help/personal-details" className="custom-class" color="cyan" speed="5s">
          Personal details
        </StarBorder>
        <StarBorder as={Link as any} to="/get-legal-help/apply" className="custom-class" color="cyan" speed="5s">
          Apply
        </StarBorder>
      </div>
    </div>
  );
};

export default GetLegalHelpWrapper;
