import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #e1e1e1',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      left: 0,
      right: 0
    }}>
      <p style={{
        margin: 0,
        color: '#7f8c8d',
        fontSize: '0.9em'
      }}>
        © {currentYear} - Tous droits réservés - Hiba Lou
      </p>
    </footer>
  );
};

export default Footer;
