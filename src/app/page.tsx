import { HeroSection } from "./components/HeroSection";
import {ServiceOverview} from "./components/ServiceOverview";
import {BusinessBenefits} from "./components/BusinessBenefits";
import {ProcessSection} from "./components/ProcessSection";
import {PricingSection} from "./components/PricingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceOverview />
      <BusinessBenefits />
      <ProcessSection />
      <PricingSection />
    </main>
  );
}
