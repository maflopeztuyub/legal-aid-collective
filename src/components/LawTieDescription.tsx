import React from "react";
import { Users, Star, Shield, Headphones, Briefcase, Scroll } from "lucide-react";

export const LawTieDescription: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto p-8 text-gray-900">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Law-Tie: Bridging Ambition and Justice</h1>
        <p className="text-lg text-muted-foreground">
          <strong>Law-Tie</strong> connects people who need legal help with motivated student
          professionals and law-adjacent experts. We build reliable matches, mentorship and clear
          performance incentives so clients get committed help and students gain meaningful
          experience.
        </p>
      </header>

      <div className="border-t pt-8">
        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Users className="w-6 h-6 text-primary" />
          Who Can Join
        </h2>
        <p className="mb-4">Applicants are students (up to PhD level). Admission is selective and based on:</p>
        <ul className="space-y-3 mb-6">
        <p>Partners and Sponsors support the platform by choosing plans which also unlock candidate access.</p>
        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Star className="w-6 h-6 text-primary" />
          Feedback & Accountability
        </h2>
        <p className="mb-4">After every case both clients and students provide feedback that becomes part of the profile record.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Clients must complete a survey and rate the experience</span>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Students provide collaboration feedback</span>
          </li>
        </ul>

        <div className="border-t my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Briefcase className="w-6 h-6 text-primary" />
          Waitlist & Case Management
        </h2>
        <p className="mb-4">If a preferred professional is busy, clients can join a waitlist and receive updates.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Scroll className="w-5 h-5 text-accent mt-1" />
            <span>Estimated wait times are shown and regularly updated</span>
          </li>
          <li className="flex items-start gap-3">
            <Scroll className="w-5 h-5 text-accent mt-1" />
            <span>First appointments may be online; official meetings are in-person when required</span>
          </li>
        </ul>

        <div className="border-t my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Users className="w-6 h-6 text-primary" />
          Companies & Sponsorship
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Partners</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>7-day free trial</li>
              <li>Basic Business Plan</li>
              <li>Premium Business Plan (discounts for longer commitments)</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Sponsors</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Automatic Premium Plan access</li>
              <li>Top 50 candidate visibility</li>
              <li>Extra branding and advertising benefits</li>
            </ul>
          </div>
        </div>

        <div className="border-t my-10" />

        <div className="text-center py-6">
          <h3 className="text-2xl font-semibold mb-3">What are you waiting for?</h3>
          <p className="mb-4">Join Law-Tie and help build an accessible, accountable legal aid ecosystem.</p>
        </div>
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Academic record and grade scores</span>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Relevant previous experience</span>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>A strong and updated resume</span>
          </li>
        </ul>

        <div className="border-t my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Shield className="w-6 h-6 text-primary" />
          The Star Score System
        </h2>
        <p className="mb-4">Student teams earn a Star Score for each case which reflects:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-success mt-1" />
            <span>The outcome of the case (win or loss)</span>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-success mt-1" />
            <span>The difficulty and influence of the case</span>
          </li>
        </ul>
        <p className="mb-6">Higher scores increase visibility and access to sponsors and opportunities.</p>

        <div className="border-t my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Briefcase className="w-6 h-6 text-primary" />
          Professional Profiles & Sponsors
        </h2>
        <p className="mb-4">When creating profiles, students indicate interests and preferred sponsors.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Scroll className="w-5 h-5 text-accent mt-1" />
            <span>Choose legal/professional areas of interest</span>
          </li>
          <li className="flex items-start gap-3">
            <Scroll className="w-5 h-5 text-accent mt-1" />
            <span>Select sponsors to work with</span>
          </li>
        </ul>
        <p className="mb-6">Top performers are matched with sponsor interviews at semester end.</p>

        <div className="border-t my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Headphones className="w-6 h-6 text-primary" />
          Mentorship & Support
        </h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>First-case mentee: 1 month of free mentoring with a senior professional</span>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Ongoing paid mentoring and a free support channel run by experienced lawyers</span>
          </li>
        </ul>

        <div className="border-t my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
          <Users className="w-6 h-6 text-primary" />
          Benefits for Users (Clients)
        </h2>
        <p className="mb-4">Clients receive free service if eligible — with careful matching and transparency.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Detailed financial and personal information improves matches</span>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Cedar — a 24/7 AI chatbox — helps convert everyday language into legal terms</span>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-5 h-5 text-accent mt-1" />
            <span>Responses and pairings are handled within 48 business hours</span>
          </li>
        </ul>

        <div className="border-t my-8" />
      <p>Participants may include:</p>
      <ul className="list-disc list-inside">
        <li>Student lawyers</li>
        <li>
          Court-related professionals such as psychologists, social service assistants, journalists,
          environmental engineers, and others connected to the legal field.
        </li>
      </ul>
      <p>Businesses, which may register as:</p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Partners</strong>, selecting from different business plans (trial, basic, or
          premium)
        </li>
        <li>
          <strong>Sponsors</strong>, offering higher-level support in exchange for premium benefits
          and access to top-performing students.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Star Score System</h2>
      <p>
        Performance is tracked through a unique Star Score system. Each time a student team takes on
        a case, their score is updated to reflect:
      </p>
      <ul className="list-disc list-inside">
        <li>The outcome of the case (win or loss)</li>
        <li>The difficulty and influence of the case</li>
      </ul>
      <p>
        The Star Score is not just a measure of success; it highlights the quality of performance
        under different circumstances. Students with higher scores receive more visibility and
        recognition on the platform, making them more attractive to users and sponsors alike.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Professional Profiles and Sponsor Links</h2>
      <p>When creating their profiles, students must:</p>
      <ul className="list-disc list-inside">
        <li>Indicate their areas of legal and professional interest</li>
        <li>Select which sponsors they are particularly interested in working with</li>
      </ul>
      <p>
        At the end of every semester, Law-Tie generates a ranking of the Top 10 highest-scoring
        students for each sponsor. These students are guaranteed a final-round interview with the
        corresponding sponsor, ensuring a tangible career pathway.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Why Students Are More Dedicated than Traditional Pro Bono Lawyers
      </h2>
      <p>
        Law-Tie provides a fresh alternative to traditional pro bono services. Student professionals
        bring a unique combination of motivation and commitment:
      </p>
      <ul className="list-disc list-inside">
        <li>Eagerness for real-world legal experience</li>
        <li>A stronger personal connection with clients due to their younger age</li>
        <li>Ambition to build strong resumes for future careers</li>
        <li>The prospect of high-level job placements in law firms and businesses</li>
        <li>A transparent, objective record of accomplishments via the Star Score system</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Mentorship and Support</h2>
      <p>
        Recognizing that participants are still students, Law-Tie builds mentorship directly into the
        system:
      </p>
      <ul className="list-disc list-inside">
        <li>
          For their first case, every student receives one month of free private mentoring sessions
          with a senior professional. Meetings can be scheduled as often as necessary during this
          period.
        </li>
        <li>After this initial month, mentoring may continue but only as a paid service.</li>
        <li>
          A free, ongoing support channel is available, run by experienced lawyers in Law-Tie, where
          students can ask questions and seek guidance.
        </li>
      </ul>
      <p>
        This structure ensures that students are not only motivated but also properly supported as
        they grow.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Benefits for Users (Clients)</h2>
      <p>
        For clients, Law-Tie is a free service, provided they pass financial eligibility checks.
        Unlike other pro bono systems, however, Law-Tie emphasizes detailed case-matching, ensuring
        that users are paired with the professional most suited to their needs.
      </p>
      <p>To make this process smooth:</p>
      <ul className="list-disc list-inside">
        <li>Financial and personal situations must be described in detail for better matches.</li>
        <li>
          A 24/7 AI chatbox called Cedar helps transform everyday language into precise legal
          terminology, making it easier to match clients with the right professionals.
        </li>
        <li>
          All pairing requests must be answered within 48 business hours, ensuring efficiency and
          urgency.
        </li>
        <li>
          Each client builds a profile page, where all past cases are recorded alongside the
          professionals they worked with.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Feedback System</h2>
      <p>Transparency is key to Law-Tie. After each case:</p>
      <ul className="list-disc list-inside">
        <li>Clients must complete a survey and give feedback on the professional’s service.</li>
        <li>Students must also provide feedback about the collaboration.</li>
      </ul>
      <p>
        These reviews are linked to each profile, guiding future matches and ensuring accountability.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Waitlist and Case Management</h2>
      <p>If a client’s best-match professional is unavailable, they can join a waitlist.</p>
      <ul className="list-disc list-inside">
        <li>
          The waitlist shows an estimated waiting time, but this may change due to complications in
          ongoing cases.
        </li>
        <li>Clients are updated regularly and may choose to remain or proceed with the next match.</li>
      </ul>
      <p>Once a match is confirmed:</p>
      <ul className="list-disc list-inside">
        <li>
          A first appointment is organized between the client, the Law-Tie team, and the
          professionals collaborating on the case.
        </li>
        <li>
          This initial meeting may take place online if participants are in different locations.
        </li>
        <li>
          Official lawyer meetings are expected to take place in-person, depending on the case.
        </li>
      </ul>
      <p>
        Importantly, no case is initiated unless full coverage of the client’s needs is guaranteed,
        ensuring a reliable and fair system.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Companies and Sponsorships</h2>
      <p>Law-Tie collaborates with companies in two categories: Partners and Sponsors.</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Partners</h3>
      <p>Partners may choose between:</p>
      <ul className="list-disc list-inside">
        <li>A 7-day free trial plan</li>
        <li>A Basic Business Plan</li>
        <li>A Premium Business Plan</li>
      </ul>
      <p>
        All plans grant access to the Top 10 highest-scoring students interested in their firm.
        Premium plans primarily differ by offering discounted rates for longer commitments.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Sponsors</h3>
      <p>Sponsors receive enhanced benefits:</p>
      <ul className="list-disc list-inside">
        <li>Automatic inclusion in the Premium Plan</li>
        <li>Access to the Top 50 highest-scoring students</li>
        <li>Additional advertising and branding services provided by Law-Tie</li>
      </ul>
      <p>To qualify as a Sponsor, a company must provide at least $5,000 per year in sponsorship.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What are you waiting for?</h2>
      <p>
        Law-Tie represents a transformative step in legal assistance. By connecting clients with
        motivated student professionals, offering structured mentorship, and linking top-performing
        students to sponsors and companies, the platform creates a cycle of accessibility, dedication,
        and opportunity. Clients benefit from high-quality, free representation, students gain
        real-world experience and career prospects, and companies secure access to the most promising
        future legal talent.
      </p>
    </section>
  );
};

export default LawTieDescription;
