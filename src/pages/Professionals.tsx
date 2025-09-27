import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

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
    yearsExperience: 8,
    yearsOnLawTie: 2,
    starScore: 4.7,
    cv: "Specialist in civil law, mediation, and tenant rights. Published articles on consumer protection.",
    cases: [
      { title: "Tenant Dispute - Rome", description: "Successfully mediated a tenant-landlord dispute resulting in a favorable settlement.", year: 2024 },
      { title: "Consumer Protection Claim", description: "Represented multiple clients in product liability claims.", year: 2023 },
    ],
  },
  {
    id: "2",
    name: "Avv. Luca Bianchi",
    gradeScore: 88,
    yearsStudying: 4,
    yearsExperience: 5,
    yearsOnLawTie: 1,
    starScore: 4.4,
    cv: "Focused on corporate compliance and startup advisory. Experienced with contracts and intellectual property.",
    cases: [
      { title: "Startup Equity Dispute", description: "Advised founders and negotiated an equity agreement.", year: 2024 },
    ],
  },
];

const ProfessionalsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Professionals</h1>
          <Link to="/" className="text-sm text-primary underline">
            Back to home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockProfessionals.map((p) => (
            <Card key={p.id} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{p.name}</h2>
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
                    <strong>Cases carried on through LawTie:</strong>
                    <ul className="list-disc ml-5 mt-2 text-sm">
                      {p.cases.map((c, idx) => (
                        <li key={idx}>
                          <div className="font-semibold">{c.title} ({c.year})</div>
                          <div className="text-muted-foreground text-sm">{c.description}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
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
