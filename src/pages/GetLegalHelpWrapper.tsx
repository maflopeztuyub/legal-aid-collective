import React from "react";
import { Link } from "react-router-dom";
import GetLegalHelp from "./GetLegalHelp";

const GetLegalHelpWrapper: React.FC = () => {
  return (
    <div>
      <GetLegalHelp />

      <div style={{ padding: 16, display: "flex", justifyContent: "center", gap: 12 }}>
        <Link to="/get-legal-help/personal-details">
          <button style={{ padding: "10px 18px", borderRadius: 6 }}>Personal details</button>
        </Link>
        <Link to="/get-legal-help/apply">
          <button style={{ padding: "10px 18px", borderRadius: 6 }}>Apply</button>
        </Link>
      </div>
    </div>
  );
};

export default GetLegalHelpWrapper;
