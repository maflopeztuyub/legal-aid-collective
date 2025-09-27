import React from "react";
import { Link } from "react-router-dom";
import StarBorder from "@/components/StarBorder";

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
          <StarBorder as={Link as any} to="/get-legal-help/personal-details" className="custom-class" color="cyan" speed="5s">Personal details</StarBorder>
        </article>

        <article style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Submit your case</h2>
          <p>Quickly submit a summary of your case to get initial feedback.</p>
          <StarBorder as={Link as any} to="/submit-case" className="custom-class" color="cyan" speed="5s">Submit your case</StarBorder>
        </article>

        <article style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Find a professional</h2>
          <p>Browse vetted lawyers and specialists to find the right match for your case.</p>
          <StarBorder as={Link as any} to="/professionals" className="custom-class" color="cyan" speed="5s">Browse professionals</StarBorder>
        </article>

        <article style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Need legal help</h2>
          <p>Go to the main Get Legal Help page for full guidance and to start the assisted process.</p>
          <StarBorder as={Link as any} to="/get-legal-help" className="custom-class" color="cyan" speed="5s">Get legal help</StarBorder>
        </article>
      </section>

      <footer style={{ marginTop: 20, color: "#666", fontSize: 13 }}>
        <p>If you'd like other quick actions on this page (upload materials, support contact, FAQ), tell me what to add and I will implement them.</p>
      </footer>
    </div>
  );
};

export default ForUsers;
