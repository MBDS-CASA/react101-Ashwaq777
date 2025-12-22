import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Navbar = ({ onMenuChange }) => {
  const [activeItem, setActiveItem] = useState('Notes');
  const menuItems = ['Notes', 'Étudiants', 'Matières', 'À propos'];

  const handleMenuClick = (item) => {
    setActiveItem(item);
    if (onMenuChange) {
      onMenuChange(item);
    }
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
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            label={item}
            isActive={activeItem === item}
            onClick={() => handleMenuClick(item)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
