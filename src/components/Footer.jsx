import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={{ textAlign: "center", padding: "20px" }}>
            © {year} - Prénom.nom, Tous droits réservés.
        </footer>
    );
};

export default Footer;
