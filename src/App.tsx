import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetLegalHelp from "./pages/GetLegalHelp";
import GetLegalHelpWrapper from "./pages/GetLegalHelpWrapper";
import SubmitCase from "./pages/SubmitCase";
import NotFound from "./pages/NotFound";
import Professionals from "./pages/Professionals";
import ApplyForm from "./pages/ApplyForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-legal-help" element={<GetLegalHelpWrapper />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/get-legal-help/apply" element={<ApplyForm />} />
          <Route path="/submit-case" element={<SubmitCase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
