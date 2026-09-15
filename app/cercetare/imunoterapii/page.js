import Link from 'next/link';

export default function ImunoterapiiPage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <span>Cercetarea în domeniul imunoterapiilor</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Cercetarea în Domeniul Imunoterapiilor</h1>
					<p>Imunoterapii avansate și personalizate pentru tratamentul cancerului, alergiilor și bolilor cronice degenerative</p>
				</div>
			</section>

			<section className="content-section">
				<div className="container">
					<h2>Obiective</h2>
					<p className="section-intro">
						Prin dezvoltarea metodelor avansate de prevenție și terapie – imunoterapii, care sunt extrem de eficiente
						în tratamentul cancerului, alergiilor și bolilor cronice degenerative (boala Alzheimer), ne-am propus să
						îmbunătățim semnificativ sănătatea populației, îmbunătățind astfel calitatea vieții și reducând totodată
						costurile serviciilor medicale în anumite boli.
					</p>
					<p className="section-intro">
						În același timp, vor fi dezvoltate noi kituri de diagnostic și terapie țintită pentru bolile alergice,
						folosind epitopi recombinanți specifici. Cunoștințele obținute din cercetările fundamentale în acest domeniu
						vor servi ulterior pentru a stabili proceduri de lucru reproductibile care vor ghida producția GMP de celule
						pentru studii clinice. La Centrul OncoGen, ne propunem să creăm un nucleu de competență științifică la
						standardele europene pentru imunoterapia personalizată.
					</p>
				</div>
			</section>

			<section className="content-section bg-light">
				<div className="container">
					<div className="content-grid">

						<div className="content-card">
							<h3>a) CAR-T cells &amp; CAR-NK</h3>
							<p><strong>Receptori himerici de antigen în onco-imunoterapie folosind celule natural killer</strong></p>
							<p>
								Celulele Natural Killer (NK) reprezintă o populație de limfocite foarte atractive pentru
								imunoterapia cancerului, datorită capacității lor de a liza țintele tumorii fără sensibilizare
								prealabilă și fără a fi nevoie de compatibilitatea antigenilor leucocitelor umane.
							</p>
							<p>
								Obiectivul principal a fost de a dezvolta noi CAR-uri adecvate în special în terapiile cu celule NK,
								reprezentând cea mai recentă terapie personalizată anti-tumorală. Tehnologia poate fi extinsă la
								antigene tumorale pentru cancerul ovarian, de colon, de sân și cel pulmonar.
							</p>
							<Link href="/proiecte/car-nk" className="read-more">Vezi proiectul CAR-NK →</Link>
						</div>

						<div className="content-card">
							<h3>b) INSPIRED</h3>
							<p><strong>Strategii inovatoare pentru prevenția, diagnosticarea și terapia bolilor respiratorii induse de polenul de ambrozie</strong></p>
							<p>
								Obiectivul principal al proiectului INSPIRED a fost dezvoltarea unui nou kit de diagnostic bazat pe
								utilizarea de alergeni recombinați, specific pentru pacienții alergici la ambrozie, care a țintit
								mai bine terapia bolii și a creat o excelență științifică de nivel înalt în aplicarea tehnologiilor
								avansate bazate pe alergeni recombinanți.
							</p>
							<p>
								Testele de cuantificare a alergenilor pot fi utilizate și pentru a măsura cantitatea de alergeni
								din mediu, contribuind la predicții îmbunătățite ale concentrațiilor polenice.
							</p>
							<Link href="/proiecte/inspired" className="read-more">Vezi proiectul INSPIRED →</Link>
						</div>

						<div className="content-card">
							<h3>c) DECODE</h3>
							<p><strong>Vaccinuri personalizate în cancer și boli infecțioase</strong></p>
							<p>
								Proiectul DECODE urmărește dezvoltarea unui vaccin peptidic profilactic anti-SARS-CoV-2 bazat pe
								peptide sintetice lungi (SLP), selectate pe imunofenotip populațional, cu validare preclinică și
								pregătire pentru studii clinice.
							</p>
							<Link href="/proiecte/decode" className="read-more">Vezi proiectul DECODE →</Link>
						</div>

						<div className="content-card">
							<h3>d) Biomarkeri &amp; Imunosenescență</h3>
							<p><strong>Noi biomarkeri și strategii terapeutice în imunosenescență și imunosenescența asociată bolii Alzheimer</strong></p>
							<p>
								Imunosenescența este definită ca o modificare progresivă a aspectului morfologic și funcțional care
								apare în sistemul imunitar în timpul procesului de îmbătrânire. Obiectivele specifice includ:
							</p>
							<ul>
								<li>Definirea stării imunosenescenței prin introducerea de noi biomarkeri celulari</li>
								<li>Definirea statusului imunosenescenței prin introducerea de markeri serologici noi</li>
								<li>Definirea imunosenescenței asociate cu boala Alzheimer în demența clinică diagnosticată și în stadiile pre-demență</li>
								<li>Explorarea de noi strategii terapeutice imunomodulatoare în imunosenescență</li>
							</ul>
							<Link href="/proiecte/biomarkeri" className="read-more">Vezi proiectul BIOMARKERI →</Link>
						</div>

					</div>
				</div>
			</section>
		</>
	);
}
