import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveFeatures from './components/InteractiveFeatures';
import Offers from './components/Offers/Offers';
import Reviews from './components/Reviews/Reviews';
import InvestorSection from './components/InvestorSection';
import FAQ from './components/FAQ/FAQ';
import Support from './components/Support/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InteractiveFeatures />
      <Offers />
      <InvestorSection />
      <Reviews />
      <Support />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;