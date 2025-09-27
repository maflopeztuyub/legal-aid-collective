import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetLegalHelp from "./pages/GetLegalHelp";
import NotFound from "./pages/NotFound";
<<<<<<< Updated upstream
import HowItWorks from "./pages/HowItWorks";
import DemoBusinessDashboard from "./pages/DemoBusinessDashboard";
import DemoUserProfile from "./pages/DemoUserProfile";
import FinancesSponsors from "./pages/FinancesSponsors";
=======
import Professionals from "./pages/Professionals";
>>>>>>> Stashed changes

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
          <Route path="/professionals" element={<Professionals />} />
<<<<<<< Updated upstream
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/signup" element={<PartnersSignup />} />
          <Route path="/partners/confirmation" element={<PartnersConfirmation />} />
          <Route path="/how" element={<HowItWorksLanding />} />
          <Route path="/how/user" element={<HowItWorksUser />} />
          <Route path="/how/contributor" element={<HowItWorksContributor />} />
          <Route path="/how/business" element={<HowItWorksBusiness />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/for-users" element={<ForUsers />} />
          <Route path="/demo-business" element={<DemoBusinessDashboard />} />
          <Route path="/demo-user-profile" element={<DemoUserProfile />} />
          <Route path="/finances-sponsors" element={<FinancesSponsors />} />
          
          <Route path="/get-legal-help/personal-details" element={<PersonalDetails />} />
=======
=======
          <Route path="/get-legal-help" element={<GetLegalHelp />} />
>>>>>>> c4496b91ae655c1236c5e5fdef10f28f0d0f9575
>>>>>>> Stashed changes
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
