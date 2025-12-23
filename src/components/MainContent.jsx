import "../styles/theme.css";
import RandomItem from "./RandomItem";

export default function MainContent(/* keep your props/state */) {
    // keep your existing logic as-is...

    return (
        <main className="main">
            <div className="container">
                <div className="grid">
                    <section className="card">
                        <h2 className="cardTitle">Date & heure</h2>
                        <div className="kpi">
                            <strong>{formattedDate}</strong>
                        </div>
                        <div className="kpi" style={{ marginTop: 10 }}>
                            <strong>{timePart}</strong>
                            <span>heure locale</span>
                        </div>

                        {/* keep your form, but remove inline colors */}
                        {/* ... */}
                    </section>

                    <section className="card">
                        <h2 className="cardTitle">Détails de l’élément</h2>
                        <RandomItem item={randomItem} />
                    </section>
                </div>
            </div>
        </main>
    );
}
