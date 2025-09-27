import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const roles = [
  "Law students",
  "Psychologists",
  "Journalists",
  "Data analysts",
  "Software engineers",
  "Accountants",
  "Marketing specialists",
  "Project managers",
  "HR specialists",
  "Other",
];

const hiringTypes = ["Intern", "Full-time", "Part-time", "Leadership", "Contract"];
const hiringRanges = ["1-10", "10-50", "50+"];

const evaluatePackage = (answers: { roles: string[]; type: string | null; range: string | null }) => {
  // Basic scoring heuristics: more roles & bigger range -> higher tier
  const roleScore = answers.roles.length;
  const rangeScore = answers.range === "50+" ? 3 : answers.range === "10-50" ? 2 : 1;
  const typeScore = answers.type === "Full-time" || answers.type === "Leadership" ? 2 : 1;
  const total = roleScore * 1 + rangeScore * 2 + typeScore * 2;

  if (total >= 10) return "Pro Pack ($119/month)";
  if (total >= 6) return "Growth Pack ($29/2 weeks)";
  return "Starter Trial (7 days free)";
};

const PartnersSignup: React.FC = () => {
  const [step, setStep] = React.useState(0 as any);
  const [selectedRoles, setSelectedRoles] = React.useState([] as any[]);
  const [selectedType, setSelectedType] = React.useState(null as any);
  const [selectedRange, setSelectedRange] = React.useState(null as any);
  const navigate = useNavigate();

  const toggleRole = (r: string) => {
    setSelectedRoles((prev) => (prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]));
  };

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const finish = () => {
    const result = evaluatePackage({ roles: selectedRoles, type: selectedType, range: selectedRange });
    // In a real app we'd send to the backend; here we route to a confirmation page with query param
    navigate(`/partners/confirmation?package=${encodeURIComponent(result)}`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-6">Become a Member — Business Sign-up</h1>
        <p className="text-muted-foreground mb-6">Quick survey to recommend the membership package that fits your hiring needs.</p>

        <Card className="p-6 max-w-3xl mx-auto">
          {step === 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">1. What kind of hiring are you looking for? (select all that apply)</h2>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <button
                    key={r}
                    className={`text-left p-3 border rounded-md ${selectedRoles.includes(r) ? "bg-accent text-primary-foreground" : "bg-white"}`}
                    onClick={() => toggleRole(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">2. What kind of hiring?</h2>
              <div className="flex flex-col gap-2">
                {hiringTypes.map((t) => (
                  <label key={t} className={`p-3 border rounded-md ${selectedType === t ? "bg-accent text-primary-foreground" : "bg-white"}`}>
                    <input type="radio" name="type" value={t} checked={selectedType === t} onChange={() => setSelectedType(t)} className="mr-2" />
                    {t}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">3. How many hires do you expect during the membership term?</h2>
              <div className="flex flex-col gap-2">
                {hiringRanges.map((r) => (
                  <label key={r} className={`p-3 border rounded-md ${selectedRange === r ? "bg-accent text-primary-foreground" : "bg-white"}`}>
                    <input type="radio" name="range" value={r} checked={selectedRange === r} onChange={() => setSelectedRange(r)} className="mr-2" />
                    {r}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Recommended Package</h2>
              <div className="mb-4">We recommend: <strong>{evaluatePackage({ roles: selectedRoles, type: selectedType, range: selectedRange })}</strong></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <h4 className="font-semibold">Starter Trial</h4>
                  <div className="text-sm text-muted-foreground">7-day free trial</div>
                  <div className="mt-3">Limited access</div>
                  <Button className="mt-4">Start Trial</Button>
                </Card>

                <Card className="p-4 text-center">
                  <h4 className="font-semibold">Growth Pack</h4>
                  <div className="text-sm text-muted-foreground">$29 / 2 weeks</div>
                  <div className="mt-3">Limit access to selected roles</div>
                  <Button className="mt-4">Purchase</Button>
                </Card>

                <Card className="p-4 text-center">
                  <h4 className="font-semibold">Pro Pack</h4>
                  <div className="text-sm text-muted-foreground">$119 / month</div>
                  <div className="mt-3">Full access to all workers</div>
                  <Button className="mt-4">Purchase</Button>
                </Card>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <div>
              {step > 0 && (
                <Button variant="outline" onClick={prev}>Back</Button>
              )}
            </div>
            <div>
              {step < 3 ? (
                <Button onClick={next} className="ml-2">Next</Button>
              ) : (
                <Button onClick={finish} className="ml-2">Finish & Get Package</Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PartnersSignup;
