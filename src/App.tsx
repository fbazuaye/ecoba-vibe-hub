import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Program from "./pages/Program";
import Candidates from "./pages/Candidates";
import Delegates from "./pages/Delegates";
import Register from "./pages/Register";
import Sponsors from "./pages/Sponsors";
import Livestream from "./pages/Livestream";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/program" element={<Program />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/delegates" element={<Delegates />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/livestream" element={<Livestream />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;