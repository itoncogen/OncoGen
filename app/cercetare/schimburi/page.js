'use client'
import { useState } from 'react'
import Link from 'next/link';

const students = [
	{ name: 'Ming-Yi Tsai', university: 'Universitatea de Medicină din Taipei, Taiwan' },
	{ name: 'Jakub Michalak', university: 'Universitatea din Opole, Polonia' },
	{ name: 'Teodor Sefcovic', university: 'Universitatea Masaryk din Brno, Republica Cehă' },
	{ name: 'Marina-Claudia-Cătălina Miron', university: 'Informatică Aplicată, Universitatea de Vest Timișoara, România' },
	{ name: 'Raul-Mihai Rădulescu', university: 'Inteligență Artificială, Universitatea de Vest Timișoara, România' },
	{ name: 'Biro Barna', university: 'Facultatea de Medicină și Farmacie Oradea, România' },
];

export default function SchimburiPage() {
	const [openIndex, setOpenIndex] = useState(null)
	const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <span>Schimburi de experiență</span>
				</div>
			</div>

			<section className="hero-secondary">
				<div className="container">
					<h1>Schimburi de experiență</h1>
					<p>Studenți și tineri cercetători care au efectuat stagii de cercetare la OncoGen</p>
				</div>
			</section>

			<section className="content-section">
				<div className="container">
					<div className="content-card description-card intro-card">
						<ul className="intro-bullets">
							<li>
								<p className="section-intro">
									La OncoGen încurajăm și sprijinim tinerii cercetători să își înceapă aventura în lumea cercetării medicale,
									oferindu-le suportul necesar pentru a-și dezvolta ideile și a face descoperiri inovatoare. Suntem dedicați
									în a crea un mediu propice în care acești tineri să-și poată exprima creativitatea și să-și valorifice
									potențialul maxim.
								</p>
							</li>
							<li>
								<p className="section-intro">
									În efortul nostru de a revoluționa domeniul medical, punem la dispoziție resursele, expertiza și
									infrastructura necesară pentru a-i încuraja pe tinerii cercetători să facă primii pași în cariera lor
									promițătoare. Credem în puterea noilor generații de a transforma lumea medicală și suntem mândri să fim
									alături de ei în acest drum către progres și inovație.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="content-section bg-light">
				<div className="container">
					<h2>Studenți care au efectuat stagii de schimb de experiență</h2>
					<div className="committee-list">
						{students.map((student) => (
							<div key={student.name} className="committee-member">
								<h4>{student.name}</h4>
								<p>{student.university}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="content-section">
				<div className="container">
					<h2>Impresii după stagii</h2>
					<p className="section-intro">
						Iată impresiile acestora după ce au luat parte la activitățile științifice din cadrul laboratoarelor noastre:
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>

						<div className="car-nk-accordion-item">
							<button className="car-nk-accordion-btn" onClick={() => toggle(0)}>
								Ming-Yi Tsai
								<span className="car-nk-accordion-icon">{openIndex === 0 ? '−' : '+'}</span>
							</button>
							{openIndex === 0 && (
								<div className="car-nk-accordion-body">
									<p><em>Universitatea de Medicină din Taipei, Taiwan — IFMSA SCORE — 08.2023</em></p>
									<p>
										Am lucrat pe proiectul „The Impact Ragweed Pollen and Dust-Mite Allergens Have on the Respiratory
										Mucosa." Am avut o înțelegere mai profundă a ambroziei, mecanismului imun și imunoterapiei. Am avut
										oportunitatea de a mă alătura procesului de la designul experimentului până la analiza datelor.
									</p>
									<p>
										Îmi exprim cea mai profundă apreciere tutorilor mei, Dr. Bunu, Roxana, Lauriana, Manuela și
										Centrului OncoGen. Vă mulțumesc pentru că ați explicat întotdeauna totul cu răbdare și m-ați
										încurajat să pun întrebări.
									</p>
									<p>Mulțumesc!</p>
									<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
										<img src="/images/ming-yi-tsai-1.jpg" alt="Ming-Yi Tsai în laborator la OncoGen" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
										<img src="/images/ming-yi-tsai-2.jpeg" alt="Ming-Yi Tsai lucrând la bancul de laborator" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
										<img src="/images/ming-yi-tsai-3.jpg" alt="Ming-Yi Tsai pipetând în laborator" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
									</div>
								</div>
							)}
						</div>

						<div className="car-nk-accordion-item">
							<button className="car-nk-accordion-btn" onClick={() => toggle(1)}>
								Teodor Sefcovic
								<span className="car-nk-accordion-icon">{openIndex === 1 ? '−' : '+'}</span>
							</button>
							{openIndex === 1 && (
								<div className="car-nk-accordion-body">
									<p>
										My name is Teodor Sefcovic and I am currently in my fifth year of medical school at Masaryk University of Brno,
										Czech Republic. As an IFMSA student I was applying for Timisoara because I really liked the idea of project The
										Impact Ragweed Pollen and Dust-mite Allergens Have on the Respiratory Mucosa because in Romania, ragweed is one
										of the most important allergen sources with a strong impact on human health. I had some academic background to
										become competent contributor for the research team in OncoGen center. This center for research is far and near
										the most modern one I have seen. Moreover, assisting in this research in the medical domain of Immunology and
										Allergology will directly complement my career as I might pursue a M.D. in this field in the future.
									</p>
									<p>
										My laboratory skills were improving daily because my tutors were really helpful to show me as much as they could.
										Under supervision I had a chance to work with E.coli, we also worked with the RBL cell line, we were preparing
										growth media, we did a cell counting, we were adjusting the parameters (pH), our daily routine was using
										ultracentrifuge and interpretation of data and so on. I had a chance to attend a clinical part in an Allergology
										clinic, where I could see patients allergic to Ragweed and I could connect the laboratory work and the clinical
										part of the medicine.
									</p>
									<p>
										In conclusion, I would like to say huge thanks to my tutors and to OncoGen center, that I could be a part of the
										team for this month. I am sure i learned a lot of knowledge which will help me to be a better professional in my
										future career.
									</p>
									<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
										<img src="/images/teodor-sefcovic-1.jpeg" alt="Teodor Sefcovic pipetând în laborator" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
										<img src="/images/teodor-sefcovic-2.jpg" alt="Teodor Sefcovic lucrând la bancul de laborator" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
										<img src="/images/teodor-sefcovic-3.jpg" alt="Teodor Sefcovic în laborator la OncoGen" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
									</div>
								</div>
							)}
						</div>

						<div className="car-nk-accordion-item">
							<button className="car-nk-accordion-btn" onClick={() => toggle(2)}>
								Jakub Michalak
								<span className="car-nk-accordion-icon">{openIndex === 2 ? '−' : '+'}</span>
							</button>
							{openIndex === 2 && (
								<div className="car-nk-accordion-body">
									<p>Buna dimineața, salut!</p>
									<p>
										My name is Jakub, I&apos;m studying medicine in Opole, Poland. In august I had an opportunity to be a part of the OncoGen research team in the allergology department.
									</p>
									<p>
										These few weeks have been wonderful and very motivating! We were treated like a family – we have experienced the research process together, from the experiment planning phase to analyzing the results. We helped in other projects but we also tried to do some work ourselves under supervision.
									</p>
									<p>
										The laboratory is very well equipped and the researchers are very professional in everything they do – they are excellent in teaching and I feel very motivated to pursue this kind of career in the future thanks to them!
									</p>
									<p>
										We are very grateful for the opportunity to discover the scientific process in the beautiful city of Timișoara. I&apos;m looking forward to visiting Romania again in the future!
									</p>
									<p>Mulțumesc, ciao!</p>
									<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
										<img src="/images/jakub-michalak-1.jpg" alt="Jakub Michalak lucrând cu instrumente de laborator" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
										<img src="/images/jakub-michalak-2.jpeg" alt="Jakub Michalak pipetând în laborator" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
										<img src="/images/jakub-michalak-3.jpeg" alt="Jakub Michalak și coleg la centrifugă" style={{ width: '32%', minWidth: '200px', flex: '1', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
									</div>
								</div>
							)}
						</div>

					</div>

					<div className="section-cta">
						<Link href="/young-researchers" className="btn btn-primary">Young Researchers →</Link>
					</div>
				</div>
			</section>
		</>
	);
}
