import React, { useState, useEffect } from 'react';
import RandomItem from './RandomItem';

const MainContent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [randomItem, setRandomItem] = useState(null);
  const [searchId, setSearchId] = useState('');

  // Fonction pour obtenir un élément aléatoire
  const getRandomItem = (dataArray) => {
    if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0) {
      console.error('Aucune donnée valide trouvée');
      return null;
    }
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    return dataArray[randomIndex];
  };

  // Charger un élément par son ID
  const getItemById = async (id) => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      const jsonData = await response.json();
      return jsonData.find(item => item.unique_id === id) || null;
    } catch (error) {
      console.error('Erreur:', error);
      return null;
    }
  };

  // Charger un élément aléatoire
  const loadRandomItem = async () => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      const jsonData = await response.json();
      setRandomItem(getRandomItem(jsonData));
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  // Gérer la recherche par ID
  const handleSearchById = async (e) => {
    e.preventDefault();
    if (!searchId) {
      loadRandomItem();
      return;
    }

    const id = parseInt(searchId, 10);
    if (isNaN(id)) {
      alert("Veuillez entrer un ID valide");
      return;
    }

    const item = await getItemById(id);
    if (item) {
      setRandomItem(item);
    } else {
      alert("Aucun élément trouvé avec cet ID");
    }
  };

  // Charger les données au chargement du composant
  useEffect(() => {
    loadRandomItem();
    
    // Mettre à jour l'heure toutes les secondes
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Écouter l'événement pour charger un nouvel élément aléatoire
    const handleLoadNewRandomItem = () => {
      loadRandomItem();
    };

    window.addEventListener('loadNewRandomItem', handleLoadNewRandomItem);

    // Nettoyage
    return () => {
      clearInterval(timer);
      window.removeEventListener('loadNewRandomItem', handleLoadNewRandomItem);
    };
  }, []);

  // Formater la date et l'heure
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString('fr-FR', optionsDate);
  const formattedTime = currentTime.toLocaleTimeString('fr-FR');
  const [timePart] = formattedTime.split(' ');

  return (
    <main style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 300px)'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{
          fontSize: '1.2em',
          color: '#2c3e50',
          margin: '0 0 10px 0'
        }}>
          Bonjour, on est le {formattedDate}
        </p>
        <p style={{
          fontSize: '1em',
          color: '#7f8c8d',
          margin: '0 0 20px 0'
        }}>
          Il est actuellement {timePart}
        </p>

        <form onSubmit={handleSearchById} style={{ 
          display: 'flex', 
          gap: '10px', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <input
            type="number"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Entrez un ID"
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              width: '150px',
              fontSize: '1em'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '8px 16px',
              backgroundColor: '#177a1fff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9em',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#126a1aff'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#177a1fff'}
          >
            Rechercher
          </button>
          <button 
            type="button"
            onClick={loadRandomItem}
            style={{
              padding: '8px 16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9em',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Aléatoire
          </button>
        </form>
      </div>
      
      <h2 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px'
      }}>
        Détails de l'élément
      </h2>
      
      <RandomItem item={randomItem} />
    </main>
  );
};

export default MainContent;
