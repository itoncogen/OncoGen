import Link from 'next/link';
import Image from 'next/image';

export default function DesprePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Despre</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Despre OncoGen</h1>
                    <p>Centrul de Cercetare și Microproducție în domeniul terapiilor genice și celulare</p>
                </div>
            </section>

            <section className="hub-section">
                <div className="container">
                    <div className="hub-grid">
                        <a href="#misiune" className="hub-card">
                            <h3>Misiune &amp; Viziune</h3>
                            <p>Descoperă valorile și obiectivele strategice ale OncoGen</p>
                        </a>
                        <a href="#echipa" className="hub-card">
                            <h3>Echipă</h3>
                            <p>Cunoaște echipa de cercetători și specialiști</p>
                        </a>
                        <a href="#comitet" className="hub-card">
                            <h3>Comitet Științific</h3>
                            <p>Membrii și structura comitetului de supraveghere științifică</p>
                        </a>
                        <a href="#infrastructura" className="hub-card">
                            <h3>Infrastructură &amp; Facilități</h3>
                            <p>GMP, BSL-2, laboratoare și echipamente de ultimă generație</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="misiune" className="content-section">
                <div className="container">
                    <h2>Misiune, Viziune și Direcții Strategice</h2>
                    <img
                        src="/images/misiune-viziune.jpg"
                        alt="Cercetătoare lucrând în laborator OncoGen"
                        style={{ width: '100%', maxHeight: '620px', objectFit: 'cover', borderRadius: '12px', margin: '24px 0 32px 0' }}
                    />
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Misiune </h3>
                            <ul>
                                <li>
                                    OncoGen iși dorește să ofere pacienților opțiuni terapeutice inovatoare, precise și sigure, sprijinind progresul medical prin colaborări
                                    cu instituții academice de prestigiu, centre internaționale de cercetare și parteneri industriali. Prin excelență științifică, inovare tehnologică
                                    și dedicare față de pacient, centrul aspiră să fie un reper în domeniul terapiilor avansate, transformând descoperirile științifice în beneficii reale
                                    pentru sănătatea pacienților.
                                </li>
                            </ul>
                        </div>
                        <div className="content-card">
                            <h3>Viziune </h3>
                            <ul>
                                <li>
                                    Centrul aspiră să fie un punct de referință pentru colaborări științifice și clinice,
                                    un loc în care excelența, etica și inovația se întâlnesc pentru a aduce beneficii reale pentru sănătatea pacienților.
                                </li>
                            </ul>
                        </div>
                        <div className="content-card">
                            <h3>Direcții Strategice</h3>
                            <ul>
                                <li>Promovarea unui program științific bine definit, care asigură continuitatea între cercetarea fundamentală, translatarea rezultatelor și aplicarea clinică</li>
                                <li>Dezvoltarea cercetării translaționale pentru transformarea rezultatelor științifice în soluții cu potențial de utilizare în practica medicală</li>
                                <li>Dezvoltarea capacităților de microproducție pentru susținerea activităților de cercetare, validare și transfer tehnologic</li>
                                <li>Formarea și menținerea unui nucleu de cercetători înalt calificați, într-un mediu academic și științific performant</li>
                                <li>Promovarea unei culturi organizaționale bazate pe inovare, colaborare interdisciplinară și performanță</li>
                                <li>Sprijinirea personalului prin acces la tehnologii moderne și dezvoltarea unor soluții terapeutice personalizate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="echipa" className="content-section bg-light">
                <div className="container">
                    <h2>Echipa Noastră</h2>
                    <p className="section-intro">
                        OncoGen este alcătuit din cercetători de top, clinicieni și ingineri cu expertiză în biologie
                        moleculară, imunoterapii și producția GMP. Echipa este compusă din profesori, cercetători
                        științifici, bioingineri și personal de sprijin.
                    </p>
                    <div className="team-grid">
                        <div className="team-card">
                            <div className="team-avatar">
                                <Image
                                    src="/imagini-personal-oncogen/Virgil_Paunescu.jpg"
                                    alt="Prof. Dr. Virgil Păunescu"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h3>Prof. Dr. Virgil Păunescu</h3>
                            <p><strong>Coordonator OncoGen</strong></p>
                            <p>Director științific și fondator al centrului</p>
                        </div>
                        <div className="team-card">
                            <div className="team-avatar">
                                <Image
                                    src="/imagini-personal-oncogen/Carmen_Bunu_Panaitescu.jpg"
                                    alt="Prof. Dr. Carmen Panaitescu"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h3>Prof. Dr. Carmen Panaitescu</h3>
                            <p><strong>Cercetător Științific I</strong></p>
                            <p>Specialist în cercetare fundamentală</p>
                        </div>
                        <div className="team-card">
                            <div className="team-avatar">
                                <Image
                                    src="/imagini-personal-oncogen/Florina_Bojin.jpeg"
                                    alt="Conf. Dr. Florina Bojin"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h3>Conf. Dr. Florina Bojin</h3>
                            <p><strong>Cercetător Științific I</strong></p>
                            <p>Specialist în biologie celulară și imunoterapii</p>
                        </div>
                        <div className="team-card">
                            <div className="team-avatar">
                                <Image
                                    src="/imagini-personal-oncogen/Calin_Tatu.jpeg"
                                    alt="Conf. Dr. Călin Țațu"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h3>Conf. Dr. Călin Țațu</h3>
                            <p><strong>Cercetător Științific I</strong></p>
                            <p>Specialist în biologie moleculară și genetică</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.95em', color: '#666' }}>
                        Centrul dispune de un total de 40+ cercetători, biologi, bioingineeri și personal administrativ,
                        inclusiv 10+ doctoranzi și stagiari internaționali.
                    </p>
                    <div className="section-cta cta-buttons">
                        <Link href="/echipa" className="btn btn-secondary">Vezi echipa completă</Link>
                        <Link href="/contact" className="btn btn-secondary">Contactează echipa</Link>
                    </div>
                </div>
            </section>

            <section id="comitet" className="content-section">
                <div className="container">
                    <h2>Comitet Științific</h2>
                    <p className="section-intro">
                        Comitetul Științific International al OncoGen asigură evaluarea și ghidarea cercetării conform
                        standardelor europene și mondiale de excelență. Membrii comitetului sunt experți recunoscuți în domenii
                        precum medicina transfuzională, imunoterapii și ingineria biomedicală.
                    </p>
                    <div className="committee-list">
                        <div className="committee-member">
                            <h4>Adrian Salic, Ph.D.</h4>
                            <p>Professor of Cell Biology, Harvard Medical School
                            Principal Investigator, Salic Lab</p>
                        </div>
                        <div className="committee-member">
                            <h4>Prof. Dr. Torsten Tonn, MD</h4>
                            <p>Technical University of Dresden, Transfusion Medicine, German Red Cross Blood Donation Service North East</p>
                        </div>
                        <div className="committee-member">
                            <h4>Prof. Dr. Tudor Ionel Oprea, MD</h4>
                            <p>Division of Translational Informatics, Department of Internal Medicine, UNM School of Medicine, Albuquerque, NM, USA</p>
                        </div>
                        <div className="committee-member committee-member-herbert">
                            <h4>Dr. Herbert Stadler</h4>
                            <p>Head of the Advisory Board – IBA GmbH, Göttingen, Germany</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="infrastructura" className="content-section bg-light">
                <div className="container">
                    <h2>Infrastructură &amp; Facilități</h2>
                    <div className="infrastructure-grid">
                        <div className="infra-card">
                            <h3>Producție GMP</h3>
                            <p>Certificare EMA pentru producția de biomolecule și vectori terapeutici conform standardelor internaționale.</p>
                        </div>
                        <div className="infra-card">
                            <h3>Laborator BSL-2 </h3>
                            <p>Laborator de biosiguranță nivel 2 pentru lucrul cu agenți patogeni și materiale biologice.</p>
                        </div>
                        <div className="infra-card">
                            <h3>Echipamente Avansate</h3>
                            <p>Secvențializator ADN, flowcitometre, microscoape confocale, real-time PCR și altele.</p>
                        </div>
                        <div className="infra-card">
                            <h3>Bioinformatică</h3>
                            <p>Platforme de analiză genomică și biostatistică cu acces la baze de date globale.</p>
                        </div>
                        <div className="infra-card">
                            <h3>15+ Laboratoare</h3>
                            <p>Departamente dedicate pentru imunoterapii, terapii genice și cercetare fundamentală.</p>
                        </div>
                        <div className="infra-card">
                            <h3>Rețea Globală</h3>
                            <p>Parteneriate cu universități și institute de cercetare din Europa și SUA.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>DESPRE NOI</h2>
                            <p>
                                OncoGen Timișoara este un centru de excelență în cercetarea biomedicală și terapiile
                                genice și celulare avansate. Reprezentând prima instituție de acest tip din România,
                                OncoGen se distinge prin infrastructura sa ultramodernă constituită din laboratoare de cercetare
                                și facilități de producție GMP.

                            </p>

                            <p>
                                Cu o suprafață de 3000 m², centrul reunește cercetători, echipamente de ultimă generație
                                și tehnologii inovatoare, promovând o abordare integrată,
                                de la cercetarea fundamentală la aplicabilitatea clinică.
                                Infrastructura OncoGen include facilități specializate pentru cercetare avansată
                                și dezvoltare biotehnologică, precum o unitate GMP pentru producția de biomolecule și vectori terapeutici,
                                clean rooms, facilități BSL-2, precum și o bancă de celule și țesuturi și o biobază pentru studii preclinice.

                            </p>

                            <p>
                                Construcția și dotarea centrului au avut loc între 2010 și 2015,
                                printr-un proiect de anvergură finanțat din Programul Operațional Sectorial „Creșterea Competitivității Economice”,
                                Axa prioritară 2: Competitivitate prin cercetare, dezvoltare economică și inovare,
                                Operațiunea 2.2.1. Proiectul a fost coordonat de Prof. Dr. Virgil Păunescu, având o valoare totală de 54.389.610 RON,
                                din care 38.909.200 RON provenind din Fondul European de Dezvoltare Regională și 5.090.800 RON de la bugetul național.

                            </p>

                            <p>
                                Prin colaborări cu instituții academice de prestigiu, centre internaționale de cercetare și parteneri industriali de top,
                                OncoGen Timișoara se dorește a fi un reper de inovare și progres medical, dedicat nu doar descoperirilor științifice,
                                ci și transformării acestora în beneficii reale pentru sănătatea pacienților.
                            </p>
                        </div>
                        <div className="about-images">
                            <img src="/images/slide01_v6_A2.jpg" alt="OncoGen Facility 1" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
