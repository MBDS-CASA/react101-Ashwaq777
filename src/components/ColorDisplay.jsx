import React, { useState, useEffect } from 'react';

// Composant qui affiche une couleur aléatoire qui change toutes les 2 secondes
const ColorDisplay = () => {
  // Tableau des couleurs disponibles avec leurs noms
  const colors = [
    { code: '#930707ff', name: 'Rouge' },
    { code: '#026b158f', name: 'Vert' },
    { code: '#3357FF', name: 'Bleu' },
    { code: '#cbcb18ff', name: 'Jaune' },
    { code: '#940e8dff', name: 'Rose' },
    { code: '#cf6808ff', name: 'Orange' },
  ];

  // État pour stocker la couleur actuelle (initialisée avec la première couleur du tableau)
  const [currentColor, setCurrentColor] = useState(colors[0]);

  // Effet qui s'exécute au chargement du composant
  useEffect(() => {
    // Crée un intervalle pour changer de couleur toutes les 2 secondes
    const interval = setInterval(() => {
      // Génère un index aléatoire
      const randomIndex = Math.floor(Math.random() * colors.length);
      // Met à jour la couleur actuelle
      setCurrentColor(colors[randomIndex]);
    }, 2000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'au montage

  return (
    <div style={{ 
      backgroundColor: currentColor.code, // Couleur de fond dynamique
      padding: '20px',
      margin: '10px',
      color: '#fff', // Texte blanc 
      textAlign: 'center',
      borderRadius: '8px', // Coins arrondis
      fontSize: '1.2em',
      fontWeight: 'bold'
    }}>
      <p>{currentColor.name}</p>
    </div>
  );
};

export default ColorDisplay;
