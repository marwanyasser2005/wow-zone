import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreativeArts from './pages/CreativeArts';
import Entertainment from './pages/Entertainment';
import Studio from './pages/Studio';
import Technologies from './pages/Technologies';
import About from './pages/About';
import Creations from './pages/Creations';
import CorporateEvents from './pages/CorporateEvents';
import Innovation from './pages/Innovation';
import Visit from './pages/Visit';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creative-arts" element={<CreativeArts />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/about" element={<About />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/corporate-events" element={<CorporateEvents />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;