import React from "react";
import { Link } from "react-router-dom";
import GetLegalHelp from "./GetLegalHelp";
import StarBorder from "@/components/StarBorder";

const GetLegalHelpWrapper: React.FC = () => {
  return (
    <div>
      <GetLegalHelp />

      <div style={{ padding: 16, display: "flex", justifyContent: "center", gap: 12 }}>
        <Link to="/get-legal-help/personal-details">
          <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
            Personal details
          </StarBorder>
        </Link>
        <Link to="/get-legal-help/apply">
          <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
            Apply
          </StarBorder>
        </Link>
      </div>
    </div>
  );
};

export default GetLegalHelpWrapper;
