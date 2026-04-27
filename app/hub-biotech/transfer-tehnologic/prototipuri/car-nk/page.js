'use client';

import { useState } from 'react';
import Link from 'next/link';

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="car-nk-accordion-item">
      <button
        className="car-nk-accordion-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="car-nk-accordion-icon">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="car-nk-accordion-body">
          {children}
        </div>
      )}
    </div>
  );
}

export default function CarNkPage() {
  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/hub-biotech">Hub Biotehnologii</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link href="/hub-biotech/transfer-tehnologic">Transfer Tehnologic</Link>
        <span>&nbsp;/&nbsp;</span>
        <Link href="/hub-biotech/transfer-tehnologic/prototipuri">Prototipuri</Link>
        <span>&nbsp;/&nbsp;</span>
        <span>CAR-NK</span>
      </nav>

      {/* Main Section */}
      <section className="content-section">
        <h1 className="car-nk-main-title">Prototipuri dezvoltate în cadrul proiectului CAR-NK</h1>

        {/* Accordion 1 */}
        <AccordionItem title="Celule modificate genetic în cadrul proiectului: Oncoimunoterapii cu celule Natural Killer purtătoare de receptori chimerici de antigen (CAR-NK)">
          <ul className="car-nk-list">
            <li>Celule NK92 transduse cu vector care co-exprimă un construct CAR CD64-2A si interleukina 2 capabile sa produca IL2, devenind astfel independente de prezenta interleukinei</li>
            <li>Celule NK92 transduse cu vector care co-exprimă un construct CAR CD64-2A si interleukina 15 capabile sa produca IL15, devenind astfel independente de prezenta interleukinei exogene.</li>
            <li>Celule NK92 transduse cu receptori CAR anti-CD19</li>
            <li>Celule K562 transduse sa exprime antigenul CD19, pentru testarea receptorului CAR anti-CD19</li>
            <li>Dezvoltarea de celule NK purtatoare de constructe CAR universale ce pot media raspunsul citotoxic prin anticorpi monoclonali permite un nivel crescut de flexibilitate al tratamentelor celulare adoptive.</li>
          </ul>
        </AccordionItem>

        {/* Accordion 2 */}
        <AccordionItem title="Constructe de tip CAR (receptor himeric de antigen) care recunosc antigenele CD19, EGFR și PD-L1, inserate în plasmide de tip lentiviral și împachetate în particule lentivirale care pot fi folosite pentru obținerea unor celule de tip CAR-NK sau CAR-T.">
          <div className="car-nk-table-wrapper">
            <table className="car-nk-table">
              <thead>
                <tr>
                  <th>Domeniu de legare a antigenului</th>
                  <th>Domeniu balama</th>
                  <th>Domeniu transmembranar</th>
                  <th>Domeniu co-stimulator</th>
                  <th>Domeniu stimulator/citotoxic</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>CD19</td><td>CD8a</td><td>NKG2D</td><td>NKG2D</td><td>CD3Z</td></tr>
                <tr><td>CD19</td><td>CD8a</td><td>NKG2D</td><td>DAP10</td><td>CD3Z</td></tr>
                <tr><td>CD19</td><td>CD8a</td><td>NKG2D</td><td>DAP12</td><td>CD3Z</td></tr>
                <tr><td>CD19</td><td>CD8a</td><td>NKp46</td><td>NKp46</td><td>CD3Z</td></tr>
                <tr><td>CD19</td><td>CD8a</td><td>CD8a</td><td>41BB</td><td>CD3Z</td></tr>
                <tr><td>CD19-myc</td><td>CD8a</td><td>CD8a</td><td>41BB</td><td>CD3Z</td></tr>
                <tr><td>CD19-myc</td><td>CD8a</td><td>CD28</td><td>CD28</td><td>CD3Z</td></tr>
                <tr><td>EGFR</td><td>CD8a</td><td>CD8a</td><td>41BB</td><td>CD3Z</td></tr>
                <tr><td>PDL-1</td><td>CD28</td><td>CD28</td><td></td><td>CD3Z</td></tr>
              </tbody>
            </table>
          </div>
          <p className="car-nk-table-caption">Tabel 1. Constructe CAR care recunosc antigenele tumorale CD19, EGFR și PD-L1 ce conțin diferite domenii transmembranare și co-stimulatorii specifice celulelor NK</p>

          <div className="car-nk-figure">
            <img
              src="/images/harta.png"
              alt="Harta unui vector lentiviral indicând regiunile funcționale ale vectorului și domeniile relevante ale constructului CAR"
              className="car-nk-img"
            />
            <p className="car-nk-figure-caption">Harta unui vector lentiviral indicând regiunile funcționale ale vectorului și domeniile relevante ale constructului CAR</p>
          </div>

          <p className="car-nk-body-text">
            Activitatea citotoxică a celulelor NK-92 transduse cu un construct CAR anti-CD19 a fost evaluată prin determinarea citolizei observată ca urmare a punerii în contact a celulelor efectoare cu celule țintă tumorale marcate fluorescent. În acest scop, au fost utilizate drept țintă celule tumorale aflate în suspensie CD19- (U266) sau CD19+ (NALM6). Astfel, s-a putut observa că celulele transduse distrug specific, în proporție semnificativ crescută (**, p=0.0031) celule tumorale CD19+ NALM-6.
          </p>

          <div className="car-nk-figure">
            <img
              src="/images/grafic.png"
              alt="Teste de citotoxicitate cu celule NK-92 netransduse sau transduse cu CAR anti-CD19 față de celule țintă care exprimă sau nu antigenul CD19"
              className="car-nk-img"
            />
            <p className="car-nk-figure-caption">Teste de citotoxicitate cu celule NK-92 netransduse sau transduse cu CAR anti-CD19 față de celule țintă care exprimă sau nu antigenul CD19. În panelul superior este determinată expresia antigenului CD19 prin citometrie în flux.</p>
          </div>
        </AccordionItem>

        {/* Accordion 3 */}
        <AccordionItem title="Constructe CAR universale care conțin un modul de legare al receptorului de imunoglobuline de mare afinitate FcγRI (CD64), ce pot media răspunsul citotoxic prin anticorpi monoclonali cu diferite specificități">
          <div className="car-nk-table-wrapper">
            <table className="car-nk-table">
              <thead>
                <tr>
                  <th>Domeniu de legare a antigenului</th>
                  <th>Domeniu balama</th>
                  <th>Domeniu transmembranar</th>
                  <th>Domeniu co-stimulator</th>
                  <th>Domeniu stimulator/citotoxic</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>CD64</td><td></td><td>CD64</td><td></td><td>CD64</td></tr>
                <tr><td>CD64</td><td></td><td>IL2RG</td><td></td><td>Il2RG</td></tr>
                <tr><td>CD64</td><td></td><td>FcRG</td><td></td><td>FcRG</td></tr>
                <tr><td>CD64</td><td></td><td>CD16A</td><td></td><td>CD16A</td></tr>
                <tr><td>CD64</td><td></td><td>CD16B</td><td></td><td></td></tr>
                <tr><td>CD64</td><td>CD8a</td><td>CD8a</td><td>41BB</td><td>CD3Z</td></tr>
                <tr><td>CD16A-158</td><td>CD8a</td><td>CD28</td><td>CD28</td><td>CD3Z</td></tr>
              </tbody>
            </table>
          </div>
          <p className="car-nk-table-caption">Tabel 2. Constructe CAR cu modul de legare de tip receptor Fc</p>

          <div className="car-nk-figure">
            <img
              src="/images/celule.png"
              alt="Fig. 1 - Constructe CAR universale cu modul de legare de tip receptor Fc"
              className="car-nk-img"
            />
            <p className="car-nk-figure-caption">Fig. 1</p>
          </div>

          <p className="car-nk-body-text">
            Aceste CAR-uri universale se bazează pe folosirea domeniului extracelular al receptorului de mare afinitate al domeniilor constante Fc ale imunoglobulinelor IgG (CD64), și diferite module transmembranare și intracitoplasmatice. Utilizarea acestor CAR-uri bazate pe domeniul extracelular al receptorilor Fc de mare afinitate permite „armarea" celulelor NK sau T cu diverși anticorpi monoclonali sau module proteice ce recunosc antigene specifice, cupulate cu domeniul Fc, conferind acestor celule flexibilitatea de a fi personalizate (folosite împotriva diverselor antigene). În plus, specificitatea acestor celulele modificate genetic poate fi optimizată prin conjugarea cu anticorpi multipli, creând astfel celule cu specificități multivalente. Folosirea unui schelet comun, CD64 sau un epitop comun de tip etichetă (myc-tag), în construcția acestor receptori himerici, permite, în plus, detecția cu ușurință a expresiei acestora pe suprafața celulelor modificate genetic.
          </p>

          <p className="car-nk-body-text">
            Pentru a demonstra funcționalitatea receptorilor CAR universali care pot lega molecule de anticorpi cu potențial terapeutic, am efectuat un test de citotoxicitate față de celule Raji care exprimă antigene CD20 și CD19 cu celule NK-92 netransduse sau transduse cu CAR anti-CD19 sau CAR care conțin module de legare de afinitate crescută de tip CD16(F158V) sau CD64, în absența sau prezența anticorpilor anti-CD20 terapeutici de tip IgG1, Rituximab.
          </p>

          <div className="car-nk-figure">
            <img
              src="https://oncogen.ro/wp-content/uploads/2021/03/citotoxicitate-CAR-universal.png"
              alt="Test de citotoxicitate al constructelor CAR universale"
              className="car-nk-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <p className="car-nk-figure-caption">Test de citotoxicitate al constructelor CAR universale</p>
          </div>

          <p className="car-nk-body-text">
            Determinarea activității citotoxice față de celule Raji (CD19<sup>+</sup> CD20<sup>+</sup>) în prezența sau absența anticorpilor anti-CD20 a celulelor NK-92 netransduse și transduse cu diferite constructe tip CAR, anti-CD19 sau de tip universal. Raportul dintre celulele efectoare și cele țintă a fost de 3:1.
          </p>
        </AccordionItem>

        {/* Accordion 4 */}
        <AccordionItem title="Vectori lentivirali cu constructe CAR care co-exprimă interleukine și permit multiplicarea și supraviețuirea celulelor NK-92 in vitro independent de citokine exogene.">
          <p className="car-nk-body-text">
            Vectorii care exprimă un construct CAR universal de tip CD64 și interleukina 2 sau 15 de pe același vector au fost împachetați în particule lentivirale și folosiți pentru transducția celulelor NK-92. Celulele care exprimă IL-15 au demonstrat capacitate de autoselecție și proliferare în absența IL-2 în mediul de cultură.
          </p>
        </AccordionItem>

        {/* Brevete */}
        <div className="car-nk-static-section">
          <h2 className="car-nk-section-title">Brevete rezultate în urma proiectului CAR-NK</h2>
          <ol className="car-nk-numbered-list">
            <li>
              Bojin MF, Gavriliuc OI, Tanasie G, Tatu CA, Panaitescu C, Paunescu V, Nedea CE. <em>„Celule selective bispecifice CAR-T pentru tratamentul tumorilor solide și metodă de obținere"</em>, nr. A/00704/2020, data depozit 06/11/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații tehnologice.
            </li>
            <li>
              Nedea CE, Paunescu V, Gavriliuc OI, Zogoreanu R, Ivan A, Cristea IM, Tatu CA, Bojin MF, Anghel SS. <em>„Celule citotoxice purtătoare de receptori himerici de antigen universali care țintesc antigene diverse și multiple pentru tratament adoptiv"</em>, nr. A/00705/2020, data de depozit 06/11/2020, Oficiul de Stat pentru Invenții și Mărci (OSIM), Direcția de brevete de invenție și informații tehnologice.
            </li>
          </ol>
        </div>

        {/* Publicatii */}
        <div className="car-nk-static-section">
          <h2 className="car-nk-section-title">Publicații rezultate în urma proiectului CAR-NK</h2>
          <ol className="car-nk-numbered-list">
            <li>Szekely FAE, Zogorean R, Anghel S, Gavriliuc O, Bojin F, Paunescu V. CAR-T cells therapy <em>versus</em>TILs therapy: the future of cancer immunotherapy. <em>Fiziologia-Physiology</em> 2018; Vol. 28, No. 1(95): 4-15.</li>
            <li>Zogorean R, Gavriliuc O, Bojin F, Paunescu V. Real-time imaging of NK-92 cells interaction with tumoral cell lines. <em>Fiziologia-Physiology</em> 2018; Vol. 28, No. 2(96): 4-9.</li>
            <li>Szekely F, Zogorean R, Anghel S, Paunescu V. CAR-NK cell-based therapy: an era of a new potential immunotherapy. <em>Fiziologia-Physiology</em> 2019; Vol. 29, No. 1(97): 13-21.</li>
            <li>Popa L, Crisnic D, Nistor D, Plesca D, Tatu C, Tanasie G, Zogorean R, Gavriliuc O, Anghel S, Bojin F, Paunescu V. Modern application of Next-Generation Sequencing (NGS). <em>Fiziologia-Physiology</em> 2019; Vol. 29, No. 2(98): 9-16.</li>
            <li>Plesca D, Crisnic D, Nistor D, Tatu C, Tanasie G, Zogorean R, Anghel S, Gavriliuc O, Bojin F, Paunescu V. <em>Fiziologia-Physiology</em> 2019; Vol. 29, No. 2(98): 38-43.</li>
            <li>Olteanu GE, Mihai IM, Bojin F, Gavriliuc O, Paunescu V. The natural adaptive evolution of cancer: The metastatic ability of cancer cells. <em>Bosn J Basic Med Sci.</em>, 2020; 20(3): 303-309.</li>
            <li>Zogorean R, Anghel S, Gavriliuc O, Paunescu V. Cryopreservation of Natural Killer Cells. <em>Fiziologia-Physiology</em> 2020; Vol. 30, No. 1(99): 24-28.</li>
            <li>Olteanu GE, Crisnic D, Grijincu M, Cristea M, Zambori C, Ivan A, Gavriliuc OI, Bojin MF, Paunescu V, Nedea E. Assessment of cell culture media variation inducing cytokine secretion in PBMCs, CD3<sup>+</sup>, and CD8<sup>+</sup> immune cells. <em>Fiziologia-Physiology</em> 2020; Vol. 30, No. 1(99)</li>
          </ol>
          <p className="car-nk-footnote">*Articolele identificate la pozițiile 5 si 8 au fost realizate în cooperare cu entități private.</p>
        </div>

        {/* CTA Back Button */}
        <div className="section-cta-buttons">
          <Link href="/hub-biotech/transfer-tehnologic/prototipuri" className="btn btn-secondary">
            &larr; Înapoi la Prototipuri
          </Link>
        </div>
      </section>
    </div>
  );
}
