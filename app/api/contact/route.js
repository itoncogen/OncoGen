import { NextResponse } from 'next/server';

const SUBJECT_LABELS = {
    general: 'Informații Generale',
    research: 'Colaborare în Cercetare',
    services: 'Servicii GMP',
    partnership: 'Parteneriat Biotech',
    media: 'Interogări Media',
    recruitment: 'Cariere',
    other: 'Altele',
};

function redirectWithStatus(request, params) {
    const url = new URL('/contact', request.url);
    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.set(key, value);
        }
    });

    return NextResponse.redirect(url, { status: 303 });
}

export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const phone = String(formData.get('phone') || '').trim();
        const organization = String(formData.get('organization') || '').trim();
        const subject = String(formData.get('subject') || '').trim();
        const message = String(formData.get('message') || '').trim();
        const privacy = formData.get('privacy');
        const website = String(formData.get('website') || '').trim();

        if (website) {
            return redirectWithStatus(request, { sent: '1' });
        }

        if (!name || !email || !subject || !message || !privacy) {
            return redirectWithStatus(request, { error: 'required' });
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        const contactFrom = process.env.CONTACT_FROM_EMAIL;
        const contactTo = process.env.CONTACT_TO_EMAIL;

        if (!resendApiKey || !contactFrom || !contactTo) {
            console.error('Missing contact form env vars: RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL');
            return redirectWithStatus(request, { error: 'config' });
        }

        const selectedSubject = SUBJECT_LABELS[subject] || subject;
        const emailSubject = `[OncoGen] Formular contact: ${selectedSubject}`;

        const text = [
            'Mesaj nou primit din formularul de contact OncoGen',
            '',
            `Nume: ${name}`,
            `Email: ${email}`,
            `Telefon: ${phone || '-'}`,
            `Organizație: ${organization || '-'}`,
            `Subiect: ${selectedSubject}`,
            '',
            'Mesaj:',
            message,
        ].join('\n');

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: contactFrom,
                to: [contactTo],
                reply_to: email,
                subject: emailSubject,
                text,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Resend error:', errorText);
            return redirectWithStatus(request, { error: 'send' });
        }

        return redirectWithStatus(request, { sent: '1' });
    } catch (error) {
        console.error('Contact form unexpected error:', error);
        return redirectWithStatus(request, { error: 'unexpected' });
    }
}