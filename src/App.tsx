import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
