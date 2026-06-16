import Link from 'next/link';

export default function SpecialistiPage() {
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Colaborări</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Colaborări</h1>
                </div>
            </section>

            <section className="consiliere-section">
                <div className="container">
                    <h2 className="consiliere-title">Consiliere oncologică online</h2>
                    <div className="consiliere-content">
                        <p className="consiliere-desc">
                            Pentru programări și informații legate de consilierea oncologică online, puteți contacta specialiștii noștri la:
                        </p>
                        <div className="consiliere-contacts">
                            {/* Adaugă aici numerele de telefon și adresele de email */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="colaborator-card">
                        <h2 className="colaborator-name">Dr. Doru Paul, Ph.D.</h2>
                        <p className="colaborator-affiliation">
                            <span style={{textTransform: 'uppercase'}}>Associate Professor</span> — Weill Cornell University, New York
                        </p>

                        <p className="colaborator-bio">
                            Dr. Paul este un expert în tratamentul cancerului de sferă ORL, pulmonar și tiroidian, având o experiență îndelungată în dezvoltarea abordărilor multidisciplinare de succes pentru tratarea acestor afecțiuni. A avut, de asemenea, contribuții majore ca cercetător translațional și clinic. Demonstrând o prezență națională și internațională în domeniul oncologiei, el și-a prezentat pe larg cercetările care definesc ținte moleculare sau procese terapeutice specifice pentru îmbunătățirea tratamentului pacienților cu cancer.
                        </p>

                        <p className="colaborator-bio">
                            <strong>Post actual:</strong> Medic Specialist, Divizia de Hematologie și Oncologie Medicală, Weill Cornell, New York.
                        </p>

                        <p className="colaborator-affiliation">
                            <span style={{textTransform: 'uppercase'}}>Visiting Professor</span> - Universitatea de Medicină și Farmacie &quot;Victor Babeș&quot; Timișoara din anul 2019
                        </p>

                        <div className="colaborator-grid">
                            <div>
                                <h3 className="colaborator-subtitle">Specialități</h3>
                                <ul className="colaborator-list">
                                    <li>Oncologie medicală</li>
                                    <li>Hematologie</li>
                                    <li>Medicină internă</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="colaborator-subtitle">Experiență</h3>
                                <ul className="colaborator-list">
                                    <li>Cancere de sferă ORL</li>
                                    <li>Cancer pulmonar</li>
                                    <li>Cancer de tiroidă</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="colaborator-subtitle">Activitate de cercetare</h3>
                        <p className="colaborator-bio">
                            Dr. Paul are o istorie importantă ca cercetător translațional și clinic. Din 2003 și până în prezent, a fost cercetător principal sau investigator principal local în 40 de studii clinice, și investigator principal asociat în alte 20. A conceput și a efectuat mai multe studii inițiate în calitate de investigator, și a inițiat 3 studii aprobate de FDA pentru investigarea de noi medicamente. El a conceput primul studiu pilot de utilizare a fluorodeoxiglucozei (FDG) pentru tratamentul targetat al cancerului uman, obținând aprobarea de la FDA și finanțare de la Institutul Northwell Health Cancer.
                        </p>

                        <h3 className="colaborator-subtitle">Formare profesională</h3>
                        <p className="colaborator-bio">
                            Dr. Paul a obținut diploma de medic urmând cursurile Facultății de Medicină Carol Davila din București în anul 1993. De la Facultatea Paris 7 (Universitatea Paris Diderot), în anul 1995 a obținut diploma de Oncologie Clinică și în 1996 a obținut diploma de Chronobiologie și Masteratul în Biologia Îmbătrânirii de la Facultatea Paris 6. În 2016, Dr. Paul a primit titlul de Doctor în Științe (PhD) <em>summa cum laude</em> în Oncologie Clinică Personalizată, de la Facultatea de Medicină din Craiova, România. După rezidențiatul în medicină internă de la Spitalul Jacobi din Bronx, în 2002 a absolvit un fellowship în hematologie și oncologie medicală la Montefiore Hospital.
                        </p>
                        <p className="colaborator-bio">
                            Între 2003 și 2012 a fost Junior Faculty Member (Șef de lucrări) la Weill Cornell Medical College, perioadă când a fost și medic specialist în Hematologie-Oncologie la Lincoln Medical and Mental Health Center. Între 2012 și 2018, a fost Assistant Professor de Medicină la Northwell Hofstra School of Medicine și Medic Specialist la Northwell Health Monter Cancer Center. Începând din anul 2018 este Associate Professor la Weill College of Cornell University.
                        </p>

                        <h3 className="colaborator-subtitle">Studii profesionale</h3>
                        <ul className="colaborator-list">
                            <li>Rezidență în medicină internă — Albert Einstein College of Medicine, Bronx, New York, 1996–99</li>
                            <li>Fellowship, Hematologie și Oncologie — Montefiore Hospital, New York, 1999–2002</li>
                        </ul>

                        <p className="colaborator-bio" style={{ marginTop: '16px' }}>
                            <a href="https://www.asociatiaheal.ro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--magenta)' }}>
                                www.asociatiaheal.ro
                            </a>{' '}— site îndrumător pentru consiliere oncologică
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="colaborator-card">
                        <h2 className="colaborator-name">Dr. Michael Schenker</h2>
                        <p className="colaborator-affiliation">
                            <span style={{textTransform: 'uppercase'}}>Director Medical &amp; Medic Primar Oncolog</span> — Centrul de Oncologie &quot;Sfântul Nectarie&quot;, Craiova &amp; Spitalul Clinic Județean de Urgență Craiova
                        </p>

                        <p className="colaborator-bio">
                            Dr. Michael Schenker este unul dintre cei mai cunoscuți medici oncologi din România, al cărui nume a atras la Craiova pacienți cu cancer din toată țara. Este Directorul Medical al Centrului de Oncologie &quot;Sfântul Nectarie&quot;, unul dintre cele mai performante centre oncologice din țară, unde toate serviciile medicale prestate sunt gratuite pentru pacienți, centrul fiind contractat cu Casa Națională de Asigurări de Sănătate.
                        </p>

                        <div className="colaborator-grid">
                            <div>
                                <h3 className="colaborator-subtitle">Funcții</h3>
                                <ul className="colaborator-list">
                                    <li>Director Medical — Centrul de Oncologie &quot;Sf. Nectarie&quot;, Craiova</li>
                                    <li>Șef de secție — SCJU Craiova</li>
                                    <li>Președinte al Comisiei de Oncologie — Ministerul Sănătății</li>
                                    <li>Vicepreședinte al Societății Naționale de Oncologie</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="colaborator-subtitle">Specializare</h3>
                                <ul className="colaborator-list">
                                    <li>Oncologie medicală</li>
                                    <li>Radioterapie avansată</li>
                                    <li>Management oncologic multidisciplinar</li>
                                    <li>Sinergii public-privat în oncologie</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="colaborator-subtitle">Centrul de Oncologie &quot;Sfântul Nectarie&quot;</h3>
                        <p className="colaborator-bio">
                            Centrul oferă servicii complete de oncologie — consultații, chimioterapie, radioterapie, investigații — toate gratuite pentru pacienți prin contractul cu CNAS. Dr. Schenker a construit centrul de la zero, cu scopul explicit de a pune la dispoziția pacienților oncologici din Oltenia și din întreaga țară servicii medicale de înaltă calitate, fără costuri suplimentare. Centrul dispune de aparatură de radioterapie de ultimă generație, complementară celei de la SCJU Craiova.
                        </p>

                        <h3 className="colaborator-subtitle">Viziune și activitate</h3>
                        <p className="colaborator-bio">
                            Dr. Schenker promovează un model de îngrijire integrată a pacientului oncologic, bazat pe interdisciplinaritate și pe colaborarea dintre sectorul public și cel privat. Subliniază că un pacient cu cancer are nevoie de mult mai mult decât un diagnostic și tratament — are nevoie de o echipă completă care să gestioneze toate complicațiile asociate, de la hepatită și diabet, până la tromboembolism sau infecții severe. Pacienții sunt îndrumați între cele două instituții în funcție de nevoile lor specifice, fără competiție între ele.
                        </p>
                        <p className="colaborator-bio">
                            Aproximativ 60% dintre pacienții centrului provin din județele din jur și din București. Prezența sa a menținut în regiune mulți pacienți care anterior se deplasau la București sau Cluj. A susținut activ și reabilitarea Clinicii de Oncologie de la SCJU Craiova, modernizată cu lifturi dedicate pacienților și aparatură de ultimă generație.
                        </p>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="colaborator-card">
                        <h2 className="colaborator-name">Prof. Dr. Carmen Panaitescu</h2>
                        <p className="colaborator-affiliation">
                            <span style={{textTransform: 'uppercase'}}>Profesor Universitar &amp; Medic Primar</span> — Alergologie și Imunologie Clinică<br />
                            Universitatea de Medicină și Farmacie &quot;Victor Babeș&quot; Timișoara, Spitalul Clinic Județean de Urgență &quot;Pius Brînzeu&quot; Timișoara
                        </p>

                        <p className="colaborator-bio">
                            Prof. Dr. Carmen Bunu-Panaitescu este medic primar în Alergologie și Imunologie Clinică și în Explorări Funcționale, cu o vastă experiență în domeniul medical și în cercetare. Activează în cadrul Universității de Medicină și Farmacie &quot;Victor Babeș&quot; din Timișoara, unde coordonează lucrări de doctorat și programul rezidențial pentru specialitatea de Alergologie și Imunologie Clinică.
                        </p>

                        <div className="colaborator-grid">
                            <div>
                                <h3 className="colaborator-subtitle">Specialități</h3>
                                <ul className="colaborator-list">
                                    <li>Alergologie și Imunologie Clinică</li>
                                    <li>Explorări Funcționale</li>
                                    <li>Imunoterapie alergen-specifică</li>
                                    <li>Terapie cu anticorpi monoclonali</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="colaborator-subtitle">Afecțiuni tratate</h3>
                                <ul className="colaborator-list">
                                    <li>Alergii respiratorii și cutanate</li>
                                    <li>Rinită alergică și astm bronșic</li>
                                    <li>Urticarie și angioedem</li>
                                    <li>Alergii alimentare și la medicamente</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="colaborator-subtitle">Metode diagnostice</h3>
                        <ul className="colaborator-list">
                            <li>Teste cutanate (skin prick test) la pneumoalergeni și alimente</li>
                            <li>Teste de provocare orală la aspirină, oculară și nazală la alergene</li>
                            <li>Teste pentru evaluarea dermatitei de contact (patch) — metale, cosmetice, detergenți, antibiotice, materiale dentare</li>
                            <li>Spirometrie, PEFmetrie, rinomanometrie computerizată</li>
                            <li>Test de provocare bronșică la metacolină și test de bronhodilatație</li>
                        </ul>

                        <h3 className="colaborator-subtitle">Metode terapeutice</h3>
                        <ul className="colaborator-list">
                            <li>Terapie nemedicamentoasă și medicamentoasă</li>
                            <li>Terapie cu anticorpi monoclonali în astmul sever și urticarie</li>
                            <li>Imunoterapie alergen-specifică (desensibilizări) pentru rinită și astm alergic</li>
                        </ul>

                        <h3 className="colaborator-subtitle">Activitate de cercetare</h3>
                        <p className="colaborator-bio">
                            Prof. Dr. Panaitescu este lider de proiect în numeroase proiecte de cercetare naționale și internaționale. Cea mai importantă direcție de cercetare vizează studii legate de alergia la polenul de ambrozie, în cadrul proiectului INSPIRED derulat în parteneriat cu Universitatea de Medicină din Viena, având ca scop final obținerea unui vaccin împotriva acestei alergii.
                        </p>

                        <h3 className="colaborator-subtitle">Clinici de activitate</h3>
                        <ul className="colaborator-list">
                            <li>Medici&apos;s Clinics — str. Dimitrie Paciurea nr. 5, Timișoara</li>
                            <li>MedLife Medici&apos;s Academica — Bul. Circumvalațiunii nr. 8-10, Timișoara</li>
                            <li>Profilaxis — str. 1 Decembrie 1918 nr. 106, Timișoara</li>
                        </ul>

                        <h3 className="colaborator-subtitle">Programari online:</h3>
                        <p claasName="cloaborator-bio">
                            https://programari.hosptm.ro/
                        </p>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="colaborator-card">
                        <h2 className="colaborator-name">Asociația Heal — Navigare, Second Opinion și Tumor Board</h2>
                        <p className="colaborator-affiliation">
                            <a href="https://www.asociatiaheal.ro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--magenta)' }}>
                                www.asociatiaheal.ro
                            </a>
                        </p>

                        <p className="colaborator-bio">
                            Asociația Heal îmbunătățește accesul la expertiză medicală adecvată și la o asistență colaborativă și coordonată. Ghidează pașii pacienților diagnosticați cu cancer de la diagnostic, la terapie, la reabilitarea după tratament, alături de ei, de medicii lor și de familiile lor, la fiecare pas și cu fiecare nevoie.
                        </p>

                        <p className="colaborator-bio">
                            Asociația Heal a fost înființată de către un grup de medici și pasionați ai sănătății digitale, dornici să schimbe sistemul de îngrijire și calitatea vieții bolnavilor de cancer din România. Prin proiectele sale și prin dezvoltarea unei rețele internaționale de tele-expertiză oncologică, toți pacienții români pot avea acces la un diagnostic precis și la cel mai potrivit tratament, cât mai aproape de locul în care trăiesc.
                        </p>

                        <div className="colaborator-grid">
                            <div>
                                <h3 className="colaborator-subtitle">Navigare și Consiliere</h3>
                                <p className="colaborator-bio">
                                    Serviciul de navigare oferă suport personalizat și sprijin în problemele practice, fizice și emoționale care pot apărea atunci când cineva se confruntă cu un diagnostic de cancer. Ajută pacientul să navigheze sistemul de sănătate prin identificarea resurselor adecvate pentru diagnosticul său, coordonează serviciile de care are nevoie și îl învață să comunice eficient cu echipa medicală.
                                </p>
                            </div>
                            <div>
                                <h3 className="colaborator-subtitle">Second Opinion</h3>
                                <p className="colaborator-bio">
                                    Serviciul de Second Opinion facilitează persoanelor care au primit deja un diagnostic oncologic accesul la o echipă de experți din țară și străinătate pentru a obține o a doua opinie independentă. Evaluările pot aduce deseori o perspectivă nouă asupra situației medicale, utile atât pacienților, cât și medicilor curanți.
                                </p>
                            </div>
                        </div>

                        <h3 className="colaborator-subtitle">Tumor Board</h3>
                        <p className="colaborator-bio">
                            Serviciul Tumor Board este instrumentul dezvoltat pentru crearea unei rețele de asistență medicală colaborativă multi-disciplinară și schimb transfrontalier de experiență profesională. Abordarea colaborativă pune pacientul în centrul procesului de îngrijire, astfel încât acesta să poată lua cele mai bune decizii în ceea ce privește sănătatea sa. Serviciul oferă toate avantajele unei a doua opinii, asigurând în același timp că medicii unui consiliu multidisciplinar sunt în consens, reducând erorile și rezolvând orice potențial conflict privind diagnosticul și planul de tratament.
                        </p>

                        <h3 className="colaborator-subtitle">Misiune</h3>
                        <p className="colaborator-bio">
                            Este timpul să găsim soluții și să depășim obstacolele pe care bolnavii de cancer le întâmpină zi de zi într-un sistem sanitar haotic. Asociația Heal dorește ca sutele de mii de pacienți oncologici din țară, indiferent de zona în care locuiesc sau de situația lor financiară, să aibă acces la informare corectă, resurse adecvate și opțiuni terapeutice conforme protocoalelor la nivel mondial.
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="colaborator-card">
                        <h2 className="colaborator-name">Centrul de Sănătate „Sfântul Nectarie"</h2>
                        <p className="colaborator-affiliation">
                            <a href="https://www.nectarie6.ro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--magenta)' }}>
                                www.nectarie6.ro
                            </a>
                            {' '}— Centru în subordinea Primăriei Sectorului 6
                        </p>

                        <p className="colaborator-bio">
                            Centrul de Sănătate „Sfântul Nectarie", aflat în subordinea Primăriei Sectorului 6, este situat în zona Lujerului, cartier Militari. Este singura clinică de stat din Sectorul 6 dotată cu aparatură de specialitate, pregătită să stabilească un diagnostic prin intermediul celor mai noi metode de investigație, în sistem ambulatoriu.
                        </p>

                        <p className="colaborator-bio">
                            Motto-ul clinicii — <em>„Oamenii sunt grija noastră"</em> — reflectă valorile care ghidează misiunea de a oferi tuturor un act medical complet, performant și accesibil, inclusiv persoanelor cu situație materială dificilă din Sectorul 6.
                        </p>

                        <h3 className="colaborator-subtitle">Specialități medicale</h3>
                        <p className="colaborator-bio">
                            Stomatologie, oftalmologie, medicină internă, ortopedie, gastroenterologie, recuperare medicală, ginecologie, ORL, chirurgie generală, psihiatrie, pediatrie, cardiologie, dermatologie, endocrinologie, pneumologie, neurochirurgie, urologie, psihologie clinică, chirurgie cardio-vasculară, medicină a muncii, diabet zaharat, nutriție și boli metabolice, radiologie și imagistică medicală.
                        </p>

                        <h3 className="colaborator-subtitle">Servicii disponibile</h3>
                        <ul className="colaborator-list">
                            <li>Servicii de diagnostic și terapie în sistem ambulatoriu</li>
                            <li>Laborator de analize medicale complete</li>
                            <li>Serviciu de salinoterapie în incinta salinei</li>
                            <li>Pachete medicale personalizate pentru toți membrii comunității</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
