import Link from 'next/link';

export default function LaboratoarePage() {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <span>Compartimente și laboratoare</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Compartimente și laboratoare</h1>
					<p>Infrastructura de cercetare OncoGen – compartimente specializate și laboratoare de ultimă generație</p>
				</div>
			</section>

			<section className="content-section">
				<div className="container">
					<h2>Compartimente</h2>
					<div className="content-grid">
						<Link href="/cercetare/laboratoare/compartiment-gmp" className="content-card content-card-link">
							<h3>Compartiment GMP</h3>
							<p>MICROPRODUCȚIE</p>
							<p>Unitate de producție conform standardelor GMP pentru biomolecule și vectori terapeutici, certificată EMA.</p>
						</Link>
						<Link href="/cercetare/laboratoare/compartiment-hla" className="content-card content-card-link">
							<h3>Compartiment HLA</h3>
							<p>IMUNOLOGIE ȘI COMPATIBILITĂȚI IMUNOLOGICE</p>
							<p>Compartiment dedicat tipizării HLA și evaluării compatibilității imunologice pentru transplant și terapii celulare.</p>
						</Link>
						<Link href="/cercetare/laboratoare/biobaza" className="content-card content-card-link">
							<h3>Biobaza - Departamentul de Medicină Experimentală</h3>
							<p>CERCETARE PRECLINICĂ</p>
							<p>Departament dedicat studiilor preclinice și cercetării pe modele animale pentru validarea terapiilor experimentale.</p>
						</Link>
					</div>
				</div>
			</section>

			<section className="content-section bg-light">
				<div className="container">
					<h2>Laboratoare</h2>
					<div className="content-grid">
						<Link href="/cercetare/laboratoare/biologie-moleculara" className="content-card content-card-link">
						  <h3>Laborator biologie moleculară</h3>
						  <p>Secvențiere ADN, PCR real-time, clonare, mutageneză și tehnici de biologie moleculară avansată.</p>
						</Link>
						<Link href="/cercetare/laboratoare/histologie-imagistica-celulara" className="content-card content-card-link">
							<h3>Laborator histologie și imagistică celulară</h3>
							<p>Preparare și analiză de secțiuni histologice, microscopie avansată și imagistică celulară.</p>
						</Link>
						<Link href="/cercetare/laboratoare/chimie" className="content-card content-card-link">
							<h3>Laborator chimie</h3>
							<p>Analize chimice și biochimice, sinteza și caracterizarea compușilor de interes biomedical.</p>
						</Link>
						<Link href="/cercetare/laboratoare/elisa" className="content-card content-card-link">
							<h3>Laborator ELISA</h3>
							<p>Determinări cantitative de proteine, anticorpi și alți markeri biologici prin tehnica ELISA.</p>
						</Link>
						<Link href="/cercetare/laboratoare/control-calitate" className="content-card content-card-link">
							<h3>Laborator control al calității (QC/GLP)</h3>
							<p>Controlul calității produselor biologice conform standardelor GLP, testare și validare.</p>
						</Link>
						<Link href="/cercetare/laboratoare/proteomica-microarray" className="content-card content-card-link">
							<h3>Laborator proteomică și microarray</h3>
							<p>Analize proteomice, profilare genică prin microarray și identificarea markerilor moleculari.</p>
						</Link>
						<Link href="/cercetare/laboratoare/genomica" className="content-card content-card-link">
							<h3>Laborator genomică</h3>
							<p>Secvențiere de generație următoare (NGS), analiză genomică și bioinformatică.</p>
						</Link>
						<Link href="/cercetare/laboratoare/culturi-celulare" className="content-card content-card-link">
							<h3>Laborator culturi celulare</h3>
							<p>Cultură celulară eucariota și procariota, engineering celular, menținerea liniilor celulare tumorale și stem.</p>
						</Link>
						<Link href="/cercetare/laboratoare/imunofenotipare" className="content-card content-card-link">
							<h3>Laborator imunofenotipare</h3>
							<p>Caracterizarea fenotipică a populațiilor celulare prin markeri de suprafață și intracelulari.</p>
						</Link>
						<Link href="/cercetare/laboratoare/medicina-experimentala" className="content-card content-card-link">
							<h3>Laborator medicină experimentală</h3>
							<p>Studii preclinice pe modele animale, validare in vivo a candidaților terapeutici.</p>
						</Link>
						<Link href="/cercetare/laboratoare/toxicologie" className="content-card content-card-link">
							<h3>Laborator toxicologie</h3>
							<p>Evaluarea toxicității compușilor și produselor biologice în modele in vitro și in vivo.</p>
						</Link>
						<Link href="/cercetare/laboratoare/banca-tesuturi-celule" className="content-card content-card-link">
							<h3>Banca de țesuturi și celule umane</h3>
							<p>Colectare, procesare, crioconservare și stocare de probe biologice umane conform normelor europene.</p>
						</Link>
						<Link href="/cercetare/laboratoare/citometrie-flux" className="content-card content-card-link">
							<h3>Laborator citometrie în flux</h3>
							<p>Analiză și sortare celulară, profilare imunologică, cuantificarea populațiilor celulare.</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
