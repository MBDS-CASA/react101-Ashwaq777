import React, { useState, useEffect } from 'react';
import RandomItem from './RandomItem';

const MainContent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [randomItem, setRandomItem] = useState(null);

  // Fonction pour obtenir un élément aléatoire
  const getRandomItem = (dataArray) => {
    if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0) {
      console.error('Aucune donnée valide trouvée');
      return null;
    }
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    return dataArray[randomIndex];
  };

  // Charger les données et obtenir un élément aléatoire au chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const jsonData = await response.json();
        console.log('Données chargées:', jsonData);
        setRandomItem(getRandomItem(jsonData));
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchData();
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
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
          margin: 0
        }}>
          Il est actuellement {timePart}
        </p>
      </div>
      
      <h2 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px'
      }}>
        Élément aléatoire
      </h2>
      
      <RandomItem item={randomItem} />
    </main>
  );
};

export default MainContent;
