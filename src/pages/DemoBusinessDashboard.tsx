import React from "react";
import CompanyHeader from "@/components/CompanyHeader";
import ProfessionalCard from "@/components/ProfessionalCard";
import InterviewInvitation from "@/components/InterviewInvitation";
import PublicCompanyInfo from "@/components/PublicCompanyInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, TrendingUp, Clock } from "lucide-react";

// TypeScript types for mock data
type ProfessionalStatus = "selected";

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
  status: ProfessionalStatus;
};

type InvitationStatus = "accepted" | "pending" | "completed" | "declined";

type Interview = {
  id: string;
  candidateName: string;
  position: string;
  scheduledDate: string; // ISO date
  scheduledTime: string; // simple time string
  status: InvitationStatus;
  interviewType: string;
  notes?: string;
};

// Mock data (no API calls)
const professionals: Professional[] = [
  {
    id: "p1",
    name: "Sarah Johnson",
    role: "Frontend Developer",
    location: "Nairobi, Kenya",
    experience: "2 years",
    skills: ["React", "TypeScript", "Tailwind"],
    rating: 4.7,
    email: "sarah.johnson@example.com",
    phone: "+254700000001",
    status: "selected",
  },
  {
    id: "p2",
    name: "Michael Chen",
    role: "Full Stack Developer",
    location: "Accra, Ghana",
    experience: "3 years",
    skills: ["Node.js", "React", "Postgres"],
    rating: 4.8,
    email: "michael.chen@example.com",
    phone: "+233500000002",
    status: "selected",
  },
  {
    id: "p3",
    name: "Emily Rodriguez",
    role: "DevOps Engineer",
    location: "Kampala, Uganda",
    experience: "4 years",
    skills: ["Docker", "Kubernetes", "CI/CD"],
    rating: 4.6,
    email: "emily.rodriguez@example.com",
    phone: "+256700000003",
    status: "selected",
  },
  {
    id: "p4",
    name: "David Kim",
    role: "UI/UX Designer",
    location: "Lagos, Nigeria",
    experience: "2.5 years",
    skills: ["Figma", "Design Systems", "Accessibility"],
    rating: 4.5,
    email: "david.kim@example.com",
    phone: "+234800000004",
    status: "selected",
  },
];

const interviews: Interview[] = [
  {
    id: "i1",
    candidateName: "Sarah Johnson",
    position: "Frontend Developer",
    scheduledDate: "2025-10-01",
    scheduledTime: "10:00 AM",
    status: "accepted",
    interviewType: "technical",
    notes: "Focus on React performance",
  },
  {
    id: "i2",
    candidateName: "Michael Chen",
    position: "Full Stack Developer",
    scheduledDate: "2025-10-03",
    scheduledTime: "2:00 PM",
    status: "pending",
    interviewType: "behavioral",
  },
  {
    id: "i3",
    candidateName: "Emily Rodriguez",
    position: "DevOps Engineer",
    scheduledDate: "2025-09-28",
    scheduledTime: "11:00 AM",
    status: "completed",
    interviewType: "technical",
  },
  {
    id: "i4",
    candidateName: "David Kim",
    position: "UI/UX Designer",
    scheduledDate: "2025-10-05",
    scheduledTime: "9:00 AM",
    status: "declined",
    interviewType: "portfolio",
  },
];

const DemoBusinessDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-muted-foreground/5">
      {/* 1. Company header */}
      <CompanyHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 2. Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="rounded-lg shadow-md p-4">
            <CardHeader className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-lg">Total selected professionals</CardTitle>
                <div className="text-2xl font-bold">{professionals.length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Currently in your talent pool</p>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow-md p-4">
            <CardHeader className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-lg">Total interviews scheduled</CardTitle>
                <div className="text-2xl font-bold">{interviews.length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Upcoming and past scheduled interviews</p>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow-md p-4">
            <CardHeader className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-lg">Confirmed interviews</CardTitle>
                <div className="text-2xl font-bold">{interviews.filter((i) => i.status === "accepted").length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Interviews accepted by candidates</p>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow-md p-4">
            <CardHeader className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-lg">Pending responses</CardTitle>
                <div className="text-2xl font-bold">{interviews.filter((i) => i.status === "pending").length}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Awaiting candidate confirmation</p>
            </CardContent>
          </Card>
        </div>

        {/* 3. Selected Professionals */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selected Professionals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {professionals.map((p) => (
                // Reuse ProfessionalCard component; ensure props match expected shape in your project
                <ProfessionalCard key={p.id} professional={p} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 4. Interview Invitations */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Interview Invitations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {interviews.map((inv) => (
                <InterviewInvitation key={inv.id} invitation={inv} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 5. Public company info */}
        <div className="mt-8">
          <PublicCompanyInfo />
        </div>
      </div>
    </div>
  );
};

export default DemoBusinessDashboard;
