import Link from 'next/link';
import Image from 'next/image';

export default function BiobazaPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/cercetare">Cercetare</Link> / <Link href="/cercetare/laboratoare">Laboratoare și departamente</Link> / <span>Biobaza - Departamentul de Medicină Experimentală</span>
        </div>
      </div>

      <section className="hero-secondary">
        <div className="container">
          <h1>Biobaza - Departamentul de Medicină Experimentală</h1>
          <p>Cercetare preclinică și studii pe modele animale pentru validarea terapiilor experimentale.</p>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Scurtă descriere</h2>
          <div className="content-card description-card lab-description-card">
            <ul className="lab-description-list">
              <li>Compartimentul este zona de testare <em>in vivo</em>, în care se efectuează studii în baia de organ izolat, modele animale pentru diferite tipuri de tumori, studii pe fibră musculară izolată, spirometrie, Langendorff, studii de imagistică <em>in vivo</em>.</li>
              <li>De asemenea, se pot obține biomatrici prin proceduri de decelularizare pentru experimente de regenerare tisulară.</li>
              <li>Compartimentul are în dotare o biobază animale mici de laborator, sală de operație, sisteme de monitorizare complexă intraoperatorie (puls, tensiune, ventilație, electrocardiogramă, temperatură, etc.), sisteme pentru suport vital în timpul intervențiilor chirurgicale (ventilație asistată, circulație extracorporală, etc.), echipamente și laboratoare pentru medicină experimentală.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Principalele activități și tehnici</h2>
          <div className="content-card description-card lab-list-card">
            <ul>
              <li>Modele tumorale <em>in vivo</em>, studii de imagistică <em>in vivo</em></li>
              <li>Obținere de biomatrici pentru regenerare tisulară</li>
              <li>Experimente de toxicologie <em>in vivo</em></li>
              <li>Experimente pe inimă izolată - model Langendorff; studii de respirometrie</li>
              <li>Investigații în baia de organ izolat</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section lab-detail-section">
        <div className="container">
          <h2>Echipamente</h2>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="content-card description-card lab-list-card" style={{ flex: '1 1 calc(50% - 15px)', minWidth: '300px' }}>
              <ul className="lab-equipment-list">
                <li>Aparat pentru studii pe fibra musculară izolată</li>
                <li>Sistem Langendorff pentru inimi izolate (Radnoti, ADInstruments)</li>
                <li>Respirometru OROBOROS Oxygraph 2k</li>
                <li>Monitor complex funcții vitale</li>
                <li>Sistem măsurare a presiunii endocavitare cu fibră optică</li>
                <li>Placă achiziție semnale biologice</li>
                <li>Cuști animale mici</li>
              </ul>
              <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>Finanțare din alte surse:</h4>
              <ul className="lab-equipment-list">
                <li>Sistem imagistică <em>in vivo</em> Hamamatsu Aequoria</li>
                <li>Echipamente de ventilație animale mici</li>
                <li>Analizor complex cu electrozi Apollo 4000</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 calc(50% - 15px)', minWidth: '300px', borderRadius: '8px', overflow: 'hidden' }}>
              <Image 
                src="/images/biobaza-lab.jpg" 
                alt="Biobaza - Laborator de Medicină Experimentală" 
                width={600}
                height={700}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section bg-light lab-detail-section">
        <div className="container">
          <h2>Coordonator</h2>
          <div className="content-card description-card">
            <p><strong>Ada Cean</strong>, Biotech Eng., PhD</p>
          </div>
        </div>
      </section>
    </>
  );
}
