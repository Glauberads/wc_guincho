
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencySection } from './components/EmergencySection';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { CoverageArea } from './components/CoverageArea';
import { LocationCTA } from './components/LocationCTA';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { MiddleCTA } from './components/MiddleCTA';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SEO } from './components/SEO';

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <SEO />
      <Header />
      
      <main>
        {/* Only one H1 per page, which is inside Hero */}
        <Hero />
        <EmergencySection />
        <Services />
        <HowItWorks />
        <CoverageArea />
        <LocationCTA />
        <Benefits />
        <Gallery />
        <MiddleCTA />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
