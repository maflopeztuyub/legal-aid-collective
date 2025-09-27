import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubmitCase: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("");

  if (submitted) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Case submitted</h1>
        <p>Thanks — your case has been received. We'll review and get back to you.</p>
        <p>
          <Link to="/get-legal-help">Back to Get Legal Help</Link>
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Submit your case</h1>
      <p>Please describe your case briefly and provide a preferred contact email.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted case:", text);
          setSubmitted(true);
        }}
        style={{ display: "grid", gap: 12, maxWidth: 800 }}
      >
        <label>
          Case summary
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6} />
        </label>
        <div>
          <button type="submit">Submit case</button>
          <Link to="/get-legal-help" style={{ marginLeft: 12 }}>
            <button type="button">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SubmitCase;
