import React from 'react';

const MainContent = () => {
  return (
    <main style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 300px)' // Pour pousser le footer en bas
    }}>
      <p style={{
        fontSize: '1.2em',
        lineHeight: '1.6',
        color: '#333'
      }}>
        Ici, nous afficherons des informations intéressantes :)
      </p>
    </main>
  );
};

export default MainContent;
