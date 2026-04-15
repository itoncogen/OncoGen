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
                                    <a href="https://www.facebook.com/oncogentimisoara" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                                    <a href="https://x.com/OncoGenRO" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">𝕏</a>
                                    <a href="https://www.youtube.com/channel/UC_NTOP1WLpOh75okT7Qnuuw/featured" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
                                    <a href="https://www.linkedin.com/company/oncogen/about/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
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
                                <p><a href="tel:+40256495050">+40 256 49 50 50</a></p>
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
