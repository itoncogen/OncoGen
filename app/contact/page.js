import Link from 'next/link';

export default function ContactPage() {
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
                                    bd. Liviu Rebreanu, nr. 156<br />
                                    300723 Timișoara<br />
                                    România
                                </p>
                            </div>

                            <div className="info-block">
                                <h3>Telefon</h3>
                                <p>
                                    <strong>Birou General:</strong> +40 256 49 50 50<br />
                                    <strong>Suport Clinic:</strong> +40 256 49 50 51<br />
                                    <strong>Hub Biotehnologii:</strong> +40 256 49 50 52
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

                            <div className="info-block">
                                <h3>Orare de Funcționare</h3>
                                <p>
                                    <strong>Luni - Vineri:</strong> 09:00 - 17:00<br />
                                    <strong>Sâmbătă - Duminică:</strong> Închis
                                </p>
                            </div>

                            <div className="social-section">
                                <h3>Urmărește-ne pe Social Media</h3>
                                <div className="social-links-large">
                                    <a href="#" className="social-link">
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#" className="social-link">
                                        <span>Twitter</span>
                                    </a>
                                    <a href="#" className="social-link">
                                        <span>YouTube</span>
                                    </a>
                                    <a href="#" className="social-link">
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h2>Trimite-ne un Mesaj</h2>
                            <form className="contact-form" method="POST" action="#">
                                <div className="form-group">
                                    <label htmlFor="name">Nume Complet *</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Telefon</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="organization">Organizație</label>
                                    <input type="text" id="organization" name="organization" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subiect *</label>
                                    <select id="subject" name="subject" required>
                                        <option value="">-- Selectează subiectul --</option>
                                        <option value="general">Informații Generale</option>
                                        <option value="research">Colaborare în Cercetare</option>
                                        <option value="services">Servicii GMP</option>
                                        <option value="partnership">Partneriat Biotech</option>
                                        <option value="media">Interogări Media</option>
                                        <option value="recruitment">Cariere</option>
                                        <option value="other">Altele</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mesaj *</label>
                                    <textarea id="message" name="message" rows="6" required></textarea>
                                </div>

                                <div className="form-group checkbox">
                                    <input type="checkbox" id="privacy" name="privacy" required />
                                    <label htmlFor="privacy">Sunt de acord cu <a href="#">politica de confidențialitate</a> și <a href="#">termenii de utilizare</a></label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">Trimite Mesaj</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h2>Localizare</h2>
                    <div className="map-placeholder">
                        <p>🗺️ Hartă - OncoGen, Timișoara</p>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}>bd. Liviu Rebreanu, nr. 156, Timișoara</p>
                    </div>
                </div>
            </section>

            <section className="quick-links-section bg-light">
                <div className="container">
                    <h2>Link-uri Rapide</h2>
                    <div className="quick-links-grid">
                        <div className="quick-link-card">
                            <h3>🤝 Colaborare în Cercetare</h3>
                            <p>Dorești să colaborezi în proiecte de cercetare cu OncoGen?</p>
                            <Link href="/cercetare" className="btn btn-secondary">Explorează domeniile</Link>
                        </div>
                        <div className="quick-link-card">
                            <h3>🏭 Servicii GMP</h3>
                            <p>Ai nevoie de servicii de producție GMP sau consultanță?</p>
                            <Link href="/hub-biotech" className="btn btn-secondary">Descoperi serviciile</Link>
                        </div>
                        <div className="quick-link-card">
                            <h3>📈 Cariere</h3>
                            <p>Interesat să te alături echipei OncoGen?</p>
                            <a href="#" className="btn btn-secondary">Vezi ofertele de muncă</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2>Întrebări Frecvente</h2>
                    <div className="faq-grid">
                        <details className="faq-item">
                            <summary>
                                <h4>Care sunt orele de funcționare?</h4>
                            </summary>
                            <p>OncoGen funcționează luni - vineri, 09:00 - 17:00. Pentru urgențe, te rugăm să contactezi serviciul de gardă.</p>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h4>Cum pot propune o colaborare de cercetare?</h4>
                            </summary>
                            <p>Trimite-ne un email la research@oncogen.ro cu detaliile proiectului. Echipa noastră va evalua și va răspunde în termen de 5 zile.</p>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h4>Oferiți servicii GMP?</h4>
                            </summary>
                            <p>Da! OncoGen oferă producție GMP certificată EMA. Contactează biotech@oncogen.ro pentru detalii și prezentă.</p>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h4>Cum ajung la OncoGen?</h4>
                            </summary>
                            <p>Adresa noastră este bd. Liviu Rebreanu, nr. 156, Timișoara. Disponibile sunt parcare și acces public de transport.</p>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h4>Puteți vizita laboratoarele?</h4>
                            </summary>
                            <p>Vizitele sunt binevenite pentru parteneri și colaboratori. Contactează office@oncogen.ro pentru programare.</p>
                        </details>

                        <details className="faq-item">
                            <summary>
                                <h4>Cum mă pot abona la newsletter?</h4>
                            </summary>
                            <p>Mergi la pagina <Link href="/stiri">Știri</Link> și completează formularul de abonare la newsletter-ul nostru.</p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
}
