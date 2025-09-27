// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

// Minimal data shape for a professional
export type Professional = {
  id: string;
  name: string;
  gradeScore: number; // 0-100
  yearsStudying: number;
  yearsExperience: number;
  yearsOnLawTie: number;
  starScore: number; // 0-5
  cv: string; // short CV summary
  cases: Array<{ title: string; description: string; year: number }>;
};

const mockProfessionals: Professional[] = [
  {
    id: "1",
    name: "Dr. Maria Rossi",
    gradeScore: 92,
    yearsStudying: 5,
    yearsExperience: 12,
    yearsOnLawTie: 4,
    starScore: 4.9,
    cv: "Specialist in civil law, mediation, and tenant rights. Published articles on consumer protection.",
    cases: [
      { title: "Tenant Dispute - Rome", description: "Successfully mediated a tenant-landlord dispute resulting in a favorable settlement.", year: 2024 },
      { title: "Consumer Protection Claim", description: "Represented multiple clients in product liability claims.", year: 2022 },
    ],
  },
  {
    id: "2",
    name: "Avv. Luca Bianchi",
    gradeScore: 88,
    yearsStudying: 4,
    yearsExperience: 7,
    yearsOnLawTie: 2,
    starScore: 4.5,
    cv: "Focused on corporate compliance, contracts and startup advisory.",
    cases: [
      { title: "Startup Equity Dispute", description: "Advised founders and negotiated an equity agreement.", year: 2023 },
    ],
  },
  {
    id: "3",
    name: "Avv. Elena Verdi",
    gradeScore: 95,
    yearsStudying: 6,
    yearsExperience: 18,
    yearsOnLawTie: 6,
    starScore: 4.95,
    cv: "Leader in immigration and human rights cases with extensive international experience.",
    cases: [
      { title: "Asylum Appeal", description: "Won complex asylum appeal based on new evidence.", year: 2021 },
    ],
  },
  {
    id: "4",
    name: "Avv. Marco Neri",
    gradeScore: 84,
    yearsStudying: 4,
    yearsExperience: 9,
    yearsOnLawTie: 3,
    starScore: 4.2,
    cv: "Employment law specialist focused on wrongful dismissal and workplace discrimination.",
    cases: [
      { title: "Dismissal Appeal", description: "Obtained settlement for client following unfair dismissal.", year: 2022 },
    ],
  },
  {
    id: "5",
    name: "Avv. Sofia Romano",
    gradeScore: 90,
    yearsStudying: 5,
    yearsExperience: 10,
    yearsOnLawTie: 5,
    starScore: 4.8,
    cv: "Family law and custody specialist, experienced in mediation and litigation.",
    cases: [
      { title: "Custody Arrangement", description: "Secured a favorable custody arrangement through mediation.", year: 2024 },
    ],
  },
  {
    id: "6",
    name: "Avv. Pietro Russo",
    gradeScore: 86,
    yearsStudying: 4,
    yearsExperience: 6,
    yearsOnLawTie: 1,
    starScore: 4.3,
    cv: "Housing and tenant rights advocate, active in local legal aid clinics.",
    cases: [
      { title: "Eviction Defense", description: "Represented tenants in eviction defense resulting in stay of eviction.", year: 2023 },
    ],
  },
];

const AvatarVector: React.FC<{ name: string }> = ({ name }) => {
  // Simple initial-based circle avatar with subtle vector lines
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={`g-${initials}`} x1="0" x2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="84" height="84" rx="12" fill={`url(#g-${initials})`} />
      <g transform="translate(0,0)">
        <circle cx="42" cy="30" r="16" fill="rgba(255,255,255,0.95)" />
        <rect x="24" y="54" width="36" height="10" rx="5" fill="rgba(255,255,255,0.92)" />
        <text x="42" y="36" textAnchor="middle" fontSize="14" fontWeight={700} fill="#0f172a">{initials}</text>
      </g>
    </svg>
  );
};

const HeroDecor: React.FC = () => (
  <div className="mb-8">
    <svg viewBox="0 0 1200 120" className="w-full" preserveAspectRatio="none" style={{ height: 72 }} aria-hidden>
      <path d="M0,0 C300,80 900,0 1200,60 L1200,120 L0,120 Z" fill="#eef2ff" />
    </svg>
  </div>
);

const ProfessionalsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
  <style>{"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');"}</style>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', letterSpacing: '-0.02em' }}>Professionals</h1>
            <p className="text-muted-foreground mt-2 max-w-xl">Browse our curated list of lawyers and legal specialists. Each profile shows grade and star score, a short CV summary, years of experience and representative cases.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/professionals/create" className="inline-block">
              <Button size="sm" className="flex items-center gap-2 px-3 py-2 bg-accent text-primary-foreground">
                <Plus className="h-4 w-4" />
                Make my own
              </Button>
            </Link>
            <Link to="/" className="text-sm text-primary underline">
              Back to home
            </Link>
          </div>
        </div>

        <HeroDecor />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfessionals.map((p) => (
            <Card key={p.id} className="p-4 flex gap-4 items-start">
              <div className="shrink-0">
                <AvatarVector name={p.name} />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold" style={{ fontFamily: 'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', letterSpacing: '-0.01em' }}>{p.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{p.cv}</p>

                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <strong>Grade score:</strong> {p.gradeScore}
                  </div>
                  <div>
                    <strong>Star score:</strong> {p.starScore}
                  </div>
                  <div>
                    <strong>Years studying:</strong> {p.yearsStudying}
                  </div>
                  <div>
                    <strong>Years experience:</strong> {p.yearsExperience}
                  </div>
                  <div>
                    <strong>Years on LawTie:</strong> {p.yearsOnLawTie}
                  </div>
                </div>

                <div className="mt-4">
                  <strong>Representative cases:</strong>
                  <ul className="list-disc ml-5 mt-2 text-sm">
                    {p.cases.map((c, idx) => (
                      <li key={idx}>
                        <div className="font-semibold">{c.title} ({c.year})</div>
                        <div className="text-muted-foreground text-sm">{c.description}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex gap-2">
                  <Link to="/partners/signup" className="inline-block">
                    <Button className="px-4 py-2">Interested</Button>
                  </Link>
                  <Link to="/partners/signup" className="inline-block">
                    <Button variant="outline" className="px-4 py-2">Not interested</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsPage;
