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
                    <p>Transfer de tehnologie, servicii GMP și parteneriate pentru inovație medicală</p>
                    <a href="#collaborate" className="btn btn-primary">Colaborează cu noi</a>
                </div>
            </section>

            <section className="hub-section">
                <div className="container">
                    <div className="hub-grid">
                        <a href="#servicii" className="hub-card">
                            <h3>Servicii & Capabilități</h3>
                            <p>Producție GMP, consultanță, analitică și servicii personalizate</p>
                        </a>
                        <a href="#tehnologie" className="hub-card">
                            <h3>Transfer de Tehnologie</h3>
                            <p>Licențiere de platfome proprietare și know-how</p>
                        </a>
                        <a href="#parteneri" className="hub-card">
                            <h3>Parteneriate</h3>
                            <p>Colaborări cu industria farmaceutică și startup-uri biotech</p>
                        </a>
                        <a href="#contact-collaboration" className="hub-card">
                            <h3>Cum Să Colaborezi</h3>
                            <p>Pași simpli pentru a demara o colaborare</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="servicii" className="content-section">
                <div className="container">
                    <h2>Servicii & Capabilități</h2>
                    <p className="section-intro">
                        OncoGen pune la dispoziție o gamă completă de servicii pentru industria de biotehnologie și farmaceutică.
                    </p>
                    <div className="services-grid-extended">
                        <div className="service-item">
                            <h3>🏭 Producție GMP</h3>
                            <ul>
                                <li>Vectori virali (AAV, lentiviral)</li>
                                <li>Proteíne recombinate și factori de creștere</li>
                                <li>Celule terapeutice cu control de calitate</li>
                                <li>Certificare EMA și FDA-ready</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>🧬 Analitică & Testare</h3>
                            <ul>
                                <li>Caracterizare vectori și biomolecule</li>
                                <li>Teste funcționalitate și potență</li>
                                <li>Analiza genomică și bioinformatică</li>
                                <li>Rapoarte de calitate GMP</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>📚 Consultanță Științifică</h3>
                            <ul>
                                <li>Design experimental și metodologie</li>
                                <li>Evaluare regulatorie și compliance</li>
                                <li>Ghidare pentru studii clinice</li>
                                <li>Expertise în terapii genice și imunoterapii</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3>🔬 Cercetare Personalizată</h3>
                            <ul>
                                <li>Proiecte R&D collaborative</li>
                                <li>Optimizare de protocol și proces</li>
                                <li>Studii proof-of-concept</li>
                                <li>Proprietary platform development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tehnologie" className="content-section bg-light">
                <div className="container">
                    <h2>Transfer de Tehnologie</h2>
                    <p className="section-intro">
                        OncoGen a dezvoltat platforme proprietare disponibile pentru licență și colaborări în transfer de know-how.
                    </p>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <h3>Platformă de Vectori AAV</h3>
                            <p>
                                Tehnologie proprietară de design și producție a vectorilor AAV cu targeting avansat și eficiență de transducție crescută.
                            </p>
                            <span className="tech-status">Licență disponibilă</span>
                        </div>
                        <div className="tech-card">
                            <h3>CAR-T Engineering Platform</h3>
                            <p>
                                Sistem de inginerie CAR-T de generația 4 cu domenii de co-stimulare optimizate și persistență crescută.
                            </p>
                            <span className="tech-status">Colaborare preferred</span>
                        </div>
                        <div className="tech-card">
                            <h3>MSC Differentiation Protocol</h3>
                            <p>
                                Protocol QMS-validated pentru diferențierea controlată a celulelor stem mezenchimale cu aplicații în regenerare și terapie.
                            </p>
                            <span className="tech-status">Know-how transfer</span>
                        </div>
                        <div className="tech-card">
                            <h3>Biomarker Discovery Pipeline</h3>
                            <p>
                                Metodologie de identificare și validare a biomarkerilorpredictivi pentru răspunsul la imunoterapie.
                            </p>
                            <span className="tech-status">Licență + suport</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="parteneri" className="content-section">
                <div className="container">
                    <h2>Partenerii Noștri</h2>
                    <p className="section-intro">
                        OncoGen colaborează cu companii farmaceutice, biotech și instituții academice din întreaga lume.
                    </p>
                    <div className="partners-grid">
                        <div className="partner-logo">
                            <h4>Stanford University</h4>
                            <p>Imunoterapii</p>
                        </div>
                        <div className="partner-logo">
                            <h4>Universitatea Heidelberg</h4>
                            <p>Oncologie Moleculară</p>
                        </div>
                        <div className="partner-logo">
                            <h4>Novartis</h4>
                            <p>Producție GMP</p>
                        </div>
                        <div className="partner-logo">
                            <h4>Roche Diagnostics</h4>
                            <p>Biomarker Analysis</p>
                        </div>
                        <div className="partner-logo">
                            <h4>Paris Cité University</h4>
                            <p>Terapii Genice</p>
                        </div>
                        <div className="partner-logo">
                            <h4>Startup BioTech XYZ</h4>
                            <p>Colaborare Inovație</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-collaboration" className="content-section bg-light">
                <div className="container">
                    <h2>Cum Să Colaborezi cu OncoGen</h2>
                    <p className="section-intro">
                        Procesul este simplu și transparent. Urmează acești pași pentru a demara o colaborare.
                    </p>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Consultare Inițială</h3>
                            <p>Contactează-ne cu ideea sau oportunitatea de colaborare. Discutăm nevoile și capacități.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Evaluare Tehnică</h3>
                            <p>Echipa noastră evaluează viabilitatea și alinierea cu expertise OncoGen.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Propunere Formală</h3>
                            <p>Elaborăm o propunere detaliată cu timeline, bugete și deliverables.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h3>Agreement & NDA</h3>
                            <p>Finalizez acordurile de confidențialitate și de colaborare.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">5</div>
                            <h3>Implementare</h3>
                            <p>Începem proiectul cu milestone-uri clare și raportare regulată.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">6</div>
                            <h3>Follow-up & Support</h3>
                            <p>Suport continuu și optimizare pe parcursul colaborării.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Gata să Colaborezi?</h2>
                    <p>Contactează-ne astazi pentru a discuta oportunitățile de parteneriat.</p>
                    <div className="cta-buttons">
                        <Link href="/contact" className="btn btn-primary">Contactează-ne</Link>
                        <a href="#" className="btn btn-secondary">Descarcă Brochura</a>
                    </div>
                </div>
            </section>
        </>
    );
}
