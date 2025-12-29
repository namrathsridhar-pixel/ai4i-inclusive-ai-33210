import HeroSection from "@/components/home/HeroSection";
import BuildingBlocksSection from "@/components/home/BuildingBlocksSection";
import CapabilitiesStrip from "@/components/home/CapabilitiesStrip";
import GetStartedSection from "@/components/home/GetStartedSection";
import TrustFooter from "@/components/home/TrustFooter";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Clear value proposition */}
      <HeroSection />

      {/* Capabilities Strip - Quick trust signals */}
      <CapabilitiesStrip />

      {/* Building Blocks - Core offering */}
      <BuildingBlocksSection />

      {/* Get Started - Clear paths to adoption */}
      <GetStartedSection />

      {/* Trust & CTA Footer */}
      <TrustFooter />
    </div>
  );
};

export default Home;
