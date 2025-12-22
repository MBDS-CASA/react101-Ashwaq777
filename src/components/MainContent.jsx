import React, { useState, useEffect } from 'react';

const MainContent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
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
      <p style={{
        fontSize: '1.2em',
        lineHeight: '1.6',
        color: '#333',
        textAlign: 'center',
        marginTop: '50px'
      }}>
        Bonjour, on est le {formattedDate} et il est {timePart}
      </p>
    </main>
  );
};

export default MainContent;
