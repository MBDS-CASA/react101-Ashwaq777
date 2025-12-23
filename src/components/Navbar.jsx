import React from "react";
import "../styles/theme.css";

const Navbar = ({ active, onMenuChange }) => {
    const menuItems = ["Notes", "Étudiants", "Matières", "À propos"];

    return (
        <nav className="nav">
            {menuItems.map((item) => (
                <button
                    key={item}
                    className={`navBtn ${active === item ? "active" : ""}`}
                    onClick={() => onMenuChange?.(item)}
                >
                    {item}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
