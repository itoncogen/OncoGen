import Link from 'next/link';

export default function TransferTehnologicPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> / <span>Transfer Tehnologic</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Transfer Tehnologic</h1>
                    <p>
                        De la cercetare fundamentală la prototipuri și producție în condiții GMP.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <p className="section-intro">
                        Obiectivul principal este tranziția rezultatelor din cercetarea fundamentală și dezvoltare
                        experimentală către prototipuri și ulterior către producție în condiții GMP.
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Etape de maturizare tehnologică</h3>
                            <ul>
                                <li>Cercetare fundamentală și dezvoltare experimentală (TRL 4)</li>
                                <li>Validare și realizare de prototipuri funcționale (TRL 5)</li>
                                <li>Producție în condiții Good Manufacturing Practice (TRL 6)</li>
                                <li>Focalizare pe soluții inovative de diagnostic și tratament</li>
                            </ul>
                        </div>
                        <div className="content-card">
                            <h3>Resurse și rezultate urmărite</h3>
                            <ul>
                                <li>Servicii complete de testare a unui concept (idee/prototip)</li>
                                <li>Valorificarea dotărilor avansate și a expertizei umane OncoGen</li>
                                <li>Creșterea șanselor de transfer către industrie și aplicații clinice</li>
                                <li>Acces la direcții de tip patente și prototipuri</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-cta section-cta-transfer">
                        <div className="section-cta-row section-cta-row-top">
                            <Link href="/hub-biotech/transfer-tehnologic/patente" className="btn btn-primary">
                                Patente
                            </Link>
                            <Link href="/hub-biotech/transfer-tehnologic/prototipuri" className="btn btn-primary">
                                Prototipuri
                            </Link>
                        </div>
                        <div className="section-cta-row section-cta-row-bottom">
                            <Link href="/hub-biotech" className="btn btn-back-hub">
                                Înapoi la Hub Biotehnologii
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
