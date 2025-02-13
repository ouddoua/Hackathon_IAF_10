import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Resources from './pages/Resources';
import Community from './pages/Community';

import Contact from './pages/Contact';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;