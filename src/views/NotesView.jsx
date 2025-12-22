import React, { useState, useEffect } from 'react';
import RandomItem from '../components/RandomItem';

const NotesView = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [randomItem, setRandomItem] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
      setIsLoading(true);
      setError('');
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      const jsonData = await response.json();
      setRandomItem(getRandomItem(jsonData));
    } catch (error) {
      console.error('Erreur:', error);
      setError('Erreur lors du chargement des données');
    } finally {
      setIsLoading(false);
    }
  };

  // Gérer la recherche par ID
  const handleSearchById = async (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;
    
    try {
      setIsLoading(true);
      setError('');
      const item = await getItemById(searchId);
      if (item) {
        setRandomItem(item);
      } else {
        setError('Aucun élément trouvé avec cet ID');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setError('Erreur lors de la recherche');
    } finally {
      setIsLoading(false);
    }
  };

  // Mettre à jour l'heure actuelle toutes les secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Charger un élément aléatoire au chargement initial
    loadRandomItem();

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginTop: '20px', padding: '20px' }}>
      <h2>Gestion des Notes</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Heure actuelle : {currentTime.toLocaleTimeString()}</h3>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={loadRandomItem}
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {isLoading ? 'Chargement...' : 'Charger une note aléatoire'}
        </button>

        <form onSubmit={handleSearchById} style={{ display: 'inline' }}>
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Rechercher par ID"
            style={{
              padding: '8px',
              marginRight: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
          <button 
            type="submit"
            disabled={isLoading || !searchId.trim()}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Rechercher
          </button>
        </form>
      </div>

      {error && (
        <div style={{ 
          padding: '10px', 
          backgroundColor: '#ffebee', 
          color: '#c62828',
          marginBottom: '20px',
          borderRadius: '4px'
        }}>
          {error}
        </div>
      )}

      {randomItem && (
        <div>
          <h3>Note sélectionnée :</h3>
          <RandomItem item={randomItem} />
        </div>
      )}
    </div>
  );
};

export default NotesView;
