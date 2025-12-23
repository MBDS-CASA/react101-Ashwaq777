import React from 'react';
import logo from '../assets/logoemsi.png';

const Header = () => {
    return (
        <header style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e1e1e1'
        }}>
            <img
                src={logo}
                alt="Logo de la formation"
                style={{
                    height: '80px',
                    marginBottom: '10px'
                }}
            />
            <h1 style={{
                color: '#248a42ff',
                margin: '10px 0 5px 0'
            }}>
                Introduction à React
            </h1>
            <p style={{
                color: '#7f8c8d',
                margin: '0',
                fontSize: '1.1em'
            }}>
                A la découverte des premières notions de React
            </p>
        </header>
    );
};

export default Header;
