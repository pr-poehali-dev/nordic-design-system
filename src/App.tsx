
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
import Partnerships from "./pages/Partnerships";
import Sync from "./pages/Sync";
import AlbumEP from "./pages/AlbumEP";
import Distribution from "./pages/Distribution";
import CareerManagement from "./pages/CareerManagement";
import BeatMarket from "./pages/BeatMarket";
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
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/sync" element={<Sync />} />
          <Route path="/album-ep" element={<AlbumEP />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/career-management" element={<CareerManagement />} />
          <Route path="/beat-market" element={<BeatMarket />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;