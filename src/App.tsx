
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MixMastering from "./pages/MixMastering";
import Remixes from "./pages/Remixes";
import CustomTracks from "./pages/CustomTracks";
import Covers from "./pages/Covers";
import Promotion from "./pages/Promotion";
import ArtistBrand from "./pages/ArtistBrand";
import RadioMedia from "./pages/RadioMedia";
import Copyright from "./pages/Copyright";
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
          <Route path="/mix-mastering" element={<MixMastering />} />
          <Route path="/remixes" element={<Remixes />} />
          <Route path="/custom-tracks" element={<CustomTracks />} />
          <Route path="/covers" element={<Covers />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/artist-brand" element={<ArtistBrand />} />
          <Route path="/radio-media" element={<RadioMedia />} />
          <Route path="/copyright" element={<Copyright />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;