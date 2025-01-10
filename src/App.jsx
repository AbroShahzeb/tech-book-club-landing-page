import { FeatureSectionOne } from "./components/FeatureSectionOne";
import { FeatureSectionTwo } from "./components/FeatureSectionTwo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PricingSection } from "./components/PricingSection";
import { ReadingJourneySection } from "./components/ReadingJourneySection";
import { ReviewSection } from "./components/ReviewSection";

function App() {
  return (
    <main>
      <Header />
      <FeatureSectionOne />
      <FeatureSectionTwo />
      <ReadingJourneySection />
      <PricingSection />
      <ReviewSection />
      <Footer />
    </main>
  );
}

export default App;
