import Link from 'next/link';

const members = [
    { name: 'SERGIU MICORICI', role: 'PREȘEDINTE' },
    { name: 'MIHAI FRĂCEA', role: 'MEMBRU ACTIV' },
    { name: 'OANA IUDITA- DAMARIS', role: 'MEMBRU ACTIV' },
    { name: 'CRISTINA LUȚ', role: 'MEMBRU ACTIV' },
    { name: 'IDA ANTONIA REVICZKY-LEVAY', role: 'MEMBRU ACTIV' },
    { name: 'ANDREI TRAIAN HASAS', role: 'MEMBRU ACTIV' },
];

export default function YoungResearchersPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Young Researchers</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>OncoGen Young Researchers</h1>
                    <p>Program educațional și de mentorat pentru elevi și studenți în cercetarea biomedicală.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <h2>Descriere</h2>
                    <p className="section-intro">
                        Programul Young Researchers aduce informația esențială într-un format mai clar, orientat pe beneficii și direcții concrete de dezvoltare.
                    </p>
                    <div className="content-card description-card">
                        <ul>
                            <li>
                                La OncoGen, tinerii cercetători reprezintă viitorul inovației medicale, într-un mediu stimulativ și conectat la tehnologii de ultimă generație.
                            </li>
                            <li>
                                Elevii de liceu, studenții, doctoranzii și postdoctoranzii își pot dezvolta abilitățile și pot contribui activ la proiecte de cercetare de nivel internațional.
                            </li>
                            <li>
                                Programul promovează creativitatea, gândirea critică și spiritul de echipă, încurajând colaborarea dintre specialiști consacrați și noua generație de cercetători.
                            </li>
                            <li>
                                Prin mentorat, training-uri avansate și implicare în proiecte inovatoare, participanții dobândesc experiență practică și expunere la standarde internaționale în terapii genice și celulare.
                            </li>
                            <li>
                                OncoGen își propune să fie un catalizator pentru cariere științifice de succes, transformând pasiunea tinerilor cercetători în descoperiri concrete și soluții medicale cu impact real asupra pacienților.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section bg-light">
                <div className="container">
                    <h2>Istoric</h2>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>2011+ · Începuturile</h3>
                            <p>
                                Activitățile de voluntariat și mentorat în cercetare au continuat eforturile cercetătorilor centrului sub forma unui cerc 
                                științific orgnizat în cadrul Disciplinelor de Imunologie și Fiziologie a UMFT începând din anul 2011.

                            </p>
                            <p>
                                Centrul OncoGen a sprijinit continuu educația în cercetarea fundamentală a studenților, inclusiv prin integrarea acestora în 
                                programul VADA la Catedrele de Alergologie și Imunologie clinică, Biologie și Fiziologie din cadrul Universității de Medicină 
                                și Farmacie „Victor Babeș” din Timișoara.
                            </p>
                        </div>

                        <div className="content-card">
                            <h3>2017 · Promovarea cercetării biomedicale în rândul liceenilor</h3>
                            <p>
                                Asociația OncoGen a inițiat programe dedicate stimulării interesului pentru cercetarea biomedicală în rândul elevilor 
                                de liceu. În colaborare cu Inspectoratul Școlar Județean Timiș, elevi și cadre didactice din liceele din Timișoara au 
                                fost invitați să viziteze Centrul OncoGen, descoperind astfel activitatea de cercetare de nivel internațional și tehnologiile 
                                de ultimă generație.

                            </p>
                            <p>
                                Printre realizările remarcabile ale acestor programe se numără participarea la ICCET 2019 – International Conference on Computing in Engineering 
                                and Technology, a cărei finală s-a desfășurat la Moscova, cu proiecte pe teme de biologie moleculară, inginerie genetică și tehnologia CRISPR. 
                                Această implicare oferă elevilor oportunitatea de a-și dezvolta competențe științifice și de a experimenta cercetarea la cel mai înalt nivel.
                            </p>
                        </div>

                        <div className="content-card">
                            <h3>2020–2023 · Proiecte și competiții</h3>
                            <p>
                                Voluntarii OncoGen Young Researchers au fost implicați în proiecte de modelare moleculară
                                in silico pentru identificarea mutațiilor proteinei Spike SARS-CoV-2.
                            </p>
                            <p>
                                În 2021, o parte din colectiv a demarat proiectul Erevna – Descoperă lumea cercetării
                                biomedicale, care a inclus atât dezvoltarea unei alternative de detecție SARS‑CoV‑2
                                bazată pe CRISPR, cât și instruirea elevilor prin laborator virtual.
                            </p>
                            <p>
                                În 2022, grupul a contribuit la competiția Asthmathon by OncoGen și la evaluarea de
                                proiecte din cadrul UniHack; ulterior, Asociația OncoGen și Young Researchers au
                                coordonat categoria de bioinformatică și informatică medicală din HackTM.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <h2>Echipă</h2>
                    <div className="team-grid">
                        {members.map((member) => (
                            <div key={member.name} className="team-card">
                                <div className="team-avatar">🧪</div>
                                <h3>{member.name}</h3>
                                <p><strong>{member.role}</strong></p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section bg-light">
                <div className="container">
                    <h2>Referințe Publice</h2>
                    <div className="committee-list">
                        <div className="committee-member">
                            <h4>DIGIPEDIA: AI POATE SCHIMBA VIEȚI</h4>
                            <p><a href="https://oncogen.ro/ro/digipedia-ai-poate-schimba-vieti/" target="_blank" rel="noreferrer">Deschide articolul</a></p>
                        </div>
                        <div className="committee-member">
                            <h4>AGENDA ROMÂNIA 4.0</h4>
                            <p><a href="https://oncogen.ro/ro/agenda-romania-4-0/" target="_blank" rel="noreferrer">Deschide articolul</a></p>
                        </div>
                    </div>
                    <div className="section-cta">
                        <Link href="/young-researchers" className="btn btn-secondary">
                            Sursa originală a informațiilor
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
