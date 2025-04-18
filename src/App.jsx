import React from 'react'
import Cmain from './components/pages/Cmain'
import Header from './components/Header'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import MouseFollower from './components/MouseFollower'

// Create simple placeholder pages for navigation
const AppContent = () => {
  const location = useLocation();
  
  // Determine current page based on pathname
  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return 'Cmain';
    if (path === '/about') return 'About';
    if (path === '/contact') return 'Contact';
    return 'Cmain'; // Default
  };
  
  return (
    <>
      <MouseFollower />
      <Header currentPage={getPageName()} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Cmain />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App