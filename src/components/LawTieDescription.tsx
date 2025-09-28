import React from "react";

const LawTieDescription = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 space-y-16">
      {/* Hero Section with Vector Graphics */}
      <div className="text-center relative">
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full opacity-10" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            <path d="M0,200 Q200,100 400,200 T800,200 L800,400 L0,400 Z" fill="url(#heroGradient)" />
            <circle cx="150" cy="150" r="3" fill="hsl(var(--primary))" opacity="0.6" />
            <circle cx="650" cy="180" r="2" fill="hsl(var(--accent))" opacity="0.8" />
            <circle cx="400" cy="120" r="4" fill="hsl(var(--primary))" opacity="0.4" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Law-Tie: Bridging Ambition and Justice</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-primary">Law-Tie</strong> is an innovative platform that connects individuals in need of legal
            assistance with ambitious student lawyers and law-related professionals. Traditionally,
            people with financial difficulties have had to rely on low-paid pro bono lawyers with limited
            incentives. Law-Tie changes this dynamic by offering them motivated students who are eager to
            gain experience, dedicated to their cases, and carefully selected according to high standards.
          </p>
        </div>
      </div>

      {/* Who Can Join Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Who Can Join</h2>
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-4">
                All professionals on Law-Tie must be students, no further along than the PhD level. Admission
                to the platform is selective and based on:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Academic record and grade scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Relevant previous experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">A strong and updated resume</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-foreground">Participants Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Student lawyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Court-related professionals such as psychologists, social service assistants, journalists, environmental engineers, and others connected to the legal field.</span>
                </li>
              </ul>
              
              <h3 className="font-semibold text-foreground pt-2">Business Registration:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong className="text-foreground">Partners</strong>, selecting from different business plans (trial, basic, or premium)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground"><strong className="text-foreground">Sponsors</strong>, offering higher-level support in exchange for premium benefits and access to top-performing students.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <svg className="w-full h-80" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="joinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" opacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--accent))" opacity="0.6" />
              </linearGradient>
            </defs>
            {/* Students illustration */}
            <circle cx="120" cy="80" r="25" fill="url(#joinGradient)" />
            <rect x="100" y="105" width="40" height="60" rx="5" fill="hsl(var(--muted))" />
            <circle cx="280" cy="80" r="25" fill="url(#joinGradient)" />
            <rect x="260" y="105" width="40" height="60" rx="5" fill="hsl(var(--muted))" />
            <circle cx="200" cy="140" r="25" fill="url(#joinGradient)" />
            <rect x="180" y="165" width="40" height="60" rx="5" fill="hsl(var(--muted))" />
            
            {/* Connection lines */}
            <path d="M145,120 Q200,80 255,120" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M120,140 Q160,100 200,140" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M220,165 Q250,140 280,165" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.6" />
            
            {/* Building/institution */}
            <rect x="150" y="240" width="100" height="50" rx="5" fill="hsl(var(--muted-foreground))" opacity="0.3" />
            <rect x="170" y="250" width="15" height="20" fill="hsl(var(--background))" />
            <rect x="190" y="250" width="15" height="20" fill="hsl(var(--background))" />
            <rect x="210" y="250" width="15" height="20" fill="hsl(var(--background))" />
          </svg>
        </div>
      </div>

      {/* Star Score System Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <svg className="w-full h-80" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
            {/* Large central star */}
            <path d="M200,50 L210,80 L240,80 L218,98 L228,128 L200,110 L172,128 L182,98 L160,80 L190,80 Z" 
                  fill="url(#starGradient)" opacity="0.9" />
            
            {/* Smaller stars around */}
            <path d="M100,100 L105,115 L120,115 L108,125 L113,140 L100,133 L87,140 L92,125 L80,115 L95,115 Z" 
                  fill="hsl(var(--primary))" opacity="0.7" />
            <path d="M300,120 L305,135 L320,135 L308,145 L313,160 L300,153 L287,160 L292,145 L280,135 L295,135 Z" 
                  fill="hsl(var(--accent))" opacity="0.7" />
            <path d="M150,200 L155,215 L170,215 L158,225 L163,240 L150,233 L137,240 L142,225 L130,215 L145,215 Z" 
                  fill="hsl(var(--primary))" opacity="0.6" />
            <path d="M250,180 L255,195 L270,195 L258,205 L263,220 L250,213 L237,220 L242,205 L230,195 L245,195 Z" 
                  fill="hsl(var(--accent))" opacity="0.6" />
            
            {/* Performance bars */}
            <rect x="50" y="250" width="60" height="8" rx="4" fill="hsl(var(--muted))" />
            <rect x="50" y="250" width="45" height="8" rx="4" fill="url(#starGradient)" />
            
            <rect x="150" y="260" width="60" height="8" rx="4" fill="hsl(var(--muted))" />
            <rect x="150" y="260" width="50" height="8" rx="4" fill="url(#starGradient)" />
            
            <rect x="250" y="270" width="60" height="8" rx="4" fill="hsl(var(--muted))" />
            <rect x="250" y="270" width="35" height="8" rx="4" fill="url(#starGradient)" />
          </svg>
        </div>
        
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">The Star Score System</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Performance is tracked through a unique Star Score system. Each time a student team takes on
              a case, their score is updated to reflect:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">The outcome of the case (win or loss)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <span className="text-muted-foreground">The difficulty and influence of the case</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-muted-foreground leading-relaxed">
                The Star Score is not just a measure of success; it highlights the quality of performance
                under different circumstances. Students with higher scores receive more visibility and
                recognition on the platform, making them more attractive to users and sponsors alike.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Profiles Section */}
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-semibold text-foreground">Professional Profiles and Sponsor Links</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-muted-foreground leading-relaxed">When creating their profiles, students must:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Indicate their areas of legal and professional interest</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Select which sponsors they are particularly interested in working with</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <p className="text-muted-foreground leading-relaxed">
                At the end of every semester, Law-Tie generates a ranking of the Top 10 highest-scoring
                students for each sponsor. These students are guaranteed a final-round interview with the
                corresponding sponsor, ensuring a tangible career pathway.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Students Section */}
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-semibold text-foreground">
          Why Students Are More Dedicated than Traditional Pro Bono Lawyers
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Law-Tie provides a fresh alternative to traditional pro bono services. Student professionals
          bring a unique combination of motivation and commitment:
        </p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {/* Motivation cards with icons */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M3 17L12 22L21 17" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M3 12L12 17L21 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Eagerness for real-world legal experience</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="hsl(var(--accent))" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">A stronger personal connection with clients</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H16L14 15H10L8 12H2" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.45 5.11L2 12V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V12L18.55 5.11C18.2094 4.42 17.5 4 16.73 4H7.27C6.5 4 5.79063 4.42 5.45 5.11Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Ambition to build strong resumes</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6L18 2H6Z" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9,9 9,15" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="15,9 15,15" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">High-level job placement prospects</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Transparent Star Score system</p>
          </div>
        </div>
      </div>

      {/* Mentorship Section */}
      <div className="bg-gradient-to-r from-background to-muted/20 p-8 rounded-xl">
        <h2 className="text-3xl font-semibold mb-6 text-foreground">Mentorship and Support</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Recognizing that participants are still students, Law-Tie builds mentorship directly into the
          system:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V22M17 5H9.5C7.29086 5 5.5 6.79086 5.5 9S7.29086 13 9.5 13H14.5C16.7091 13 18.5 14.7909 18.5 17S16.7091 21 14.5 21H6" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              For their first case, every student receives one month of free private mentoring sessions
              with a senior professional. Meetings can be scheduled as often as necessary during this
              period.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="hsl(var(--accent))" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">After this initial month, mentoring may continue but only as a paid service.</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              A free, ongoing support channel is available, run by experienced lawyers in Law-Tie, where
              students can ask questions and seek guidance.
            </p>
          </div>
        </div>
        <p className="text-muted-foreground mt-6 leading-relaxed italic">
          This structure ensures that students are not only motivated but also properly supported as
          they grow.
        </p>
      </div>

      {/* Benefits for Users Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-center text-foreground">Benefits for Users (Clients)</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              For clients, Law-Tie is a free service, provided they pass financial eligibility checks.
              Unlike other pro bono systems, however, Law-Tie emphasizes detailed case-matching, ensuring
              that users are paired with the professional most suited to their needs.
            </p>
            <h3 className="text-xl font-semibold text-foreground">To make this process smooth:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Financial and personal situations must be described in detail for better matches.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  A 24/7 AI chatbox called Cedar helps transform everyday language into precise legal
                  terminology, making it easier to match clients with the right professionals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  All pairing requests must be answered within 48 business hours, ensuring efficiency and
                  urgency.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  Each client builds a profile page, where all past cases are recorded alongside the
                  professionals they worked with.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <svg className="w-full h-80" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="clientGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" opacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" opacity="0.4" />
                </linearGradient>
              </defs>
              {/* Client matching illustration */}
              <circle cx="200" cy="160" r="60" fill="url(#clientGradient)" />
              <circle cx="120" cy="100" r="30" fill="hsl(var(--primary))" opacity="0.7" />
              <circle cx="280" cy="100" r="30" fill="hsl(var(--accent))" opacity="0.7" />
              <circle cx="120" cy="220" r="30" fill="hsl(var(--primary))" opacity="0.7" />
              <circle cx="280" cy="220" r="30" fill="hsl(var(--accent))" opacity="0.7" />
              
              {/* Connection lines */}
              <path d="M150,120 Q175,140 170,160" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              <path d="M250,120 Q225,140 230,160" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
              <path d="M150,200 Q175,180 170,160" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              <path d="M250,200 Q225,180 230,160" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
              
              {/* Cedar AI representation */}
              <rect x="180" y="280" width="40" height="30" rx="15" fill="hsl(var(--muted-foreground))" opacity="0.3" />
              <circle cx="190" cy="290" r="3" fill="hsl(var(--primary))" />
              <circle cx="200" cy="290" r="3" fill="hsl(var(--accent))" />
              <circle cx="210" cy="290" r="3" fill="hsl(var(--primary))" />
            </svg>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center space-y-8 relative">
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full opacity-5" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ctaGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="100" r="80" fill="url(#ctaGradient)" />
            <circle cx="600" cy="100" r="60" fill="hsl(var(--accent))" opacity="0.6" />
            <path d="M0,150 Q400,50 800,150 L800,200 L0,200 Z" fill="hsl(var(--primary))" opacity="0.3" />
          </svg>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What are you waiting for?</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Law-Tie represents a transformative step in legal assistance. By connecting clients with
            motivated student professionals, offering structured mentorship, and linking top-performing
            students to sponsors and companies, the platform creates a cycle of accessibility, dedication,
            and opportunity. Clients benefit from high-quality, free representation, students gain
            real-world experience and career prospects, and companies secure access to the most promising
            future legal talent.
          </p>
        </div>
        
        {/* Visual connection diagram */}
        <div className="flex justify-center items-center space-x-8 pt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="hsl(var(--primary))" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Clients</p>
          </div>
          
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 5L19 12L12 19" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10C3.10457 10 4 10.8954 4 12C4 13.1046 3.10457 14 2 14V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V14C20.8954 14 20 13.1046 20 12C20 10.8954 20.8954 10 22 10Z" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Students</p>
          </div>
          
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 5L19 12L12 19" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21H21L12 2L3 21Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 9V13" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 17H12.01" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawTieDescription;