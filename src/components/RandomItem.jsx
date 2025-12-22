import React from 'react';

const RandomItem = ({ item }) => {
  if (!item) return <div>Chargement des données...</div>;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '500px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #f0f0f0',
        paddingBottom: '10px',
        marginTop: 0
      }}>
        {item.course}
      </h3>
      <div style={{ margin: '15px 0' }}>
        <p><strong>ID :</strong> {item.unique_id}</p>
        <p><strong>Étudiant :</strong> {item.student.firstname} {item.student.lastname}</p>
        <p><strong>ID étudiant :</strong> {item.student.id}</p>
        <p><strong>Date :</strong> {new Date(item.date).toLocaleDateString('fr-FR')}</p>
        <p style={{
          color: item.grade >= 50 ? '#27ae60' : '#e74c3c',
          fontWeight: 'bold',
          fontSize: '1.2em'
        }}>
          <strong>Note est :</strong> {item.grade}/100
        </p>
      </div>
    </div>
  );
};

export default RandomItem;