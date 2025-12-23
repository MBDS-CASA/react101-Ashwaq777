import React, { useState, useEffect } from "react";

const MainContent = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    const mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    const pad = (n) => String(n).padStart(2, "0");

    const jour = jours[now.getDay()];
    const moisNom = mois[now.getMonth()];
    const annee = now.getFullYear();
    const heure = pad(now.getHours());
    const minute = pad(now.getMinutes());
    const second = pad(now.getSeconds());

    return (
        <main style={{ padding: "20px", textAlign: "center" }}>
            Bonjour, on est le {jour}, {moisNom}, {annee} et il est {heure}:{minute}:{second}
        </main>
    );
};

export default MainContent;
