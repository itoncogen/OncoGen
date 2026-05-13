import '../app/globals.css';
import Link from 'next/link';
import NavCercetareDropdown from './components/NavCercetareDropdown';
import NavNoutatiDropdown from './components/NavNoutatiDropdown';
import MobileNav from './components/MobileNav';

export const metadata = {
    title: 'OncoGen',
    description: 'Centrul de Cercetare și Microproducție',
    icons: {
        icon: [
            { url: '/logo-oncogen.png', type: 'image/png' },
        ],
        shortcut: '/logo-oncogen.png',
        apple: '/logo-oncogen.png',
    },
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

                <div className="footer-wave-wrapper" aria-hidden="true">
                    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="footer-wave-svg">
                        <path d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#111111"/>
                        <path d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,40" fill="none" stroke="var(--magenta)" strokeWidth="4"/>
                    </svg>
                </div>
                <footer className="footer">
                    <div className="footer-hexagons" aria-hidden="true">
                        <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg" className="footer-hex-svg">
                            <g fill="none" stroke="rgba(233,30,99,0.12)" strokeWidth="1.5">
                                <polygon points="80,20 120,20 140,54 120,88 80,88 60,54"/>
                                <polygon points="140,20 180,20 200,54 180,88 140,88 120,54"/>
                                <polygon points="200,20 240,20 260,54 240,88 200,88 180,54"/>
                                <polygon points="260,20 300,20 320,54 300,88 260,88 240,54"/>
                                <polygon points="320,20 360,20 380,54 360,88 320,88 300,54"/>
                                <polygon points="380,20 420,20 440,54 420,88 380,88 360,54"/>
                                <polygon points="440,20 480,20 500,54 480,88 440,88 420,54"/>
                                <polygon points="50,88 90,88 110,122 90,156 50,156 30,122"/>
                                <polygon points="110,88 150,88 170,122 150,156 110,156 90,122"/>
                                <polygon points="170,88 210,88 230,122 210,156 170,156 150,122"/>
                                <polygon points="230,88 270,88 290,122 270,156 230,156 210,122"/>
                                <polygon points="290,88 330,88 350,122 330,156 290,156 270,122"/>
                                <polygon points="350,88 390,88 410,122 390,156 350,156 330,122"/>
                                <polygon points="410,88 450,88 470,122 450,156 410,156 390,122"/>
                                <polygon points="470,88 510,88 530,122 510,156 470,156 450,122"/>
                                <polygon points="80,156 120,156 140,190 120,224 80,224 60,190"/>
                                <polygon points="140,156 180,156 200,190 180,224 140,224 120,190"/>
                                <polygon points="200,156 240,156 260,190 240,224 200,224 180,190"/>
                                <polygon points="260,156 300,156 320,190 300,224 260,224 240,190"/>
                                <polygon points="320,156 360,156 380,190 360,224 320,224 300,190"/>
                                <polygon points="380,156 420,156 440,190 420,224 380,224 360,190"/>
                                <polygon points="440,156 480,156 500,190 480,224 440,224 420,190"/>
                                <polygon points="50,224 90,224 110,258 90,292 50,292 30,258"/>
                                <polygon points="110,224 150,224 170,258 150,292 110,292 90,258"/>
                                <polygon points="170,224 210,224 230,258 210,292 170,292 150,258"/>
                                <polygon points="230,224 270,224 290,258 270,292 230,292 210,258"/>
                                <polygon points="290,224 330,224 350,258 330,292 290,292 270,258"/>
                                <polygon points="350,224 390,224 410,258 390,292 350,292 330,258"/>
                                <polygon points="410,224 450,224 470,258 450,292 410,292 390,258"/>
                                <polygon points="470,224 510,224 530,258 510,292 470,292 450,258"/>
                                <polygon points="80,292 120,292 140,326 120,360 80,360 60,326"/>
                                <polygon points="140,292 180,292 200,326 180,360 140,360 120,326"/>
                                <polygon points="200,292 240,292 260,326 240,360 200,360 180,326"/>
                                <polygon points="260,292 300,292 320,326 300,360 260,360 240,326"/>
                                <polygon points="320,292 360,292 380,326 360,360 320,360 300,326"/>
                                <polygon points="380,292 420,292 440,326 420,360 380,360 360,326"/>
                                <polygon points="440,292 480,292 500,326 480,360 440,360 420,326"/>
                                <polygon points="50,360 90,360 110,394 90,428 50,428 30,394"/>
                                <polygon points="110,360 150,360 170,394 150,428 110,428 90,394"/>
                                <polygon points="170,360 210,360 230,394 210,428 170,428 150,394"/>
                                <polygon points="230,360 270,360 290,394 270,428 230,428 210,394"/>
                                <polygon points="290,360 330,360 350,394 330,428 290,428 270,394"/>
                                <polygon points="350,360 390,360 410,394 390,428 350,428 330,394"/>
                                <polygon points="410,360 450,360 470,394 450,428 410,428 390,394"/>
                                <polygon points="470,360 510,360 530,394 510,428 470,428 450,394"/>
                            </g>
                        </svg>
                    </div>
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
