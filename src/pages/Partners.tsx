import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero: React.FC = () => (
  <section className="bg-gradient-to-r from-indigo-50 to-cyan-50 py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Partner with LAW-TIE</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        Hire high-performing interns and full-time talent sourced and vetted through our platform. Sponsor legal aid initiatives and meet top performers for recruitment.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/partners/signup" className="inline-block">
          <Button className="px-6 py-3">Become a Member</Button>
        </Link>
        <Link to="/professionals" className="inline-block">
          <Button variant="outline" className="px-6 py-3">View Top Professionals</Button>
        </Link>
      </div>
    </div>
  </section>
);

const BenefitCard: React.FC<{ title: string; children: any }> = ({ title, children }) => (
  <Card className="p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="text-muted-foreground">{children}</div>
  </Card>
);

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Hero />

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitCard title="Hire with confidence">
            Post internships and full-time roles and receive pre-vetted candidates with detailed profiles, grade and star scores, experience summaries and representative cases.
          </BenefitCard>

          <BenefitCard title="Sponsor legal aid">
            Partner with LAW-TIE to sponsor cases that boost your CSR profile while accessing a pipeline of experienced student professionals.
          </BenefitCard>

          <BenefitCard title="Recruitment leaderboard">
            Businesses with consistent engagement earn points. High-scoring partners are invited to exclusive recruitment events and interview days.
          </BenefitCard>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-2">1. Sponsor cases</h4>
              <p className="text-muted-foreground">Fund or sponsor pro-bono or reduced-fee cases to gain access to top student talent and demonstrate CSR.</p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-2">2. Receive vetted candidates</h4>
              <p className="text-muted-foreground">Shortlisted candidates arrive with a grade score, star rating and case history. Filter by experience and performance.</p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-2">3. Interview & hire</h4>
              <p className="text-muted-foreground">Invite top candidates to interview. Partners with high engagement points receive priority invites.</p>
            </Card>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Benefits for Businesses</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Access pre-vetted legal talent for internships and hires</li>
            <li>Improve CSR by sponsoring meaningful legal aid</li>
            <li>Get detailed performance reports and recruitment scoring</li>
            <li>Priority invites to recruitment events when your partner score is high</li>
          </ul>
        </section>

        <section className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to partner?</h3>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="inline-block">
              <Button className="px-6 py-3 bg-accent text-primary-foreground">Contact Sales</Button>
            </Link>
            <Link to="/professionals" className="inline-block">
              <Button variant="outline" className="px-6 py-3">See Candidates</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;
