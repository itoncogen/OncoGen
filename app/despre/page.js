import Link from 'next/link';

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
                            <p>Membri și structura comitetului de supraveghere științifică</p>
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
                    <h2>Misiune &amp; Viziune</h2>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Misiunea Noastră</h3>
                            <p>
                                Misiunea centrului de excelență în cercetare OncoGen este dezvoltarea de metode avansate de
                                diagnostic și terapie a cancerului și a bolilor cronice degenerative cu morbiditate crescută și
                                cu opțiuni terapeutice limitate. Echipa de cercetători va îndeplini această misiune atât
                                printr-o abordare interdisciplinară a activităților de cercetare fundamentală, translațională și
                                clinică, cât și prin susținerea de programe educaționale și parteneriate cu mediul academic și
                                cel industrial.
                            </p>
                            <p>
                                Prin promovarea calității, responsabilității, inovării și valorii, se urmărește îmbunătățirea
                                performanței sistemului de sănătate, cu scopul de a oferi pacienților noi opțiuni terapeutice.
                            </p>
                        </div>
                        <div className="content-card">
                            <h3>Viziunea Noastră</h3>
                            <p>
                                Institutul OncoGen visează să devină leader în cele patru domenii de cercetare din sfera de
                                interes, domenii care se încadrează în temele prioritare ale programului european Horizon 2020.
                                Obiectivul final al Centrului OncoGen este dezvoltarea unui pol de competență științifică și
                                tehnologică la standarde europene pentru diagnostic, tratament și prevenție, cu o echipă de
                                cercetare multidisciplinară, activitatea de cercetare fiind orientată spre translatarea
                                rezultatelor cercetării în terapii avansate.
                            </p>
                        </div>
                        <div className="content-card">
                            <h3>Direcții Strategice</h3>
                            <ul>
                                <li>Promovarea unui program științific bine definit care asigură continuitatea între cercetarea fundamentală și cea clinică</li>
                                <li>Formarea și menținerea unui nucleu de cercetători înalt calificați</li>
                                <li>Promovarea unui mediu academic și științific de înaltă calitate</li>
                                <li>Promovarea unei culturi organizaționale bazate pe inovare și performanță</li>
                                <li>Sprijinirea personalului prin acces la cele mai performante și moderne tehnologii</li>
                                <li>Creșterea gradului de personalizare a îngrijirii sănătății prin adaptarea terapiilor la nevoile individuale</li>
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
                            <div className="team-avatar">👨‍🔬</div>
                            <h3>Prof. Dr. Virgil Păunescu</h3>
                            <p><strong>Coordonator OncoGen</strong></p>
                            <p>Director științific și fondator al centrului</p>
                        </div>
                        <div className="team-card">
                            <div className="team-avatar">👩‍🔬</div>
                            <h3>Prof. Dr. Carmen Panaitescu</h3>
                            <p><strong>Cercetător Științific I</strong></p>
                            <p>Specialist în cercetare fundamentală</p>
                        </div>
                        <div className="team-card">
                            <div className="team-avatar">👩‍🔬</div>
                            <h3>Conf. Dr. Florina Bojin</h3>
                            <p><strong>Cercetător Științific I</strong></p>
                            <p>Specialist în biologie celulară și imunoterapii</p>
                        </div>
                        <div className="team-card">
                            <div className="team-avatar">👨‍🔬</div>
                            <h3>Conf. Dr. Călin Țațu</h3>
                            <p><strong>Cercetător Științific I</strong></p>
                            <p>Specialist în biologie moleculară și genetică</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.95em', color: '#666' }}>
                        Centrul dispune de un total de 40+ cercetători, biologi, bioingineeri și personal administrativ,
                        inclusiv 10+ doctoranzi și stagiari internaționali.
                    </p>
                    <div className="section-cta">
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
                            <h4>Prof. Dr. Erhard Seifried, MD</h4>
                            <p>Executive Director, Transfusion Center of the Red Cross, Frankfurt/Main, Germany</p>
                        </div>
                        <div className="committee-member">
                            <h4>Prof. Dr. Torsten Tonn, MD</h4>
                            <p>Technical University of Dresden, Transfusion Medicine, German Red Cross Blood Donation Service North East</p>
                        </div>
                        <div className="committee-member">
                            <h4>Prof. Dr. Tudor Ionel Oprea, MD</h4>
                            <p>Division of Translational Informatics, Department of Internal Medicine, UNM School of Medicine, Albuquerque, NM, USA</p>
                        </div>
                        <div className="committee-member">
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
                            <h3>🏭 Producție GMP</h3>
                            <p>Certificare EMA pentru producția de biomolecule și vectori terapeutici conform standardelor internaționale.</p>
                        </div>
                        <div className="infra-card">
                            <h3>🧬 BSL-2 Laboratory</h3>
                            <p>Laborator de biosiguranță nivel 2 pentru lucrul cu agenți patogeni și materiale biologice.</p>
                        </div>
                        <div className="infra-card">
                            <h3>🔬 Echipamente Avansate</h3>
                            <p>Sequencer ADN, citometru flux, microscoape confocale, PCR în timp real și altele.</p>
                        </div>
                        <div className="infra-card">
                            <h3>💻 Bioinformatică</h3>
                            <p>Platforme de analiză genomică și biostatistică cu acces la baze de date globale.</p>
                        </div>
                        <div className="infra-card">
                            <h3>📊 15+ Laboratoare</h3>
                            <p>Departamente dedicate pentru imunoterapii, terapii genice și cercetare fundamentală.</p>
                        </div>
                        <div className="infra-card">
                            <h3>🌐 Rețea Globală</h3>
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
                                Primul centru de cercetare din România și Europa de Est dotat cu echipamente de ultimă generație
                                pentru cercetarea de bază și aplicativă în domeniul terapiilor genice. Cu o suprafață totală de
                                3000 m², centrul are facilități de cercetare fundamentală și aplicativă, inclusiv 15
                                compartimente și laboratoare dotate cu echipamente de înaltă performanță.
                            </p>

                            <p>
                                Construcția și dotarea Centrului de Terapii Genice și Celulare în Tratamentul Cancerului –
                                OncoGen a avut loc în perioada 2010 – 2015, pe baza finanțării prin Programul Operațional
                                Sectorial „Creșterea Competitivității Economice", Axa prioritară 2: Competitivitate prin
                                cercetare, dezvoltare economică și inovare, Operațiunea 2.2.1. Proiectul a fost coordonat de
                                Prof. Dr. Virgil Păunescu. Valoarea totală a proiectului a fost de 54.389.610 RON, din care
                                costuri eligibile 44.000.000 lei, respectiv 38.909.200 lei din Fondul European de Dezvoltare
                                Regională și 5.090.800 lei de la bugetul național.
                            </p>

                            <p>
                                Centrul a fost prevăzut cu toate facilitățile și fluxurile tehnologice pentru cercetarea de vârf,
                                având facilități de cercetare fundamentală și aplicativă pentru medicina translațională,
                                inclusiv o unitate GMP (cu 2 camere albe și o cameră BSL2), o bancă de celule și țesuturi și o
                                biobază.
                            </p>
                        </div>
                        <div className="about-images">
                            <img src="/images/slide01_v6_A2.jpg" alt="OncoGen Facility 1" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="research-domains">
                <div className="container">
                    <h3>// DOMENII</h3>
                    <h2>Cercetare de Ultimă Generație</h2>
                    <p className="domains-intro">
                        OncoGen este primul centru de terapii genice din România, dedicat cercetării în domenii conexe
                        specialităților clinice din cadrul Spitalului Clinic Județean de Urgență "Pius Brînzeu" Timișoara:
                    </p>

                    <div className="domains-grid">
                        <div className="domain-card">
                            <h4>Terapii Avansate în Cancer</h4>
                        </div>
                        <div className="domain-card">
                            <h4>Medicină Regenerativă</h4>
                        </div>
                        <div className="domain-card">
                            <h4>Sănătate și Factori de Mediu</h4>
                        </div>
                        <div className="domain-card">
                            <h4>Imunoterapii</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
