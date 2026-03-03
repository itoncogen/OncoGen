'use client';

import { useState } from 'react';

export default function ContactForm({ isSent, errorMessage }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit() {
        setIsSubmitting(true);
    }

    return (
        <div className="contact-form-container">
            <h2>Trimite-ne un mesaj</h2>
            {isSent && (
                <p className="form-success" role="status">
                    Mesajul a fost trimis cu succes. Îți mulțumim!
                </p>
            )}
            {errorMessage && !isSent && (
                <p className="form-error" role="alert">
                    {errorMessage}
                </p>
            )}

            <form className="contact-form" method="POST" action="/api/contact" onSubmit={handleSubmit}>
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

                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: 'none' }}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? 'Se trimite...' : 'Trimite Mesaj'}
                </button>
            </form>
        </div>
    );
}