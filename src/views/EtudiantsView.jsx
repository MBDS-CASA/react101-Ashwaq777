import React from "react";
import data from "../../public/data.json"; // ✅ 1) importer le fichier JSON

const EtudiantsView = () => {
    const etudiants = data.etudiants || []; // ✅ 2) récupérer la liste

    return (
        <div style={{ marginTop: "60px", padding: "20px" }}>
            <h2>Gestion des Étudiants</h2>

            <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
                <thead>
                <tr>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Nom</th>
                    <th style={thStyle}>Prénom</th>
                    <th style={thStyle}>Filière</th>
                    <th style={thStyle}>Email</th>
                </tr>
                </thead>

                <tbody>
                {etudiants.map((e) => (
                    <tr key={e.id}>
                        <td style={tdStyle}>{e.id}</td>
                        <td style={tdStyle}>{e.nom}</td>
                        <td style={tdStyle}>{e.prenom}</td>
                        <td style={tdStyle}>{e.filiere}</td>
                        <td style={tdStyle}>{e.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const thStyle = {
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #ccc",
};

const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
};

export default EtudiantsView;
