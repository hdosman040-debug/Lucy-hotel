import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}


function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-hotel-obsidian">
      <h1 className="text-5xl font-serif text-hotel-gold mb-4">
        404
      </h1>

      <p className="text-gray-300 mb-6">
        The page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="bg-hotel-gold text-hotel-obsidian px-6 py-3 text-xs uppercase tracking-luxury font-semibold rounded-sm hover:bg-hotel-goldLight transition"
      >
        Return Home
      </a>
    </div>
  );
}


export default function App() {
  return (
    <Router>

      <ScrollToTop />

      <div className="min-h-screen bg-hotel-obsidian flex flex-col font-sans selection:bg-hotel-gold/30 selection:text-white relative">

        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-hotel-gold text-hotel-obsidian px-4 py-2 text-xs uppercase tracking-widest font-semibold"
        >
          Skip to content
        </a>


        <Navbar />


        <main
          id="main-content"
          className="flex-grow pt-20 focus:outline-none"
        >

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/rooms"
              element={<Rooms />}
            />

            <Route
              path="/dining"
              element={<Dining />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>


        <Footer />

      </div>

    </Router>
  );
}
