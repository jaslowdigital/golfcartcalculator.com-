import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BuyingGuide from './pages/BuyingGuide';
import SellingTips from './pages/SellingTips';
import MarketTrends from './pages/MarketTrends';

// Handle GitHub Pages routing
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black text-gray-100">
        <Header />
        <main className="flex-grow flex items-center justify-center px-4 py-8">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/buying-guide" element={<BuyingGuide />} />
            <Route path="/selling-tips" element={<SellingTips />} />
            <Route path="/market-trends" element={<MarketTrends />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
