import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetLegalHelp from "./pages/GetLegalHelp";
import PersonalDetails from "./pages/PersonalDetails";
import ForUsers from "./pages/ForUsers";
import NotFound from "./pages/NotFound";
import Professionals from "./pages/Professionals";
import Partners from "./pages/Partners";
import PartnersSignup from "./pages/PartnersSignup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-legal-help" element={<GetLegalHelp />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/signup" element={<PartnersSignup />} />
          <Route path="/for-users" element={<ForUsers />} />
          <Route path="/get-legal-help/personal-details" element={<PersonalDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
