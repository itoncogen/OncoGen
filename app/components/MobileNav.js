'use client';

import { useState } from 'react';
import Link from 'next/link';

const cercetareItems = [
    { href: '/cercetare', label: 'Domenii de cercetare' },
    { href: '/cercetare/imunoterapii', label: 'Cercetarea in domeniul imunoterapiilor' },
    { href: '/cercetare/laboratoare', label: 'Laboratoare si departamente' },
    { href: '/cercetare/publicatii', label: 'Publicatii' },
    { href: '/cercetare/schimburi', label: 'Schimburi de experienta' },
];

const noutatiItems = [
    { href: '/noutati/anunturi', label: 'Anunțuri' },
    { href: '/noutati/articole', label: 'Articole' },
];

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [cercetareOpen, setCercetareOpen] = useState(false);
    const [noutatiOpen, setNoutatiOpen] = useState(false);

    const close = () => {
        setIsOpen(false);
        setCercetareOpen(false);
        setNoutatiOpen(false);
    };

    return (
        <>
            <button
                className="mobile-menu-btn"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? 'Inchide meniul' : 'Deschide meniul'}
                aria-expanded={isOpen}
            >
                <span className={`hamburger ${isOpen ? 'hamburger--open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            {isOpen && (
                <div className="mobile-nav-overlay" onClick={close} aria-hidden="true" />
            )}

            <nav className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`} aria-label="Meniu mobil">
                <ul className="mobile-nav-list">
                    <li><Link href="/" onClick={close}>Acasă</Link></li>
                    <li><Link href="/despre" onClick={close}>Despre</Link></li>
                    <li><Link href="/specialisti" onClick={close}>Specialiști</Link></li>
                    <li><Link href="/stiri" onClick={close}>Știri și Evenimente</Link></li>
                    <li><Link href="/proiecte" onClick={close}>Proiecte</Link></li>

                    <li className="mobile-nav-dropdown">
                        <button
                            className="mobile-nav-dropdown-btn"
                            onClick={() => setCercetareOpen((p) => !p)}
                            aria-expanded={cercetareOpen}
                        >
                            Cercetare
                            <span className={`mobile-nav-arrow ${cercetareOpen ? 'mobile-nav-arrow--open' : ''}`}>▾</span>
                        </button>
                        {cercetareOpen && (
                            <ul className="mobile-nav-submenu">
                                {cercetareItems.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} onClick={close}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li><Link href="/hub-biotech" onClick={close}>Hub Biotehnologii</Link></li>

                    <li className="mobile-nav-dropdown">
                        <button
                            className="mobile-nav-dropdown-btn"
                            onClick={() => setNoutatiOpen((p) => !p)}
                            aria-expanded={noutatiOpen}
                        >
                            Noutăți
                            <span className={`mobile-nav-arrow ${noutatiOpen ? 'mobile-nav-arrow--open' : ''}`}>▾</span>
                        </button>
                        {noutatiOpen && (
                            <ul className="mobile-nav-submenu">
                                {noutatiItems.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} onClick={close}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li><Link href="/contact" onClick={close}>Contact</Link></li>

                    <li className="mobile-nav-divider"></li>
                    <li><Link href="/asociatia" className="mobile-nav-highlight" onClick={close}>ASOCIAȚIA ONCOGEN</Link></li>
                    <li><Link href="/young-researchers" className="mobile-nav-highlight" onClick={close}>YOUNG RESEARCHERS</Link></li>
                </ul>
            </nav>
        </>
    );
}
