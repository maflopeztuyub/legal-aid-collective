import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const employer = {
  name: "Acme Corp",
  totalPoints: 1280,
  openProjects: [
    { id: 1, title: "Contract Review", status: "unfinished", points: 120 },
    { id: 2, title: "IP Case", status: "ongoing", points: 200 },
    { id: 3, title: "Compliance Audit", status: "finished", points: 80 },
  ],
  previousCases: [
    { id: 1, title: "Employment Dispute", points: 150 },
    { id: 2, title: "Trademark Registration", points: 90 },
  ],
  interestedCompanies: ["Beta LLC", "Gamma Inc", "Delta Partners"],
};

const DemoEmployerProfile: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">{employer.name}</h1>
      <div className="mb-6 flex items-center gap-3">
        <span className="text-lg font-semibold">Total Points:</span>
        <Badge className="text-lg px-3 py-1 bg-primary text-white">{employer.totalPoints}</Badge>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-xl font-semibold">Open Projects & Cases</h2>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {employer.openProjects.map((p) => (
              <li key={p.id} className="flex justify-between items-center">
                <span>{p.title}</span>
                <span className={
                  p.status === "unfinished"
                    ? "text-red-500 font-semibold"
                    : p.status === "finished"
                    ? "text-green-600 font-semibold"
                    : "text-yellow-500 font-semibold"
                }>
                  {p.status === "unfinished" && "To Finish"}
                  {p.status === "finished" && "Finished"}
                  {p.status === "ongoing" && `Ongoing (~${p.points} pts)`}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-xl font-semibold">Previous Cases Solved</h2>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {employer.previousCases.map((c) => (
              <li key={c.id} className="flex justify-between items-center">
                <span>{c.title}</span>
                <span className="text-green-600 font-semibold">+{c.points} pts</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Interested Companies</h2>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-2">
            {employer.interestedCompanies.map((company, idx) => (
              <li key={idx}>
                <Badge className="bg-accent text-primary-foreground">{company}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoEmployerProfile;
