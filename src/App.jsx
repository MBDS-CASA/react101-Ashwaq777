import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div style={{ marginTop: '60px' }}> {/* Ajout d'une marge pour éviter que le contenu ne soit caché sous la navbar fixe */}
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default App
