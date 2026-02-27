import Link from 'next/link';
export default function Home() {
    return (
        <>

            <section id="home" className="hero" style={{ backgroundImage: "url('/images/slide01_v6_A2.jpg')" }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>// CERCETARE</h2>
                        <h1>OncoGen – Centrul de Terapii Genice și Celulare în Tratamentul Cancerului</h1>
                        <p>Primul centru de cercetare din România și Europa de Est dotat cu echipamente de ultimă generație
                            pentru cercetarea de bază și aplicativă în domeniul terapiilor genice. Cu o suprafață totală de 3000
                            m², centrul are facilități de cercetare fundamentală și aplicativă, inclusiv 15 compartimente și
                            laboratoare dotate cu echipamente de înaltă performanță.</p>
                        <div className="hero-buttons">
                            <Link href="/despre" className="btn btn-primary">Despre noi</Link>
                            <Link href="/certificari" className="btn btn-secondary">Certificări și acreditări</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="videos" className="video-gallery">
                <div className="container">
                    <h2>Galerie Video</h2>
                    <p className="gallery-intro">Explorați prezentări, conferințe și documentare despre cercetarea noastră</p>

                    <div className="videos-grid">
                        <div className="video-card" >
                            <div className="video-thumbnail">
                                <img src="/images/slide01_v6_A2.jpg" alt="Video 1" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>Prezentarea OncoGen</h3>
                            <p>Descoperă centrul de cercetare și facilități</p>
                        </div>

                        <div className="video-card"
                        >
                            <div className="video-thumbnail">
                                <img src="/images/slide01_v6_A2.jpg" alt="Video 2" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>Heart decellularization at OncoGen research centre</h3>
                        </div>

                        <div className="video-card" >
                            <div className="video-thumbnail">
                                <img src="/images/slide01_v6_A2.jpg" alt="Video 3" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>3D printing blood vessel at OncoGen research centre</h3>
                        </div>

                        <div className="video-card" >
                            <div className="video-thumbnail">
                                <img src="/images/slide01_v6_A2.jpg" alt="Video 4" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>3D printing tumors at OncoGen research centre</h3>
                        </div>

                        <div className="video-card" >
                            <div className="video-thumbnail">
                                <img src="/images/slide01_v6_A2.jpg" alt="Video 5" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>S-a terminat pandemia? Subestimăm virusul?</h3>
                            <p>Concluziile după doi ani | prof. Virgil Păunescu, OncoGen</p>
                        </div>
                    </div>
                </div>
            </section>

            <div id="videoModal" className="video-modal">
                <div className="modal-content">
                    <span className="close" >&times;</span>
                    <iframe id="videoFrame" width="100%" height="600" src="" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>


            <section className="featured-projects">
                <div className="container">
                    <h2>Principalele proiecte de cercetare dezvoltate la OncoGen</h2>
                    <p className="gallery-intro">Explorați selecta noastră de proiecte finanțate de Uniunea Europeană și instituții
                        internaționale</p>

                    <div className="projects-grid">

                        <article className="project-card">
                            <div className="project-header">
                                <span className="project-tag">Horizon Europa</span>
                                <span className="project-year">2023-2026</span>
                            </div>
                            <h3>MOUNTADAPT - Proiectul de Adaptare Climatic</h3>
                            <p>Soluții inovatoare pentru adaptarea schimbărilor climatice în regiunile montane din Austria,
                                Slovenia, Franța și România. Demonstrarea unor soluții de ultimă generație în diverse zone
                                biogeografice montane.</p>
                            <div className="project-meta">
                                <span>👥 Parteneri: 12 Instituții</span>
                                <span>💰 Budget: €5.85M</span>
                            </div>
                            <Link href="/proiecte/mountadapt" className="read-more">Vezi detalii →</Link>
                        </article>


                        <article className="project-card">
                            <div className="project-header">
                                <span className="project-tag">Finanțare Națională</span>
                                <span className="project-year">2020-2022</span>
                            </div>
                            <h3>PROIECT BIOPRINTARE</h3>
                            <p>Dezvoltarea și validarea experimentală a software-ului pentru bioimprimare 3D de modele tisulare
                                tumorale.</p>
                            <div className="project-meta">
                                <span>👥 Parteneri: 2 Instituții</span>
                                <span>💰 Budget: 45.300 EUR</span>
                            </div>
                            <Link href="/proiecte/bioprintare" className="read-more">Vezi detalii →</Link>
                        </article>


                        <article className="project-card">
                            <div className="project-header">
                                <span className="project-tag">Interreg</span>
                                <span className="project-year">2021-2023</span>
                            </div>
                            <h3>HEALTHY-PREGNANCY RO-HU</h3>
                            <p>Proiect transfrontalier România – Ungaria pentru diagnosticul și sănătatea în sarcină.</p>
                            <div className="project-meta">
                                <span>👥 Parteneri: 3 Instituții</span>
                                <span>💰 Budget: 2.49 M EUR</span>
                            </div>
                            <Link href="/proiecte/healthy-pregnancy" className="read-more">Vezi detalii →</Link>
                        </article>


                        <article className="project-card">
                            <div className="project-header">
                                <span className="project-tag">Finanțare Națională</span>
                                <span className="project-year">2020-2021</span>
                            </div>
                            <h3>PROIECTUL DECODE</h3>
                            <p>Dezvoltarea unui vaccin peptidic profilactic pentru COVID-19 cu aplicabilitate la om.</p>
                            <div className="project-meta">
                                <span>👥 Parteneri: 2 Instituții</span>
                                <span>💰 Budget: Program SOLUȚII</span>
                            </div>
                            <Link href="/proiecte/decode" className="read-more">Vezi detalii →</Link>
                        </article>
                    </div>

                    <div className="section-cta">
                        <Link href="/proiecte" className="btn btn-primary">Vezi toate proiectele</Link>
                    </div>
                </div>
            </section>


            <section id="events" className="news">
                <div className="container">
                    <h2>Știri și Evenimente</h2>
                    <div className="news-grid">
                        <article className="news-card">
                            <div className="card-tag">Știri & Evenimente | Februarie 11, 2026</div>
                            <h3>COMUNICAT DE PRESĂ: Centrul OncoGen participă în proiectul TheraFast</h3>
                            <p>Centrul OncoGen anunță participarea sa în proiectul TheraFast, o inițiativă inovatoare pentru
                                terapiile de genie genetic.</p>
                            <Link href="/stiri" className="read-more">Citește mai mult →</Link>
                        </article>
                        <article className="news-card">
                            <div className="card-tag">Știri & evenimente | Februarie 11, 2026</div>
                            <h3>Centrul de Terapii Genice și Celulare OncoGen anunță începerea proiectului DECODEX</h3>
                            <p>Proiect revoluționar în domeniul terapiilor genice și celulare, marcat de inovații în
                                diagnosticul și tratamentul personalizat.</p>
                            <Link href="/stiri" className="read-more">Citește mai mult →</Link>
                        </article>
                        <article className="news-card">
                            <div className="card-tag">Evenimente Științifice | Noiembrie 15, 2024</div>
                            <h3>Digipedia: AI poate schimba vieți</h3>
                            <p>OncoGen participă la conferința Digipedia, explorând rolul inteligenței artificiale în
                                transformarea domeniului medical și cercetării.</p>
                            <Link href="/stiri" className="read-more">Citește mai mult →</Link>
                        </article>
                    </div>

                    <div className="section-cta">
                        <Link href="/stiri" className="btn btn-primary">Vezi mai mult</Link>
                    </div>
                </div>
            </section>

        </>

    );
}
