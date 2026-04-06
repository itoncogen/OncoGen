'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/xeepvlpk', {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setIsSent(true);
                e.target.reset();
            } else {
                setErrorMessage('A apărut o eroare. Te rugăm să încerci din nou.');
            }
        } catch {
            setErrorMessage('A apărut o eroare de rețea. Te rugăm să încerci din nou.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="contact-form-container">
            <h2>Trimite-ne un mesaj</h2>

            {isSent && (
                <div className="form-popup-overlay" role="dialog" aria-modal="true" aria-label="Mesaj trimis cu succes">
                    <div className="form-popup form-popup--success">
                        <button
                            className="form-popup-close"
                            onClick={() => setIsSent(false)}
                            aria-label="Inchide"
                        >
                            &#x2715;
                        </button>
                        <p>Mesajul a fost trimis cu succes. Îți mulțumim!</p>
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="form-popup-overlay" role="dialog" aria-modal="true" aria-label="Eroare trimitere mesaj">
                    <div className="form-popup form-popup--error">
                        <button
                            className="form-popup-close"
                            onClick={() => setErrorMessage('')}
                            aria-label="Inchide"
                        >
                            &#x2715;
                        </button>
                        <p>{errorMessage}</p>
                    </div>
                </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nume Complet *</label>
                    <input type="text" id="name" name="Nume" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="Email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="telefon">Telefon</label>
                    <input type="tel" id="telefon" name="Telefon" />
                </div>

                <div className="form-group">
                    <label htmlFor="organizatie">Organizație</label>
                    <input type="text" id="organizatie" name="Organizatie" />
                </div>

                <div className="form-group">
                    <label htmlFor="subiect">Subiect *</label>
                    <select id="subiect" name="Subiect" required defaultValue="">
                        <option value="" disabled>-- Selectează subiectul --</option>
                        <option value="Informații Generale">Informații Generale</option>
                        <option value="Colaborare în Cercetare">Colaborare în Cercetare</option>
                        <option value="Servicii GMP">Servicii GMP</option>
                        <option value="Parteneriat Biotech">Parteneriat Biotech</option>
                        <option value="Interogări Media">Interogări Media</option>
                        <option value="Cariere">Cariere</option>
                        <option value="Altele">Altele</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="mesaj">Mesaj *</label>
                    <textarea id="mesaj" name="Mesaj" rows={5} required />
                </div>

                <div className="form-group checkbox">
                    <input type="checkbox" id="gdpr" name="GDPR" required />
                    <label htmlFor="gdpr">
                        Sunt de acord cu <a href="/politica-confidentialitate">politica de confidențialitate</a> și <a href="/termeni-utilizare">termenii de utilizare</a>
                    </label>
                </div>

                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Se trimite...' : 'Trimite Mesaj'}
                </button>
            </form>
        </div>
    );
}
