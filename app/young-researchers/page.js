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
                    <p>
                        Departamentul OncoGen Young Researchers constituie un context educațional în care elevii de
                        liceu și studenții au posibilitatea de a se forma în domeniul cercetării biomedicale și de a
                        beneficia de sprijinul cercetătorilor cu experiență din cadrul Centrului de Terapii Genice și
                        Celulare în Tratamentul Cancerului – Centrul de excelență OncoGen, pentru dezvoltarea de
                        proiecte de cercetare care se pot concluziona prin redactarea și publicarea de articole
                        științifice și participarea la congrese și competiții.
                    </p>
                    <p>
                        Centrul OncoGen își dorește să stimuleze capacitatea creativă a tinerilor și să îi îndrume
                        spre a face cele mai bune alegeri în privința formării lor ulterioare. Colectivul OncoGen
                        susține participanții inclusiv în realizarea dosarelor de admitere la universități și programe
                        de master în străinătate.
                    </p>
                </div>
            </section>

            <section className="content-section bg-light">
                <div className="container">
                    <h2>Istoric</h2>
                    <div className="content-grid">
                        <div className="content-card">
                            <h3>2011+ · Începuturile</h3>
                            <p>
                                Activitățile de voluntariat și mentorat în cercetare au continuat eforturile
                                cercetătorilor centrului începute încă din 2011, sub forma unui cerc științific în
                                cadrul disciplinei de Imunologie-Fiziologie a UMFT.
                            </p>
                            <p>
                                Centrul OncoGen a sprijinit continuu educația în cercetarea fundamentală a studenților,
                                inclusiv prin integrarea acestora în programul VADA la disciplinele de Imunologie și
                                alergologie, Biologie și Fiziologie din cadrul Universității de Medicină și Farmacie
                                „Victor Babeș” din Timișoara.
                            </p>
                        </div>

                        <div className="content-card">
                            <h3>2017 · Extindere către liceeni</h3>
                            <p>
                                Asociația OncoGen a început promovarea cercetării biomedicale în rândul elevilor de
                                liceu. Prin Inspectoratul Școlar Județean Timiș au fost invitați elevi și cadre
                                didactice de la licee din Timișoara pentru vizite în Centrul OncoGen.
                            </p>
                            <p>
                                Printre rezultate notabile este participarea la ICCET 2019 – International Conference on
                                Computing in Engineering and Technology (finala la Moscova), pe teme de biologie
                                moleculară și inginerie genetică, inclusiv tema CRISPR.
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
                        <a href="https://oncogen.ro/ro/young-researchers/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                            Sursa originală a informațiilor
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
