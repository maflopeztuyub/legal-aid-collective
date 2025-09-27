import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetLegalHelp from "./pages/GetLegalHelp";
<<<<<<< HEAD
import GetLegalHelpWrapper from "./pages/GetLegalHelpWrapper";
import SubmitCase from "./pages/SubmitCase";
import PersonalDetails from "./pages/PersonalDetails";
=======
>>>>>>> cc23cf66af5e7ec4fc7c9b235ab050ceadf32671
import NotFound from "./pages/NotFound";
import Professionals from "./pages/Professionals";

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
<<<<<<< HEAD
          <Route path="/get-legal-help/apply" element={<ApplyForm />} />
          <Route path="/get-legal-help/personal-details" element={<PersonalDetails />} />
          <Route path="/submit-case" element={<SubmitCase />} />
=======
>>>>>>> cc23cf66af5e7ec4fc7c9b235ab050ceadf32671
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
