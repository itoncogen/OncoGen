import '../app/globals.css';
import Link from 'next/link';
import NavCercetareDropdown from './components/NavCercetareDropdown';
import NavNoutatiDropdown from './components/NavNoutatiDropdown';
import MobileNav from './components/MobileNav';

export const metadata = {
    title: 'OncoGen',
    description: 'Centrul de Cercetare și Microproducție',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ro">
            <body>
                <header className="header">
                    <div className="container">
                        <div className="header-content">
                            <Link href="/">
                                <img src="/images/logo-OncoGen.svg" alt="OncoGen Logo" className="logo-img" />
                            </Link>
                            <nav className="nav">
                                <ul>
                                    <li><Link href="/">Acasă</Link></li>
                                    <li><Link href="/despre">Despre</Link></li>
                                    <li><Link href="/stiri">Știri și Evenimente</Link></li>
                                    <li><Link href="/proiecte">Proiecte</Link></li>
                                    <NavCercetareDropdown />
                                    <li><Link href="/hub-biotech">Hub Biotehnologii</Link></li>
                                    <NavNoutatiDropdown />
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                            <div className="header-cta-stack">
                                <div className="header-association">
                                    <Link href="/asociatia" className="header-association-link">
                                        <div className="header-association-text">
                                            <p>ASOCIAȚIA ONCOGEN</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="header-association header-association-secondary">
                                    <Link href="/young-researchers" className="header-association-link">
                                        <div className="header-association-text">
                                            <p>YOUNG RESEARCHERS</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <MobileNav />
                        </div>
                    </div>
                </header>

                <main>{children}</main>

                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <p className="footer-brand-name">OncoGen</p>
                                <p className="footer-brand-sub">Centrul de Cercetare și Microproducție<br />Timișoara, România</p>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/oncogentimisoara" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                        </svg>
                                    </a>
                                    <a href="https://x.com/OncoGenRO" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC_NTOP1WLpOh75okT7Qnuuw/featured" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                                            <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/oncogen/about/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                            <rect x="2" y="9" width="4" height="12"/>
                                            <circle cx="4" cy="4" r="2"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-section">
                                <h4>Contact</h4>
                                <p>
                                    <a href="https://www.google.com/maps/search/bd.+Liviu+Rebreanu+156,+300723+Timișoara,+Romania" target="_blank" rel="noopener noreferrer">
                                        bd. Liviu Rebreanu, nr. 156<br />300723 Timișoara, Romania
                                    </a>
                                </p>
                                <p><a href="mailto:office@oncogen.ro">office@oncogen.ro</a></p>
                            </div>
                            <div className="footer-section">
                                <h4>Navigare</h4>
                                <ul>
                                    <li><Link href="/">Acasă</Link></li>
                                    <li><Link href="/despre">Despre</Link></li>
                                    <li><Link href="/proiecte">Proiecte</Link></li>
                                    <li><Link href="/cercetare">Cercetare</Link></li>
                                    <li><Link href="/hub-biotech">Hub Biotehnologii</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h4>Resurse</h4>
                                <ul>
                                    <li><Link href="/stiri">Știri și Evenimente</Link></li>
                                    <li><Link href="/echipa">Echipa</Link></li>
                                    <li><Link href="/asociatia">Asociația OncoGen</Link></li>
                                    <li><Link href="/young-researchers">Young Researchers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; 2026 OncoGen. Toate drepturile rezervate.</p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
