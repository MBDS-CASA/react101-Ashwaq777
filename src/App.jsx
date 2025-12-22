import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// Import des vues
import NotesView from './views/NotesView';
import EtudiantsView from './views/EtudiantsView';
import MatieresView from './views/MatieresView';
import AProposView from './views/AProposView';

function App() {
  const [activeView, setActiveView] = useState('Notes');

  const renderView = () => {
    switch (activeView) {
      case 'Notes':
        return <NotesView />;
      case 'Étudiants':
        return <EtudiantsView />;
      case 'Matières':
        return <MatieresView />;
      case 'À propos':
        return <AProposView />;
      default:
        return <NotesView />;
    }
  };

  return (
    <div className="app">
      <Navbar onMenuChange={(item) => setActiveView(item)} />
      <div style={{ marginTop: '60px' }}>
        <Header />
        {renderView()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
