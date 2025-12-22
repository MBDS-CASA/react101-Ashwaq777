import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('fr-FR');
  const formattedTime = currentDateTime.toLocaleTimeString('fr-FR');

  return (
    <div style={{ 
      backgroundColor: '#f0f0f0',
      padding: '20px',
      margin: '10px',
      textAlign: 'center'
    }}>
      <p>Date: {formattedDate}</p>
      <p>Heure: {formattedTime}</p>
    </div>
  );
};

export default DateTimeDisplay;
