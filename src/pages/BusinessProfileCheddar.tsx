import React, { useState, useEffect } from "react";

type Professional = {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  ranking?: number;
  experience?: string;
  skills?: string[];
  image?: string;
};

const professionalsSample: Professional[] = [
  {
    id: "sarah-j",
    name: "Sarah Johnson",
    title: "PhD candidate — AI Ethics",
    subtitle: "AI Ethics researcher",
    ranking: 3,
    experience: "5 years (research & publications)",
    skills: ["AI Ethics", "NLP", "Research"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60",
  },
  {
    id: "david-k",
    name: "David Kim",
    title: "Data Analyst",
    subtitle: "3 years experience",
    ranking: 12,
    experience: "3 years (analytics)",
    skills: ["SQL", "Python", "Visualization"],
    image: "https://images.unsplash.com/photo-1545996124-1b2f3c6a1f71?w=800&q=60",
  },
  {
    id: "maria-l",
    name: "Maria Lopez",
    title: "Software Engineer",
    subtitle: "Now at Cheddar (full-time)",
    ranking: 1,
    experience: "4 years (frontend/backend)",
    skills: ["React", "Node.js", "Testing"],
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=60",
  },
];

const CompanyLogoPlaceholder = "https://via.placeholder.com/120x120.png?text=Cheddar";

const CandidateCard: React.FC<{ p: Professional }> = ({ p }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-200">
      <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{p.name}</h3>
        <p className="text-sm text-muted-foreground">{p.title}</p>
      </div>

      {/* Hover overlay with details */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-start p-4 text-white transition-opacity duration-200">
        <div className="mb-2">
          <div className="text-sm">Ranking: <span className="font-semibold">#{p.ranking ?? "—"}</span></div>
          <div className="text-sm">Experience: <span className="font-semibold">{p.experience}</span></div>
        </div>
        <div>
          <div className="text-sm font-medium mb-1">Skills</div>
          <div className="flex flex-wrap gap-2">
            {p.skills?.map((s) => (
              <span key={s} className="text-xs bg-white/20 px-2 py-1 rounded">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SimpleCarousel: React.FC<{ items: Professional[] }> = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p, i) => (
          <div key={p.id} className={`${i === index ? "opacity-100 scale-100" : "opacity-60 scale-95"} transition-all duration-300`}> 
            <CandidateCard p={p} />
          </div>
        ))}
      </div>

      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-primary" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProgressBar: React.FC<{ label: string; value: number; max?: number }> = ({ label, value, max = 100 }) => {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <div className="text-sm">{label}</div>
        <div className="text-sm font-semibold">{value}{max !== 1 ? ` / ${max}` : ""}</div>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
        <div className="bg-accent h-3 rounded transition-all duration-600" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const BusinessProfileCheddar: React.FC = () => {
  // sample state/data
  const [highlighted] = useState<Professional[]>(professionalsSample);
  const activity = [
    "Cheddar marked Sarah Johnson (PhD in AI Ethics) as Interested.",
    "Cheddar invited David Kim (Data Analyst) to an interview.",
    "Cheddar is currently sponsoring 2 ongoing legal cases.",
  ];

  const metrics = {
    hiringImpact: 4,
    considered: 15,
    interviews: 5,
    hires: 4,
    casesReviewed: 24,
    interviewsCompleted: 5,
  };

  const notifications = [
    "3 new applicants for Data Analyst",
    "Interview scheduled with David Kim — Sept 30",
    "New message from Sarah Johnson",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          <img src={CompanyLogoPlaceholder} alt="Cheddar logo" className="w-28 h-28 rounded-md object-cover" />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Cheddar</h1>
            <p className="text-sm text-muted-foreground">AI-powered chat for the future</p>
            <div className="mt-3 text-sm text-muted-foreground">
              <div><strong>Industry:</strong> Artificial Intelligence, SaaS</div>
              <div className="mt-2 max-w-2xl">Cheddar is an AI-driven chat platform that powers smarter communication between businesses and users.</div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button className="px-4 py-2 bg-primary text-white rounded-md">Contact</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <ul className="space-y-3">
                {activity.map((a, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-medium">{a.split(" ")[0]}</span>
                    <span className="text-muted-foreground ml-2">{a.replace(a.split(" ")[0], "").trim()}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Talent Management */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Talent Management</h2>
                <div className="text-sm text-muted-foreground">Saved professionals · Interviews · Past hires</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Saved Professionals</h3>
                  <CandidateCard p={professionalsSample[0]} />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Interview Invitations</h3>
                  <div className="bg-white rounded-md p-4 border">
                    <div className="flex items-center gap-3">
                      <img src={professionalsSample[1].image} alt={professionalsSample[1].name} className="w-12 h-12 rounded object-cover" />
                      <div>
                        <div className="font-medium">{professionalsSample[1].name}</div>
                        <div className="text-sm text-muted-foreground">{professionalsSample[1].title}</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button className="px-3 py-1 bg-primary text-white rounded mr-2">View profile</button>
                      <button className="px-3 py-1 border rounded">Message</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Past Hires</h3>
                <div className="bg-white rounded-md p-4 border">
                  <div className="flex items-center gap-3">
                    <img src={professionalsSample[2].image} alt={professionalsSample[2].name} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <div className="font-medium">{professionalsSample[2].name}</div>
                      <div className="text-sm text-muted-foreground">{professionalsSample[2].title} — now full-time at Cheddar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel for highlighted professionals */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Highlighted Professionals</h2>
                <div className="text-sm text-muted-foreground">Top picks by Cheddar</div>
              </div>
              <SimpleCarousel items={highlighted} />
            </div>
          </div>

          {/* Right column */}
          <aside className="space-y-6">
            {/* Recruitment Metrics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recruitment Metrics</h3>
              <div className="space-y-3">
                <div className="text-sm">Hiring Impact Score: <span className="font-bold">{metrics.hiringImpact} hires this semester</span></div>
                <div className="text-sm">Semester report: {metrics.considered} professionals considered · {metrics.interviews} interviews · {metrics.hires} hires</div>
                <div className="mt-4 space-y-3">
                  <ProgressBar label="Cases reviewed" value={metrics.casesReviewed} max={30} />
                  <ProgressBar label="Interviews completed" value={metrics.interviewsCompleted} max={10} />
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Notifications</h3>
              <ul className="space-y-2 text-sm">
                {notifications.map((n, i) => (
                  <li key={i} className="p-2 bg-gray-50 rounded">{n}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileCheddar;
