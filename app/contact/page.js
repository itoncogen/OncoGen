import Link from 'next/link';
import ContactForm from './ContactForm';

const ERROR_MESSAGES = {
    required: 'Te rugăm să completezi toate câmpurile obligatorii și acordul GDPR.',
    send: 'Mesajul nu a putut fi trimis momentan. Te rugăm să încerci din nou.',
    config: 'Formularul nu este configurat corect momentan. Te rugăm să revii în curând.',
    unexpected: 'A apărut o eroare neașteptată. Te rugăm să încerci din nou.',
};

export default function ContactPage({ searchParams }) {
    const isSent = searchParams?.sent === '1';
    const errorCode = searchParams?.error;
    const errorMessage = errorCode ? (ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.unexpected) : null;

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Contact</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Contact</h1>
                    <p>Suntem aici să răspundem la întrebările tale și să discutăm oportunități de colaborare.</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Informații de Contact</h2>


                            <div className="info-block">
                                <h3>Adresă</h3>
                                <p>
                                    OncoGen - Centrul de Cercetare și Microproducție<br />
                                    Bd. Liviu Rebreanu, nr. 156<br />
                                    300723 Timișoara<br />
                                    România
                                </p>
                            </div>

                            <div className="info-block">
                                <h3>Email</h3>
                                <p>
                                    <strong>General:</strong> office@oncogen.ro<br />
                                    <strong>Cercetare:</strong> research@oncogen.ro<br />
                                    <strong>Parteneriate:</strong> partnerships@oncogen.ro<br />
                                    <strong>Hub Biotehnologii:</strong> biotech@oncogen.ro
                                </p>
                            </div>

                            <div className="social-section">
                                <h3>Urmărește-ne pe Social Media</h3>
                                <div className="social-links-large">
                                    <a href="https://www.facebook.com/oncogentimisoara" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://x.com/OncoGenRO" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <span>Twitter</span>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC_NTOP1WLpOh75okT7Qnuuw/featured" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <span>YouTube</span>
                                    </a>
                                    <a href="https://www.linkedin.com/company/oncogen/about/" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <ContactForm isSent={isSent} errorMessage={errorMessage} />
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h2>Localizare</h2>
                    <div className="map-placeholder">
                        <iframe
                            title="Hartă OncoGen"
                            src="https://www.google.com/maps?q=Bulevardul+Liviu+Rebreanu+156,+Timisoara+300723,+Romania&output=embed"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <p className="map-address">Bulevardul Liviu Rebreanu 156, Timișoara 300723, România</p>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2>Întrebări Frecvente</h2>
                    <div className="faq-grid">

                        <details className="faq-item">
                            <summary>
                                <h4>Cum pot propune o colaborare de cercetare?</h4>
                            </summary>
                            <p>Trimite-ne un email la research@oncogen.ro cu detaliile proiectului. Echipa noastră va evalua și va răspunde în termen de 5 zile.</p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
}
