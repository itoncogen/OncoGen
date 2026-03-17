import '../app/globals.css';
import Link from 'next/link';

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
                                    <li><Link href="/cercetare">Cercetare</Link></li>
                                    <li><Link href="/hub-biotech">Hub Biotehnologii</Link></li>
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
                        </div>
                    </div>
                </header>

                <main>{children}</main>

                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <h4>OncoGen</h4>
                                <p>Centrul de Cercetare și Microproducție</p>
                            </div>
                            <div className="footer-section">
                                <h4>Contact</h4>
                                <p>📍 <a href="https://www.google.com/maps/search/bd.+Liviu+Rebreanu+156,+300723+Timișoara,+Romania"
                                    target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>bd. Liviu Rebreanu, nr.
                                    156<br />300723 Timișoara, Romania</a></p>
                                <p>📧 office@oncogen.ro</p>
                            </div>
                            <div className="footer-section">
                                <h4>Link-uri Rapide</h4>
                                <ul>
                                    <li><Link href="/">Acasă</Link></li>
                                    <li><Link href="/despre">Despre</Link></li>
                                    <li><Link href="/proiecte">Proiecte</Link></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h4>Social Media</h4>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/oncogentimisoara" className="social-icon" target="_blank">f</a>
                                    <a href="https://x.com/OncoGenRO" className="social-icon" target="_blank">𝕏</a>
                                    <a href="https://www.youtube.com/channel/UC_NTOP1WLpOh75okT7Qnuuw/featured" className="social-icon" target="_blank">▶</a>
                                    <a href="https://www.linkedin.com/company/oncogen/about/" className="social-icon" target="_blank">in</a>
                                </div>
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