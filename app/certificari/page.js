import Link from 'next/link';

export default function CertificariPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Certificări și Acreditări</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Certificări și Acreditări</h1>
                    <p>Calitate și standards internaționale în cercetare și servicii</p>
                </div>
            </section>

            <section className="certifications-section">
                <div className="container">
                    <h2>Certificări</h2>
                    <p className="section-intro">OncoGen dispune de certificări internaționale care garantează conformitatea cu standardele mondiale de calitate și securitate.</p>

                    <div className="certifications-grid">
                        <div className="certification-card">
                            <div className="certification-badge">
                                <span className="year">2023</span>
                            </div>
                            <h3>ISO Audit Certificate</h3>
                            <p>Certificat de audit vendor care confirmă respectarea standardelor internaționale de calitate și compliance.</p>
                        </div>
                        <div className="certification-card">
                            <div className="certification-badge">
                                <span className="year">2023</span>
                            </div>
                            <h3>Quality Management</h3>
                            <p>Sistem de management al calității certificat conform standardelor ISO internaționale.</p>
                        </div>
                        <div className="certification-card">
                            <div className="certification-badge">
                                <span className="year">2023</span>
                            </div>
                            <h3>Safety Standards</h3>
                            <p>Certificare pentru respectarea standardelor de siguranță în cercetarea biomedicaliilor.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="accreditations-section">
                <div className="container">
                    <h2>Acreditări</h2>
                    <p className="section-intro">Acreditări oficiale care recunosc expertise și capacitatea OncoGen în domenii specifice ale cercetării medicale.</p>

                    <div className="accreditations-content">
                        <div className="accreditation-item">
                            <div className="accreditation-icon">✓</div>
                            <h3>Acreditare Spital Pius Brînzeu</h3>
                            <p>Acreditare oficială a unității de cercetare în cadrul Spitalului Clinic Județean de Urgență "Pius Brînzeu" Timișoara, prin Decizia Agenției Naționale de Acreditare.</p>
                        </div>
                        <div className="accreditation-item">
                            <div className="accreditation-icon">✓</div>
                            <h3>Recunoaștere Internațională</h3>
                            <p>Recunoaștere din partea comunității științifice internaționale pentru contribuții în domeniul terapiilor genice și celulare.</p>
                        </div>
                        <div className="accreditation-item">
                            <div className="accreditation-icon">✓</div>
                            <h3>GMP Certification</h3>
                            <p>Certificare Good Manufacturing Practice pentru unitatea de producție cu 2 camere albe și cameră BSL2.</p>
                        </div>
                        <div className="accreditation-item">
                            <div className="accreditation-icon">✓</div>
                            <h3>Biosecurity Standards</h3>
                            <p>Conformitate cu standardele internaționale de biosecurity și protecție a mediului.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
