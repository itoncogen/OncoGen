import Link from 'next/link';

export default function HubBiotechPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Hub Biotehnologii</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Hub Biotehnologii OncoGen</h1>
                    <p>
                        Platformă dedicată transferului tehnologic, dezvoltării colaborărilor și susținerii
                        cercetării doctorale în biotehnologii medicale avansate.
                    </p>
                    <a href="#contact-collaboration" className="btn btn-primary">Discută cu echipa OncoGen</a>
                </div>
            </section>

            <section className="hub-section">
                <div className="container">
                    <div className="hub-grid">
                        <a href="#transfer-tehnologic" className="hub-card">
                            <h3>Transfer Tehnologic</h3>
                            <p>De la cercetare fundamentală la prototipuri și producție în standard GMP.</p>
                        </a>
                        <a href="#business-development" className="hub-card">
                            <h3>Business Development</h3>
                            <p>Parteneriate cu industrie, IMM-uri inovative și ecosistemul de life sciences.</p>
                        </a>
                        <a href="#cercetare-doctorala" className="hub-card">
                            <h3>Susținere Cercetare Doctorală</h3>
                            <p>Mentorat, asistență și infrastructură performantă pentru doctoranzi.</p>
                        </a>
                        <a href="#domenii-interes" className="hub-card">
                            <h3>Domenii de interes</h3>
                            <p>Nișe potențiale în biotehnologii, bioinformatică și medicină translațională.</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="transfer-tehnologic" className="content-section">
                <div className="container">
                    <h2>Transfer Tehnologic</h2>
                    <p className="section-intro">
                        Obiectivul principal este tranziția rezultatelor din cercetarea fundamentală și dezvoltare
                        experimentală către prototipuri și ulterior către producție în standard GMP.
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
                    <div className="section-cta">
                        <a
                            href="https://oncogen.ro/ro/hub-biotehnologii/transfer-tehnologic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Vezi detalii Transfer Tehnologic
                        </a>
                    </div>
                </div>
            </section>

            <section id="business-development" className="content-section bg-light">
                <div className="container">
                    <h2>Business Development</h2>
                    <p className="section-intro">
                        OncoGen promovează colaborarea cu parteneri industriali și IMM-uri inovative pentru a accelera
                        transformarea ideilor în produse și servicii cu impact în sănătate.
                    </p>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Identificare oportunitate</h3>
                            <p>Definirea ideii, a nevoii de piață și a direcției de dezvoltare tehnologică.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Validare concept</h3>
                            <p>Testare tehnică folosind infrastructura și echipa multidisciplinară OncoGen.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Scalare și transfer</h3>
                            <p>Pregătirea prototipului pentru transfer tehnologic și implementare industrială.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cercetare-doctorala" className="content-section">
                <div className="container">
                    <h2>Susținere Cercetare Doctorală</h2>
                    <p className="section-intro">
                        OncoGen asigură mentorat, asistență și condiții de lucru performante pentru derularea studiilor
                        doctorale în domeniul biotehnologiilor.
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Cadru academic și științific</h3>
                            <ul>
                                <li>Coordonare științifică în arii relevante pentru biotehnologii medicale</li>
                                <li>Acces la infrastructură de cercetare modernă și platforme interdisciplinare</li>
                                <li>Sprijin pentru dezvoltarea tezelor cu componentă aplicativă</li>
                            </ul>
                        </div>
                        <div className="content-card">
                            <h3>Comunitate doctorală</h3>
                            <p>
                                Programul include atât doctoranzi în curs, cât și doctoranzi absolvenți, cu rezultate
                                orientate spre cercetare relevantă clinic și translațională.
                            </p>
                        </div>
                    </div>
                    <div className="section-cta">
                        <a
                            href="https://oncogen.ro/ro/hub-biotehnologii/sustinere-cercetare-doctorala/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Vezi detalii Susținere Cercetare Doctorală
                        </a>
                    </div>
                </div>
            </section>

            <section id="domenii-interes" className="content-section bg-light">
                <div className="container">
                    <h2>Domenii de interes și nișe potențiale</h2>
                    <p className="section-intro">
                        OncoGen își propune să devină un hub regional pentru biotehnologii medicale avansate,
                        bioinformatică și medicină translațională.
                    </p>
                    <div className="content-card description-card">
                        <ul>
                            <li>
                                Interconectarea domeniilor de expertiză: sănătate, biotehnologii,
                                bioinformatică, inteligență artificială, e-sănătate, biobanking,
                                biosecuritate și calitatea vieții.
                            </li>
                            <li>
                                Dezvoltarea de competențe valorificabile pentru fabricarea de produse de
                                diagnostic și terapeutice avansate (biofarmaceutice, terapii genice și
                                celulare).
                            </li>
                            <li>
                                Atragerea de investiții din partea companiilor din sectorul farmaceutic,
                                științele vieții și biotehnologii.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact-collaboration" className="content-section">
                <div className="container">
                    <h2>Cum poți colabora cu Hub Biotehnologii</h2>
                    <p className="section-intro">
                        Dacă reprezinți o companie, un IMM inovativ, o echipă academică sau ești doctorand,
                        putem analiza împreună cea mai potrivită formă de colaborare.
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Parteneri industriali și IMM-uri</h3>
                            <p>Proiecte de validare, prototipare și transfer tehnologic în biotehnologii medicale.</p>
                        </div>
                        <div className="content-card">
                            <h3>Mediul academic și doctoranzi</h3>
                            <p>Mentorat, acces la infrastructură și colaborări pentru teme de cercetare aplicată.</p>
                        </div>
                        <div className="content-card">
                            <h3>Instituții și organizații</h3>
                            <p>Parteneriate strategice pentru dezvoltarea ecosistemului regional de inovare în sănătate.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Vrei să inițiem o colaborare?</h2>
                    <p>Contactează echipa OncoGen pentru a discuta oportunitățile din Hub Biotehnologii.</p>
                    <div className="cta-buttons">
                        <Link href="/contact" className="btn btn-primary">Contactează-ne</Link>
                        <a
                            href="https://oncogen.ro/ro/hub-biotehnologii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Pagina oficială Hub Biotehnologii
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
