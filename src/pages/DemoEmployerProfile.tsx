import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  id: string;
  title: string;
  status: "finished" | "incomplete" | "ongoing";
  points?: number;
  due?: string;
};

const mockEmployer = {
  name: "Acme Legal Services",
  totalPoints: 1240,
  openProjects: [
    { id: "p1", title: "Due diligence for client A", status: "ongoing", points: 120, due: "2025-10-01" },
    { id: "p2", title: "Contract review - supplier B", status: "incomplete", points: 40, due: "2025-10-10" }
  ] as Project[],
  previousCases: [
    { id: "s1", title: "Regulatory compliance audit", status: "finished", points: 300 },
    { id: "s2", title: "IP dispute resolution", status: "finished", points: 200 }
  ] as Project[],
  interestedCompanies: ["Green Foods Ltd", "Harbor Logistics", "Bright Retail"]
};

const statusLabel = (status: Project["status"]) => {
  if (status === "finished") return <span className="text-green-600">✅</span>;
  if (status === "ongoing") return <span className="text-yellow-600">⏳</span>;
  return <span className="text-red-600">❗</span>;
};

const DemoEmployerProfile = () => {
  return (
    <div className="min-h-screen bg-muted-foreground/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">{mockEmployer.name}</h1>
            <div className="text-muted-foreground">Total Points: <span className="font-semibold">{mockEmployer.totalPoints}</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Open Projects & Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockEmployer.openProjects.map((p) => (
                    <li key={p.id} className="flex items-center justify-between bg-white border rounded p-3">
                      <div>
                        <div className="font-medium">{p.title}</div>
                        <div className="text-sm text-muted-foreground">Due {p.due}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div>{statusLabel(p.status)}</div>
                        <div className="text-sm text-muted-foreground">{p.points ?? "—"} pts</div>
                        {p.status === "incomplete" && (
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-destructive text-destructive-foreground">
                            to finish
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Previous Solved Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockEmployer.previousCases.map((c) => (
                    <li key={c.id} className="flex items-center justify-between bg-white border rounded p-3">
                      <div>
                        <div className="font-medium">{c.title}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-green-600">✅</span>
                        <div className="text-sm font-semibold">{c.points} pts</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <aside>
            <Card>
              <CardHeader>
                <CardTitle>Interested Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockEmployer.interestedCompanies.map((name) => (
                    <li key={name} className="flex items-center justify-between p-2">
                      <div>{name}</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                          interested
                        </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DemoEmployerProfile;
