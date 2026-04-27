'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BioPrintarePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="page-container">
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> /{' '}
          <Link href="/hub-biotech/transfer-tehnologic">Transfer Tehnologic</Link> /{' '}
          <Link href="/hub-biotech/transfer-tehnologic/prototipuri">Prototipuri</Link> / <span>BIOPRINTARE</span>
        </div>
      </div>

      {/* Main Section */}
      <section className="content-section">
        <h1 className="car-nk-main-title" style={{ color: 'var(--black)' }}>
          Dezvoltarea de pachete software pentru programarea bioimprimantelor în biotipărirea tridimensională
        </h1>

        {/* Accordion 1 */}
        <div className="car-nk-accordion-item">
          <button className="car-nk-accordion-btn" onClick={() => toggle(0)} aria-expanded={openIndex === 0}>
            <span>Dezvoltarea de pachete software pentru biotipărirea de modele tumorale și validarea experimentală a acestora</span>
            <span className="car-nk-accordion-icon">{openIndex === 0 ? '−' : '+'}</span>
          </button>
          {openIndex === 0 && (
            <div className="car-nk-accordion-body">
              <p className="car-nk-body-text"><strong>Detalii:</strong></p>
              <ul className="car-nk-list">
                <li>
                  <em>Dezvoltarea de pachete software pentru tipărirea de modele tumorale (toroidal și triplu stratificat).</em> Programele au fost scrise în limbajul Python, au interfață grafică, și permit generarea de instrucțiuni de tip G-code cu geometrie scalabilă.
                </li>
                <li>
                  <em>Validarea experimentală a programelor dezvoltate.</em> Ambele tipuri de structuri, conținând celule tumorale și peritumorale, au fost tipărite individual sau consecutiv în plăci cu mai multe godeuri.
                </li>
                <li>
                  <em>Evaluarea constructelor tipărite.</em> Evoluția in vitro a constructelor tipărite a fost evaluată din punct de vedere al viabilității și proliferării celulare.
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', margin: '24px 0' }}>
                <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
                  <img
                    src="/images/Figura_prototip_organoizi_tumorali1.png"
                    alt="Figura 1: Modelele digitale ale organizorilor tumorali biotipăriți"
                    className="car-nk-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
                  <img
                    src="/images/Figura_prototip_organoizi_tumorali2.png"
                    alt="Figura 2: Organoizi tumorali biotipăriți la OncoGen"
                    className="car-nk-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              <p className="car-nk-body-text"><strong>Publicații:</strong></p>
              <ol className="car-nk-numbered-list">
                <li>
                  Bojin F, Robu A, Bejenariu MI, Ordodi V, Olteanu E, Cean A, Popescu R, Neagu M, Gavriliuc O, Neagu A, Paunescu V. 3D Bioprinting of Model Tissues That Mimic the Tumor Microenvironment. Micromachines 2021, 12, 535.{' '}
                  <a href="https://doi.org/10.3390/mi12050535" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--magenta)' }}>
                    https://doi.org/10.3390/mi12050535
                  </a>
                </li>
                <li>
                  Arjoca S, Robu A, Neagu M, Neagu A, Mathematical and computational models in spheroid-based biofabrication. Acta Biomaterialia 2023, 165, 125-139.{' '}
                  <a href="https://doi.org/10.1016/j.actbio.2022.07.024" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--magenta)' }}>
                    https://doi.org/10.1016/j.actbio.2022.07.024
                  </a>
                </li>
              </ol>

              <p className="car-nk-body-text"><strong>Participare la conferințe:</strong></p>
              <ol className="car-nk-numbered-list">
                <li>
                  Bojin F, Robu A, Bejenariu MI, Ordodi V, Olteanu E, Cean A, Popescu R, Neagu M, Gavriliuc O, Neagu A, Arjoca S, Paunescu V. „3D bioprinting of model tissues that mimic the tumor microenvironment", poster, 13th European Biophysics Conference (EBSA 2021), 24-28 iulie 2021, Viena, Austria
                </li>
                <li>
                  Bojin F, Robu A, Bejenariu MI, Ordodi V, Olteanu E, Cean A, Popescu R, Neagu M, Gavriliuc O, Neagu A, Arjoca S, Paunescu V. „3D bioprinting of model tissues that mimic the tumor microenvironment", poster, International Conference on Biofabrication, 27-29 septembrie 2021, online event, Wollongong, Australia
                </li>
                <li>
                  Bojin F, Robu A, Bejenariu MI, Ordodi V, Olteanu E, Cean A, Popescu R, Neagu M, Gavriliuc O, Neagu A, Arjoca S, Paunescu V. „3D bioprinting of model tissues that mimic the tumor microenvironment", poster, 1st Oncohub Conference, 13-15 octombrie 2021, online event, București, România
                </li>
                <li>
                  Bojin F, Arjoca S, Bejenariu MI, Ordodi V, Olteanu E, Cean A, Popescu R, Neagu M, Gavriliuc O, Neagu A, Paunescu V. „Biofabtication of tumor models that mimic the tumor microenvironment using extrusion bioprinting" – prezentare orală, Tissue Engineering and Regenerative Medicine International Society (TERMIS) European Conference 2022, 26 iunie – 1 iulie 2022, Cracovia, Polonia
                </li>
                <li>
                  Arjoca S, Robu A, Bojin F, Ordodi V, Olteanu E, Cean A, Neagu M, Gavriliuc O, Neagu A, Paunescu V. „Post-printing structure formation in bioprinted tissue constructs that mimic the tumor microenvironment" – prezentare orală, Tissue Engineering and Regenerative Medicine International Society (TERMIS) European Conference 2022, 26 iunie – 1 iulie 2022, Cracovia, Polonia
                </li>
                <li>
                  Bojin F, Arjoca S, Bejenariu MI, Ordodi V, Olteanu E, Cean A, Popescu R, Neagu M, Gavriliuc O, Neagu A, Paunescu V. „Biofabrication of breast cancer models using extrusion bioprinting" – prezentare orală, 17th National Conference of Biophysics with International Participation (CNB2022), 23-25 septembrie 2022, Târgu Mureș, România
                </li>
                <li>
                  Arjoca S, Robu A, Bojin F, Ordodi V, Olteanu E, Cean A, Neagu M, Gavriliuc O, Neagu A, Paunescu V. „Multicellurar self-organization in bioprinted models of tumor microenvironment" – prezentare orală, 17th National Conference of Biophysics with International Participation (CNB2022), 23-25 septembrie 2022, Târgu Mureș, România
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="car-nk-accordion-item">
          <button className="car-nk-accordion-btn" onClick={() => toggle(1)} aria-expanded={openIndex === 1}>
            <span>Dezvoltarea de pachete software pentru biotipărirea unor vase de sânge</span>
            <span className="car-nk-accordion-icon">{openIndex === 1 ? '−' : '+'}</span>
          </button>
          {openIndex === 1 && (
            <div className="car-nk-accordion-body">
              <p className="car-nk-body-text"><strong>Detalii:</strong></p>
              <ul className="car-nk-list">
                <li>
                  <em>Dezvoltarea de pachete software pentru biotipărirea unor vase de sânge.</em> Limbajul Python a fost folosit pentru dezvoltarea softului și a interfeței grafice. Geometria vizată este de tub helicoidal și poate fi ușor scalabilă.
                </li>
                <li>
                  <em>Validarea experimentală a programelor dezvoltate.</em> Modele de vase de sânge de diferite dimensiuni au fost tipărite cu succes individual sau in plăci cu mai multe godeuri.
                </li>
                <li>
                  <em>Evaluarea constructelor post-tipărire.</em> Modelele de vase de sânge au fost evaluate histologic la diferite perioade de timp de cultura in vitro.
                </li>
              </ul>

              <div className="car-nk-figure">
                <img
                  src="/images/Figura_prototip_vase_de_sange.png"
                  alt="Figura 3: Biotipărirea de vase de sânge"
                  className="car-nk-img"
                  style={{ maxWidth: '500px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <p className="car-nk-body-text"><strong>Publicații:</strong> manuscris în curs de finalizare și publicare.</p>

              <p className="car-nk-body-text"><strong>Participări la conferințe:</strong></p>
              <ol className="car-nk-numbered-list">
                <li>
                  Nistor A, Arjoca S, Bojin F, Zoric A, Salagean A, Paunescu V. „Bioengineering of implantable 3D vascular bioconstruct using rapid prototyping techniques", poster, 1st Oncohub Conference, 13-15 octombrie 2021, online event, București, România
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Accordion 3 */}
        <div className="car-nk-accordion-item">
          <button className="car-nk-accordion-btn" onClick={() => toggle(2)} aria-expanded={openIndex === 2}>
            <span>Dezvoltarea de scripturi Python pentru evaluarea printabilității hidrogelurilor în procesele de biotipărire</span>
            <span className="car-nk-accordion-icon">{openIndex === 2 ? '−' : '+'}</span>
          </button>
          {openIndex === 2 && (
            <div className="car-nk-accordion-body">
              <p className="car-nk-body-text"><strong>Detalii:</strong></p>
              <ul className="car-nk-list">
                <li>
                  <em>Dezvoltarea de scripturi Python pentru generarea și tipărirea unor geometrii tridimensionale complexe.</em>
                </li>
                <li>
                  <em>Testarea printabilității unor hidrogeluri folosind modelele dezvoltate.</em> Constructele au fost analizate din punct de vedere al reproductibilității și al factorilor geometrici (fidelitatea formei, deflexia filamentelor suspendate, etc.) sau de proces (viteza de extrudare, presiunea aplicată, diametrul filamentului depus, etc.).
                </li>
              </ul>

              <p className="car-nk-body-text"><strong>Publicații:</strong> manuscris în curs de finalizare și publicare.</p>
            </div>
          )}
        </div>

        <div className="section-cta">
          <Link href="/hub-biotech/transfer-tehnologic/prototipuri" className="btn btn-primary">
            Înapoi la Prototipuri
          </Link>
        </div>
      </section>
    </div>
  );
}
