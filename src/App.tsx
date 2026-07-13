import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#11141A] flex flex-col font-sans selection:bg-[#C5A880] selection:text-[#11141A]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
