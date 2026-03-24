import Link from 'next/link';
import Image from 'next/image';

export default function CompartimentHlaPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Compartiment HLA</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Compartiment HLA</h1>
          <p>Imunologie și compatibilități imunologice pentru transplant de organe, măduvă și celule stem.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
            <Image 
              src="/images/compartiment-hla.jpg" 
              alt="Compartiment HLA - Laborator de Imunologie" 
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
          <div className="content-card description-card lab-description-card">
            <ul className="lab-description-list">
              <li>Laborator de biologie moleculară pentru imunologia transplantului, dedicat testării histocompatibilității (HLA) pentru pacienții aflați pe lista de așteptare pentru transplant de organe, pentru pacienții care necesită transplant de măduvă și pentru donatorii potențiali intrafamiliari.</li>
              <li>Laboratorul deservește și donatorii de celule stem înscriși în Registrul Național al Donatorilor Voluntari de Celule Stem Hematopoietice Periferice și Centrale.</li>
              <li>Pentru departamentele în care nu se realizează transplante, se pot efectua genotipări HLA specifice asociate cu anumite boli, de exemplu HLA-B*27 în spondilita anchilozantă, HLA-DQ2/DQ8 și HLA-DR4 în boala celiacă.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Extracția ADN-ului</li>
              <li>HLA de rezoluție scăzută, tipizare SSO și SSP</li>
              <li>HLA de înaltă rezoluție, tipizare SBT și SSP</li>
              <li>Interpretarea rezultatelor</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Personal</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Coordonator: Elena Gai, Biolog Principal</li>
              <li>Istodor Loredana, Medic Specialist, Medicină de Laborator</li>
              <li>Degan Lorena, Biolog</li>
              <li>Tănăsescu Teodora, Biolog</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Echipament</h2>
          <div className="content-card description-card lab-list-card">
            <ul className="lab-equipment-list">
              <li>Extractor automat de ADN - MagNA Pure LC (Roche)</li>
              <li>Sequencer 3130XL (Applied Biosystems/Hitachi)</li>
              <li>Sistem Luminex FlexMAP3D (Luminex)</li>
              <li>Termocicler (Applied Biosystems)</li>
              <li>Centrifuge de laborator (Hettich)</li>
              <li>Sistem de vizualizare și electroforeză în gel</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
