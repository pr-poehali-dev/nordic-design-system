import {
  InteractiveBackground,
  Header,
  HeroSection,
  LicenseSection,
  GhostProductionSection,
  AboutSection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen text-white relative bg-black">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <LicenseSection />
          <GhostProductionSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;