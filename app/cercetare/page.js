import Link from 'next/link';

export default function CercetarePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Cercetare</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Domenii de Cercetare</h1>
                    <p>Explorând inovația în terapii genice și imunoterapii</p>
                </div>
            </section>

            <section className="hub-section">
                <div className="container">
                    <div className="hub-grid">
                        <a href="#terapii-genice" className="hub-card">
                            <h3>Terapii Genice</h3>
                            <p>Cercetare avansată în manipularea genetică și delivery de gene</p>
                        </a>
                        <a href="#imunoterapii" className="hub-card">
                            <h3>Imunoterapii</h3>
                            <p>Dezvoltarea terapiilor CAR-T și celulare</p>
                        </a>
                        <a href="#laboratoare" className="hub-card">
                            <h3>Laboratoare & Departamente</h3>
                            <p>Structura și facilități de cercetare</p>
                        </a>
                        <a href="#publicatii" className="hub-card">
                            <h3>Publicații</h3>
                            <p>Rezultatele cercetării în reviste internaționale</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="terapii-genice" className="content-section">
                <div className="container">
                    <h2>Terapii Genice</h2>
                    <p className="section-intro">
                        Cercetare avansată în svilupparea de noi metode de delivery genetic și terapii bazate pe manipularea
                        ADN.
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Vectori Virali</h3>
                            <p>Dezvoltarea și optimizarea vectorilor AAV și lentivirali pentru transfer de gene sigur și
                                eficient.</p>
                        </div>
                        <div className="content-card">
                            <h3>Sisteme Non-Virale</h3>
                            <p>Nanotecnologii și sisteme de delivery lipidice pentru transfer genetic fără risc viral.</p>
                        </div>
                        <div className="content-card">
                            <h3>Editare Genomică</h3>
                            <p>Aplicații CRISPR și tehnologii bazate pe editare genetică pentru corecția mutațiilor.</p>
                        </div>
                        <div className="content-card">
                            <h3>Producție GMP</h3>
                            <p>Producție de vectori conform standardelor EMA pentru teste clinice și terapie.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="imunoterapii" className="content-section bg-light">
                <div className="container">
                    <h2>Imunoterapii & Terapii Celulare</h2>
                    <p className="section-intro">
                        Cercetare pe terapiile celulare CAR-T, terapii cu celule NK și activare immunității antitumorale.
                    </p>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>CAR-T Terapii</h3>
                            <p>Dezvoltarea generației următoare de celule T cu receptor antigen chimic pentru leucemii și
                                limfome.</p>
                        </div>
                        <div className="content-card">
                            <h3>Celule NK</h3>
                            <p>Ingineria celulelor natural killer pentru terapii "off-the-shelf" allogene.</p>
                        </div>
                        <div className="content-card">
                            <h3>Checkpoint Inhibitori</h3>
                            <p>Cercetare pe mecanismele și optimizarea anticoropilor anti-PD-1 și anti-CTLA-4.</p>
                        </div>
                        <div className="content-card">
                            <h3>Kombinații Terapeutice</h3>
                            <p>Studii preclinice și clinice pe combinații de imunoterapii pentru maximizarea eficacității.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="laboratoare" className="content-section">
                <div className="container">
                    <h2>Laboratoare & Departamente</h2>
                    <div className="labs-grid">
                        <div className="lab-card">
                            <h3>Lab. Biologia Moleculară</h3>
                            <p>Secvențiere ADN, PCR real-time, clonare și mutageneză.</p>
                        </div>
                        <div className="lab-card">
                            <h3>Lab. Citometrie Flux</h3>
                            <p>Analiză și sortare celulelor, profilare imunologică.</p>
                        </div>
                        <div className="lab-card">
                            <h3>Lab. Cultura Celulară</h3>
                            <p>Cultura celulelor eucariote și procariotice, engineering celular.</p>
                        </div>
                        <div className="lab-card">
                            <h3>Lab. Bioinformatică</h3>
                            <p>Analiza genomică, bistatistică, data mining în studiile clinice.</p>
                        </div>
                        <div className="lab-card">
                            <h3>Lab. Microscopia Confocală</h3>
                            <p>Imagistică avansată, analiza fluorescenței, localizare subcelu</p>
                        </div>
                        <div className="lab-card">
                            <h3>Lab. GMP Production</h3>
                            <p>Producție conform standardelor EMA pentru vectori și biomolecule.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="publicatii" className="content-section bg-light">
                <div className="container">
                    <h2>Publicații Recente</h2>
                    <p className="section-intro">
                        Descoperă cele mai recente rezultate ale cercetării OncoGen publicate în reviste de top internaționale.
                    </p>
                    <div className="publications-list">
                        <div className="pub-item">
                            <span className="pub-year">2024</span>
                            <div>
                                <h4>Novel CAR-T Cell Engineering for Solid Tumors</h4>
                                <p><em>Nature Immunology</em> | Ionescu M., Popescu I., et al.</p>
                            </div>
                        </div>
                        <div className="pub-item">
                            <span className="pub-year">2024</span>
                            <div>
                                <h4>Efficient In Vitro Differentiation of Mesenchymal Stem Cells</h4>
                                <p><em>Cell Stem Cell</em> | Georgescu M., Voinea E., et al.</p>
                            </div>
                        </div>
                        <div className="pub-item">
                            <span className="pub-year">2023</span>
                            <div>
                                <h4>AAV Vector Optimization for Brain Delivery of Therapeutic Genes</h4>
                                <p><em>Gene Therapy</em> | Popescu I., Laurent J.-P., et al.</p>
                            </div>
                        </div>
                        <div className="pub-item">
                            <span className="pub-year">2023</span>
                            <div>
                                <h4>Tumor Microenvironment and Fibroblast Heterogeneity in Ovarian Cancer</h4>
                                <p><em>Journal of Cancer Research</em> | Ionescu M., Mueller A., et al.</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-cta">
                        <Link href="/stiri" className="btn btn-primary">Vezi toate publicațiile</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
