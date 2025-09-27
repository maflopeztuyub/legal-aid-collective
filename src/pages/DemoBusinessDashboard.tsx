// @ts-nocheck
import React from "react";
// Import components and cast to any to avoid strict prop typing issues here
// Local placeholder components used when the original components are not present in the project.
// These keep the dashboard functional and visually close to the intended layout.
const CompanyHeader: React.FC = () => (
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <div>
      <h1 className="text-2xl font-bold">Cedar AI Chat Bot</h1>
      <p className="text-sm text-muted-foreground max-w-3xl">
        An AI copilot embedded into any app — tell it what your goals are and get a step-by-step solution. Cedar is on a mission to turn every user into a power user by offering clear, actionable guidance and automations that accelerate outcomes.
      </p>
    </div>
  </div>
);

const ProfessionalCard: React.FC<{ professional: any }> = ({ professional }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <div className="font-semibold">{professional.name}</div>
    <div className="text-sm text-muted-foreground">{professional.role} • {professional.location}</div>
  </div>
);

const InterviewInvitation: React.FC<{ invitation: any }> = ({ invitation }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
    <div>
      <div className="font-medium">{invitation.candidateName}</div>
      <div className="text-sm text-muted-foreground">{invitation.position} — {invitation.scheduledDate} at {invitation.scheduledTime}</div>
    </div>
    <div className="text-sm px-3 py-1 rounded bg-gray-100">{invitation.status}</div>
  </div>
);

const PublicCompanyInfo: React.FC = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="font-semibold text-lg">Public Company Info</h3>
    <p className="text-sm text-muted-foreground">This section contains public-facing company information.</p>
  </div>
);

import { Card as CardComp, CardContent as CardContentComp, CardHeader as CardHeaderComp, CardTitle as CardTitleComp } from "@/components/ui/card";
import { Users, TrendingUp, Clock } from "lucide-react";

const Card: any = CardComp as any;
const CardContent: any = CardContentComp as any;
const CardHeader: any = CardHeaderComp as any;
const CardTitle: any = CardTitleComp as any;

type Professional = {
  id: string;
  name: string;
  role: string;
  location: string;
  experience: string;
  skills: string[];
  rating: number;
  email: string;
  phone: string;
  status: "selected";
};

type Interview = {
  id: string;
  candidateName: string;
  position: string;
  scheduledDate: string;
  scheduledTime: string;
  status: "accepted" | "pending" | "completed" | "declined";
  interviewType: string;
  notes?: string;
};

const professionals: Professional[] = [
  { id: "p1", name: "Sarah Johnson", role: "Frontend Developer", location: "Nairobi", experience: "2 years", skills: ["React", "TS"], rating: 4.7, email: "sarah@example.com", phone: "+2547001", status: "selected" },
  { id: "p2", name: "Michael Chen", role: "Full Stack", location: "Accra", experience: "3 years", skills: ["Node", "React"], rating: 4.8, email: "michael@example.com", phone: "+2335002", status: "selected" },
  { id: "p3", name: "Emily Rodriguez", role: "DevOps", location: "Kampala", experience: "4 years", skills: ["Docker", "K8s"], rating: 4.6, email: "emily@example.com", phone: "+2567003", status: "selected" },
  { id: "p4", name: "David Kim", role: "UI/UX", location: "Lagos", experience: "2.5 years", skills: ["Figma"], rating: 4.5, email: "david@example.com", phone: "+2348004", status: "selected" },
];

const interviews: Interview[] = [
  { id: "i1", candidateName: "Sarah Johnson", position: "Frontend", scheduledDate: "2025-10-01", scheduledTime: "10:00 AM", status: "accepted", interviewType: "technical", notes: "Focus on React" },
  { id: "i2", candidateName: "Michael Chen", position: "Full Stack", scheduledDate: "2025-10-03", scheduledTime: "2:00 PM", status: "pending", interviewType: "behavioral" },
  { id: "i3", candidateName: "Emily Rodriguez", position: "DevOps", scheduledDate: "2025-09-28", scheduledTime: "11:00 AM", status: "completed", interviewType: "technical" },
  { id: "i4", candidateName: "David Kim", position: "UI/UX", scheduledDate: "2025-10-05", scheduledTime: "9:00 AM", status: "declined", interviewType: "portfolio" },
];

const DemoBusinessDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-muted-foreground/5">
      <CompanyHeader />
      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="rounded-lg shadow p-4">
            <CardHeader className="flex items-center gap-3">
              <Users className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-sm">Total selected professionals</CardTitle>
                <div className="text-xl font-bold">{professionals.length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Currently in your talent pool</p>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow p-4">
            <CardHeader className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-sm">Total interviews scheduled</CardTitle>
                <div className="text-xl font-bold">{interviews.length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Upcoming and past</p>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow p-4">
            <CardHeader className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-sm">Confirmed interviews</CardTitle>
                <div className="text-xl font-bold">{interviews.filter(i => i.status === 'accepted').length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Accepted by candidates</p>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow p-4">
            <CardHeader className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-sm">Pending responses</CardTitle>
                <div className="text-xl font-bold">{interviews.filter(i => i.status === 'pending').length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
            </CardContent>
          </Card>
        </div>

        {/* Selected Professionals */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selected Professionals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionals.map(p => (
                <div key={p.id} className="w-full">
                  {/* Render ProfessionalCard; cast to any to avoid strict prop mismatch */}
                  <ProfessionalCard professional={p} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interview Invitations */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Interview Invitations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {interviews.map(inv => (
                <div key={inv.id}>
                  <InterviewInvitation invitation={inv} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Public company info */}
        <div className="mt-8">
          <PublicCompanyInfo />
        </div>
      </div>
    </div>
  );
};

export default DemoBusinessDashboard;
