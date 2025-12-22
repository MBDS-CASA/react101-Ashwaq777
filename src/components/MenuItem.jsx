import React from 'react';

const MenuItem = ({ label, isActive, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        style={{
          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '1em',
          padding: '5px 10px',
          borderRadius: '4px',
          transition: 'background-color 0.3s',
          ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          },
          fontWeight: isActive ? 'bold' : 'normal'
        }}
      >
        {label}
      </button>
    </li>
  );
};

export default MenuItem;
