import Link from 'next/link';
import projects from '../lib/projects.json';

const featuredProjectOrder = ['car-nk', 'decode', 'inspired', 'rosecan', 'delimit', 'nanocel'];

export default function Home() {
    const featuredProjects = featuredProjectOrder
        .map((slug) => projects.projects.find((project) => project.slug === slug))
        .filter(Boolean);

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
                                <img src="/images/poza-sequence-galerie-video-oncogen.jpg" alt="Video 1" />
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
                                <img src="/images/heart-decellularization-oncogen.jpg" alt="Video 2" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>Heart decellularization at OncoGen research centre</h3>
                        </div>

                        <div className="video-card" >
                            <div className="video-thumbnail">
                                <img src="/images/3D-printing-blood-vessel.jpg" alt="Video 3" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>3D printing blood vessel at OncoGen research centre</h3>
                        </div>

                        <div className="video-card" >
                            <div className="video-thumbnail">
                                <img src="/images/3D-printing-tumors-oncogen.jpg" alt="Video 4" />
                                <div className="video-overlay">
                                    <div className="play-button">▶</div>
                                </div>
                            </div>
                            <h3>3D printing tumors at OncoGen research centre</h3>
                        </div>

                        <div className="video-card" >
                            <div className="video-thumbnail">
                                <img src="/images/s-a-terminat-pandemia.jpg" alt="Video 5" />
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
                        {featuredProjects.map((project) => (
                            <article key={project.slug} className="project-card">
                                <div className="project-header">
                                    <span className="project-tag">{project.category}</span>
                                    <span className="project-year">{project.duration || '-'}</span>
                                </div>
                                <h3>{project.shortTitle}</h3>
                                <p>{project.description}</p>
                                <div className="project-meta">
                                    {project.duration && <span>⏱️ Durată: {project.duration}</span>}
                                    {project.budget && <span>💰 Buget: {project.budget}</span>}
                                </div>
                                <Link href={`/proiecte/${project.slug}`} className="read-more">Vezi detalii →</Link>
                            </article>
                        ))}
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
