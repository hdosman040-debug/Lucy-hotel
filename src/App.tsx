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
      <div className="min-h-screen bg-[#11141A] flex flex-col font-sans selection:bg-amber-500 selection:text-[#11141A]">
        {/* Persistent Shared Luxury Navigation Header */}
        <Navbar />

        {/* Main Content Multi-Page Routing Matrix */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RouteSwitchWrapper component={<Rooms />} />} />
            <Route path="/dining" element={<RouteSwitchWrapper component={<Dining />} />} />
          </Routes>
        </main>

        {/* Persistent Shared Project Footer */}
        <Footer />
      </div>
    </Router>
  );
}

// Inline architectural helper ensuring structural view resets to coordinate top axis upon page transition changes
function RouteSwitchWrapper({ component }: { component: React.ReactNode }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{component}</>;
}
