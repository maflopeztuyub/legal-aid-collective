import React from "react";
import { Link } from "react-router-dom";

const ForUsers: React.FC = () => {
  return (
    <div style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 18 }}>
        <h1>For users</h1>
        <p style={{ color: "#555" }}>Resources and quick links to help you start your case, submit information and find legal professionals.</p>
      </header>

      <section style={{ display: "grid", gap: 12 }}>
        <article style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Start your application</h2>
          <p>Begin by saving your personal details so professionals can understand your background and case.</p>
          <Link to="/get-legal-help/personal-details">
            <button style={{ padding: "8px 12px", borderRadius: 6 }}>Personal details</button>
          </Link>
        </article>

        <article style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Submit your case</h2>
          <p>Quickly submit a summary of your case to get initial feedback.</p>
          <Link to="/submit-case">
            <button style={{ padding: "8px 12px", borderRadius: 6 }}>Submit your case</button>
          </Link>
        </article>

        <article style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Find a professional</h2>
          <p>Browse vetted lawyers and specialists to find the right match for your case.</p>
          <Link to="/professionals">
            <button style={{ padding: "8px 12px", borderRadius: 6 }}>Browse professionals</button>
          </Link>
        </article>

        <article style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Need legal help</h2>
          <p>Go to the main Get Legal Help page for full guidance and to start the assisted process.</p>
          <Link to="/get-legal-help">
            <button style={{ padding: "8px 12px", borderRadius: 6 }}>Get legal help</button>
          </Link>
        </article>
      </section>

      <footer style={{ marginTop: 20, color: "#666", fontSize: 13 }}>
        <p>If you'd like other quick actions on this page (upload materials, contact support, FAQ), tell me what to add and I will implement them.</p>
      </footer>
    </div>
  );
};

export default ForUsers;
