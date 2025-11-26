import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import AppShowcase from './components/AppShowcase';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
        <AppShowcase />
        <AboutUs />
        <Testimonials />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
