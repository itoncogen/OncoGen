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
                <p className="form-success" role="status">
                    Mesajul a fost trimis cu succes. Îți mulțumim!
                </p>
            )}

            {errorMessage && (
                <p className="form-error" role="alert">
                    {errorMessage}
                </p>
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
                    <input type="text" id="subiect" name="Subiect" required />
                </div>

                <div className="form-group">
                    <label htmlFor="mesaj">Mesaj *</label>
                    <textarea id="mesaj" name="Mesaj" rows={5} required />
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                </button>
            </form>
        </div>
    );
}