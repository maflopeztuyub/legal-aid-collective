import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Case = {
  id: string;
  title: string;
  submittedAt: string;
  status: "successful" | "running" | "pending";
};

const mockUser = {
  name: "Samuel Okoye",
  location: "Lagos, NG",
  cases: [
    { id: "c1", title: "Landlord dispute - unpaid rent", submittedAt: "2025-09-01", status: "successful" },
    { id: "c2", title: "Workplace discrimination claim", submittedAt: "2025-09-10", status: "running" },
    { id: "c3", title: "Debt recovery assistance", submittedAt: "2025-09-15", status: "running" },
    { id: "c4", title: "Consumer rights - faulty goods", submittedAt: "2025-08-20", status: "successful" }
  ] as Case[]
};

const statusIcon = (status: Case["status"]) => {
  if (status === "successful") return <span className="text-green-600">✅</span>;
  if (status === "running") return <span className="text-yellow-600">⏳</span>;
  return <span className="text-gray-500">•</span>;
};

const DemoUserProfile: React.FC = () => {
  const submittedCases = mockUser.cases;
  const successful = submittedCases.filter((c) => c.status === "successful");
  const running = submittedCases.filter((c) => c.status === "running");

  return (
    <div className="min-h-screen bg-muted-foreground/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">{mockUser.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{mockUser.location}</div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Overview of submitted cases and their status. This demo profile shows how cases submitted through the "Get Legal Help" flow appear here.</p>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">All Submitted Cases</h3>
                    <ul className="space-y-3">
                      {submittedCases.map((c) => (
                        <li key={c.id} className="flex items-center justify-between bg-white border rounded p-3">
                          <div>
                            <div className="font-medium">{c.title}</div>
                            <div className="text-sm text-muted-foreground">Submitted {c.submittedAt}</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div>{statusIcon(c.status)}</div>
                            <Badge variant={c.status === "successful" ? "outline" : "secondary"}>{c.status}</Badge>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Successful Cases</h3>
                    {successful.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No successful cases yet.</p>
                    ) : (
                      <ul className="space-y-3">
                        {successful.map((c) => (
                          <li key={c.id} className="flex items-center justify-between bg-white border rounded p-3">
                            <div>
                              <div className="font-medium">{c.title}</div>
                              <div className="text-sm text-muted-foreground">Submitted {c.submittedAt}</div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-green-600">✅</span>
                              <Badge variant="outline">successful</Badge>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Running Cases</h3>
                    {running.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No running cases right now.</p>
                    ) : (
                      <ul className="space-y-3">
                        {running.map((c) => (
                          <li key={c.id} className="flex items-center justify-between bg-white border rounded p-3">
                            <div>
                              <div className="font-medium">{c.title}</div>
                              <div className="text-sm text-muted-foreground">Submitted {c.submittedAt}</div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-yellow-600">⏳</span>
                              <Badge variant="secondary">running</Badge>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside>
            <Card>
              <CardHeader>
                <CardTitle>Contact & Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">samuel.okoye@example.com</div>
                </div>
                <div className="mb-3">
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+234 701 234 5678</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Member since</div>
                  <div className="font-medium">2024</div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DemoUserProfile;
