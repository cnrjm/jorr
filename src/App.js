import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Contact from './components/Contact';
import WorkDetail from './components/WorkDetail';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/work" />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;