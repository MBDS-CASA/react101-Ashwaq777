import React from 'react';

const Navbar = () => {
  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  };

  return (
    <nav style={{
      backgroundColor: '#177a1fff',
      padding: '15px 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '20px'
      }}>
        {['Notes', 'Étudiants', 'Matières', 'À propos'].map((item) => (
          <li key={item}>
            <button
              onClick={() => handleMenuClick(item)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1em',
                padding: '5px 10px',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
                ':hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
