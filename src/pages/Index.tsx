import {
  InteractiveBackground,
  Header,
  HeroSection,
  LicenseSection,
  GhostProductionSection,
  AboutSection,
  DistributionSection,
  PitchingSection,
  FeaturesSection,
  Footer,
} from "@/components/landing";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen text-white relative bg-black">
      <SEO
        title="Музыкальный лейбл — Дистрибуция, Ghost Production, Питчинг"
        description="DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты. 100% роялти."
        canonical="/"
      />
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <GhostProductionSection />
          <AboutSection />
          <DistributionSection />
          <PitchingSection />
          <FeaturesSection />
          <LicenseSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;