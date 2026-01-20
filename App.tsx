import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { Services } from './pages/Services';
import { MarketStats } from './pages/MarketStats';
import { Evaluation } from './pages/Evaluation';
import { Newsletter } from './pages/Newsletter';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/market-stats" element={<MarketStats />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;